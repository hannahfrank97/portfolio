<template>
    <navbar />
    <linehorizontal />
    <buttoncolorful />
    <div>
        <div class="pdf-container">
            <div class="pdf-page-container">
              <img class="pdf-page_1" :src="page1" alt="Resume page 1">
            </div>
            <div class="pdf-page-container">
                <img class="pdf-page_2" :src="page2" alt="Resume page 2">
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import buttoncolorful from "@/components/buttoncolorful.vue";
import linehorizontal from "@/components/linehorizontal.vue";
import page1 from "../assets/cv/Resume_page1.png";
import page2 from "../assets/cv/Resume_page2.png";

export default {
    components: {
        linehorizontal,
        buttoncolorful,
        Navbar,
    },
    data() {
        return {
            page1,
            page2,
        };
    },

};
</script>

<style>
.pdf-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    overflow: auto;
}

.pdf-page-container {
    overflow: hidden;
    display: flex;
    justify-content: center;

}

.pdf-page_1,
.pdf-page_2 {
    width: 80%;
    transition: transform 0.3s;
}

.pdf-page-container:hover .pdf-page_1,
.pdf-page-container:hover .pdf-page_2 {
    transform: scale(0.96);

}

@media (min-width: 330px) and (max-width: 576px){
    .pdf-container {
        flex-direction:column;
    }

    .pdf-page-container {
        margin: 2% 0;
    }
    
}


</style>
