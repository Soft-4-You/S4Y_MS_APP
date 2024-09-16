<script setup>
import { ref } from 'vue';
import jsQR from 'jsqr';
import CryptoJS from 'crypto-js';
import * as pdfjsLib from 'pdfjs-dist';

// Initialize PDF.js worker for better performance
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.6.82/pdf.worker.min.mjs`;

const errorMsg = ref('');
const outputMessage = ref('');
const correctSecretKey = ref(import.meta.env.VITE_SECRET_KEY);

const handleFileUpload = ({ files }) => {
    const file = files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const pdfData = new Uint8Array(e.target.result);
        processPDF(pdfData);
    };
    reader.readAsArrayBuffer(file);
};

async function processPDF(pdfData) {
    try {
        const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
        const page = await pdf.getPage(1); // Assuming the QR code is on the first page

        const viewport = page.getViewport({ scale: 1.5 });

        // A virtual canvas for QR code extraction (not shown to the user)
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };

        await page.render(renderContext).promise;

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
            const encryptedData = code.data;
            const secretKey = prompt('Enter the secret key to decrypt the QR code:');
            if (!secretKey) {
                errorMsg.value = 'No secret key entered.';
                return;
            }
            if (secretKey.trim() !== correctSecretKey.value) {
                errorMsg.value = 'Invalid secret key.';
                return;
            }
            const decryptedData = decryptData(encryptedData, secretKey);
            outputMessage.value = decryptedData;
        } else {
            errorMsg.value = 'No QR code found.';
        }
    } catch (error) {
        errorMsg.value = 'Error processing PDF: ' + error.message;
    }
}

function decryptData(encryptedData, secretKey) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}
</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12">
            <div class="card">
                <h5 class="mb-5">Verify Documents</h5>
                <div class="grid">
                    <div class="col-12 xl:col-6">
                        <FileUpload name="docs[]" @select="handleFileUpload" @clear="outputMessage = ''; errorMsg = ''"
                            @remove="outputMessage = ''; errorMsg = ''" accept="application/pdf" :maxFileSize="1000000"
                            :showUploadButton="false" :previewWidth="0">
                            <template #empty>
                                <p>Drag and drop PDF file here to upload, or click to select one.</p>
                            </template>
                        </FileUpload>
                        <br>
                        <small id="document" class="p-error">{{ errorMsg }}</small>
                    </div>
                    <div class="col-12 xl:col-6">
                        <div class="flex flex-column justify-content-center align-items-center gap-3">
                            <h6 v-if="outputMessage">QR Code Data:</h6>
                            <p>{{ outputMessage }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.p-badge.p-badge-warning {
    display: none;
}
</style>
