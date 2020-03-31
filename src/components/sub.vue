<template>
  <div>
    <h3>计算属性count{{count}}</h3>
    <h3>{{showcount}}</h3>
    <button @click="btnsubhander">-1</button>
     <button @click="btnsubhandernasunc">异步1s-1</button>
    <button @click="btnsubhandern">-2</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['count']),
        ...mapGetters(['showcount'])
    },
    methods: {
        ...mapMutations(['sub','subN']),
        ...mapActions(['subAsync']),
        btnsubhander(){
            this.sub()
        },
        btnsubhandern(){
            this.subN(2)
        },
        btnsubhandernasunc(){
            this.subAsync()
        }
    }
};
</script>

<style>
</style>