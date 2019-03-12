<template>
  <div id="app">
    hello
    <div class="content">red</div>
    <tsx-demo></tsx-demo>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import TsxDemo from './components/TsxDemo';

  @Component({
    components: {
      TsxDemo
    }
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    .content {
      color: red;
    }
  }
</style>
