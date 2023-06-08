<template>
  <div class="notFound">
    <h1 class="notFoundText">La página que buscas no existe</h1>
    
    <router-link to="/" class="backButton">Volver a Inicio</router-link>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.notFoundText{
  text-shadow: 0 0 .8rem black;
  color: white;
}
.backButton{
  text-decoration: none;
  cursor: pointer;
  color: black;
  font-size: large;
  font-weight: bold;
  padding: .5rem 1rem;
  border: .0625rem solid white;
  border-radius: .4rem;
  background-color: white;
}
.backButton:hover{
  /* text-shadow: 0 0 .3rem yellow, 0 0 .4rem black; */
  background-color: yellow;
  border: none
}
</style>