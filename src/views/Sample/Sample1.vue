<template>
  <div id="app">
    <HelloWorld v-bind:title="titleName" />
    <br>
    <button class="btn btn-primary" v-on:click="doAction">
      change title
    </button>
  </div>
</template>

<script>
import HelloWorld from '@/components/Sample/Sample1.vue'

export default {
  name:'app',
  components:{
    HelloWorld
  },
  data() {
    return {
      titleName:'HELLO',
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
