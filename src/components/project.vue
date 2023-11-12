<template>
    <div class="content_box">
        <div class="left_side">
            <div class="left-content">
                <roundball class="roundball" />
                <h1 class="project_name">{{ $t(project.nameKey) }}</h1>
            </div>
            <h2 class="project_semester">{{ $t(project.semesterKey) }}</h2>
        </div>
        <div class="right_side">
            <div class="right-content">
                <p class="project_text">{{ $t(project.textKey) }}</p>
                <div class="project_info">
                    <a :href="project.link" class="project_Link" target="_blank">{{ $t('viewProject') }}</a>
                </div>
                <div class="project_info2"></div>
                    <a :href="project.code" class="project_Link2" target="_blank">Source Code</a>
            </div>
        </div>
        <div class="middle_side">
            <img :src="project.image" class="mockup1_image1" alt="project image one"/>
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

    props: {
        project: {
            type: Object,
            required: true,
        },
    },
};

</script>

<style>

.content_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
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
    flex-direction: row;
    justify-content: center;
    margin: 5% 0;
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
    margin-top: 10px;
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
    font-size: 18px;
    white-space: nowrap;

}

.project_text {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: lighter;
    color: #EA70DE;
    font-size: 1.3rem;
    margin-top: 13%;
    white-space: nowrap;
}

.project_Link, .project_Link2 {
    font-family: 'Nunito Sans', sans-serif;
    color: #EA70DE;
    font-weight: bolder;
    text-decoration: none;
    font-size: 1rem;
}

.mockup1_image1 {
    width:  80%;
    height: auto;
    align-items: center;
    border-radius: 6px;
    transition: transform 0.3s;

}

.mockup1_image1:hover {
    transform: scale(1.05);
}

@media screen and (max-width: 330px) {

    .right-content {
        margin-left: 5%;
    }

    .project_semester {
        font-size: 1rem;
    }

    .project_name {
        font-size: 1.5rem;
    }

    .project_text {
        font-size: 1rem;
    }

    .mockup1_image1 {
        width:  100%;
        height: auto;
    }

}



</style>