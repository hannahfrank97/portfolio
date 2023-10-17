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
                name: "FLOURISH AND BLOTTS",
                semester: "Second semester - BSc Creative Computing",
                text: "A magical online bookshop.",
                link: "#",
                code: "#",
                image: project1_image,
            },

            project2: {
                name: "ORLANDO´S ADVENTURE",
                semester: "First semester - BSc Creative Computing",
                text: "Glasses Hunt: 2D Jump-and-Run Game.",
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
