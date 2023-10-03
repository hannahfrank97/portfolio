<template>

    <div class="shelf_container">
        <div class="ball_headline">
           <Roundball class="roundball" />
            <h1 class="skills_headline">MY SKILLS</h1>
        </div>
        <h2 class="skills_h2">Click on the colorful books to learn <br>more about my skills</h2>
        <p id="skill" :style="{display:showSkill ? 'block' : 'none'}">{{bookTextToShow}}</p>
        <img class="bookshelf" :src="BookshelfImage" alt="Bookshelf">
        <img class="book book_blue" :src="BlueBookImage" v-on:click="showText('blue')" alt="Blue Book">
        <img class="book book_neon" :src="NeonBookImage" v-on:click="showText('neon')" alt="Neon Book">
        <img class="book book_pink" :src="PinkBookImage" v-on:click="showText('pink')" alt="Pink Book">
        <img class="book book_orange" :src="OrangeBookImage" v-on:click="showText('orange')" alt="Orange Book">
        <h3 class="color">Color</h3>
    </div>
</template>

<script>
import BookshelfImage from "@/assets/images/Bookshelf.png";
import BlueBookImage from "@/assets/images/Book-blue.png";
import NeonBookImage from "@/assets/images/Book-neon.png";
import PinkBookImage from "@/assets/images/Book-pink.png";
import OrangeBookImage from "@/assets/images/Book-orange.png";
import Roundball from "@/components/roundball.vue";

export default {
    name: "Bookshelf",
    components: {
        Roundball
    },
    data() {
        return {
            BookshelfImage: BookshelfImage,
            BlueBookImage: BlueBookImage,
            NeonBookImage: NeonBookImage,
            PinkBookImage: PinkBookImage,
            OrangeBookImage: OrangeBookImage,
            showSkill: true,
            bookTextToShow: "",
            bookText: {
                blue: "Programming Languages: JavaScript\n" +
                    "HTML\n" +
                    "CSS\n" +
                    "SQL\n" +
                    "C#\n" +
                    "Python\n" +
                    "Kotlin",
                neon: "My vibrant personality.",
                pink: "Design and Creativity: Figma\n" +
                    "Adobe Creative Cloud\n" +
                    "Design Conception",
                orange: "Web Development:Node.js\n" +
                    "Vue\n" +
                    "React\n" +
                    "Rest API\n" +
                    "Git",

            }
        }
    },

    methods: {
        showText(bookColor) {
            this.bookTextToShow = this.bookText[bookColor];
            this.showSkill = true;
        }
    }

}

</script>


<style>

.color {
    margin-top: 300px;
    color: transparent;

}

#skill {
    font-family: 'Narnoor', sans-serif;
    color: whitesmoke;
    font-weight: lighter;
    font-size: 80px;
    margin-left: 30px;
}

.ball_headline {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 30px;
}

.roundball {
    margin-left: 70px;
    margin-top: 30px;
    margin-bottom: 0;
}

.skills_headline {
    font-family: 'Narnoor', sans-serif;
    color: whitesmoke;
    font-weight: lighter;
    font-size: 28px;
    margin-left: 30px;

}

.skills_h2 {
    font-family: 'Narnoor', sans-serif;
    color: whitesmoke;
    font-weight: lighter;
    font-size: 20px;
    margin-left: 80px;
    margin-bottom: -100px;
}


.shelf_container {
    margin-top: 0;
}

.bookshelf {
    margin-top: 150px;
    left: 0;
    width: 450px;
    height: 700px;
    margin-left: 60px;
}


.book {
    width: 70px;
    height: 110px;
    position: relative;
}

.book_neon {
    top: -85px;
    left: -320px;

}

.book_pink {
    top: -210px;
    left: -500px;
}

.book_orange {
    top: -350px;
    left: -500px;
}

.book_blue {
    top: -495px;
    left: -220px;
    rotate: 20deg;
}

</style>