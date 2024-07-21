<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

const dataviewValue = ref(null);
const layout = ref('list');
const sortOrder = ref(null);
const sortField = ref(null);
const createProjectDialog = ref(false);
const openCreateProjectDialog = () => {
    createProjectDialog.value = true;
};

const closeCreateProjectDialog = () => {
    createProjectDialog.value = false;
};

const productService = new ProductService();

onMounted(() => {
    productService.getProductsSmall().then((data) => (dataviewValue.value = data));
});
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div class="flex align-items-center justify-content-between mb-3">
                    <h5>Projects</h5>
                    <Button @click="openCreateProjectDialog" label="Create project" icon="pi pi-plus"></Button>
                </div>
                <DataView :value="dataviewValue" :layout="layout" :sortOrder="sortOrder" :sortField="sortField">
                    <template #header>
                        <div class="grid grid-nogutter">
                            <div class="col-6 text-left">
                                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
                            </div>
                            <div class="col-6 text-right ml-auto">
                                <DataViewLayoutOptions v-model="layout" />
                            </div>
                        </div>
                    </template>

                    <template #list="slotProps">
                        <div class="grid grid-nogutter">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                                <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" :class="{ 'border-top-1 surface-border': index !== 0 }">
                                    <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                                        <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                            <div class="mb-2">
                                                <div class="text-lg font-medium text-900 mb-2">Project name</div>
                                                <span class="font-medium text-secondary text-sm">Client name</span>
                                            </div>
                                            <Tag icon="pi pi-check" severity="success" value="Done"></Tag>
                                            <Tag icon="pi pi-clock" severity="warning" value="Pending"></Tag>
                                            <Tag icon="pi pi-wrench" severity="info" value="Maintenance"></Tag>
                                            <Tag icon="pi pi-exclamation-triangle" severity="danger" value="Late"></Tag>
                                        </div>
                                        <div class="flex flex-column md:align-items-end gap-5">
                                            <span class="text-xl font-semibold text-900">Deadline: 12/21/2024</span>
                                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                                <Button icon="pi pi-eye" label="View" class="flex-auto md:flex-initial white-space-nowrap"></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <!-- grid view -->
                    <template #grid="slotProps">
                        <div class="grid grid-nogutter">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 p-2">
                                <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
                                    <div class="pt-4">
                                        <div class="flex flex-row justify-content-between align-items-start gap-2">
                                            <div>
                                                <span class="font-medium text-secondary text-sm">Client name</span>
                                                <div class="text-lg font-medium text-900 mt-1">Project name</div>
                                            </div>
                                            <Tag icon="pi pi-check" severity="success" value="Done"></Tag>
                                            <!-- <Tag icon="pi pi-clock" severity="warning" value="Pending"></Tag>
                                            <Tag icon="pi pi-wrench" severity="info" value="Maintenance"></Tag>
                                            <Tag icon="pi pi-exclamation-triangle" severity="danger" value="Late"></Tag> -->
                                        </div>
                                        <div class="flex flex-column gap-4 mt-4">
                                            <span class="text-2xl font-semibold text-900">Deadline: 21/12/2024</span>
                                            <div class="flex gap-2">
                                                <Button icon="pi pi-eye" label="View" class="flex-auto white-space-nowrap"></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
                <Dialog header="Edit Project" v-model:visible="createProjectDialog" :modal="true" class="edit-project-dialog">
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
                            <Button label="cancel" icon="pi pi-times" @click="closeCreateProjectDialog" class="p-button-text" />
                            <Button label="Create" icon="pi pi-check" @click="closeCreateProjectDialog" class="p-button-text" />
                        </div>
                    </template>
                </Dialog>
            </div>
        </div>
    </div>
</template>
