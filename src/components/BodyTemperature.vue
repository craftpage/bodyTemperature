<template>
  <h1>今日の体温記録</h1>
  <h2 id="num">{{ state.int }}.{{ state.dec}}</h2>
  <input type="number" min='35' max='42' v-model="state.int">.
  <input type="number" min='0' max='9' v-model="state.dec">

  <br />
  <br />
  <button class="btn btn-secondary" type="button" @click="save">今日の体温を保存</button>

</template>

<script lang="ts">
import { reactive, defineComponent } from 'vue'

export default defineComponent({
  name: 'BodyTemperature',
  setup: () => {
    const state = reactive({
      int: 0,
      dec: 0,
      day: null
    })
    const autoClear = () => {
      let yesterday = null
      if (localStorage.getItem("day") !== (null || undefined)) {
        yesterday = Number(localStorage.getItem("day"))
      } else {
        yesterday = Number(new Date().getDate())
      }
      let today = Number(new Date().getDate())
      if (yesterday !== today){
        window.localStorage.setItem("int", String(0))
        window.localStorage.setItem("dec", String(0))
        window.localStorage.setItem("day", String(new Date().getDate()))
      }
    }
    autoClear()
    const get = () => {
      state.int = Number(window.localStorage.getItem("int"))
      state.dec = Number(window.localStorage.getItem("dec"))
    }
    get()
    const save = () => {
      window.localStorage.setItem("int", String(state.int))
      window.localStorage.setItem("dec", String(state.dec))
      window.localStorage.setItem("day", String(new Date().getDate()))
      get()
      alert("保存しました")
    }
    return { state,save,get }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
