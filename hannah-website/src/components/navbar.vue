<template>

  <div class="navbar_container">
<div class="logo">HANNAH</div>
      </div>
          <ul class="navbar">
              <li class="navbar_link">
                  <router-link to="/">Home</router-link>
              </li>
              <li class="navbar_link">
                  <router-link to="/projects">My Projects</router-link>
              </li>
              <li class="navbar_link">
                  <router-link to="/resume">My Resume</router-link>
              </li>

          </ul>

</template>


<script setup>

</script>

<style>

.logo {
    color: #EA70DE;
    font-family: 'Gruppo', sans-serif;
    font-size: 70px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    margin-left: 20px;
}

.navbar {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 300px;
}

.navbar_link a {
    color: #E2C8C8;
    font-family: 'Akatab', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
}

.router-link-active {
    color: #EA70DE;
}




/* RESPONSIVE DESIGNS*/

@media screen and (max-width: 576px) {
    .navbar{
        gap: 80px;

    }
}

@media screen and (min-width: 577px) and (max-width: 767px) {
    .navbar {
        gap: 90px;

    }
}

</style>