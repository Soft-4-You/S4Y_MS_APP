<script setup>
import { ref } from 'vue';
import AES from 'crypto-js/aes';
import QRCode from 'qrcode';

const data = ref('');
const empty = ref(false);
const errorMsg = ref('');
const secretKey = ref(import.meta.env.VITE_SECRET_KEY);
const encryptedData = ref('');

const qrCanvas = ref(null);
const qrSrc = ref(null);

const encrypt = (data, secretKey) => {
    return AES.encrypt(data, secretKey).toString();
}

const generateQRCode = async () => {
    if (!data.value.trim()) {
        console.error('No data to generate QR code.');
        empty.value = true;
        return;
    }
    try {
        encryptedData.value = encrypt(data.value.trim(), secretKey.value);
        qrSrc.value = '';
        data.value = '';
        empty.value = false;
        await QRCode.toCanvas(qrCanvas.value, encryptedData.value, {
            width: 128,
            color: {
                dark: '#1155CC',
                light: '#FFFFFF',
            },
        });

        qrSrc.value = qrCanvas.value.toDataURL('image/png');
    } catch (error) {
        console.error('Error generating QR code:', error);
        errorMsg.value = error.message;
    }
};

const downloadQRCode = () => {
    const dataUrl = qrCanvas.value.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'qr-code.png';
    link.click();
};

</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12">
            <div class="card">
                <h5 class="mb-5">QR Code Generator</h5>
                <div class="grid">
                    <div class="col-12 xl:col-6">
                        <label for="qrCodeData">QR Code data</label>
                        <Textarea v-model="data" id="qrCodeData" class="mb-1 mt-2"
                            placeholder="INV-00# ... REC-00# ... PREC-00#" :autoResize="true" rows="5"
                            :invalid="empty" />
                        <small id="qrCodeData" class="p-error">{{ errorMsg }}</small>
                        <br>
                        <Button @click="generateQRCode" class="mt-2" label="Generate QR Code"
                            style="width: fit-content;"></Button>
                    </div>
                    <div class="col-12 xl:col-6">
                        <div class="flex flex-column justify-content-center align-items-center gap-3">
                            <Image v-if="qrSrc" :src="qrSrc" alt="Image" width="250" preview />
                            <canvas id="qr-canvas" ref="qrCanvas" style="display:none;"></canvas>
                            <Button v-if="qrSrc" @click="downloadQRCode" label="Download QR Code"
                                style="width: fit-content;"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.p-image img {
    border-radius: 10px;
}
</style>
