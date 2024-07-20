<script setup>
import { ref, onBeforeMount } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { CustomerService } from '@/service/CustomerService';
import { ProductService } from '@/service/ProductService';

const customer1 = ref(null);
const customer2 = ref(null);
const customer3 = ref(null);
const filters1 = ref(null);
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

    initFilters1();
});

const initFilters1 = () => {
    filters1.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    };
};
//////////////////////////
const toast = useToast();
const replaceDialog = ref(false);
const uploadDialog = ref(false);
const popup = ref(null);
const confirmPopup = useConfirm();
const onUpload = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

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
const openReplaceDialog = () => {
    replaceDialog.value = true;
};

const closeReplaceDialog = () => {
    replaceDialog.value = false;
};

const openUploadDialog = () => {
    uploadDialog.value = true;
};

const closeUploadDialog = () => {
    uploadDialog.value = false;
};


</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <!-- <h5>Upload Files</h5>
                <FileUpload name="demo[]" @uploader="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000" customUpload /> -->
                <h5>Files</h5>
                <DataTable :value="products" v-model:expandedRows="expandedRows" dataKey="id" tableStyle="min-width: 60rem">
                    <template #header> </template>
                    <Column :expander="true" headerStyle="width: 3rem" />
                    <Column field="category" header="Category" :sortable="true">
                        <template #body="slotProps"> Images </template>
                    </Column>
                    <Column field="price" header="Number of files" :sortable="true">
                        <template #body="slotProps"> 56 </template>
                    </Column>
                    <Column header="Actions" headerStyle="width:11rem">
                        <template #body>
                            <div class="flex gap-3">
                                <Button icon="pi pi-download" />
                                <Button @click="openUploadDialog" severity="warning" icon="pi pi-upload" />
                                <Button ref="popup" @click="confirm($event)" severity="danger" icon="pi pi-trash"></Button>
                            </div>
                        </template>
                    </Column>
                    <template #expansion="slotProps">
                        <div class="p-3">
                            <h5>Items of images folder</h5>
                            <DataTable :value="slotProps.data.orders">
                                <Column header="Image">
                                    <template #body="slotProps">
                                        <img :src="'/demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="shadow-2" width="100" />
                                    </template>
                                </Column>
                                <Column field="customer" header="Name" :sortable="true">
                                    <template #body="slotProps"> Hero_section_bg.webp </template>
                                </Column>
                                <Column field="date" header="Size" :sortable="true">
                                    <template #body="slotProps">
                                        {{ slotProps.data.date }}
                                    </template>
                                </Column>
                                <Column header="Actions" headerStyle="width:10rem">
                                    <template #body>
                                        <div class="flex gap-3">
                                            <Button icon="pi pi-download" />
                                            <Button @click="openReplaceDialog" severity="warning" icon="pi pi-sync" />
                                            <Button ref="popup" @click="confirm($event)" severity="danger" icon="pi pi-trash"></Button>
                                        </div>
                                    </template>
                                </Column>
                            </DataTable>
                        </div>
                    </template>
                </DataTable>
                <!-- Confirm popup & dialog -->
                <ConfirmPopup></ConfirmPopup>
                <!-- replace dialog -->
                <Dialog header="Replace File" v-model:visible="replaceDialog" :style="{ width: '50%' }" :modal="true">
                    <div class="flex align-items-center gap-2 mb-3">
                        <i class="pi pi-exclamation-triangle" style="font-size: 1.3rem" />
                        <span>You are going to replace this file!</span>
                    </div>
                    <FileUpload name="demo[]" @uploader="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000" customUpload />
                    <template #footer>
                        <Button label="Cancel" icon="pi pi-times" @click="closeReplaceDialog" class="p-button-text" />
                        <Button label="Replace" icon="pi pi-sync" @click="closeReplaceDialog" class="p-button-text" autofocus />
                    </template>
                </Dialog>
                <!-- upload dialog -->
                <Dialog header="Upload File" v-model:visible="uploadDialog" :style="{ width: '50%' }" :modal="true">
                    <FileUpload name="demo[]" @uploader="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000" customUpload />
                    <template #footer>
                        <Button label="Cancel" icon="pi pi-times" @click="closeUploadDialog" class="p-button-text" />
                        <Button label="Upload" icon="pi pi-upload" @click="closeUploadDialog" class="p-button-text" autofocus />
                    </template>
                </Dialog>
            </div>
        </div>
    </div>
</template>

