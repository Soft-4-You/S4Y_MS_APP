<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { ProductService } from '@/service/ProductService';
import { useLayout } from '@/layout/composables/layout';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const { isDarkTheme } = useLayout();

const isAdmin = ref(true);
const products = ref(null);
const display = ref(false);
const toast = useToast();
const confirmPopup = useConfirm();
const confirm = (event) => {
    confirmPopup.require({
        target: event.target,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

const createProjectDialog = ref(false);
const openCreateProjectDialog = () => {
    createProjectDialog.value = true;
};

const closeCreateProjectDialog = () => {
    createProjectDialog.value = false;
};

const addPrivateReminderDialog = ref(false);
const openAddPrivateDialog = () => {
    addPrivateReminderDialog.value = true;
};

const closeAddPrivateDialog = () => {
    addPrivateReminderDialog.value = false;
};

const assignTaskDialog = ref(false);
const openAssignTaskDialog = () => {
    assignTaskDialog.value = true;
};

const closeAssignTaskDialog = () => {
    assignTaskDialog.value = false;
};

const lineData = reactive({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Expenses',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: 'Incomes',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
});
const open = () => {
    display.value = true;
};

const close = () => {
    display.value = false;
};

const lineOptions = ref(null);
const productService = new ProductService();

onMounted(() => {
    productService.getProductsSmall().then((data) => (products.value = data));
});

const applyLightTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
};

const applyDarkTheme = () => {
    lineOptions.value = {
        plugins: {
            legend: {
                labels: {
                    color: '#ebedef'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            },
            y: {
                ticks: {
                    color: '#ebedef'
                },
                grid: {
                    color: 'rgba(160, 167, 181, .3)'
                }
            }
        }
    };
};

watch(
    isDarkTheme,
    (val) => {
        if (val) {
            applyDarkTheme();
        } else {
            applyLightTheme();
        }
    },
    { immediate: true }
);
</script>

<template>
    <div class="grid">
        <div v-if="isAdmin" class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Projects</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-code text-primary text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-green-500 font-medium">24 new </span>
                <span class="text-500">since last visit</span> -->
            </div>
        </div>
        <div v-if="isAdmin" class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Products</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-box text-primary text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span> -->
            </div>
        </div>
        <div v-if="isAdmin" class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Employees</span>
                        <div class="text-900 font-medium text-xl">28441</div>
                    </div>
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-users text-primary text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-green-500 font-medium">520 </span>
                <span class="text-500">newly registered</span> -->
            </div>
        </div>
        <div v-if="isAdmin" class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Profit</span>
                        <div class="text-900 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-dollar text-primary text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">since last week</span> -->
            </div>
        </div>
        <!-- **************************************************************************** -->
        <!-- Employees statistics start -->
        <div class="col-12 lg:col-6 xl:col-4">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Projects you worked on</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-code text-primary text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-green-500 font-medium">24 new </span>
                <span class="text-500">since last visit</span> -->
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-4">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Finished tasks</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-check-square text-primary text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span> -->
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-4">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Money you made</span>
                        <div class="text-900 font-medium text-xl">$2100</div>
                    </div>
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary"
                        style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-dollar text-primary text-xl"></i>
                    </div>
                </div>
                <!-- <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">since last week</span> -->
            </div>
        </div>
        <!-- Employees statistics end -->

        <!-- reminders start -->
        <div class="col-12 xl:col-6">
            <div class="card">
                <div class="flex align-items-center justify-content-between mb-4">
                    <h5>Reminders</h5>
                </div>

                <span class="block text-600 font-medium mb-3">ALL PROJECTS</span>
                <ul class="p-0 mx-0 mt-0 mb-4 list-none">
                    <li class="flex align-items-center justify-content-between py-2 border-bottom-1 surface-border">
                        <span class="text-900 line-height-3 mr-3">Richard Jones
                            <span class="text-700">has purchased a blue t-shirt for 79$</span>
                        </span>
                        <Button style="min-width: 35px; min-height: 35px" icon="pi pi-eye" severity="primary" outlined
                            class="mb-2" />
                    </li>
                    <li class="flex align-items-center justify-content-between py-2">
                        <span class="text-700 line-height-3mr-3">Your request for withdrawal of 2500$ has been
                            initiated.</span>
                        <Button style="min-width: 35px; min-height: 35px" icon="pi pi-eye" severity="primary" outlined
                            class="mb-2" />
                    </li>
                </ul>

                <div class="flex align-items-baseline justify-content-between mb-2">
                    <span class="block text-600 font-medium mb-3">PRIVATE</span>
                    <Button icon="pi pi-plus" @click="openAddPrivateDialog" class="mb-2" />
                </div>
                <ul class="p-0 m-0 list-none">
                    <li class="flex align-items-center justify-content-between py-2 border-bottom-1 surface-border">
                        <span class="text-900 line-height-3 mr-3"> Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas error
                            porro asperiores quasi? Nesciunt illum, sunt dolorem </span>
                        <ConfirmPopup></ConfirmPopup>
                        <Button style="min-width: 35px; min-height: 35px" ref="popup" @click="confirm($event)"
                            icon="pi pi-times" severity="danger" outlined class="mb-2"></Button>
                    </li>
                    <li class="flex align-items-center justify-content-between py-2">
                        <span class="text-900 line-height-3 mr-3">Jane Davis
                            <span class="text-700">has posted a new questions about your product.</span>
                        </span>
                        <ConfirmPopup></ConfirmPopup>
                        <Button style="min-width: 35px; min-height: 35px" ref="popup" @click="confirm($event)"
                            icon="pi pi-times" severity="danger" outlined class="mb-2"></Button>
                    </li>
                </ul>
            </div>
            <!-- reminders end -->

            <!-- incomes VS expenses start -->
            <div v-if="isAdmin" class="card">
                <h5>Expenses VS Incomes</h5>
                <Chart type="line" :data="lineData" :options="lineOptions" />
            </div>
            <!-- incomes VS expenses end -->
        </div>

        <div class="col-12 xl:col-6">
            <!-- projects progress start -->
            <div class="card">
                <div class="flex justify-content-between align-items-center mb-5">
                    <h5>Projects Progress</h5>
                    <Button @click="openCreateProjectDialog" label="Create project" icon="pi pi-plus"></Button>
                </div>
                <ul class="list-none p-0 m-0">
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Management System</span>
                            <div class="mt-1 text-600">Soft 4 You</div>
                        </div>
                        <div class="mt-2 md:mt-0 flex align-items-center">
                            <div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height: 8px">
                                <div class="bg-primary-500 h-full" style="width: 50%"></div>
                            </div>
                            <span class="text-primary-500 ml-3 font-medium">%50</span>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- projects progress end -->

            <!-- Tasks start -->
            <div class="card">
                <div class="flex align-items-center justify-content-between mb-5">
                    <h5>General Tasks</h5>
                    <Button @click="openAssignTaskDialog" label="Assign task" icon="pi pi-plus"></Button>

                </div>

                <!-- <span class="block text-600 font-medium mb-3">ALL PROJECTS</span> -->
                <ul class="p-0 mx-0 mt-0 mb-4 list-none">
                    <li class="flex align-items-center justify-content-between py-2 border-bottom-1 surface-border">
                        <span class="text-900 line-height-3 mr-3">Richard Jones
                            <span class="text-700">has purchased a blue t-shirt for 79$</span>
                        </span>
                        <Button style="min-width: 35px; min-height: 35px" icon="pi pi-eye" severity="primary" outlined
                            class="mb-2" />
                    </li>
                    <li class="flex align-items-center justify-content-between py-2">
                        <span class="text-700 line-height-3mr-3">Your request for withdrawal of 2500$ has been
                            initiated.</span>
                        <Button style="min-width: 35px; min-height: 35px" icon="pi pi-eye" severity="primary" outlined
                            class="mb-2" />
                    </li>
                </ul>
            </div>
            <!-- Tasks end -->
        </div>

        <!-- Create project dialog  -->
        <Dialog header="Create Project" v-model:visible="createProjectDialog" :modal="true"
            class="create-project-dialog">
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
            <div class="field grid">
                <label class="col-12 mb-2">Client (optional)</label>
                <div class="col-12">
                    <AutoComplete placeholder="Search" id="dd" :dropdown="true" v-model="selectedAutoValue"
                        :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name" />
                </div>
            </div>
            <template #footer>
                <div class="mt-3">
                    <Button label="Cancel" icon="pi pi-times" @click="closeCreateProjectDialog" class="p-button-text" />
                    <Button label="Create" icon="pi pi-check" @click="closeCreateProjectDialog" class="p-button-text" />
                </div>
            </template>
        </Dialog>

        <!-- Add private reminder dialog  -->
        <Dialog header="Add Private Reminder" v-model:visible="addPrivateReminderDialog" :modal="true"
            class="add-private-reminder-dialog">
            <div class="field grid">
                <label for="reminder" class="col-12 mb-2">Reminder</label>
                <div class="col-12">
                    <InputText id="reminder" type="text" placeholder="I need to do something ..." />
                </div>
            </div>
            <template #footer>
                <div class="mt-3">
                    <Button label="Cancel" icon="pi pi-times" @click="closeAddPrivateDialog" class="p-button-text" />
                    <Button label="Add" icon="pi pi-check" @click="closeAddPrivateDialog" class="p-button-text" />
                </div>
            </template>
        </Dialog>

        <!-- Add task dialog -->
        <Dialog header="Assign General Task" v-model:visible="assignTaskDialog" :style="{ width: '30%' }" :modal="true">
            <div class="field grid">
                <label for="name3" class="col-12 mb-2">Task name</label>
                <div class="col-12">
                    <InputText id="name3" type="text" />
                </div>
            </div>
            <div class="field grid">
                <label for="email3" class="col-12 mb-2">Details</label>
                <div class="col-12">
                    <InputText id="email3" type="text" />
                </div>
            </div>
            <div class="field grid">
                <label for="email3" class="col-12 mb-2">Deadline</label>
                <div class="col-12">
                    <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>
                </div>
            </div>
            <div class="field grid">
                <label for="email3" class="col-12 mb-2">Assign to</label>
                <div class="col-12">
                    <Listbox v-model="selectedMember" :options="memberList" optionLabel="name" filter />
                    <!-- For debugging purposes -->
                    <!-- <p>Selected Member: {{ selectedMember.name }}</p> -->
                </div>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" @click="closeAssignTaskDialog" class="p-button-text" />
                <Button label="Add" icon="pi pi-pencil" @click="closeAssignTaskDialog" class="p-button-text"
                    autofocus />
            </template>
        </Dialog>
    </div>
</template>

<style>
.p-inputtext,
.p-inputnumber,
.p-calendar,
.p-autocomplete {
    width: 100%;
}
</style>
