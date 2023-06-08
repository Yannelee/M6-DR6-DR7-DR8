<template>
  <div class="personaje">
      <h1 class="name">{{info.name}}</h1>
    <div class="description">
      <small>Nacimiento</small>
      <h3>{{info.birth_year}}</h3>
      <hr>
      <small>Altura</small>
      <h3>{{info.height}} cm</h3>
      <hr>
      <small>Peso</small>
      <h3>{{info.mass}} kg</h3>
      <hr>
      <small>Peliculas</small>
      <h3>{{filmList.length}}</h3>
    </div>
    <router-link to="/characters" class="backButton">Volver</router-link>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'personaje-comp',
  props:['id'],
  data: function(){
    return{
      info:'',
      filmList:[]
    }
  },
  computed:{
  },
  methods:{
  },
  created () {
    axios
      .get(`https://swapi.dev/api/people/${this.id}`)
      .then(response => {
        this.info = response.data
        response.data.films.forEach(element => this.filmList.push(element))
      })
  },
}
</script>

<style scoped>
.personaje{
  padding: 1rem;
  color: #000;
}
.name{
  text-shadow: 0 0 .8rem black;
  color: white;
}
.description{
  width: 50%;
  margin: 1rem auto;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #ffffffb0;
  border-radius: 1rem;
}

.backButton{
  text-decoration: none;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
  padding: .5rem 1rem;
  border: .0625rem solid white;
  border-radius: .4rem;
  background-color: white;
}
.backButton:hover{
  background-color: yellow;
  border: none
}
</style>
