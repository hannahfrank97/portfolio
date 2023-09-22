<template>
    <navbar />
    <linehorizontal />
    <Transition name="fade">
        <Project class="project1" :project="project1" />
    </transition>
    <linehorizontal />
        <Project class="project2" :project="project2" />
    <linehorizontal />
    <Project class="project3" :project="project3" />


</template>
<script>
import Project from "@/components/project.vue";
import mockup from "@/assets/images/mockup.png";
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
                image: mockup,


            },

            project2: {
                name: "ORLANDO´S ADVENTURE",
                semester: "First semester - BSc Creative Computing",
                text: "Glasses Hunt: 2D Jump-and-Run Game.",
                link: "#",
                code: "#",
                image: mockup,
            },

            project3: {
                name: "TIRED HANNAH MEMORY",
                semester: "Second semester - BSc Creative Computing",
                text: "Pair the tired Hannah together.",
                link: "#",
                code: "#",
                image: mockup,
            }
        }
    }
}


</script>

<style>
.project1,
.project2 {
    margin-bottom: -100px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
