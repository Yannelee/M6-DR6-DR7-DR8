<template>
  <div class="characters">
    <h1 class="title">PERSONAJES</h1>
    <button @click="addCharacters">Buscar más Personajes</button>
    <div class="list">
      <h3 class="character" v-for="character in characters" :key="character.name" @click="redirect($event)">{{character.name}}</h3>
    </div>
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
      index:1,
      selected:0,
      regex: /\d+/
    }
  },
  methods:{
    redirect(event){
      this.selected = this.characters.find(e=>e.name == event.target.innerHTML)
      this.index = ((this.selected.url).match(this.regex))[0]
      this.$router.push(`/characters/${this.index}`)
    },
    petition(){
      axios
      .get(`https://swapi.dev/api/people?page=${this.page}`)
      .then(response => {
        response.data.results.forEach(element => {
          this.characters.push(element)
        });
      })
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
</style>