<script setup>
import { ref } from 'vue';

const nestedRouteItems = ref([
    {
        label: 'Overview',
        icon: 'pi pi-info-circle',
        route: '/pages/projects/project_details/'
    },
    {
        label: 'Tasks',
        icon: 'pi pi-check-square',
        route: '/pages/projects/project_details/tasks'
    },
    {
        label: 'Files',
        icon: 'pi pi-inbox',
        route: '/pages/projects/project_details/files'
    },
    {
        label: 'Notes',
        icon: 'pi pi-file-edit',
        route: '/pages/projects/project_details/notes'
    },
    {
        label: 'Timesheets',
        icon: 'pi pi-clock',
        route: '/pages/projects/project_details/timesheets'
    },
    {
        label: 'Milestones',
        icon: 'pi pi-calendar-times',
        route: '/pages/projects/project_details/milestones'
    },
    {
        label: 'Client comments',
        icon: 'pi pi-comments',
        route: '/pages/projects/project_details/client_comment'
    },
    {
        label: 'Project members',
        icon: 'pi pi-users',
        route: '/pages/projects/project_details/project_members'
    }
]);

const breadcrumbProjects = ref({ icon: 'pi pi-code', route: { name: 'projects' } });
const breadcrumbItems = ref([{ label: 'Project details' }]);
</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12">
            <div class="card card-w-title">
                <Breadcrumb :home="breadcrumbProjects" :model="breadcrumbItems">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a :href="href" v-bind="props.action" @click="navigate">
                                <span :class="[item.icon, 'text-color']" />
                                <span class="text-primary font-semibold">{{ item.label }}</span>
                            </a>
                        </router-link>
                        <p>
                            <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
                        </p>
                    </template>
                </Breadcrumb>
                <hr />
                <h5>Project Name</h5>
                <p>Client name</p>
                <TabMenu class="mb-3" :model="nestedRouteItems">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                                <span v-bind="props.icon" />
                                <span v-bind="props.label">{{ item.label }}</span>
                            </a>
                        </router-link>
                    </template>
                </TabMenu>
                <router-view />
            </div>
        </div>
    </div>
</template>

<style scoped>
.p-tabmenu-nav .p-menuitem-text {
    text-wrap: nowrap;
}
</style>
