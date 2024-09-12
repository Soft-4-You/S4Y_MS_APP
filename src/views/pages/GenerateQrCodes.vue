<script setup>
import { onMounted, ref } from 'vue';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import QRCode from 'qrcode';

const data = ref('This is the secret data\nINV-001\nREC-001');
const secretKey = ref('YourSecretKey123');
const encryptedData = ref('');
const decryptedData = ref('');

const qrCanvas = ref(null);

const qrSrc = ref(null);

const encrypt = (data, secretKey) => {
    return AES.encrypt(data, secretKey).toString();
}

const decrypt = (encryptedData, secretKey) => {
    const bytes = AES.decrypt(encryptedData, secretKey);
    return bytes.toString(Utf8);
}

// Generate the QR code
const generateQRCode = async (data) => {
    try {
        await QRCode.toCanvas(qrCanvas.value, data, {
            width: 128,
            color: {
                dark: '#1155CC',
                light: '#FFFFFF',
            },
        });

        qrSrc.value = qrCanvas.value.toDataURL('image/png');;
    } catch (error) {
        console.error('Error generating QR code:', error);
    }
};

const downloadQRCode = () => {
    const dataUrl = qrCanvas.value.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'qr-code.png';
    link.click();
};

onMounted(() => {
    encryptedData.value = encrypt(data.value, secretKey.value);
    console.log('Encrypted Data:', encryptedData.value);

    decryptedData.value = decrypt(encryptedData.value, secretKey.value);
    console.log('Decrypted Data:', decryptedData.value);

    generateQRCode(encryptedData.value);
})

</script>

<template>
    <div class="grid p-fluid">

        <div class="col-12">
            <div class="card">
                <h5>QR Code Generator</h5>
                <!-- Add input filed to take the data you want to encrypt and to generate the QR code -->
                <!-- Add button to generate the QR code -->
                <div class="flex flex-column justify-content-center align-items-center gap-3">
                    <Image :src="qrSrc" alt="Image" width="250" preview />
                    <canvas id="qr-canvas" ref="qrCanvas" style="display:none;"></canvas>
                    <Button @click="downloadQRCode" label="Download QR Code" style="width: fit-content;"></Button>
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
