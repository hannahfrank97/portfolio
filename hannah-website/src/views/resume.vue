<template>
    <div>
        <navbar />
        <div class="pdf-container">
            <div class="pdf-scroll">
                <div class="pdf-content">
                    <VuePDF :pdf="pdf" :page="1" class="pdf-page" />
                </div>
            </div>
            <div class="pdf-scroll">
                <div class="pdf-content">
                    <VuePDF :pdf="pdf" :page="2" class="pdf-page" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import { VuePDF, usePDF } from '@tato30/vue-pdf';
import pdfPath from '@/assets/cv/Frank_Resume.pdf';

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


    setup(){
        const { pdf, pages, info } = usePDF(pdfPath);
        console.log(`Document has ${pages} pages`)
        console.log(`Document info: ${info}`)
        return {
            pdf,
            pdfPath,
        }
    }
}
</script>

<style>
.pdf-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.pdf-scroll {
    max-width: 100%;
    max-height: 80vh;
    margin: 0 20px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
}

.pdf-content {

    min-width: 100%;
}



@media screen and (max-width: 576px), (min-width: 577px) and (max-width: 767px) {
    .pdf-container {
        flex-direction: column;
        align-items: center;
    }

    .pdf-scroll {
        max-width: 80%;
        margin: 10px 0;
    }
}
</style>




