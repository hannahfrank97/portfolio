<template>
    <div class="ball_headline">
        <Roundball class="roundball" />
        <h1 class="skills_headline">MY SKILLS</h1>
    </div>
    <div class="shelf_container">
    <div class="bookshelf_container">
        <h2 class="skills_h2">Click on the colorful books to learn <br>more about my skills</h2>
        <img class="bookshelf" :src="BookshelfImage" alt="Bookshelf">
        <div class="bookshelf-container">
        <img
        class="book book_blue"
        :src="playAnimation('blue') ? bookAnimations.blue : BlueBookImage"
        alt="Blue Book"
        @click="playGif('blue');
        showText('blue');
        disappearBook('blue')"
        :style="{
         width: playAnimation('blue') ? '130px' : '70px', height: playAnimation('blue') ? '120px' : '110px',

            }"
    />
        </div>
        <div class="book_container">
        <img
            class="book book_neon"
            :src="playAnimation('neon') ? bookAnimations.neon : NeonBookImage"
            alt="Neon Book"
            @click="playGif('neon');
            showText('neon');
            disappearBook('neon')"
            :style="{ width: playAnimation('neon') ? '130px' : '70px', height: playAnimation('neon') ? '120px' : '110px' }"
        />
        </div>
        <div class="book_container">
        <img
            class="book book_pink"
            :src="playAnimation('pink') ? bookAnimations.pink : PinkBookImage"
            @click="playGif('pink');
            showText('pink');
            disappearBook('pink')"
            alt="Pink Book"
            :style="{ width: playAnimation('pink') ? '130px' : '70px', height: playAnimation('pink') ? '120px' : '110px'}"
        />
        </div>
        <div class="book_container">
        <img
            class="book book_orange"
            :src="playAnimation('orange') ? bookAnimations.orange : OrangeBookImage"
            @click="playGif('orange');
            showText('orange');
            disappearBook('orange')"
            alt="Orange Book"
            :style="{ width: playAnimation('orange') ? '130px': '70px', height: playAnimation('orange') ? '120px' : '110px'}"
        />
        </div>
    </div>
    <div class="text_container">
        <p id="skill" :style="{display:showSkill? 'block' : 'none'}" v-html="bookTextToShow"></p>
    </div>
    </div>
    <h3 class="color">Color</h3>
</template>

<script>
import BookshelfImage from "@/assets/images/Bookshelf.png";
import BlueBookImage from "@/assets/images/Book-blue.png";
import BlueBookAnimation from "@/assets/animations/Book-blue-animation.gif";
import NeonBookImage from "@/assets/images/Book-neon.png";
import NeonBookAnimation from "@/assets/animations/Book-neon-animation.gif";
import PinkBookImage from "@/assets/images/Book-pink.png";
import PinkBookAnimation from "@/assets/animations/Book-pink-animation.gif";
import OrangeBookImage from "@/assets/images/Book-orange.png";
import OrangeBookAnimation from "@/assets/animations/Book-orange-animation.gif";

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
            showBook: {
                blue: true,
                neon: true,
                pink: true,
                orange: true,
            },
            showSkill: false,
            bookAnimations: {
                blue: BlueBookAnimation,
                neon: NeonBookAnimation,
                pink: PinkBookAnimation,
                orange: OrangeBookAnimation,
            },
            playingAnimation: null,
            showingBookText: false,
            bookTextToShow: "",
            bookText: {
                blue: "<span class='skill_span' style='color: #007ca5;'>Programming Languages:</span>\n" +
                    "<span style='color: #007ca5;'>JavaScript\n" +
                    "HTML\n" +
                    "CSS\n" +
                    "SQL\n" +
                    "C#\n" +
                    "C\n" +
                    "Python\n" +
                    "Kotlin</span>",

                pink: "<span class='skill_span' style='color: #F505EF;'>My vibrant personality.</span>",

                neon: "<span class='skill_span' style='color: #E01073;'>Design and Creativity:</span>\n" +
                    "<span style='color: #E01073;'>Figma\n" +
                    "Adobe Creative Cloud\n" +
                    "Design Conception</span>",

                orange: "<span class='skill_span' style='color: #CE3800;'>Web Development:</span>\n" +
                    "<span style='color: #CE3800;'>Node.js\n" +
                    "Vue\n" +
                    "React\n" +
                    "Rest API\n" +
                    "Git</span>",

            }
        }

    },

        methods: {
        showText(bookColor) {
            console.log("showText called with bookColor:", bookColor);
            this.bookTextToShow = this.bookText[bookColor];
            this.showSkill = true;
            this.showingBookText = true;

        },

        disappearBook(bookColor) {
            console.log("disappearBook called with bookColor:", bookColor);
            if (bookColor === "blue") {
                this.showBook.blue = false;
            } else if (bookColor === "neon") {
                this.showBook.pink = false;
            } else if (bookColor === "pink") {
                this.showBook.neon = false;
            } else if (bookColor === "orange") {
                this.showBook.orange = false;
            }
        },

            playAnimation(bookColor) {
                return this.playingAnimation !== null && this.playingAnimation.includes(bookColor);
            },




            playGif(bookColor) {
                console.log("playGif called with bookColor:", bookColor);
                if (!this.playingAnimation) {
                    this.playingAnimation = this.bookAnimations[bookColor];
                    setTimeout(() => {
                        this.playingAnimation = null;
                    }, 1400);
                }
            },

            hideText() {
                this.showingBookText = false;

            },

    },

    mounted() {
        window.addEventListener('click', this.hideText)
    },

    beforeDestroy() {
        window.removeEventListener('click', this.hideText)
    }
}

</script>


<style>

.shelf_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0;

}


#skill {
    font-family: 'Narnoor', sans-serif;
    font-weight: bold;
    font-size: 26px;
    margin-left: 30px;
    white-space: pre-line;
    text-align: center;

}

.skill_span {
    font-size: 26px;
}

.color {
    margin-top: 300px;
    color: transparent;

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



.bookshelf {
    margin-top: 150px;
    left: 0;
    width: 450px;
    height: 700px;
    margin-left: 60px;
}

.text_container {
    margin-left: 300px;
}


.book {
    position: absolute;

}

.book_neon {
    top: 1250px;
    left: 200px;

}

.book_pink {
    top: 1370px;
    left: 300px;
}

.book_orange {
    top: 1110px;
    left: 250px;
    width: 700px;
    height: 110px;

}

.book_blue {
    top: 965px;
    left: 300px;
    transform: rotate(20deg);
}

/* RESPONSIVE DESIGNS*/

@media screen and (max-width: 390px) {

    .shelf_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;

    }

    .bookshelf {
        max-width:80%;
        height: auto;
        margin-left: 10%;

    }

    .skills_headline {
        font-size: 24px;
        margin-left: 5%;
    }

    .ball_headline {
        margin-left: 0;
    }

    .roundball {
        margin-left: 25px;
        margin-top: 40px!important;
    }


    .skills_h2 {
        font-size: 18px!important;
        margin-left: 20%;
    }

    #skill {
        font-weight: bold;
        font-size: 18px!important;
        margin-left: 0;

    }

    .skill_span {
        font-size: 20px!important;
    }

    .text_container {
        margin-left: 0;
    }

    .book {
        width: 55px !important;
        height: 85px !important;
    }

    .book_blue {
        top: 840px!important;
        left: 200px!important;
        transform: rotate(20deg);
    }

    .book_neon {
        top: 1040px!important;
        left: 130px!important;
    }

    .book_pink {
        top: 1120px!important;
        left: 200px!important;
    }

    .book_orange {
        top: 940px!important;
        left: 140px!important;
    }

}

@media screen and (max-width: 768px) {
    .shelf_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0;

    }

    .bookshelf {
        max-width:80%;
        height: auto;

    }

    .roundball {
        margin-top: 6%;
    }

    .ball_headline {
        margin-left: 12%;
    }
    .skills_headline {
        font-size: 32px;
        margin-top: 25px;

    }

    .skills_h2 {
        font-size: 20px;
        margin-left: 20%;
    }

    #skill {
        font-weight: bold;
        font-size: 28px;
        margin-left: 0;

    }

    .skill_span {
        font-size: 30px;
    }

    .text_container {
        margin-left: 0;
    }

    .book_blue {
        top: 840px;
        left: 400px;
        transform: rotate(20deg);
    }

    .book_neon {
        top: 1110px;
        left: 310px;
    }

    .book_pink {
        top: 1230px;
        left: 370px;
    }

    .book_orange {
        top: 980px;
        left: 320px;
    }

}

</style>