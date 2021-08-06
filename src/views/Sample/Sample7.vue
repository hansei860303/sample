<template>
    <div class="alert alert-primary">
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <br>
        <p class= "h5">val: {{ val }}</p>
        <div class="from-group text-left">
            <label>*2:</label>
            <input type="number" v-model="a" class="form-control">
        </div>
        <div class="from-group text-left">
            <label>^2:</label>
            <input type="number" v-model="b" class="form-control">
        </div>        
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props:{
        title: String,
    },
    data() {
        return {
            message:'算術ブロパティの利用',
            val:0,
        }
    },
    computed: {
        a:{
            get() {
                return this.val *2
            },
            set(value){
                this.val = Math.floor(value /2)
            },
        },
        b:{
            get() {
                return this.val *2
            },
            set(value){
                this.val = Math.floor(value /2)
            },
        },
    },
    created() {
        this.val = 10
    },
}
</script>
