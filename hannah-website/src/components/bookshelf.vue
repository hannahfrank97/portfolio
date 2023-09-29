<template>
    <div class="shelf_container">
        <img class="bookshelf" :src="BookshelfImage" alt="Bookshelf">
        <img class="book book_blue" :src="BlueBookImage" alt="Blue Book">
        <img class="book book_neon" :src="NeonBookImage" alt="Neon Book">
        <img class="book book_pink" :src="PinkBookImage" alt="Pink Book">
        <img class="book book_purple" :src="PurpleBookImage" alt="Purple Book">
    </div>
</template>

<script>
import BookshelfImage from "@/assets/images/Bookshelf.png";
import BlueBookImage from "@/assets/images/Book-blue.png";
import NeonBookImage from "@/assets/images/Book-neon.png";
import PinkBookImage from "@/assets/images/Book-pink.png";
import PurpleBookImage from "@/assets/images/Book-purple.png";

export default {
    name: "Bookshelf",
    data() {
        return {
            BookshelfImage: BookshelfImage,
            BlueBookImage: BlueBookImage,
            NeonBookImage: NeonBookImage,
            PinkBookImage: PinkBookImage,
            PurpleBookImage: PurpleBookImage,
        }
    }
}

</script>


<style>

.shelf_container {
    position: relative;
    width: 1000px;
    height: 1100px;
    margin-top: 0
}

.bookshelf {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}


.book {
    position: absolute;
    width: 900px;
    height: 1100px;
    object-fit: cover;
    z-index: 2;
}

.book_neon {
    top: 255px;
    left: -270px;

}

.book_pink {
    top: 280px;
    left: -350px;
}

.book_purple {
    top: 0;
    left: -230px;
}

.book_blue {
    top: -200px;
    left: -150px;
    rotate: 45deg;
}

</style>