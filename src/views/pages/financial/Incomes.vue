<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { useToast } from 'primevue/usetoast';
import { CustomerService } from '@/service/CustomerService';

const customer1 = ref(null);
const filters1 = ref(null);
const loading1 = ref(null);
const loading2 = ref(null);
const toast = useToast();
const uploadDialog = ref(false);

const customerService = new CustomerService();

const onUpload = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

onBeforeMount(() => {
    customerService.getCustomersLarge().then((data) => {
        customer1.value = data;
        loading1.value = false;
        customer1.value.forEach((customer) => (customer.date = new Date(customer.date)));
    });
    loading2.value = false;

    initFilters1();
});

const initFilters1 = () => {
    filters1.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    };
};

const clearFilter1 = () => {
    initFilters1();
};

const formatDate = (value) => {
    return value.toLocaleDateString('en-UK', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

const contractType = ref('');
const contractTypeList = ref(['Income', 'Expense']);

const stepperItems = ref([
    {
        label: 'Invoice'
    },
    {
        label: contractType
    }
]);

const currentStep = ref(0);
const nextBtn = ref('Next');
const isDisable = ref(false);
const openUploadDialog = () => {
    currentStep.value = 0;
    nextBtn.value = 'Next';
    isDisable.value = true;
    uploadDialog.value = true;
};

const closeUploadDialog = () => {
    uploadDialog.value = false;
};

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
                <h5>Income</h5>
                <DataTable :value="customer1" :paginator="true" :rows="15" dataKey="id" :rowHover="true"
                    v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1"
                    :globalFilterFields="['name', 'status']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row mb-2">
                            <div class="flex gap-2">
                                <Button type="button" icon="pi pi-upload" label="Upload" @click="openUploadDialog" />
                                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined
                                    @click="clearFilter1()" />
                            </div>
                            <IconField iconPosition="left">
                                <InputIcon class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search"
                                    style="width: 100%" />
                            </IconField>
                        </div>
                    </template>
                    <template #empty> No invoices found. </template>
                    <template #loading> Loading invoices data. Please wait. </template>

                    <Column field="name" header="Name" style="min-width: 12rem">
                        <template #body="{ data }">
                            <div class="flex align-items-center gap-2">
                                <img :alt="data.representative.name"
                                    :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
                                    style="width: 32px" />
                                <span>{{ data.name }}</span>
                            </div>
                        </template>
                        <template #filter="{ filterModel }">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter"
                                placeholder="Search by name" />
                        </template>
                    </Column>
                    <Column field="name" header="Type" style="min-width: 12rem">
                        <template #body="{ data }"> Domain/Package/employee payment </template>
                        <template #filter="{ filterModel }">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter"
                                placeholder="Search by name" />
                        </template>
                    </Column>
                    <Column header="Amount" filterField="balance" dataType="numeric" style="min-width: 10rem">
                        <template #body="{ data }">
                            $70,663.00
                        </template>
                        <template #filter="{ filterModel }">
                            <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                        </template>
                    </Column>
                    <Column field="name" header="Related" style="min-width: 12rem">
                        <template #body="{ data }"> Related to: project/product link </template>
                        <template #filter="{ filterModel }">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter"
                                placeholder="Search by name" />
                        </template>
                    </Column>
                    <Column header="Invoice Date" filterField="date" dataType="date" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ formatDate(data.date) }}
                        </template>
                        <template #filter="{ filterModel }">
                            <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                        </template>
                    </Column>
                    <Column header="Invoice Due Date" filterField="date" dataType="date" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ formatDate(data.date) }}
                        </template>
                        <template #filter="{ filterModel }">
                            <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                        </template>
                    </Column>
                    <Column header="Receipt Date" filterField="date" dataType="date" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ formatDate(data.date) }}
                        </template>
                        <template #filter="{ filterModel }">
                            <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                        </template>
                    </Column>
                    <Column field="status" header="Invoice" style="min-width: 8rem">
                        <template #body>
                            <Button label="View" outlined />
                        </template>
                    </Column>
                    <Column field="status" header="Receipt" style="min-width: 8rem">
                        <template #body>
                            <Button label="View" outlined />
                            /
                            <Button label="Upload" severity="contrast" outlined />
                        </template>
                    </Column>
                    <Column field="status" header="Actions" style="min-width: 8rem">
                        <template #body>
                            <Button icon="pi pi-pencil" severity="warning" class="mr-2"></Button>
                            <Button icon="pi pi-trash" severity="danger"></Button>
                        </template>
                    </Column>
                </DataTable>
                <!-- Create dialog -->
                <Dialog header="Add Invoice" v-model:visible="uploadDialog" :modal="true" style="max-height: 500px"
                    class="add-product-dialog">
                    <!-- normal product stepper -->
                    <Steps v-model:activeStep="currentStep" :readonly="false" :model="stepperItems" class="mb-6" />
                    <div v-if="currentStep === 0">
                        <div class="field grid">
                            <label for="type" class="col-12 mb-2">Type</label>
                            <div class="col-12">
                                <Dropdown id="type" v-model="contractType" :options="contractTypeList"
                                    placeholder="Select type ..." />
                            </div>
                        </div>
                        <div class="field grid">
                            <label for="price" class="col-12 mb-2">Contract file</label>
                            <div class="col-12">
                                <FileUpload name="demo[]" @upload="onUpload" :multiple="true" accept="image/*"
                                    :maxFileSize="1000000">
                                    <template #empty>
                                        <p>Drag and drop files to here to upload.</p>
                                    </template>
                                </FileUpload>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="currentStep === 1">
                        <div class="field grid">
                            <label for="type" class="col-12 mb-2">Category (payment/product)</label>
                            <div class="col-12">
                                <Dropdown id="type" v-model="contractType" :options="contractTypeList"
                                    placeholder="Select type ..." />
                            </div>
                        </div>
                        <!-- maybe I need extra step to check if it is payment or not cuz of the opposite party is the employee  -->
                        <!-- <div v-if="expenseType == 'payment'" class="field grid">
                            <label for="type" class="col-12 mb-2">{{ contractType }} type (payment/product)</label>
                            <div class="col-12">
                                <Dropdown id="type" v-model="contractType" :options="contractTypeList" placeholder="Select type ..." />
                            </div>
                        </div> -->
                        <div class="field grid">
                            <label class="col-12 mb-2">Amount</label>
                            <div class="col-12">
                                <InputNumber v-model="packagePrice1" inputId="currency-us" mode="currency"
                                    currency="USD" locale="en-US" placeholder="$#,##" />
                            </div>
                        </div>
                        <div class="field grid">
                            <label for="details" class="col-12 mb-2">Details</label>
                            <div class="col-12">
                                <Textarea id="details" placeholder="details ..." :autoResize="true" rows="3" />
                            </div>
                        </div>
                    </div>
                    <!-- subs product stepper -->
                    <template #footer>
                        <div class="mt-3">
                            <Button label="cancel" icon="pi pi-times" @click="closeUploadDialog" class="p-button-text"
                                severity="danger" />
                            <Button label="previous" :disabled="isDisable" icon="pi pi-chevron-left" @click="prevStep"
                                class="p-button-text" />
                            <Button :label="nextBtn" icon="pi pi-chevron-right" @click="nextStep"
                                class="p-button-text" />
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
.p-calendar,
.add-product-dialog .p-dropdown {
    width: 100%;
}

.p-listbox-list-wrapper {
    max-height: 100px;
}
</style>
