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

const items = ref([
    {
        label: 'Edit',
        icon: 'pi pi-pencil'
    }
]);
const contractType = ref('');
const contractTypeList = ref(['Income', 'Expense']);

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
                <h5>Contracts</h5>
                <DataTable :value="customer1" :paginator="true" :rows="10" dataKey="id" :rowHover="true" v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1" :globalFilterFields="['name', 'status']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row mb-2">
                            <div class="flex gap-2">
                                <Button type="button" icon="pi pi-upload" label="Upload" @click="openUploadDialog" />
                                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter1()" />
                            </div>
                            <IconField iconPosition="left">
                                <InputIcon class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" style="width: 100%" />
                            </IconField>
                        </div>
                    </template>
                    <template #empty> No contracts found. </template>
                    <template #loading> Loading contracts data. Please wait. </template>

                    <Column field="name" header="Opposite party" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.name }}
                        </template>
                        <template #filter="{ filterModel }">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name" />
                        </template>
                    </Column>
                    <Column field="name" header="Category" style="min-width: 12rem">
                        <template #body="{ data }"> employee/client </template>
                        <template #filter="{ filterModel }">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name" />
                        </template>
                    </Column>
                    <Column field="name" header="Project" style="min-width: 12rem">
                        <template #body="{ data }"> Project name for the client </template>
                        <template #filter="{ filterModel }">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name" />
                        </template>
                    </Column>
                    <Column header="Date" filterField="date" dataType="date" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ formatDate(data.date) }}
                        </template>
                        <template #filter="{ filterModel }">
                            <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                        </template>
                    </Column>
                    <Column header="Due Date" filterField="date" dataType="date" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ formatDate(data.date) }}
                        </template>
                        <template #filter="{ filterModel }">
                            <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                        </template>
                    </Column>
                    <Column field="status" header="Actions" style="min-width: 12rem">
                        <template #body>
                            <SplitButton label="View" :model="items"></SplitButton>
                        </template>
                    </Column>
                </DataTable>
                <!-- Create dialog -->
                <Dialog header="Add Contract" v-model:visible="uploadDialog" :modal="true" style="max-height: 500px" class="add-product-dialog">
                    <p class="mb-4"><i class="pi pi-exclamation-circle"></i> Project's contracts are added from the project page!</p>
                    <div class="field grid">
                        <label class="col-12 mb-2"> Opposite party</label>
                        <div class="col-12">
                            <AutoComplete placeholder="Search" id="project-member" :dropdown="true" v-model="selectedAutoValue" :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name" />
                        </div>
                    </div>
                    <div class="field grid">
                        <label for="type" class="col-12 mb-2">Category</label>
                        <div class="col-12">
                            <Dropdown id="type" v-model="contractType" :options="contractTypeList" placeholder="Select type ..." />
                        </div>
                    </div>
                    <div class="field grid">
                        <label class="col-12 mb-2">Due date</label>
                        <div class="col-12">
                            <Calendar :showIcon="true" :showButtonBar="true" v-model="projectDeadline"></Calendar>
                        </div>
                    </div>
                    <div class="field grid">
                        <label for="price" class="col-12 mb-2">Contract file</label>
                        <div class="col-12">
                            <FileUpload name="demo[]" @upload="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000">
                                <template #empty>
                                    <p>Drag and drop files to here to upload.</p>
                                </template>
                            </FileUpload>
                        </div>
                    </div>

                    <!--
                     DO NOT ADD CONTRACT FOR PROJECTS HERE, PROJECTS CONTRACTS WILL BE ADDED FROM THE PROJECT ITSELF.
                     -->
                    <template #footer>
                        <div class="mt-3">
                            <Button label="cancel" icon="pi pi-times" @click="closeUploadDialog" class="p-button-text" severity="danger" />
                            <Button label="Upload" icon="pi pi-upload" @click="closeUploadDialog" class="p-button-text" />
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
.p-autocomplete,
.add-product-dialog .p-dropdown {
    width: 100%;
}

.p-listbox-list-wrapper {
    max-height: 100px;
}
</style>
