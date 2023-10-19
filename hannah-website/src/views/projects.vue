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
                textKey: "project1Text",
                link: "#",
                code: "#",
                image: project1_image,
            },

            project2: {
                nameKey: "project2Name",
                semesterKey: "project2Semester",
                textKey: "project2Text",
                link: "#",
                code: "#",
                image: project2_image,
            },
        }
    }

}


</script>

<style>

</style>
