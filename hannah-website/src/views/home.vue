<template>
    <navbar />
    <h1 class="headline">
        <span class="highlight-text">W</span> <span class="regular-text">elcome to my Portfolio page!</span><br><br>
        <span class="regular-text">My name is </span><span class="highlight-text">Hannah Frank</span><br><br><span class="regular-text">and I am
        a Creative Computing Student.</span>
    </h1>
  <div class="line"></div>
</template>

<script>
import Navbar from "../components/navbar.vue";

export default {
    components: {Navbar}
}


</script>

<style>


.headline {
    text-align: center;
    width: 100%;
    margin-top: 15rem;
}

.highlight-text {
    color: #EA70DE;
    text-shadow: 4px 1px 4px #B062ED;
    font-family: 'Victor Mono', monospace;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.regular-text {
    color: #E7BDE2;
    font-family: 'Victor Mono', monospace;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.line {
    border-bottom: 1px solid #E7BDE2;
    width: 70%;
    margin: 0 auto;
    margin-top: 60px;
}

/* RESPONSIVE DESIGNS*/

@media screen and (max-width: 576px) {
    .highlight-text {
        font-size: 30px;

    }

    .regular-text {
        font-size: 20px;
    }

    .headline {
        margin-top: 8rem;
    }

    .line {
        width: 100%;
    }
}

@media screen and (min-width: 577px) and (max-width: 767px) {
    .highlight-text {
        font-size: 30px;

    }

    .regular-text {
        font-size: 20px;
    }

    .headline {
        margin-top: 8rem;
    }


}

</style>