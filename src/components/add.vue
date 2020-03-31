<template>
  <div>
    <h3>当前count为:{{$store.state.count}}</h3>
    <h3>{{$store.getters.showcount}}</h3>
    <button @click="addbtnhander">+1</button>
    <button @click="addbtnhandernasync">异步1s后+1</button>
    <button @click="addbtnhandern">+3</button>
  </div>
</template>

<script>
export default {
  methods: {
    addbtnhander() {
      this.$store.commit("add");
    },
    addbtnhandern() {
      //commit调用
      this.$store.commit("addN", 3);
    },
    addbtnhandernasync() {
      this.$store.dispatch("addAsync");
    }
  }
};
</script>

<style>
</style>