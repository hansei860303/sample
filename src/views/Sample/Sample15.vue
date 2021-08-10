<template>
    <div class = "hello">
        <h1>{{ title }}</h1>
        <p>{{message}}</p>
        <br>
        <button v-on:click="doAction">
            {{btn}}</button>
        <transition name="transit"
            v-on:before-enter="startAction"
            v-on:before-leave="startAction"
            v-on:alter-enter="endAction"
            v-on:alter-leave="endAction">
           <p v-if="flg" class="trans">Transtion!</p>
        </transition>   
    </div>
</template>

<script>
export default {
    name:'HelloWorld',
    props:{
        title:String,
    },
    data:function(){
        return {
            message:'Transition Sample!',
            flg:true,
            btn:'Hide',
        }
    },
    methods:{
        doAction:function(){
            this.flg=!this.flg
        },
        startAction:function(){
            if(this.flg){
                this.btn ='Hide'
                this.message='現れます...'
            }else{
                this.btn='Show'
                this.message = '消えます...'
            }
        },
        endAction:function(){
            if(this.flg){
                this.btn ='Hide'
                this.message='現れます...'
            }else{
                this.btn='Show'
                this.message='消えました'
            }
        }
    },
}
</script>

