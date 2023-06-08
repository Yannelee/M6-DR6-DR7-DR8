<template>
  <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/characters">Personajes</router-link> |
      <router-link to="/contact">Contacto</router-link>
    </nav>
    <transition name="router-anim" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style>
body{
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: url("@/assets/backgroundPattern.jpg");
  background-size: 30rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}

nav {
  padding: 1.5rem;
  background-color: yellow;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.router-anim-enter-active{
 animation: coming 1s;
 animation-delay: .5s;
 opacity:0;
}
.router-anim-leave-active{
 animation: going 1s;
}
@keyframes going{
 0%{
 transform: translateX(0)
 }
 100%{
 transform: translateX(-50px);
 opacity:0;
 }
}
@keyframes coming{
 from{
 transform: translateX(-50px);
 opacity:0;
 }
 to{
 transform: translateX(0px);
 opacity:1;
 }
}
</style>
