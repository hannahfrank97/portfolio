<template>
    <navbar />
    <linehorizontal />
    <buttoncolorful :activePage="activePage"/>
    <div>
        <div class="bullets">
            <div class="bullet" :class="{ active: activePage <= 2 }" @click="changePage(1)">EN</div>
            <div class="bullet" :class="{ active: activePage > 2 }" @click="changePage(3)">DE</div>
        </div>
    </div>
    <div>
        <div class="pdf-container">
            <div class="pdf-page-container" v-if="activePage<=2">
                <img class="pdf-page_1" :src="page1_EN" alt="Resume page1">
            </div>
            <div class="pdf-page-container" v-if="activePage<=2">
                <img class="pdf-page_2" :src="page2_EN" alt="Resume page2">
            </div>
        <div class="pdf-page-container" v-if="activePage>2">
            <img class="pdf-page_1" :src="page1_DT" alt="Lebenslauf Seite1">
        </div>
        <div class="pdf-page-container" v-if="activePage>2">
            <img class="pdf-page_2" :src="page2_DT" alt="Lebenslauf Seite2">
        </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import buttoncolorful from "@/components/buttoncolorful.vue";
import linehorizontal from "@/components/linehorizontal.vue";
import page1_DT from "@/assets/cv/Frank_Resume_DE_1.png";
import page2_DT from "@/assets/cv/Frank_Resume_DE_2.png";
import page1_EN from "@/assets/cv/Frank_Resume_EN_1.png";
import page2_EN from "@/assets/cv/Frank_Resume_EN_2.png";

export default {
    components: {
        linehorizontal,
        buttoncolorful,
        Navbar,
        page1_DT,
        page2_DT,
        page1_EN,
        page2_EN,
    },

    data() {
        return {
            activePage: 1,
            page1_DT,
            page2_DT,
            page1_EN,
            page2_EN,
        };

    },

    methods: {
        changePage(page) {
            if (page ===1) {
                this.activePage = 1;
            } else if (page === 3) {
                this.activePage = 3;
            }

        }
    }
}

</script>

<style>

.bullets {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    gap: 2.5%;

}

.bullet {
    cursor: pointer;
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 50%;
    font-family: 'Narnoor', sans-serif;
    color: #E7BDE2;
    text-align: center;

}

.bullet.active {
    background-color: #EA70DE;
    border: 1px solid #E7BDE2;
}

.bullet:not(.active) {
    border: 1px solid #E7BDE2;

}

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

    .bullet {
        width:1rem;
        height:1rem;
    }

    .bullet {
        font-size: 0.5rem;
    }
    
}


</style>
