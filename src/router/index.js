import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/Input.vue')
                },
                {
                    path: '/uikit/floatlabel',
                    name: 'floatlabel',
                    component: () => import('@/views/uikit/FloatLabel.vue')
                },
                {
                    path: '/uikit/invalidstate',
                    name: 'invalidstate',
                    component: () => import('@/views/uikit/InvalidState.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/Button.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/Table.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/List.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/Tree.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/Panels.vue')
                },
                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/Overlay.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/Media.vue')
                },
                {
                    path: '/uikit/menu',
                    component: () => import('@/views/uikit/Menu.vue'),
                    children: [
                        {
                            path: '/uikit/menu',
                            component: () => import('@/views/uikit/menu/PersonalDemo.vue')
                        },
                        {
                            path: '/uikit/menu/seat',
                            component: () => import('@/views/uikit/menu/SeatDemo.vue')
                        },
                        {
                            path: '/uikit/menu/payment',
                            component: () => import('@/views/uikit/menu/PaymentDemo.vue')
                        },
                        {
                            path: '/uikit/menu/confirmation',
                            component: () => import('@/views/uikit/menu/ConfirmationDemo.vue')
                        }
                    ]
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/Messages.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/File.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/Chart.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/Misc.vue')
                },
                {
                    path: '/blocks',
                    name: 'blocks',
                    component: () => import('@/views/utilities/Blocks.vue')
                },
                {
                    path: '/utilities/icons',
                    name: 'icons',
                    component: () => import('@/views/utilities/Icons.vue')
                },
                {
                    path: '/pages/timeline',
                    name: 'timeline',
                    component: () => import('@/views/pages/Timeline.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/utilities/Documentation.vue')
                },
                // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ My
                {
                    path: '/pages/logs',
                    name: 'logs',
                    component: () => import('@/views/pages/Logs.vue')
                },
                {
                    path: '/pages/roles_permissions',
                    name: 'roles_permissions',
                    component: () => import('@/views/pages/RolesPermissions.vue')
                },
                {
                    path: '/pages/profile',
                    name: 'profile',
                    component: () => import('@/views/pages/Profile.vue')
                },
                {
                    path: '/pages/contracts',
                    name: 'contracts',
                    component: () => import('@/views/pages/Contracts.vue')
                },
                {
                    path: '/pages/users/employees',
                    name: 'employees',
                    component: () => import('@/views/pages/users/Employees.vue')
                },
                {
                    path: '/pages/users/clients',
                    name: 'clients',
                    component: () => import('@/views/pages/users/Clients.vue')
                },
                {
                    path: '/pages/users/distributors',
                    name: 'distributors',
                    component: () => import('@/views/pages/users/Distributors.vue')
                },
                {
                    path: '/pages/financial/incomes',
                    name: 'incomes',
                    component: () => import('@/views/pages/financial/Incomes.vue')
                },
                {
                    path: '/pages/financial/expenses',
                    name: 'expenses',
                    component: () => import('@/views/pages/financial/Expenses.vue')
                },
                {
                    path: '/pages/general_tasks',
                    name: 'general_tasks',
                    component: () => import('@/views/pages/GeneralTasks.vue')
                },
                {
                    path: '/pages/projects/projects',
                    name: 'projects',
                    component: () => import('@/views/pages/projects/Projects.vue')
                },
                {
                    path: '/pages/projects/project_details',
                    name: 'project_details',
                    component: () => import('@/views/pages/projects/ProjectDetails.vue'),
                    children: [
                        {
                            path: '/pages/projects/project_details',
                            component: () => import('@/views/pages/projects/sub_pages/Overview.vue')
                        },
                        {
                            path: '/pages/projects/project_details/tasks',
                            component: () => import('@/views/pages/projects/sub_pages/Tasks.vue')
                        },
                        {
                            path: '/pages/projects/project_details/files',
                            component: () => import('@/views/pages/projects/sub_pages/Files.vue')
                        },
                        {
                            path: '/pages/projects/project_details/notes',
                            component: () => import('@/views/pages/projects/sub_pages/Notes.vue')
                        },
                        {
                            path: '/pages/projects/project_details/timesheets',
                            component: () => import('@/views/pages/projects/sub_pages/Timesheets.vue')
                        },
                        {
                            path: '/pages/projects/project_details/milestones',
                            component: () => import('@/views/pages/projects/sub_pages/Milestones.vue')
                        },
                        {
                            path: '/pages/projects/project_details/client_comment',
                            component: () => import('@/views/pages/projects/sub_pages/ClientComments.vue')
                        },
                        {
                            path: '/pages/projects/project_details/project_members',
                            component: () => import('@/views/pages/projects/sub_pages/ProjectMembers.vue')
                        }
                    ]
                },
                {
                    path: '/pages/products/products',
                    name: 'products',
                    component: () => import('@/views/pages/products/Products.vue')
                },
                {
                    path: '/pages/products/product_details',
                    name: 'product_details',
                    component: () => import('@/views/pages/products/ProductDetails.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        // catch all 404
        {
            path: '/:catchAll(.*)',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;
