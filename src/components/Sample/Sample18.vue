<template>
    <div class="alert aler-primary">
        <h1>{{title}}</h1>
        <p>{{data.msg}} ({{data.count}})</p>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    props:{
        title:String
    },
    setup(){
        const data =ref({
            msg: 'This is ref-value!',
            count:0
        })
        setInterval(() =>{
            data.value.count++
        },1000)
        return {
            data
        }
    }
}
</script>