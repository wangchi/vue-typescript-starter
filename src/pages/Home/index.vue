<template>
  <div class="home">
    homepage
    <el-button type="primary">button</el-button>
    <div class="content">red</div>
    <tsx-demo msg="Hi, are you ok?"></tsx-demo>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import TsxDemo from '@/components/TsxDemo';

  @Component({
    components: {
      TsxDemo
    }
  })
  export default class Home extends Vue {}
</script>

<style lang="scss">
  .home {
    color: #2c3e50;

    .content {
      color: red;
    }
  }
</style>
