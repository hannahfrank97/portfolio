<template>
    <div class="navbar_container">
        <router-link class="logo_link" to="/">
            <div class="logo">HANNAH FRANK</div>
        </router-link>
        <ul class="navbar">
            <li class="navbar_link">
                <router-link :class="{'colorChange': isColorChange1, 'colorChangeActive': isActive('/')}" class="navbar_link_text"
                             to="/"
                             @mouseout="isColorChange1 = false"
                             @mouseover="isColorChange1 = true"
                >
                    Home
                </router-link>
            </li>
            <li class="navbar_link">
                <router-link :class="{'colorChange': isColorChange2, 'colorChangeActive': isActive('/projects')}" class="navbar_link_text"
                             to="/projects"
                             @mouseout="isColorChange2 = false"
                             @mouseover="isColorChange2 = true"
                >
                    {{ $t('myProjects') }}
                </router-link>
            </li>
            <li class="navbar_link">
                <router-link :class="{'colorChange': isColorChange3, 'colorChangeActive': isActive('/resume')}" class="navbar_link_text"
                             to="/resume"
                             @mouseout="isColorChange3 = false"
                             @mouseover="isColorChange3 = true"
                >
                    {{ $t('myResume') }}
                </router-link>

            </li>

        </ul>
        <span class="text_language" @click="selectLanguage">{{ otherLanguage }}</span>
    </div>
</template>


<script>
import {computed, ref} from "vue";
import {useRoute} from "vue-router";

export default {
    data() {
        return {
            currentLanguage: "EN"
        };
    },

    computed: {
        otherLanguage() {
            return this.currentLanguage === "EN" ? "DE" : "EN"
        }
    },

    methods: {
        selectLanguage() {
            console.log('Before language change:', this.currentLanguage);
            this.currentLanguage = this.currentLanguage === "EN" ? "DE" : "EN"
            console.log('After language change:', this.currentLanguage);
            this.$i18n.locale = this.currentLanguage.toLowerCase();
        }
    },

    setup() {
        const isColorChange1 = ref(false)
        const isColorChange2 = ref(false)
        const isColorChange3 = ref(false)

        const route = useRoute();

        const isActive = (path) => computed(() => route.path === path).value;

        return {
            isColorChange1,
            isColorChange2,
            isColorChange3,
            isActive,

        }

    }

}

</script>

<style>

.text_language {
    position: absolute;
    top: 3%;
    right: 5%;
    color: #E2C8C8;
    font-family: 'Akatab', sans-serif;
    font-size: 20px;
}

.text_language:hover {
    cursor: pointer;
    color: #f3a4e3;
}

.logo {
    color: #EA70DE;
    font-family: 'Gruppo', sans-serif;
    font-size: 70px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
}

.logo_link {
    text-decoration: none;
}

.navbar {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 2rem;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
}

.navbar_link_text {
    color: #E2C8C8;
    font-family: 'Akatab', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
}


.colorChange {
    color: #EA70DE;
}

.colorChangeActive {
    color: #EA70DE;
}

/* RESPONSIVE DESIGNS*/

@media screen and (min-width: 330px) and (max-width: 576px) {
    .navbar {
        gap: 3%
    }

    .logo {
        font-size: 2.2rem;
    }

    .navbar_link_text {
        font-size: 16px;
    }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
    .navbar {
        gap: 2%;
    }

    .logo {
        font-size: 2.2rem;
    }

}

@media screen and (min-width: 769px) {

    .logo {
        margin-left: 3%;
    }

}

</style>