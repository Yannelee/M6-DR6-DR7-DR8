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
  data: function(){
    return{
      info:'',
      filmList:[]
    }
  },
  computed:{
    id(){
      return parseInt(this.$route.params.id)
    },
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
  padding: 1rem;
  background-color: #ffffffb0;
  border-radius: 1rem;
}

.backButton{
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-size: large;
  font-weight: bold;
}
.backButton:hover{
  text-shadow: 0 0 .3rem yellow, 0 0 .4rem black;
}
</style>
