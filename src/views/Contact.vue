<template>
  <div class="contacto">
    <h1 class="title">Contáctanos</h1>
    <h3 class="subtitle">ELIGE TU LADO</h3>
    <button class="btn jediBtn" @click="jediBtn">JEDI</button>
    <button class="btn sithBtn" @click="sithBtn">SITH</button>

    <div class="formularios" v-show="form">
      <form class="contactForm">
        <p class="selectText">Selecciona</p>
        <div class="jedi" v-show="jediForm">
          <input type="radio" name="jedi" value="Master" v-model="prefix">
          <label for="master">Master</label>
          <input type="radio" name="jedi" value="Padawan" v-model="prefix">
          <label for="padawan">Padawan</label>
        </div>
        <div class="sith" v-show="sithForm">
          <input type="radio" name="sith" value="Lord" v-model="prefix">
          <label for="lord">Lord</label>
          <input type="radio" name="sith" value="Darth" v-model="prefix">
          <label for="darth">Darth</label>
        </div>
        <label for="name" class="contactLabel">Nombre y Apellido</label>
        <input type="text" class="contactInput" v-model="name"> <br>
        <label for="email" class="contactLabel">Email</label>
        <input type="email" class="contactInput" required v-model="mail"> <br>
        <label for="mensaje" class="contactLabel">Mensaje</label>
        <textarea name="" id="" class="contactInput" v-model="msg"></textarea>

        <button class="btn enviarBtn" @click.prevent="sendContact">Enviar</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "contact-comp",
  data:function(){
    return{
      form: false,
      sithForm: false,
      jediForm: false,
      name:'',
      mail:'',
      msg:'',
      prefix:'',
      valName : /\w+\s\w+/,
      valMail : /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2}$/
    }
  },
  methods:{
    jediBtn(){
      this.form = true
      this.jediForm = true
      this.sithForm = false
    },
    sithBtn(){
      this.form = true
      this.sithForm = true
      this.jediForm = false
    },
    sendContact(){
      if(this.name.match(this.valName) && this.mail.match(this.valMail) && this.msg && this.prefix){
        alert(`Gracias ${this.prefix} ${this.name}, te responderemos a la brevedad a tu correo: ${this.mail}. \nTu mensaje fue: ${this.msg}`)
        this.name = ''
        this.mail = ''
        this.msg = ''
        this.prefix = ''
        this.form = false
        this.sithForm = false
        this.jediForm = false
      } else{
        alert('Debes completar todos los datos');
      }
    }
  }
}
</script>

<style>
.contacto{
  color: white;
}
.title, .subtitle{
  text-shadow: 0 0 .8rem black;
}
.jedi>input, .sith>input, .selectText{
  margin: .5rem 0.2rem;
  margin-left: 2rem;
}
.btn{
  padding: .7rem;
  font-size: large;
  font-weight: bold;
  margin: 1rem 3rem;
  width: 30%;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  background-color: white;
  
}
.jediBtn:hover{
  background-color: limegreen;
  box-shadow: 0 0 .3rem lightgreen;
  color: white;
}
.sithBtn:hover{
  background-color: red;
  box-shadow: 0 0 .3rem red;
  color: white;
}
.contactForm{
  background-color: #ffffffbd;
  border-radius: .2rem;
  color: black;
  width: 80%;
  margin: auto;
  padding: 1rem;
  text-align: left;
}
.contactLabel{
  display: block;
  text-align: left;
}
.contactInput{
  width: 100%;
  margin-left: 0;
  border: none;
  padding: 1rem;
  border-radius: .2rem;
  box-sizing: border-box;
}
textarea.contactInput{
  max-width: 100%;
}
.enviarBtn{
  margin-left: 0;
}
</style>