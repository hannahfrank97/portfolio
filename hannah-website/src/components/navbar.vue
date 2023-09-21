<template>
    <div class="navbar_container">
        <div class="logo">HANNAH</div>
        <ul class="navbar">
            <li class="navbar_link">
                <router-link to="/" class="navbar_link_text" :class="{'colorChange': isColorChange1, 'colorChangeActive': isActive('/')}"
                             @mouseover="isColorChange1 = true"
                             @mouseout="isColorChange1 = false"
                >
                    Home
                </router-link>
            </li>
            <li class="navbar_link">
                <router-link to="/projects" class="navbar_link_text" :class="{'colorChange': isColorChange2, 'colorChangeActive': isActive('/projects')}"
                             @mouseover="isColorChange2 = true"
                             @mouseout="isColorChange2 = false"
                >
                    My Projects
                </router-link>
            </li>
            <li class="navbar_link">
                <router-link to="/resume" class="navbar_link_text" :class="{'colorChange': isColorChange3, 'colorChangeActive': isActive('/resume')}"
                             @mouseover="isColorChange3 = true"
                             @mouseout="isColorChange3 = false"
                >
                    My Resume
                </router-link>
            </li>
        </ul>
    </div>
</template>



<script>
import {ref} from "vue";
import {useRoute} from "vue-router";
import {computed} from "vue";

export default {

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

.logo {
    color: #EA70DE;
    font-family: 'Gruppo', sans-serif;
    font-size: 70px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    margin-left: 20px;
}

.navbar {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 300px;
}

.navbar_link_text {
    color: #E2C8C8;
    font-family: 'Akatab', sans-serif;
    font-size: 20px;
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

@media screen and (max-width: 576px) {
    .navbar{
        gap: 80px;

    }
}

@media screen and (min-width: 577px) and (max-width: 767px) {
    .navbar {
        gap: 90px;

    }
}

</style>