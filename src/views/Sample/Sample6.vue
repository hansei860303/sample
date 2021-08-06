<template>
    <div id = "app">
        <HelloWorld v-bind:title="message" v-bind:num="num" />
    </div>
</template>

<script>
import HelloWorld from '@/components/Sample/Sample6.vue'

export default {
    name: 'app',
    components :{
        HelloWorld
    },
    data() {
        return {
            message:'validate',
            num: "200",
        }
    }
}
</script>
