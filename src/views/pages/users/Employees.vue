<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
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
const statuses = reactive(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);

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

const clearFilter1 = () => {
    initFilters1();
};

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const formatDate = (value) => {
    return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Employees</h5>
                <DataTable :value="customer1" :paginator="true" :rows="15" dataKey="id" :rowHover="true"
                    v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1"
                    :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']">
                    <template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined
                                @click="clearFilter1()" />
                            <IconField iconPosition="left">
                                <InputIcon class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search"
                                    style="width: 100%" />
                            </IconField>
                        </div>
                    </template>
                    <template #empty> No customers found. </template>
                    <template #loading> Loading customers data. Please wait. </template>
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
                    <Column header="Username" filterField="country.name" style="min-width: 12rem">
                        <template #body="{ data }">
                            <div class="flex align-items-center gap-2">
                                <span>_x_{{ data.country.name }}_x_</span>
                            </div>
                        </template>
                        <template #filter="{ filterModel }">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter"
                                placeholder="Search by country" />
                        </template>
                        <template #filterclear="{ filterCallback }">
                            <Button type="button" icon="pi pi-times" @click="filterCallback()"
                                severity="secondary"></Button>
                        </template>
                        <template #filterapply="{ filterCallback }">
                            <Button type="button" icon="pi pi-check" @click="filterCallback()"
                                severity="success"></Button>
                        </template>
                    </Column>
                    <Column header="Email" filterField="country.name" style="min-width: 12rem">
                        <template #body="{ data }">
                            <div class="flex align-items-center gap-2">
                                <span>{{ data.country.name }}@gmail.com</span>
                            </div>
                        </template>
                        <template #filter="{ filterModel }">
                            <InputText type="text" v-model="filterModel.value" class="p-column-filter"
                                placeholder="Search by country" />
                        </template>
                        <template #filterclear="{ filterCallback }">
                            <Button type="button" icon="pi pi-times" @click="filterCallback()"
                                severity="secondary"></Button>
                        </template>
                        <template #filterapply="{ filterCallback }">
                            <Button type="button" icon="pi pi-check" @click="filterCallback()"
                                severity="success"></Button>
                        </template>
                    </Column>
                    <Column field="status" header="Role" :filterMenuStyle="{ width: '14rem' }" style="width: 15rem">
                        <template #body="{ data }">
                            <div class="flex flex-wrap gap-2">
                                <Tag :severity="getSeverity(data.status)">{{ data.status.toUpperCase() }}</Tag>
                                <Tag :severity="getSeverity(data.status)">{{ data.status.toUpperCase() }}</Tag>
                                <Tag :severity="getSeverity(data.status)">{{ data.status.toUpperCase() }}</Tag>
                                <Tag :severity="getSeverity(data.status)">{{ data.status.toUpperCase() }}</Tag>
                                <Tag :severity="getSeverity(data.status)">{{ data.status.toUpperCase() }}</Tag>
                                <Tag :severity="getSeverity(data.status)">{{ data.status.toUpperCase() }}</Tag>
                                <Tag :severity="getSeverity(data.status)">{{ data.status.toUpperCase() }}</Tag>
                            </div>
                        </template>
                        <template #filter="{ filterModel }">
                            <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any"
                                class="p-column-filter" :showClear="true">
                                <template #value="slotProps">
                                    <Tag :severity="getSeverity(slotProps.value)" v-if="slotProps.value">{{
                                        slotProps.value }} </Tag>
                                    <span v-else>{{ slotProps.placeholder }}</span>
                                </template>
                                <template #option="slotProps">
                                    <Tag :severity="getSeverity(slotProps.option)">{{ slotProps.option.toUpperCase() }}
                                    </Tag>
                                </template>
                            </Dropdown>
                        </template>
                    </Column>
                    <Column header="Joining Date" filterField="date" dataType="date" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ formatDate(data.date) }}
                        </template>
                        <template #filter="{ filterModel }">
                            <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                        </template>
                    </Column>
                    <Column header="Payment Received" filterField="balance" dataType="numeric" style="min-width: 10rem">
                        <template #body="{ data }">
                            {{ formatCurrency(data.balance) }}
                        </template>
                        <template #filter="{ filterModel }">
                            <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>
