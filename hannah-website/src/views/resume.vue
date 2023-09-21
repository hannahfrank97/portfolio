<template>
    <navbar />
    <div class="line"></div>
    <div>
        <div class="pdf-container">
            <VuePDF :pdf="pdf" :page="1" class="pdf-page" v-bind:class="{ 'shrink': isShrunk }"
                    v-on:mouseover="isShrunk = true"
                    v-on:mouseout="isShrunk = false"/>
            <VuePDF :pdf="pdf" :page="2" class="pdf-page" v-bind:class="{ 'shrink2': isShrunk2 }"
                    v-on:mouseover="isShrunk2 = true"
                    v-on:mouseout="isShrunk2 = false"/>/>
        </div>
    </div>

</template>


<script>
import Navbar from "@/components/navbar.vue";
import { VuePDF, usePDF } from '@tato30/vue-pdf';
import pdfPath from '@/assets/cv/Frank-Resume.pdf';
import {ref} from "vue";

export default {
    components: {
        Navbar,
        VuePDF
    },

    props: {
        pdf: {
            type: String,
            required: true
        },
        pages: {
            type: Number,
            default: 2
        }
    },

    setup() {
        const {pdf} = usePDF(pdfPath);
        const isShrunk = ref(false);
        const isShrunk2 = ref(false);
        return {
            pdf,
            pdfPath,
            isShrunk,
            isShrunk2

        }

    }

    }
</script>

<style>

.line {
    border-bottom: 1px solid #E7BDE2;
    width: 70%;
    margin: 0 auto;
    margin-top: 60px;
}

.pdf-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.pdf-page {
    margin-right: 20px;

}

.shrink {
    transform: scale(0.98);
}

.shrink2 {
    transform: scale(0.98);
}

/* RESPONSIVE DESIGNS*/

@media screen and (max-width: 576px) {

    .pdf-container {
        max-width: 90%;
        margin: 0 auto;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pdf-page {
        width: 100%;
        height: auto;
        margin-top: 20px;
    }

}

@media screen and (min-width: 577px) and (max-width: 767px) {

    .pdf-container {
        max-width: 90%;
        margin: 0 auto;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pdf-page {
        width: 100%;
        height: auto;
        margin-top: 20px;
    }

}


</style>


