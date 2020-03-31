<template>
  <div>
    <addcom></addcom>
    <subcom></subcom>
  </div>
</template>

<script>
import addcom from "./components/add.vue";
import subcom from "./components/sub.vue";
export default {
  data() {
    return {};
  },
  components: {
    addcom,
    subcom
  }
};
</script>

<style>
</style>