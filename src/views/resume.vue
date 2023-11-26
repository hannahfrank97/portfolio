<template>
    <navbar />
    <linehorizontal />
    <buttoncolorful :activePage="activePage"/>
    <div>
        <div class="bullets">
            <div class="bullet" :class="{ active: activePage <= 1 }" @click="changePage(1)">EN</div>
            <div class="bullet" :class="{ active: activePage > 1 }" @click="changePage(2)">DE</div>
        </div>
    </div>
    <div>
        <div class="pdf-container">
            <div class="pdf-page-container" v-if="activePage<=1">
                <img class="pdf-page_1" :src="page_EN" alt="Resume">
            </div>
        <div class="pdf-page-container" v-if="activePage>1">
            <img class="pdf-page_1" :src="page_DT" alt="Lebenslauf">
        </div>
    </div>
    </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import buttoncolorful from "@/components/buttoncolorful.vue";
import linehorizontal from "@/components/linehorizontal.vue";
import page_DT from "@/assets/cv/Frank_Resume_DE.png";
import page_EN from "@/assets/cv/Frank_Resume_EN.png";

export default {
    components: {
        linehorizontal,
        buttoncolorful,
        Navbar,
        page_DT,
        page_EN,
    },

    data() {
        return {
            activePage: 1,
            page_DT,
            page_EN

        };

    },

    methods: {
        changePage(page) {
            if (page ===1) {
                this.activePage = 1;
            } else if (page === 2) {
                this.activePage = 2;
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

.pdf-page_1{
    width: 80%;
    transition: transform 0.3s;
}

.pdf-page-container:hover .pdf-page_1 {
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
