<script setup>
import { ref, onBeforeMount } from 'vue';
import { CustomerService } from '@/service/CustomerService';
import { ProductService } from '@/service/ProductService';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';

const customer1 = ref(null);
const customer2 = ref(null);
const customer3 = ref(null);
const loading1 = ref(null);
const loading2 = ref(null);
const products = ref(null);
const menu = ref(null);
const toast = useToast();
const confirmPopup = useConfirm();
const editDialog = ref(false);
const addDialog = ref(false);
const calendarValue = ref(null);
const selectedMember = ref(null);
const memberList = ref([{ name: 'New York' }, { name: 'Rome' }, { name: 'London' }, { name: 'Istanbul' }, { name: 'Paris' }]);

selectedMember.value = memberList.value[0];

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
});

const calculateCustomerTotal = (name) => {
    let total = 0;
    if (customer3.value) {
        for (let customer of customer3.value) {
            if (customer.representative.name === name) {
                total++;
            }
        }
    }

    return total;
};

const overlayMenuItems = ref([
    {
        label: 'Pending',
        icon: 'pi pi-clock'
    },
    {
        label: 'In progress',
        icon: 'pi pi-code'
    },
    {
        label: 'Done',
        icon: 'pi pi-check-square'
    }
]);

const toggleMenu = (event) => {
    menu.value.toggle(event);
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

const openEditDialog = () => {
    editDialog.value = true;
};

const closeEditDialog = () => {
    editDialog.value = false;
};

const openAddDialog = () => {
    addDialog.value = true;
};

const closeAddDialog = () => {
    addDialog.value = false;
};
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>General Tasks</h5>
                <DataTable :value="customer3" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" :sortOrder="1" scrollable scrollHeight="600px">
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="name" header="Task" style="min-width: 150px"></Column>
                    <Column field="country" header="Details" style="min-width: 200px">
                        <template #body="{ data }">
                            <div class="flex align-items-center gap-2">
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem doloremque dolores maiores non voluptates in. </span>
                            </div>
                        </template>
                    </Column>
                    <Column field="date" header="Date" style="min-width: 150px"></Column>
                    <Column field="date" header="Deadline" style="min-width: 150px"></Column>
                    <Column field="status" header="Status" style="min-width: 100px">
                        <template #body="slotProps">
                            <Tag :severity="getSeverity(slotProps.data.status)">{{ slotProps.data.status.toUpperCase() }}</Tag>
                        </template>
                    </Column>
                    <Column field="country" header="Actions" style="min-width: 200px">
                        <template #body>
                            <div class="flex align-items-center gap-2">
                                <Menu ref="menu" :model="overlayMenuItems" :popup="true" />
                                <Button type="button" label="Status" icon="pi pi-angle-down" @click="toggleMenu" style="width: auto" />
                                <Button @click="openEditDialog" severity="warning" icon="pi pi-pencil" />
                                <Button ref="popup" @click="confirm($event)" severity="danger" icon="pi pi-trash"></Button>
                            </div>
                        </template>
                    </Column>
                    <template #groupheader="slotProps">
                        <div class="flex align-items-center justify-content-between">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.data.representative.name" :src="'/demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                                <span>{{ slotProps.data.representative.name }}</span>
                            </div>
                            <Button @click="openAddDialog" label="Add task" icon="pi pi-plus" style="width: 150px" />
                        </div>
                    </template>
                    <template #groupfooter="slotProps">
                        <td style="text-align: right" class="text-primary font-bold pr-6">Total tasks: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</td>
                    </template>
                </DataTable>
                <!-- Confirm popup & dialog -->
                <ConfirmPopup></ConfirmPopup>
                <!-- edit dialog  -->
                <Dialog header="Edit Task" v-model:visible="editDialog" :style="{ width: '30%' }" :modal="true">
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

                    <template #footer>
                        <Button label="Cancel" icon="pi pi-times" @click="closeEditDialog" class="p-button-text" />
                        <Button label="Edit" icon="pi pi-pencil" @click="closeEditDialog" class="p-button-text" autofocus />
                    </template>
                </Dialog>
                <!-- Add task dialog -->
                <Dialog header="Add Task" v-model:visible="addDialog" :style="{ width: '30%' }" :modal="true">
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
                        <Button label="Cancel" icon="pi pi-times" @click="closeAddDialog" class="p-button-text" />
                        <Button label="Add" icon="pi pi-pencil" @click="closeAddDialog" class="p-button-text" autofocus />
                    </template>
                </Dialog>
            </div>
        </div>
    </div>
</template>

<style>
.p-inputtext {
    width: 100%;
}

.p-calendar {
    width: 100%;
}

.p-listbox-list-wrapper {
    max-height: 100px;
}
</style>
