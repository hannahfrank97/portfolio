<template>
    <navbar/>
    <div class="line"></div>
    <div class="content_box">
        <div class="left_side">
            <div class="left-content">
                <roundball class="roundball"/>
                <h1 class="project_name">FLOURISH <br> AND BLOTTS</h1>
            </div>
            <h2 class="project_semester">Second semester - BSc Creative Computing</h2>
        </div>
        <div class="right_side">
            <div class="right-content">
                <p class="project_text">A magical online bookshop.</p>
                <div class="project_info">
                    <router-link class="project_Link" to="#">View Project</router-link>
                    <arrow class="arrow"/>
                </div>
                <div class="project_info2"></div>
                <router-link class="project_Link2" to="#">Source Code</router-link>
                <arrow class="arrow2"/>
            </div>
        </div>
        <div class="middle_side">
            <img alt="project mockup" class="mockup" src="@/assets/images/mockup.png"/>
        </div>
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
    justify-content: space-evenly;
    align-items: center;
    padding: 40px;
}

.left_side {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.right_side {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 10%;
}

.middle_side {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -20px !important;
}

.left-content {
    display: flex;
    align-items: center;
}

.right-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 0;
}

.project_info {
    display: flex;
    align-items: center;
}

.project_info2 {
    display: flex;
    align-items: center;
    margin-top: 15px;
}

.roundball {
    margin-right: 20px;
}

.project_name {
    font-family: 'Narnoor', sans-serif;
    color: whitesmoke;
    font-weight: lighter;
    font-size: 28px;

}

.project_semester {
    font-family: 'Narnoor', sans-serif;
    font-weight: lighter;
    color: whitesmoke;
    margin-left: 30%;
    font-size: 18px;
    white-space: nowrap;
    margin-top: 0;
}

.project_text {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: lighter;
    color: #EA70DE;
    font-size: 28px;
}

.project_Link, .project_Link2 {
    font-family: 'Nunito Sans', sans-serif;
    color: #EA70DE;
    font-weight: bolder;
    text-decoration: none;
    font-size: 24px;
}

.arrow {
    margin-left: 20px;
}

.arrow2 {
    margin-left: 160px;
    margin-top: -10px;
}

.mockup {
    width: 150%;
}
</style>