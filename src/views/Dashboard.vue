<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import { ProductService } from '@/service/ProductService';
import { useLayout } from '@/layout/composables/layout';

const { isDarkTheme } = useLayout();

const isAdmin = ref(true);
const products = ref(null);
const display = ref(false);
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
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary" style="width: 2.5rem; height: 2.5rem">
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
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary" style="width: 2.5rem; height: 2.5rem">
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
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary" style="width: 2.5rem; height: 2.5rem">
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
                        <span class="block text-500 font-medium mb-3">Revenue</span>
                        <div class="text-900 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary" style="width: 2.5rem; height: 2.5rem">
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
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary" style="width: 2.5rem; height: 2.5rem">
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
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary" style="width: 2.5rem; height: 2.5rem">
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
                    <div class="flex align-items-center justify-content-center border-round border-1 border-primary" style="width: 2.5rem; height: 2.5rem">
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
                        <span class="text-900 line-height-3 mr-3"
                            >Richard Jones
                            <span class="text-700">has purchased a blue t-shirt for 79$</span>
                        </span>
                        <Button style="min-width: 35px; min-height: 35px" icon="pi pi-eye" severity="primary" outlined class="mb-2" />
                    </li>
                    <li class="flex align-items-center justify-content-between py-2">
                        <span class="text-700 line-height-3mr-3">Your request for withdrawal of 2500$ has been initiated.</span>
                        <Button style="min-width: 35px; min-height: 35px" icon="pi pi-eye" severity="primary" outlined class="mb-2" />
                    </li>
                </ul>

                <div class="flex align-items-baseline justify-content-between mb-2">
                    <span class="block text-600 font-medium mb-3">PRIVATE</span>

                    <Dialog header="Dialog" v-model:visible="display" :breakpoints="{ '960px': '75vw' }" :style="{ width: '30vw' }" :modal="true">
                        <p class="line-height-3 m-0">Hi</p>
                        <template #footer>
                            <Button label="Ok" @click="close" icon="pi pi-check" class="p-button-outlined"></Button>
                        </template>
                    </Dialog>
                    <Button icon="pi pi-plus" @click="open" class="mb-2" />
                </div>
                <ul class="p-0 m-0 list-none">
                    <li class="flex align-items-center justify-content-between py-2 border-bottom-1 surface-border">
                        <span class="text-900 line-height-3 mr-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error porro asperiores quasi? Nesciunt illum, sunt dolorem </span>
                        <Button style="min-width: 35px; min-height: 35px" icon="pi pi-times" severity="danger" outlined class="mb-2" />
                    </li>
                    <li class="flex align-items-center justify-content-between py-2">
                        <span class="text-900 line-height-3 mr-3"
                            >Jane Davis
                            <span class="text-700">has posted a new questions about your product.</span>
                        </span>
                        <Button style="min-width: 35px; min-height: 35px" icon="pi pi-times" severity="danger" outlined class="mb-2" />
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
                    <Button label="Create project" icon="pi pi-plus"></Button>
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
                    <Button label="Assign task" icon="pi pi-plus"></Button>
                </div>

                <!-- <span class="block text-600 font-medium mb-3">ALL PROJECTS</span> -->
                <ul class="p-0 mx-0 mt-0 mb-4 list-none">
                    <li class="flex align-items-center justify-content-between py-2 border-bottom-1 surface-border">
                        <span class="text-900 line-height-3 mr-3"
                            >Richard Jones
                            <span class="text-700">has purchased a blue t-shirt for 79$</span>
                        </span>
                        <Button style="min-width: 35px; min-height: 35px" icon="pi pi-eye" severity="primary" outlined class="mb-2" />
                    </li>
                    <li class="flex align-items-center justify-content-between py-2">
                        <span class="text-700 line-height-3mr-3">Your request for withdrawal of 2500$ has been initiated.</span>
                        <Button style="min-width: 35px; min-height: 35px" icon="pi pi-eye" severity="primary" outlined class="mb-2" />
                    </li>
                </ul>
            </div>
            <!-- Tasks end -->
        </div>
    </div>
</template>
