<template>
    <navbar />
    <linehorizontal />
        <Project class="project1" :project="project1" />
    <linehorizontal />
        <Project class="project2" :project="project2" />
</template>

<script>
import Project from "@/components/project.vue";
import project1_image from "@/assets/images/project1_image.png";
import project2_image from "@/assets/images/project2_image.png";
import Navbar from "@/components/navbar.vue";
import linehorizontal from "@/components/linehorizontal.vue";


export default {
    components: {
        linehorizontal,
        Navbar,
        Project,
    },

    data () {
        return {
            project1: {
                nameKey: "project1Name",
                semesterKey: "project1Semester",
                info:"",
                textKey: "project1Text",
                link: "https://www.hannahfrank.at/blourish-and-flotts",
                code: "https://github.com/hannahfrank97/BlourishAndFlotts",
                image: project1_image,
            },

            project2: {
                nameKey: "project2Name",
                semesterKey: "project2Semester",
                info: "project2Info",
                textKey: "project2Text",
                link: "https://www.hannahfrank.at/orlandos-adventure",
                code: "https://github.com/hannahfrank97/OrlandosAdventure",
                image: project2_image,
            },
        }
    }

}


</script>

<style>

</style>
