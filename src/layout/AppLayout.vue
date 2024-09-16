<script setup>
import { onMounted, onBeforeUnmount, computed, watch, ref } from 'vue';
import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';
import AppSidebar from './AppSidebar.vue';
import AppConfig from './AppConfig.vue';
import { useLayout } from '@/layout/composables/layout';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const scrollContainer = ref(null);
const sidebarScrollContainer = ref(null);

let scrollbarInstanceMain = null;
let sidebarScrollbarInstance = null;

Scrollbar.use(OverscrollPlugin);

const { layoutConfig, layoutState, isSidebarActive } = useLayout();

const outsideClickListener = ref(null);

watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    }
});

const containerClass = computed(() => {
    return {
        'layout-theme-light': layoutConfig.darkTheme.value === 'light',
        'layout-theme-dark': layoutConfig.darkTheme.value === 'dark',
        'layout-overlay': layoutConfig.menuMode.value === 'overlay',
        'layout-static': layoutConfig.menuMode.value === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive.value,
        'layout-mobile-active': layoutState.staticMenuMobileActive.value,
        'p-ripple-disabled': layoutConfig.ripple.value === false
    };
});
const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                layoutState.overlayMenuActive.value = false;
                layoutState.staticMenuMobileActive.value = false;
                layoutState.menuHoverActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    const sidebarEl = document.querySelector('.layout-sidebar');
    const topbarEl = document.querySelector('.layout-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};

onMounted(() => {
    if (scrollContainer.value) {
        scrollbarInstanceMain = Scrollbar.init(scrollContainer.value, {
            damping: 0.07,
            renderByPixels: true,
            plugins: {
                overscroll: {
                    effect: 'bounce',
                    damping: 0.1,
                    maxOverscroll: 200
                },
            }
        });
    }

    if (sidebarScrollContainer.value) {
        sidebarScrollbarInstance = Scrollbar.init(sidebarScrollContainer.value, {
            damping: 0.07,
            renderByPixels: true,
            plugins: {
                overscroll: {
                    effect: 'bounce',
                    damping: 0.1,
                    maxOverscroll: 200
                }
            }
        });
    }

});

onBeforeUnmount(() => {
    if (scrollbarInstanceMain) {
        scrollbarInstanceMain.destroy();
    }

    if (sidebarScrollbarInstance) {
        sidebarScrollbarInstance.destroy();
    }
});
</script>

<template>
    <div class="layout-wrapper" :class="containerClass">
        <app-topbar></app-topbar>
        <div ref="sidebarScrollContainer" class="layout-sidebar">
            <app-sidebar></app-sidebar>
        </div>
        <div ref="scrollContainer" class="layout-main-container">
            <div class="layout-main">
                <router-view></router-view>
            </div>
            <app-footer></app-footer>
        </div>
        <app-config></app-config>
        <div class="layout-mask"></div>
    </div>
    <Toast />
</template>

<style>
.layout-main {
    overflow: hidden;
}

.layout-main-container {
    height: 100vh;
    overflow: hidden;
}

/* Necessary to override smooth-scrollbar library's styles (position: relative)  */
.layout-sidebar {
    position: fixed !important;
}

body {
    --sb-track-color: #27272a;
    --sb-thumb-color: #0e83ff;
    --sb-size: 7px;
}

.scrollbar-track-y {
    width: var(--sb-size) !important;
    background: var(--sb-track-color) !important;
    border-radius: 3px !important;
}

.scrollbar-thumb {
    width: var(--sb-size) !important;
    background: var(--sb-thumb-color) !important;
    border-radius: 3px !important;
}
</style>
