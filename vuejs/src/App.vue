<template>
  <div id="app">
    <button @click="open">
      Send
    </button>
  </div>
</template>

<script>

export default {
  name: "App",
  methods:{
    open(){
      //force error to log in apm
      console.log(this.variableDontDefined.length);
    }
  }
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
