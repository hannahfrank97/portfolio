<template>
    <navbar />
    <linehorizontal />
    <buttoncolorful :pdf-url="pdfUrl" :pdf-name="'Frank-Resume'" />
    <div>
        <div class="pdf-container">
            <div class="pdf-page-container" @mouseover="isShrunk1 = true" @mouseout="isShrunk1 = false">
                <VuePDF :pdf="pdf" :page="1" class="pdf-page page1" :style="pdfStyle1" />
            </div>
            <div class="pdf-page-container" @mouseover="isShrunk2 = true" @mouseout="isShrunk2 = false">
                <VuePDF :pdf="pdf" :page="2" class="pdf-page pdf2" :style="pdfStyle2" />
            </div>
            <div class="pdf-page-container" v-if="isSmallScreenAndTall">
                <VuePDF :pdf="pdf2" :page="1" class="pdf-page pdf3" :style="pdfStyle3" />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import buttoncolorful from "@/components/buttoncolorful.vue";
import linehorizontal from "@/components/linehorizontal.vue";
import { VuePDF, usePDF } from '@tato30/vue-pdf';
import pdfPath from '@/assets/cv/Frank-Resume.pdf';
import pdfPath2 from '@/assets/cv/Frank_Resume_additional.pdf';
import { ref, computed, watch } from "vue";

export default {
    components: {
        linehorizontal,
        buttoncolorful,
        Navbar,
        VuePDF,
    },
    data() {
        return {
            pdfUrl: pdfPath,
            pdfName: 'Frank-Resume.pdf',
            pdf2: {},
        };
    },
    setup() {
        const { pdf } = usePDF(pdfPath);
        const isShrunk1 = ref(false);
        const isShrunk2 = ref(false);
        const isShrunk3 = ref(false);
        const isSmallScreen = ref(false);
        const isTallScreen = ref(false);

        const pdfStyle1 = computed(() => {
            return {
                transform: isShrunk1.value ? 'scale(0.98)' : 'scale(1)',
            };
        });

        const pdfStyle2 = computed(() => {
            return {
                transform: isShrunk2.value ? 'scale(0.98)' : 'scale(1)',
            };
        });

        const pdfStyle3 = computed(() => {
            return {
                transform: isShrunk3.value ? 'scale(0.98)' : 'scale(1)',
            };
        });

        watch(() => window.innerWidth, (newWidth) => {
            isSmallScreen.value = newWidth <= 390;
        });

        watch(() => window.innerHeight, (newHeight) => {
            isTallScreen.value = newHeight >= 844;
        });

        const isSmallScreenAndTall = computed(() => isSmallScreen.value && isTallScreen.value);

        return {
            pdf,
            isShrunk1,
            isShrunk2,
            isShrunk3,
            pdfStyle1,
            pdfStyle2,
            pdfStyle3,
            isSmallScreenAndTall,
        };
    },
};
</script>

<style>
.pdf-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    overflow: auto;
}

.pdf-page-container {
    margin-right: 20px;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.pdf-page {
    max-width: 100%;
    max-height: 100%;
}

/* RESPONSIVE DESIGNS */
@media screen and (max-width: 390px) and (max-height: 844px) {
    .pdf-container {
        max-width: 100%;
        margin: 5% auto;
    }

    .pdf-page-container {
        width: 100%;
    }
}

@media screen and (max-width: 768px) {
    .pdf-container {
        max-width: 90%;
        margin: 5% auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pdf-page {
        max-width: 100%;
        height: auto;
    }
}
</style>
