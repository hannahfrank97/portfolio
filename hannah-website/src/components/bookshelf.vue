<template>
    <div class="ball_headline">
        <Roundball class="roundball" />
        <h1 class="skills_headline">MY SKILLS</h1>
    </div>
    <div class="shelf_container">
    <div class="bookshelf_container">
        <h2 class="skills_h2">Click on the colorful books to learn <br>more about my skills</h2>
        <img class="bookshelf" :src="BookshelfImage" alt="Bookshelf">
        <img
        class="book book_blue"
        :src="playAnimation('blue') ? bookAnimations.blue : BlueBookImage"
        alt="Blue Book"
        @click="playGif('blue');
        showText('blue');
        disappearBook('blue')"
    />
        <img
            class="book book_neon"
            :src="playAnimation('neon') ? bookAnimations.neon : NeonBookImage"
            alt="Neon Book"
            @click="playGif('neon');
            showText('neon');
            disappearBook('neon')"
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
                blue: "<span style='font-size: 26px; color: #007ca5;'>Programming Languages:</span>\n" +
                    "<span style='color: #007ca5;'>JavaScript\n" +
                    "HTML\n" +
                    "CSS\n" +
                    "SQL\n" +
                    "C/C#\n" +
                    "Python\n" +
                    "Kotlin</span>",

                neon: "<span style='font-size: 26px; color: #F505EF;'>My vibrant personality.</span>",

                pink: "<span style='font-size: 26px; color: #E01073;'>Design and Creativity:</span>\n" +
                    "<span style='color: #E01073;'>Figma\n" +
                    "Adobe Creative Cloud\n" +
                    "Design Conception</span>",

                orange: "<span style='font-size: 26px; color: #CE3800;'>Web Development:</span>\n" +
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
                const animationElement = document.querySelector(`.book_${bookColor}`);
                if (!animationElement) {
                    return false; // Exit if the animation element is not found
                }

                if (this.playingAnimation !== null && this.playingAnimation.includes(bookColor)) {
                    animationElement.style.width = "150px";
                    animationElement.style.height = "100px";
                } else {
                    animationElement.style.width = "70px";
                    animationElement.style.height = "110px";
                }

                return this.playingAnimation !== null && this.playingAnimation.includes(bookColor);
            },




        playGif(bookColor) {
            console.log("playGif called with bookColor:", bookColor);

            if (!this.playingAnimation) {
                this.playingAnimation = this.bookAnimations[bookColor];
                setTimeout(() => {
                    this.playingAnimation = null;
                }, 2000);
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

}


#skill {
    font-family: 'Narnoor', sans-serif;
    font-weight: bold;
    font-size: 26px;
    margin-left: 30px;
    white-space: pre-line;
    text-align: center;

.color {
    margin-top: 300px;
    color: transparent;

}

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
    transform: rotate(20deg);
}


</style>