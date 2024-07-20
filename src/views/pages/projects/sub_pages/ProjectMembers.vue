<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { CustomerService } from '@/service/CustomerService';
import { ProductService } from '@/service/ProductService';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';

const customer1 = ref(null);
const customer2 = ref(null);
const customer3 = ref(null);
const filters1 = ref(null);
const loading1 = ref(null);
const loading2 = ref(null);
const products = ref(null);
const statuses = reactive(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
const toast = useToast();
const confirmPopup = useConfirm();
const editDialog = ref(false);
const addDialog = ref(false);
const selectedMember = ref(null);
const memberList = ref([{ name: 'New York' }, { name: 'Rome' }, { name: 'London' }, { name: 'Istanbul' }, { name: 'Paris' }]);

const customerService = new CustomerService();
const productService = new ProductService();

const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};

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

const openAddDialog = () => {
    addDialog.value = true;
};

const closeAddDialog = () => {
    addDialog.value = false;
};

const openEditDialog = () => {
    editDialog.value = true;
};

const closeEditDialog = () => {
    editDialog.value = false;
};
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div class="flex align-items-center justify-content-between mb-3">
                    <h5>Client comments</h5>
                    <Button @click="openAddDialog" label="Add member" icon="pi pi-plus" style="width: 150px" />
                </div>
                <DataTable
                    :value="customer1"
                    :paginator="true"
                    :rows="10"
                    dataKey="id"
                    :rowHover="true"
                    v-model:filters="filters1"
                    filterDisplay="menu"
                    :loading="loading1"
                    :filters="filters1"
                    :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']"
                >
                    <template #empty> No customers found. </template>
                    <template #loading> Loading customers data. Please wait. </template>
                    <Column field="name" header="Name" style="min-width: 12rem">
                        <template #body="{ data }">
                            {{ data.name }}
                        </template>
                    </Column>
                    <Column field="status" header="Role" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                        <template #body="{ data }">
                            <Tag :severity="getSeverity(data.status)">{{ data.status.toUpperCase() }}</Tag>
                        </template>
                        <template #filter="{ filterModel }">
                            <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                                <template #value="slotProps">
                                    <Tag :severity="getSeverity(slotProps.value)" v-if="slotProps.value">{{ slotProps.value }} </Tag>
                                    <span v-else>{{ slotProps.placeholder }}</span>
                                </template>
                                <template #option="slotProps">
                                    <Tag :severity="getSeverity(slotProps.option)">{{ slotProps.option.toUpperCase() }}</Tag>
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <Column header="Actions" headerStyle="width:10rem">
                        <template #body>
                            <div class="flex gap-3">
                                <Button @click="openEditDialog" severity="warning" icon="pi pi-pencil" />
                                <Button ref="popup" @click="confirm($event)" severity="danger" icon="pi pi-times"></Button>
                            </div>
                        </template>
                    </Column>
                </DataTable>
                <!-- pop up -->
                <ConfirmPopup></ConfirmPopup>
                <!-- Add member dialog -->
                <Dialog header="Add Member" v-model:visible="addDialog" :style="{ width: '30%' }" :modal="true">
                    <div class="field grid">
                        <label for="email3" class="col-12 mb-2">Choose member</label>
                        <div class="col-12">
                            <Listbox v-model="selectedMember" :options="memberList" optionLabel="name" filter />
                            <!-- For debugging purposes -->
                            <!-- <p>Selected Member: {{ selectedMember.name }}</p> -->
                        </div>
                    </div>
                    <div class="field grid">
                        <label for="email3" class="col-12 mb-2">Choose role</label>
                        <div class="col-12">
                            <Listbox v-model="selectedMember" :options="memberList" optionLabel="name" filter />
                            <!-- For debugging purposes -->
                            <!-- <p>Selected Member: {{ selectedMember.name }}</p> -->
                        </div>
                    </div>
                    <template #footer>
                        <Button label="Cancel" icon="pi pi-times" @click="closeAddDialog" class="p-button-text" />
                        <Button label="Add" icon="pi pi-pencil" @click="closeAddDialog" class="p-button-text" autofocus />
                    </template>
                </Dialog>
                <!-- edit member dialog  -->
                <Dialog header="Edit Member" v-model:visible="editDialog" :style="{ width: '30%' }" :modal="true">
                    <div class="field grid">
                        <label for="email3" class="col-12 mb-2">Choose role</label>
                        <div class="col-12">
                            <Listbox v-model="selectedMember" :options="memberList" optionLabel="name" filter />
                            <!-- For debugging purposes -->
                            <!-- <p>Selected Member: {{ selectedMember.name }}</p> -->
                        </div>
                    </div>
                    <template #footer>
                        <Button label="Cancel" icon="pi pi-times" @click="closeEditDialog" class="p-button-text" />
                        <Button label="Edit" icon="pi pi-pencil" @click="closeEditDialog" class="p-button-text" autofocus />
                    </template>
                </Dialog>
            </div>
        </div>
    </div>
</template>
