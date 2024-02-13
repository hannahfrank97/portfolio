<template>
    <div class="container">
        <navbar/>
        <h1 class="headline">
            <span class="regular-text">{{ $t('welcome') }}</span>
            <span class="regular-text">{{ $t('myNameIs') }} </span>
            <span class="highlight-text">Hannah</span><br>
            <span class="regular-text">{{ $t('student') }} </span><br>
        </h1>
        <linehorizontal/>
        <Bookshelf/>
    </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import linehorizontal from "@/components/linehorizontal.vue";
import Bookshelf from "@/components/bookshelf.vue";
import Roundball from "@/components/roundball.vue";

export default {
    components: {
        Roundball,
        Bookshelf,
        Navbar,
        linehorizontal,
    },

}

</script>

<style>


.headline {
    text-align: center;
    width: 100%;
    margin-top: 8rem;
}

.highlight-text {
    color: #EA70DE;
    text-shadow: 4px 1px 4px #B062ED;
    font-family: 'Victor Mono', monospace;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.regular-text {
    color: #E7BDE2;
    font-family: 'Victor Mono', monospace;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

/* RESPONSIVE DESIGNS*/

@media screen and (min-width: 330px ) and (max-width: 576px) {
    .highlight-text {
        font-size: 2.4rem;

    }

    .regular-text {
        font-size: 1.7rem;
    }

    .headline {
        margin-top: 8rem;
    }


}

@media screen and (min-width: 577px) and (max-width: 768px) {
    .highlight-text {
        font-size: 30px;

    }

    .regular-text {
        font-size: 20px;
    }

    .headline {
        margin-top: 5rem;
    }


}

</style>