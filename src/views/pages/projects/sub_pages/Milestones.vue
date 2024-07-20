<script setup>
import { ref } from 'vue';

const editDialog = ref(false);

const openEditDatesDialog = () => {
    editDialog.value = true;
};

const closeEditDatesDialog = () => {
    editDialog.value = false;
};

const customEvents = ref([
    {
        status: 'Requirements',
        date: '15/10/2020',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        image: 'game-controller.jpg'
    },
    {
        status: 'Analysis',
        date: '15/10/2020',
        icon: 'pi pi-cog',
        color: '#673AB7'
    },
    {
        status: 'UI/UX',
        date: '15/10/2020',
        icon: 'pi pi-envelope',
        color: '#FF9800'
    },
    {
        status: 'Development',
        date: '16/10/2020',
        icon: 'pi pi-check',
        color: '#607D8B'
    },
    {
        status: 'Testing',
        date: '16/10/2020',
        icon: 'pi pi-check',
        color: '#607D8B'
    },
    {
        status: 'Deployment',
        date: '16/10/2020',
        icon: 'pi pi-check',
        color: '#607D8B'
    },
    {
        status: 'Deadline',
        date: '16/10/2020',
        icon: 'pi pi-check',
        color: '#607D8B'
    }
]);
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div class="flex justify-content-between align-items-center">
                    <h5>Milestones</h5>
                    <Button @click="openEditDatesDialog" label="Edit dates" severity="warning" icon="pi pi-pencil" style="width: 150px"></Button>
                </div>
                <Timeline :value="customEvents">
                    <template #opposite="slotProps">
                        <small class="p-text-secondary">{{ slotProps.item.date }}</small>
                    </template>
                    <template #content="slotProps">
                        {{ slotProps.item.status }}
                    </template>
                </Timeline>
                <!-- edit dates dialog -->
                <Dialog header="Edit Dates" v-model:visible="editDialog" :modal="true">
                    <div class="field grid">
                        <label for="email3" class="col-12 mb-2">Milestone1</label>
                        <div class="col-12">
                            <Calendar :showIcon="true" showButtonBar v-model="calendarValue"></Calendar>
                        </div>
                    </div>
                    <div class="field grid">
                        <label for="email3" class="col-12 mb-2">Milestone1</label>
                        <div class="col-12">
                            <Calendar :showIcon="true" showButtonBar v-model="calendarValue"></Calendar>
                        </div>
                    </div>
                    <div class="field grid">
                        <label for="email3" class="col-12 mb-2">Milestone1</label>
                        <div class="col-12">
                            <Calendar :showIcon="true" showButtonBar v-model="calendarValue"></Calendar>
                        </div>
                    </div>
                    <div class="field grid">
                        <label for="email3" class="col-12 mb-2">Milestone1</label>
                        <div class="col-12">
                            <Calendar :showIcon="true" showButtonBar v-model="calendarValue"></Calendar>
                        </div>
                    </div>
                    <div class="field grid">
                        <label for="email3" class="col-12 mb-2">Milestone1</label>
                        <div class="col-12">
                            <Calendar :showIcon="true" showButtonBar v-model="calendarValue"></Calendar>
                        </div>
                    </div>

                    <template #footer>
                        <Button label="Cancel" icon="pi pi-times" @click="closeEditDatesDialog" class="p-button-text" />
                        <Button label="Edit" icon="pi pi-pencil" @click="closeEditDatesDialog" class="p-button-text" autofocus />
                    </template>
                </Dialog>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row !important;

            .p-timeline-event-content {
                text-align: left !important;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }

        .p-card {
            margin-top: 1rem;
        }
    }
}
</style>
