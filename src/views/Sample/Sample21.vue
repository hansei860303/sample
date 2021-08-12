<template>
    <div class="alert alert-primary">
        <p class="mt-3 h5">{{message}}</p>
        <p class="mt-3 h5">{{$store.state.counter}}</p>
    </div>
</template>

<script>
    export default{
        name: 'HelloWorld',
        computed:{
            message(){
                return this.$store.state.a.message
            },
        }
    }
</script>
