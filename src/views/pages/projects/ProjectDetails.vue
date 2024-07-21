<script setup>
import { ref } from 'vue';

const nestedRouteItems = ref([
    {
        label: 'Overview',
        icon: 'pi pi-info-circle',
        route: '/pages/projects/project_details/'
    },
    {
        label: 'Tasks',
        icon: 'pi pi-check-square',
        route: '/pages/projects/project_details/tasks'
    },
    {
        label: 'Files',
        icon: 'pi pi-inbox',
        route: '/pages/projects/project_details/files'
    },
    {
        label: 'Notes',
        icon: 'pi pi-file-edit',
        route: '/pages/projects/project_details/notes'
    },
    {
        label: 'Timesheets',
        icon: 'pi pi-clock',
        route: '/pages/projects/project_details/timesheets'
    },
    {
        label: 'Milestones',
        icon: 'pi pi-calendar-times',
        route: '/pages/projects/project_details/milestones'
    },
    {
        label: 'Client comments',
        icon: 'pi pi-comments',
        route: '/pages/projects/project_details/client_comment'
    },
    {
        label: 'Project members',
        icon: 'pi pi-users',
        route: '/pages/projects/project_details/project_members'
    }
]);
const makeProductDialog = ref(false);
const breadcrumbProjects = ref({ icon: 'pi pi-code', route: { name: 'projects' } });
const breadcrumbItems = ref([{ label: 'Project details' }]);
const projectDeadline = ref();
const projectStatus = ref();
const projectStatusList = ref([{ name: 'Pending' }, { name: 'In progress' }, { name: 'Done' }, { name: 'Late' }, { name: 'maintenance' }]);

const toolbarItems = ref([
    {
        label: 'Make it product',
        icon: 'pi pi-box',
        command: () => {
            openMakeProductDialog();
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash'
        // command: () => {
        //     toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        // }
    }
]);
const editProjectDialog = ref(false);
const openEditProjectDialog = () => {
    editProjectDialog.value = true;
};

const closeEditProjectDialog = () => {
    editProjectDialog.value = false;
};

const openMakeProductDialog = () => {
    currentStep.value = 0;
    nextBtn.value = 'Next';
    isDisable.value = true;
    makeProductDialog.value = true;
};

const closeMakeProductDialog = () => {
    makeProductDialog.value = false;
};

const stepperItems = ref([
    {
        label: 'Product info.'
    },
    {
        label: 'Packages info.'
    }
]);

const productTypes = ref([{ type: 'normal' }, { type: 'subscription-based' }]);

const productTypeValue = ref(null);
const currentStep = ref(0);
const nextBtn = ref('Next');
const isDisable = ref(false);
const packagePrice1 = ref();
const packagePrice2 = ref();
const packagePrice3 = ref();

const nextStep = () => {
    if (currentStep.value < 1) {
        currentStep.value++;
        isDisable.value = false;
    }

    if (currentStep.value === 1) {
        nextBtn.value = 'Make it';
    }
};

const prevStep = () => {
    if (currentStep.value !== 0) {
        currentStep.value--;
    }

    if (currentStep.value === 0) {
        isDisable.value = true;
        nextBtn.value = 'Next';
    }
};
</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12">
            <div class="card card-w-title">
                <Breadcrumb :home="breadcrumbProjects" :model="breadcrumbItems">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a :href="href" v-bind="props.action" @click="navigate">
                                <span :class="[item.icon, 'text-color']" />
                                <span class="text-primary font-semibold">{{ item.label }}</span>
                            </a>
                        </router-link>
                        <p>
                            <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
                        </p>
                    </template>
                </Breadcrumb>
                <hr />
                <div class="flex justify-content-between align-items-center mb-3">
                    <div>
                        <h5>Project Name</h5>
                        <p>Client name</p>
                    </div>
                    <SplitButton label="Edit" severity="warning" @click="openEditProjectDialog" :model="toolbarItems"></SplitButton>
                </div>

                <TabMenu class="mb-3" :model="nestedRouteItems">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                                <span v-bind="props.icon" />
                                <span v-bind="props.label">{{ item.label }}</span>
                            </a>
                        </router-link>
                    </template>
                </TabMenu>
                <router-view />
            </div>
            <!-- edit project dialog  -->
            <Dialog header="Edit Project" v-model:visible="editProjectDialog" :modal="true" class="edit-project-dialog">
                <div class="field grid">
                    <label for="type" class="col-12 mb-2">Status</label>
                    <div class="col-12">
                        <Dropdown id="type" v-model="projectStatus" :options="projectStatusList" optionLabel="name" placeholder="Select type ..." />
                    </div>
                </div>
                <div class="field grid">
                    <label for="name" class="col-12 mb-2">Name</label>
                    <div class="col-12">
                        <InputText id="name" type="text" placeholder="Soft 4 You ..." />
                    </div>
                </div>
                <div class="field grid">
                    <label for="category" class="col-12 mb-2">Category</label>
                    <div class="col-12">
                        <InputText id="category" type="text" placeholder="Management system ..." />
                    </div>
                </div>
                <div class="field grid">
                    <label class="col-12 mb-2">Deadline</label>
                    <div class="col-12">
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="projectDeadline"></Calendar>
                    </div>
                </div>
                <template #footer>
                    <div class="mt-3">
                        <Button label="cancel" icon="pi pi-times" @click="closeEditProjectDialog" class="p-button-text" />
                        <Button label="Done" icon="pi pi-check" @click="closeEditProjectDialog" class="p-button-text" />
                    </div>
                </template>
            </Dialog>
            <!-- make product dialog  -->
            <Dialog header="Make it Product" v-model:visible="makeProductDialog" :modal="true" style="max-height: 500px" class="add-product-dialog">
                <Steps v-model:activeStep="currentStep" :readonly="false" :model="stepperItems" class="mb-6" />
                <div v-if="currentStep === 0">
                    <div class="field grid">
                        <label for="type" class="col-12 mb-2">Type</label>
                        <div class="col-12">
                            <Dropdown id="type" v-model="productTypeValue" :options="productTypes" optionLabel="type" placeholder="Select type ..." />
                        </div>
                    </div>
                    <div class="field grid">
                        <label for="name" class="col-12 mb-2">Name</label>
                        <div class="col-12">
                            <InputText id="name" type="text" placeholder="Name ..." />
                        </div>
                    </div>
                    <div class="field grid">
                        <label for="description" class="col-12 mb-2">Description</label>
                        <div class="col-12">
                            <Textarea id="description" placeholder="Description ..." :autoResize="true" rows="3" />
                        </div>
                    </div>
                </div>
                <div v-else-if="currentStep === 1">
                    <div>
                        <h5 class="text-primary">1st package</h5>
                        <div class="field grid">
                            <label for="name1" class="col-12 mb-2">Name</label>
                            <div class="col-12">
                                <InputText id="name1" type="text" placeholder="Name ..." />
                            </div>
                        </div>
                        <div v-if="productTypeValue.type === 'normal'" class="field grid">
                            <label for="price" class="col-12 mb-2">Price</label>
                            <div class="col-12">
                                <InputNumber v-model="packagePrice1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" placeholder="$#,##" />
                            </div>
                        </div>
                        <div v-if="productTypeValue.type === 'subscription-based'" class="field grid">
                            <label for="price" class="col-12 mb-2">Cost per month</label>
                            <div class="col-12">
                                <InputNumber v-model="packagePrice1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" placeholder="$#,##" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h5 class="text-primary">2nd package</h5>
                        <div class="field grid">
                            <label for="name2" class="col-12 mb-2">Name</label>
                            <div class="col-12">
                                <InputText id="name2" type="text" placeholder="Name ..." />
                            </div>
                        </div>
                        <div v-if="productTypeValue.type === 'normal'" class="field grid">
                            <label for="price" class="col-12 mb-2">Price</label>
                            <div class="col-12">
                                <InputNumber v-model="packagePrice2" inputId="currency-us" mode="currency" currency="USD" locale="en-US" placeholder="$#,##" />
                            </div>
                        </div>
                        <div v-if="productTypeValue.type === 'subscription-based'" class="field grid">
                            <label for="price" class="col-12 mb-2">Cost per month</label>
                            <div class="col-12">
                                <InputNumber v-model="packagePrice2" inputId="currency-us" mode="currency" currency="USD" locale="en-US" placeholder="$#,##" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h5 class="text-primary">3nd package</h5>
                        <div class="field grid">
                            <label for="name3" class="col-12 mb-2">Name</label>
                            <div class="col-12">
                                <InputText id="name3" type="text" placeholder="Name ..." />
                            </div>
                        </div>
                        <div v-if="productTypeValue.type === 'normal'" class="field grid">
                            <label for="price" class="col-12 mb-2">Price</label>
                            <div class="col-12">
                                <InputNumber v-model="packagePrice3" inputId="currency-us" mode="currency" currency="USD" locale="en-US" placeholder="$#,##" />
                            </div>
                        </div>
                        <div v-if="productTypeValue.type === 'subscription-based'" class="field grid">
                            <label for="price" class="col-12 mb-2">Cost per month</label>
                            <div class="col-12">
                                <InputNumber v-model="packagePrice3" inputId="currency-us" mode="currency" currency="USD" locale="en-US" placeholder="$#,##" />
                            </div>
                        </div>
                    </div>
                </div>
                <template #footer>
                    <div class="mt-3">
                        <Button label="cancel" icon="pi pi-times" @click="closeMakeProductDialog" class="p-button-text" severity="danger" />
                        <Button label="previous" :disabled="isDisable" icon="pi pi-chevron-left" @click="prevStep" class="p-button-text" />
                        <Button :label="nextBtn" icon="pi pi-chevron-right" @click="nextStep" class="p-button-text" />
                    </div>
                </template>
            </Dialog>
        </div>
    </div>
</template>

<style>
.p-tabmenu-nav .p-menuitem-text {
    text-wrap: nowrap;
}

.p-inputtext,
.p-inputnumber,
.p-calendar,
.edit-project-dialog .p-dropdown {
    width: 100%;
}
</style>
