<template>
    <navbar/>
    <linehorizontal/>
    <Project :project="project3" class="project3"/>
    <linehorizontal/>
    <Project :project="project1" class="project1"/>
    <linehorizontal/>
    <Project :project="project2" class="project2"/>
</template>

<script>
import Project from "@/components/project.vue";
import project1_image from "@/assets/images/BlourishFlotts.png";
import project2_image from "@/assets/images/Orlando.png";
import project3_image from "@/assets/images/Leafminder.png";
import Navbar from "@/components/navbar.vue";
import linehorizontal from "@/components/linehorizontal.vue";


export default {
    components: {
        linehorizontal,
        Navbar,
        Project,
    },

    data() {
        return {
            project1: {
                nameKey: "project1Name",
                semesterKey: "project1Semester",
                info: "",
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
            project3: {
                nameKey: "project3Name",
                semesterKey: "project3Semester",
                info: "project3Info",
                textKey: "project3Text",
                link: "",
                code: "https://github.com/hannahfrank97/Leafminder",
                image: project3_image,
            },
        }
    }

}


</script>

<style>

</style>
