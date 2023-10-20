<template>
    <div class="container">
        <div class="ball_headline">
            <Roundball class="roundball" />
            <h1 class="skills_headline">{{$t('mySkills')}}</h1>
        </div>
        <h2 class="skills_h2" v-html="$t('clickBooksToLearn')"></h2>

        <div class="shelf_container">
            <div class="bookshelf_container">
                <img class="bookshelf" :src="BookshelfImage" alt="Bookshelf">
                <img
                    class="book book_blue"
                    :class="isBlueBookActive ? 'animate' : ''"
                    :src="BlueBookImage"
                    alt="Blue Book"
                    @click="setBlueBookActive();
                    showText('blue');"
                />
                <img
                    class="book book_neon"
                    :src="playAnimation('neon') ? bookAnimations.neon : NeonBookImage"
                    alt="Neon Book"
                    @click="playGif('neon');
                    showText('neon');

                />

                <img
                    class="book book_pink"
                    :src="playAnimation('pink') ? bookAnimations.pink : PinkBookImage"
                    @click="playGif('pink');
                    showText('pink');
                    disappearBook('pink')"
                    alt="Pink Book"
                />

                <img
                    class="book book_orange"
                    :src="playAnimation('orange') ? bookAnimations.orange : OrangeBookImage"
                    @click="playGif('orange');
                    showText('orange');
                    disappearBook('orange')"
                    alt="Orange Book"
                />
            </div>
            <div class="text_container">
                <p id="skill" :style="{display:showSkill? 'block' : 'none'}" v-html="bookTextToShow"></p>
            </div>
        </div>
    </div>
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
import { getTransitionRawChildren } from "vue";

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
            isBlueBookActive: false,
            isPinkBookActive: false,
            isNeonBookActive: false,
            isOrangeBookActive: false,
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
                blue: "<span class='skill_span' style='color: #007ca5;'>{{ $t('programmingLanguages') }}</span>\n"

                    +
                    "<span style='color: #007ca5;'>JavaScript\n" +
                    "HTML\n" +
                    "CSS\n" +
                    "SQL\n" +
                    "C#\n" +
                    "C\n" +
                    "Python\n" +
                    "Kotlin</span>",

                pink: "<span class='skill_span' style='color: #F505EF;'>{{$t('My vibrant personality.'}}</span>",

                neon: "<span class='skill_span' style='color: #E01073;'>{{$t('Design and Creativity:'}}</span>\n" +
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

        setBlueBookActive() {
            this.isBlueBookActive = !this.isBlueBookActive;
            this.isPinkBookActive = false;
            this.isOrangeBookActive = false;

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

.bookshelf_container {
    position: relative;
    margin-top: 4rem;
    width: 100%; 
}

@media screen and (min-width: 768px) {
    .bookshelf_container {
        width: 40%;
    }
}

.bookshelf {
    width: 100%;
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

/* Je nachdem ob du andere rotationen von den büchern hast, brauchst du eine eigene animations abfolge  */
/* Idee: zwei animationen 1. raus fahren; 2. shake mit delay */
@keyframes shake-book {
    0% {transform: translateX(0) rotate(20deg);}
    50% {transform: translateX(50%) rotate(20deg);}
    60% {transform: translateX(50%) rotate(30deg);}
    70% {transform: translateX(50%) rotate(40deg);}
    100% {transform: translateX(50%) rotate(20deg);}
}

.book_blue {
    width: 15%;
    height: auto;
    top: 13%;
    left: 55.5%;
    transform: rotate(20deg) translateX(0);
    /* transition: transform 1s; */
}

.book.animate {
    /* transform: translateX(50%) rotate(50deg); */
    animation-name: shake-book;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

</style>