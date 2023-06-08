<template>
  <div class="characters">
    <h1 class="title">PERSONAJES</h1>
    <div class="list">
      <h3 class="character" v-for="character in characters" :key="character.name" @click="redirect(character.url)">{{character.name}}</h3>
    </div>
    <button @click="addCharacters" class="addBtn" v-if="page<9">Buscar más Personajes</button>
    <h1 class="title" v-else>No Hay más personajes</h1>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "characters-comp",
  data:function(){
    return{
      characters:[],
      page: 1,
    }
  },
  methods:{
    petition(){
      axios
      .get(`https://swapi.dev/api/people?page=${this.page}`)
      .then(response => {
        response.data.results.forEach(element => {
          this.characters.push(element)
        });
      })
    },
    redirect(url){
      let index = (url.match(/\d+/))[0]
      this.$router.push(`/characters/${index}`)
    },
    addCharacters(){
        this.page++
        this.petition()
    }
  },
  created() {
    return this.petition()
  },
}
</script>

<style>
body{
  background-color: black;
}
.characters{
  color: yellow;
  padding: 1rem;
}
.title{
  text-shadow: 0 0 1rem yellow, 0 0 .4rem black;
  color: white;
}
.character{
  display: inline-block;
  background-color: #808080c7;
  width: 30%;
  border: .01rem solid yellow;
  border-radius: .5rem;
  margin: .7rem;
  padding: .5rem;
}
.character:hover{
  box-shadow: 0 0 1rem green;
  cursor: pointer;
  background-color: yellow;
  color: black;
}
.addBtn{
  margin-top: 1rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  padding: .5rem 1rem;
  border: .0625rem solid white;
  border-radius: .4rem;
  background-color: white;
}
.addBtn:hover{
  background-color: yellow;
  border: .0625rem solid yellow;
}
</style>