<script setup>
import { ref, onMounted } from 'vue';

const knobValue = ref(50);
</script>
<template>
    <div class="grid p-fluid">
        <div class="col-12 md:col-4">
            <div class="card">
                <div class="col-12 text-center">
                    <h5>Progress</h5>
                    <Knob v-model="knobValue" readonly :min="0" :max="100" valueTemplate="{value}%" />
                </div>
            </div>
        </div>
        <div class="col-12 md:col-8">
            <Panel header="Information" :toggleable="true">
                <p class="line-height-3 m-0">
                    Description: Lorem ipsum dolor sit amet, Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolor beatae. Voluptatum repudiandae similique quidem aspernatur excepturi quia cupiditate ea, dolor
                </p>
                <hr />
                <p class="line-height-3 m-0">Project manager: <a class="text-primary font-bold">Yousif Al-Tikriti</a></p>
                <hr />
                <p class="line-height-3 m-0">Deadline: 21/12/2024</p>
                <hr />
                <p class="line-height-3 m-0">Status: <Tag icon="pi pi-clock" severity="warning" value="Pending"></Tag></p>
            </Panel>
        </div>
    </div>
</template>

<style>
.p-panel-title {
    font-size: 1.3rem;
}

.p-knob svg {
    outline: none;
}
</style>
