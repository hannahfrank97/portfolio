<template>
    <navbar />
    <div class="line"></div>
    <div class="content_box">
        <div class="left_side">
            <div class="left-content">
                <roundball class="roundball" />
                <h1 class="project_name">FLOURISH <br> AND BLOTTS</h1>
            </div>
            <h2 class="project_semester">Second semester - BSc Creative Computing</h2>
        </div>
        <div class="right_side">
            <p class="project_text">A magical online bookshop.</p>
            <router-link to="#" class="project_Link">View Project</router-link>
        </div>
        <arrow />
    </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Arrow from "@/components/arrow.vue";
import Roundball from "@/components/roundball.vue";

export default {
    components: {
        Roundball,
        Navbar,
        Arrow,
    },
};
</script>

<style>
.line {
    border-bottom: 1px solid #E7BDE2;
    width: 70%;
    margin: 0 auto;
    margin-top: 60px;
}

.content_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center; /* Vertically align content to the start of the container */
    padding: 40px;
}

.pro {

}

.left_side {
    display: flex;
    flex-direction: column; /* Stack elements vertically within the left side */
    align-items: center; /* Vertically align content to the start of the left side */
}

.right_side {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 10%;
}

.left-content {
    display: flex;
    align-items: center; /* Horizontally align content within the left side */
}

.roundball {
    margin-right: 20px; /* Add space between the ball and project name */
}

.project_name {
    font-family: 'Narnoor', sans-serif;
    color: whitesmoke;
    font-weight: lighter;
}

.project_semester {
    font-family: 'Narnoor', sans-serif;
    font-weight: lighter;
    color: whitesmoke;
}

.project_text {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: lighter;
    color: #EA70DE;
}

.project_Link {
    font-family: 'Nunito Sans', sans-serif;
    color: #EA70DE;
    font-weight: bolder;
    text-decoration: none;
}
</style>
