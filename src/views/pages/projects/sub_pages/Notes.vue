<script setup></script>
<template>
    <div class="grid p-fluid">
        <div class="col-12">
            <div class="card">
                <h5>Notes</h5>
                <Textarea placeholder="Write note ..." :autoResize="true" rows="5" cols="30" class="mb-3" />
                <Button style="width: 100px" label="Save" icon="pi pi-check"></Button>
            </div>
        </div>
    </div>
</template>
