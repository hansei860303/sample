<template>
  <div id="app">
    <HelloWord v-bind:title="titleName" />
    <hr>
    <button class="btn btn-primary" v-on:click="doAction">
      change title
    </button>
  </div>
</template>

<script>
import HelloWord from '@/components/Sample/Sample1.vue'

export default {
  name:'App',
  components:{
    HelloWord
  },
  data() {
    return {
      titleName:'HELLO',
      result:'no event'
    }
  },
  methods:{
    doAction() {
      var input =prompt("new title:")
      this.titleName=input
    }
  }
}

</script>