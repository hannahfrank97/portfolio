<template>
    <div class="container">
        <div class="headline_text_multiple">
         <div class="ball_headline">
            <h1 class="skills_headline">{{$t('mySkills')}}</h1>
         </div>
          <h2 class="skills_h2" v-html="$t('clickBooksToLearn')"></h2>
        </div>
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
                    :class="isNeonBookActive ? 'animate' : ''"
                    :src="NeonBookImage"
                    alt="Neon Book"
                    @click="setNeonBookActive();
                    showText('neon');"

                />

                <img
                    class="book book_pink"
                    :class="isPinkBookActive ? 'animate' : ''"
                    :src="PinkBookImage"
                    alt="Pink Book"
                    @click="setPinkBookActive();
                    showText('pink');"

                />

                <img
                    class="book book_orange"
                    :class="isOrangeBookActive ? 'animate' : ''"
                    :src="OrangeBookImage"
                    alt="Orange Book"
                    @click="setOrangeBookActive()
                    showText('orange');"

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
import NeonBookImage from "@/assets/images/Book-neon.png";
import PinkBookImage from "@/assets/images/Book-pink.png";
import OrangeBookImage from "@/assets/images/Book-orange.png";
import Roundball from "@/components/roundball.vue";
import { useI18n } from 'vue-i18n';


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
            showSkill: false,
            showingBookText: false,
            bookTextToShow: "",
            bookText: {
                blue: {
                    title: this.$t('programmingLanguages'),
                    content: "JavaScript\nHTML\nCSS\nSQL\nC#\nC\nPython\nKotlin",
                    color: '#007ca5',
                },
                neon: {
                    title: this.$t('myVibrantPersonality'),
                    content: "",
                    color: '#F505EF'
                },
                pink: {
                    title: this.$t('designAndCreativity'),
                    content: "Figma\nAdobe Creative Cloud\nDesign Conception",
                    color: '#E01073',
                },
                orange: {
                    title: this.$t('Web Development'),
                    content: "Node.js\nVue\nReact\nRest API\nGit",
                    color: '#CE3800'
                }
            }
        };

    },

        methods: {
            scrolltoSkill() {
                const bookElement = document.getElementById('skill')
                const screenWidth = window.innerWidth;
                if (bookElement) {
                    if (screenWidth < 769) {
                        bookElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        })
                    } else {
                        bookElement.scrollIntoView({
                            behavior: 'auto',
                        })
                    }
                }

            },

            showText(bookColor) {
                this.scrolltoSkill()
                const book = this.bookText[bookColor];
                const title = `<span class="skill_span" style="color: ${book.color};">${book.title}</span>`;
                const content = `<span class="book-content" style="color: ${book.color};">${book.content}</span>`;
                this.bookTextToShow = `${title}\n${content}`;
                this.showSkill = true;
                this.showingBookText = true;
            },


        setBlueBookActive() {
            this.isBlueBookActive = !this.isBlueBookActive;
            this.isPinkBookActive = false;
            this.isOrangeBookActive = false;
            this.isNeonBookActive = false;

        },

            setPinkBookActive() {
                this.isPinkBookActive = !this.isPinkBookActive;
                this.isBlueBookActive = false;
                this.isOrangeBookActive = false;
                this.isNeonBookActive = false;
            },

            setNeonBookActive() {
                this.isNeonBookActive = !this.isNeonBookActive;
                this.isBlueBookActive = false;
                this.isPinkBookActive = false;
                this.isOrangeBookActive = false;
            },

            setOrangeBookActive() {
                this.isOrangeBookActive = !this.isOrangeBookActive;
                this.isBlueBookActive = false;
                this.isPinkBookActive = false;
                this.isNeonBookActive = false;
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
    },
}

</script>


<style>

.book:hover {
    cursor: pointer;
}

.text_container {
    align-items: center;
    margin-left: 18%;
}

.ball_headline {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: stretch;
    gap: 1%;

}

.skills_headline {
    font-family: 'Narnoor', sans-serif;
    color: whitesmoke;
    font-weight: lighter;
    font-size: 28px;
    margin: 0;

}


.headline_text_multiple {
    margin: 2% 4%;


}

.skills_h2 {
    font-family: 'Narnoor', sans-serif;
    color: whitesmoke;
    font-weight: lighter;
    font-size: 20px;
}

.shelf_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0;
    max-width: 1500px;

}

.bookshelf_container {
    position: relative;
    margin: 4rem 2rem;
    width: 100%;
}

@media screen and (min-width: 768px) {
    .bookshelf_container {
        width: 30%;
    }
}

.bookshelf {
    width: 100%;
}

#skill {
    font-family: 'Narnoor', sans-serif;
    font-weight: bold;
    font-size: 26px;
    white-space: pre-line;
    text-align: center;

}

.skill_span {
    font-size: 1.7rem;
}

.book-content {
    font-size: 1.2rem;
}

.book {
    position: absolute;
}

@keyframes shake-book {
    0% {
        transform: translateX(0%) rotate(0deg);
    }
    2% {
        transform: translateX(20%) rotate(0deg);
    }
    4% {
        transform: translateX(40%) rotate(0deg);
    }

    5% {
        transform: translateX(50%) rotate(0deg);
    }

    10% {
        transform: translateX(50%) rotate(-20deg);
    }
    20% {
        transform: translateX(50%) rotate(20deg);
    }
    30% {
        transform: translateX(50%) rotate(-20deg);
    }
    40% {
        transform: translateX(50%) rotate(20deg);
    }
    50% {
        transform: translateX(50%) rotate(-20deg);
    }

    70% {
        transform: translateX(40%) rotate(0deg);
    }
    75% {
        transform: translateX(30%) rotate(0deg);
    }
    80% {
        transform: translateX(20%) rotate(0deg);
    }
    85% {
        transform: translateX(10%) rotate(0deg);
    }
    90% {
        transform: translateX(0%) rotate(0deg);
    }
    100% {
        transform: translateX(0%) rotate(0);
    }
}

.book.animate {
    animation-name: shake-book;
    animation-duration: 1.8s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
}

.book_blue {
    width: 15%;
    height: auto;
    top: 13.5%;
    left: 43.5%;
}

.book_neon {
        width: 15%;
        top: 71%;
        left: 51%;
        height: auto;

}

.book_pink {
    width: 15%;
    top: 54%;
    left: 23%;
    height: auto;


}

.book_orange {
    width: 15%;
    height: auto;
    top: 34%;
    left: 32%;

}

@media screen and (min-width: 330px) and (max-width: 768px) {

    .shelf_container {
        flex-direction: column;
        align-items: center;
    }

    .skills_h2 {
        font-size:1rem;
    }

    #skill {
        margin-left: 0;
    }

    .text_container {
        margin-left: 2%;
        scroll-margin-top: 4rem;
    }

}


@media screen and (min-width: 1500px) {
    .text_container {
        margin-left: 31%;
    }

}


</style>