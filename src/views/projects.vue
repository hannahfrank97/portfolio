<template>
  <navbar/>
  <Linehorizontal/>
  <Project
      :project="project4"
      class="project4"
      v-motion-slide-visible-bottom
      :delay="300"
      :initial="{opacity: 0, y: 100}"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
  />
  <linehorizontal/>
  <Project
      :project="project3"
      class="project3"
      v-motion-slide-visible-bottom
      :delay="300"
      :initial="{opacity: 0, y: 100}"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
  />
  <linehorizontal/>
  <Project
      :project="project1"
      class="project1"
      v-motion-slide-visible-bottom
      :delay="3"
      :initial="{opacity: 0, y: 100}"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
  />
  <linehorizontal/>
  <Project
      :project="project2"
      class="project2"
      v-motion-slide-visible-bottom
      :delay="3"
      :initial="{opacity: 0, y: 100}"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
  />
</template>

<script>
import Project from "@/components/project.vue";
import project1_image from "@/assets/images/BlourishFlotts.png";
import project2_image from "@/assets/images/Orlando.png";
import project3_video from "@/assets/videos/Leafminder.mp4";
import project4_video from "@/assets/videos/GenZHorror.mp4";
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
        video: project3_video
      },
      project4: {
        nameKey: "project4Name",
        semesterKey: "project4Semester",
        info: "project4Info",
        textKey: "project4Text",
        link: "",
        code: "https://github.com/PrimaryV1C/CCL4-GenZHorror",
        video: project4_video,
      },
    }
  }
}


</script>

<style>


</style>
