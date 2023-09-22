<template>
    <button class="button" role="button" @click="downloadFile">Download</button>

</template>

<script>

export default {
    props: {
        pdfUrl: {
            type: String,
            required: true
        },

        pdfName: {
            type: String,
            required: true
        }
    },

    methods: {
        downloadFile() {
        const link = document.createElement('a');
        link.href = this.pdfUrl;
        link.target = '_blank';
        link.download = this.pdfName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        }
    }
}

</script>

<style>
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
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.8px;
    margin-left: 45%;
    margin-top: 30px;
    min-height: 60px;
    min-width: 0;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 10%;
    will-change: transform;
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
</style>

