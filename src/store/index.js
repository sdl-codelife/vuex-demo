import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //项目定义的值
    count: 0
  },
  mutations: {
    //只有在mutations中才可修改state中的值，不可异步
    add(state) {
      state.count++
    },
    addN(state,n){
      state.count +=n
    },
    sub(state) {
      state.count--
    },
    subN(state,n){
      state.count -=n
    }
  },
  actions: {
    //可异步，通过context.commit()触发mutations中的函数修改
    addAsync(context){
      setTimeout(()=>{
          context.commit('add')
      },1000)
    },
    subAsync(context){
      setTimeout(()=>{
        context.commit('sub')
    },1000)
    }
  },
  //加工state中的数据，不会修改原数据
  getters: {
   showcount: state => {
     return '通过getter获取count:'+state.count;
   }

  },
  modules: {
  }
})
