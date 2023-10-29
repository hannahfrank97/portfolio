<template>
    <div class="button_container">
    <button class="button" @click="downloadFile">Download</button>
    </div>
</template>

<script>
import pdfDokument from "../assets/cv/Frank-Resume.pdf"

export default {
    methods: {
        downloadFile() {
            const pdfUrl = pdfDokument;
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.target = '_blank';
            link.download = 'Frank_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        }
    }
}


</script>



<style>

.button_container {
    width: 100%;
    display: flex;
    justify-content: center;
}
.button {
    appearance: none;
    background-color: transparent;
    border: 2px solid #E7BDE2;
    border-radius: 15px;
    box-sizing: border-box;
    color: #E7BDE2;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 1.5rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.8px;
    text-align: center;
    min-width: 0;
    outline: none;
    padding: 16px 24px;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
    margin-top: 5%;
}

.button:disabled {
    pointer-events: none;
}

.button:hover {
    color: #fff;
    background-color: #590345;
    box-shadow: #590345 0 8px 15px;
    transform: translateY(-2px);
}

.button:active {
    box-shadow: none;
    transform: translateY(0);
}


@media screen and (min-width: 330px ) and (max-width: 768px) {
.button {
    font-size: 0.5rem;
    padding: 8px 16px;


    }

}
</style>

