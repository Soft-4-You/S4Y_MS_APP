<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

const dataviewValue = ref(null);
const layout = ref('list');
const sortKey = ref(null);
const sortOrder = ref(null);
const sortField = ref(null);
const sortOptions = ref([
    { label: 'Price High to Low', value: '!price' },
    { label: 'Price Low to High', value: 'price' }
]);

const productService = new ProductService();

onMounted(() => {
    productService.getProductsSmall().then((data) => (dataviewValue.value = data));
});

const onSortChange = (event) => {
    const value = event.value.value;
    const sortValue = event.value;

    if (value.indexOf('!') === 0) {
        sortOrder.value = -1;
        sortField.value = value.substring(1, value.length);
        sortKey.value = sortValue;
    } else {
        sortOrder.value = 1;
        sortField.value = value;
        sortKey.value = sortValue;
    }
};

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

const openAddDialog = () => {
    currentStep.value = 0;
    nextBtn.value = 'Next';
    isDisable.value = true;
    addDialog.value = true;
};

const closeAddDialog = () => {
    addDialog.value = false;
};

const stepperItems = ref([
    {
        label: 'Product info.'
    },
    {
        label: 'Packages info.'
    }
]);

const addDialog = ref(false);
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
        nextBtn.value = 'Add';
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
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div class="flex align-items-center justify-content-between mb-3">
                    <h5>Products</h5>
                    <Button @click="openAddDialog" label="Add product" icon="pi pi-plus"></Button>
                </div>
                <DataView :value="dataviewValue" :layout="layout" :sortOrder="sortOrder" :sortField="sortField">
                    <template #header>
                        <div class="grid grid-nogutter">
                            <div class="col-6 text-left">
                                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
                            </div>
                            <div class="col-6 text-right">
                                <DataViewLayoutOptions v-model="layout" />
                            </div>
                        </div>
                    </template>

                    <template #list="slotProps">
                        <div class="grid grid-nogutter">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                                <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" :class="{ 'border-top-1 surface-border': index !== 0 }">
                                    <div class="md:w-10rem relative">
                                        <img class="block xl:block mx-auto border-round w-full" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                                    </div>
                                    <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                                        <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                            <div lass="mb-2">
                                                <div class="text-lg font-medium text-900 mb-2">{{ item.name }}</div>
                                                <span class="font-medium text-secondary text-sm">Product type</span>
                                            </div>
                                            <div class="surface-100 p-1" style="border-radius: 30px">
                                                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                    <i class="pi pi-cart-plus"></i>
                                                    <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-column md:align-items-end gap-5">
                                            <span class="text-xl font-semibold text-900">${{ item.price }}</span>
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
                                    <div class="surface-50 flex justify-content-center border-round p-3">
                                        <div class="relative mx-auto">
                                            <img class="border-round w-full" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" style="max-width: 300px" />
                                        </div>
                                    </div>
                                    <div class="pt-4">
                                        <div class="flex flex-row justify-content-between align-items-start gap-2">
                                            <div>
                                                <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                                <div class="text-lg font-medium text-900 mt-1">{{ item.name }}</div>
                                            </div>
                                            <div class="surface-100 p-1" style="border-radius: 30px">
                                                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                    <i class="pi pi-cart-plus"></i>
                                                    <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-column gap-4 mt-4">
                                            <span class="text-2xl font-semibold text-900">${{ item.price }}</span>
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
                <!-- Create dialog -->
                <Dialog header="Add Product" v-model:visible="addDialog" :modal="true" style="max-height: 500px" class="add-product-dialog">
                    <!-- normal product stepper -->
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
                    <!-- subs product stepper -->
                    <template #footer>
                        <div class="mt-3">
                            <Button label="cancel" icon="pi pi-times" @click="closeAddDialog" class="p-button-text" severity="danger" />
                            <Button label="previous" :disabled="isDisable" icon="pi pi-chevron-left" @click="prevStep" class="p-button-text" />
                            <Button :label="nextBtn" icon="pi pi-chevron-right" @click="nextStep" class="p-button-text" />
                        </div>
                    </template>
                </Dialog>
            </div>
        </div>
    </div>
</template>

<style>
.p-inputtext,
.p-inputnumber,
.add-product-dialog .p-dropdown {
    width: 100%;
}

.p-listbox-list-wrapper {
    max-height: 100px;
}
</style>
