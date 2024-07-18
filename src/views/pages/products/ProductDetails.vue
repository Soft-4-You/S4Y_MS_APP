<script setup>
import { ref, watch, onBeforeMount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { CustomerService } from '@/service/CustomerService';
import { ProductService } from '@/service/ProductService';

const { layoutConfig } = useLayout();
let documentStyle = getComputedStyle(document.documentElement);
let textColor = documentStyle.getPropertyValue('--text-color');
let textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
let surfaceBorder = documentStyle.getPropertyValue('--surface-border');

const breadcrumbProducts = ref({ icon: 'pi pi-box', route: { name: 'products' } });
const breadcrumbItems = ref([{ label: 'Product Details' }]);
const chartData = ref(null);
const chartOptions = ref(null);

const setColorOptions = () => {
    documentStyle = getComputedStyle(document.documentElement);
    textColor = documentStyle.getPropertyValue('--text-color');
    textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    surfaceBorder = documentStyle.getPropertyValue('--surface-border');
};

const setChart = () => {
    chartData.value = {
        labels: ['Basic', 'Premium', 'Enterprise'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [documentStyle.getPropertyValue('--indigo-500'), documentStyle.getPropertyValue('--purple-500'), documentStyle.getPropertyValue('--teal-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--indigo-400'), documentStyle.getPropertyValue('--purple-400'), documentStyle.getPropertyValue('--teal-400')]
            }
        ]
    };

    chartOptions.value = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };
};

watch(
    layoutConfig.theme,
    () => {
        setColorOptions();
        setChart();
    },
    { immediate: true }
);

//////

const customer1 = ref(null);
const customer2 = ref(null);
const customer3 = ref(null);
const loading1 = ref(null);
const loading2 = ref(null);
const products = ref(null);
const expandedRows = ref([]);

const customerService = new CustomerService();
const productService = new ProductService();

onBeforeMount(() => {
    productService.getProductsWithOrdersSmall().then((data) => (products.value = data));
    customerService.getCustomersLarge().then((data) => {
        customer1.value = data;
        loading1.value = false;
        customer1.value.forEach((customer) => (customer.date = new Date(customer.date)));
    });
    customerService.getCustomersLarge().then((data) => (customer2.value = data));
    customerService.getCustomersMedium().then((data) => (customer3.value = data));
    loading2.value = false;
});
</script>

<template>
    <div class="grid p-fluid">
        <!-- Breadcrumb -->
        <div class="col-12">
            <div class="card card-w-title">
                <h5>Product name</h5>
                <Breadcrumb :home="breadcrumbProducts" :model="breadcrumbItems">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a :href="href" v-bind="props.action" @click="navigate">
                                <span :class="[item.icon, 'text-color']" />
                                <span class="text-primary font-semibold">{{ item.label }}</span>
                            </a>
                        </router-link>
                        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                            <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
                        </a>
                    </template>
                </Breadcrumb>
            </div>
        </div>

        <!-- Name and overview  -->
        <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
            <section>
                <span class="block text-6xl font-bold mb-1">Soft 4 You Restaurant Menu</span>
                <div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
        </div>
        <div class="col-12 md:col-6 overflow-hidden">
            <img src="/demo/images/blocks/hero/hero-1.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" />
        </div>

        <!-- Features -->
        <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
            <div class="mb-3 font-bold text-2xl mb-6">
                <span class="text-900">Software </span>
                <span class="text-primary-600">Features</span>
            </div>
            <div class="grid">
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-star-fill text-4xl text-primary-500"></i>
                    </span>
                    <div class="text-900 mb-3 font-medium">Built for Developers</div>
                    <span class="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-star-fill text-4xl text-primary-500"></i>
                    </span>
                    <div class="text-900 mb-3 font-medium">End-to-End Encryption</div>
                    <span class="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-star-fill text-4xl text-primary-500"></i>
                    </span>
                    <div class="text-900 mb-3 font-medium">Easy to Use</div>
                    <span class="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-star-fill text-4xl text-primary-500"></i>
                    </span>
                    <div class="text-900 mb-3 font-medium">Fast & Global Support</div>
                    <span class="text-700 text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
                </div>
                <div class="col-12 md:col-4 mb-4 px-5">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-star-fill text-4xl text-primary-500"></i>
                    </span>
                    <div class="text-900 mb-3 font-medium">Open Source</div>
                    <span class="text-700 text-sm line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
                </div>
                <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
                    <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                        <i class="pi pi-star-fill text-4xl text-primary-500"></i>
                    </span>
                    <div class="text-900 mb-3 font-medium">Trusted Securitty</div>
                    <span class="text-700 text-sm line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
                </div>
            </div>
        </div>

        <!-- Pricing -->
        <div class="col-12">
            <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
                <div class="text-900 font-bold text-6xl mb-4 mb-6 text-center">Packages Prices</div>

                <div class="grid">
                    <div class="col-12 lg:col-4">
                        <div class="p-3 h-full">
                            <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                                <div class="text-900 font-medium text-xl">Basic</div>
                                <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                                <div class="flex flex-column gap-3">
                                    <div>
                                        <span class="font-bold text-2xl text-900">$9</span>
                                        <span class="ml-2 font-medium text-600">per month</span>
                                    </div>
                                    <div>
                                        <span class="font-bold text-2xl text-900">$90</span>
                                        <span class="ml-2 font-medium text-600">per half year</span>
                                    </div>
                                    <div>
                                        <span class="font-bold text-2xl text-900">$900</span>
                                        <span class="ml-2 font-medium text-600">per year</span>
                                    </div>
                                </div>
                                <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                                <ul class="list-none p-0 m-0 flex-grow-1">
                                    <li class="flex align-items-center mb-3">
                                        <i class="pi pi-check-circle text-primary-500 mr-2"></i>
                                        <span>Arcu vitae elementum</span>
                                    </li>
                                    <li class="flex align-items-center mb-3">
                                        <i class="pi pi-check-circle text-primary-500 mr-2"></i>
                                        <span>Dui faucibus in ornare</span>
                                    </li>
                                    <li class="flex align-items-center mb-3">
                                        <i class="pi pi-check-circle text-primary-500 mr-2"></i>
                                        <span>Morbi tincidunt augue</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 lg:col-4">
                        <div class="p-3 h-full">
                            <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                                <div class="text-900 font-medium text-xl">Premium</div>
                                <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                                <div class="flex flex-column gap-3">
                                    <div>
                                        <span class="font-bold text-2xl text-900">$9</span>
                                        <span class="ml-2 font-medium text-600">per month</span>
                                    </div>
                                    <div>
                                        <span class="font-bold text-2xl text-900">$90</span>
                                        <span class="ml-2 font-medium text-600">per half year</span>
                                    </div>
                                    <div>
                                        <span class="font-bold text-2xl text-900">$900</span>
                                        <span class="ml-2 font-medium text-600">per year</span>
                                    </div>
                                </div>
                                <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                                <ul class="list-none p-0 m-0 flex-grow-1">
                                    <li class="flex align-items-center mb-3">
                                        <i class="pi pi-check-circle text-primary-500 mr-2"></i>
                                        <span>Arcu vitae elementum</span>
                                    </li>
                                    <li class="flex align-items-center mb-3">
                                        <i class="pi pi-check-circle text-primary-500 mr-2"></i>
                                        <span>Dui faucibus in ornare</span>
                                    </li>
                                    <li class="flex align-items-center mb-3">
                                        <i class="pi pi-check-circle text-primary-500 mr-2"></i>
                                        <span>Morbi tincidunt augue</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 lg:col-4">
                        <div class="p-3 h-full">
                            <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                                <div class="text-900 font-medium text-xl">Enterprise</div>
                                <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                                <div class="flex flex-column gap-3">
                                    <div>
                                        <span class="font-bold text-2xl text-900">$9</span>
                                        <span class="ml-2 font-medium text-600">per month</span>
                                    </div>
                                    <div>
                                        <span class="font-bold text-2xl text-900">$90</span>
                                        <span class="ml-2 font-medium text-600">per half year</span>
                                    </div>
                                    <div>
                                        <span class="font-bold text-2xl text-900">$900</span>
                                        <span class="ml-2 font-medium text-600">per year</span>
                                    </div>
                                </div>
                                <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                                <ul class="list-none p-0 m-0 flex-grow-1">
                                    <li class="flex align-items-center mb-3">
                                        <i class="pi pi-check-circle text-primary-500 mr-2"></i>
                                        <span>Arcu vitae elementum</span>
                                    </li>
                                    <li class="flex align-items-center mb-3">
                                        <i class="pi pi-check-circle text-primary-500 mr-2"></i>
                                        <span>Dui faucibus in ornare</span>
                                    </li>
                                    <li class="flex align-items-center mb-3">
                                        <i class="pi pi-check-circle text-primary-500 mr-2"></i>
                                        <span>Morbi tincidunt augue</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats chart -->
        <div class="col-12">
            <div class="card flex flex-column align-items-center">
                <h5 class="text-left w-full">Packages sales distribution</h5>
                <Chart type="doughnut" :data="chartData" :options="chartOptions"></Chart>
                <!-- For normal products only -->
                <h4>Total Number of Sales: {{ chartData.datasets[0].data[0] + chartData.datasets[0].data[1] + chartData.datasets[0].data[2]  }}</h4>
            </div>
        </div>

        <!-- subs packages table -->
        <div class="col-12">
            <div class="card">
                <h5>Packages Sales Details</h5>
                <DataTable :value="products" v-model:expandedRows="expandedRows" dataKey="id" tableStyle="min-width: 60rem">
                    <template #header></template>
                    <Column :expander="true" headerStyle="width: 3rem" />
                    <Column field="name" header="Package">
                        <template #body="slotProps">
                            {{ slotProps.data.name }}
                        </template>
                    </Column>
                    <Column field="category" header="No. subs"> <template #body="slotProps"> 43 </template></Column>
                    <Column field="rating" header="No. active subs">
                        <template #body="slotProps"> 12 </template>
                    </Column>
                    <Column field="inventoryStatus" header="Total subs duration">
                        <template #body="slotProps"> 345 Months </template>
                    </Column>
                    <template #expansion="slotProps">
                        <div class="p-3">
                            <h5>Basic</h5>
                            <DataTable :value="slotProps.data.orders">
                                <Column field="id" header="Subs Type">
                                    <template #body="slotProps"> Yearly </template>
                                </Column>
                                <Column field="id" header="No. subs">
                                    <template #body="slotProps">
                                        {{ slotProps.data.id }}
                                    </template>
                                </Column>
                                <Column field="customer" header="No. active subs">
                                    <template #body="slotProps"> 3 </template>
                                </Column>
                                <Column field="amount" header="Total subs duration">
                                    <template #body="slotProps"> 12 Months </template>
                                </Column>
                            </DataTable>
                        </div>
                    </template>
                </DataTable>
            </div>
        </div>
    </div>
</template>
