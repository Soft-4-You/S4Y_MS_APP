<script setup>
import { useLayout } from '@/layout/composables/layout';
import { computed } from 'vue';

const { layoutConfig } = useLayout();

const logoUrl = computed(() => {
    // return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
    return '/layout/images/S4Y-logo-simple-no-bg.webp';
});
</script>

<template>
    <div class="layout-footer">
        <img :src="logoUrl" alt="Logo" height="20" class="mr-2" />
        <span class="font-medium ml-2">Soft 4 You</span>
    </div>
</template>
<style lang="scss" scoped></style>
