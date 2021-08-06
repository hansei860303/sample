<template>
  <div id="app">
    <HelloWord v-bind:title="message" v-on:result-event = "appAction" />
    <br>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import HelloWord from '@/components/Sample/Sample2.vue'

export default {
  name:'app',
  components:{
    HelloWord
  },
  data() {
    return {
      message:'HELLO',
      result:'no event.',
    }
  },
  methods:{
    appAction(message) {
      this.result= '(*** you send ' + message + '. ***)'
    }
  }
}

</script>
