<template>
    <div class="arrow">
        <span class="arrow-line-horizontal"></span>
        <span class="arrow-line-up"></span>
        <span class="arrow-line-down"></span>
    </div>
</template>

<style>
.arrow {
    display: inline-block;
    position: relative;
}

.arrow-line-horizontal {
    display: block;
    width: 40px;
    height: 2px;
    background-color: #B062ED;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}

.arrow-line-up,
.arrow-line-down {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #B062ED;
    position: absolute;
    top: calc(50% - 2px);
    left: 22px;
    transform-origin: right center;
}

.arrow-line-up {
    top: 48%;
    transform: rotate(45deg);
}

.arrow-line-down {
    transform: rotate(-45deg);
}
</style>




