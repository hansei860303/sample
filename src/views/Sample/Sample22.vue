<template>
    <div class="alert alert-primary">
        <p class="mt-3 h5">{{message}}</p>
        
        <p class="mt-3 h5">
            <input type="button" v-on:click="count" value="+" />
            &nbsp;{{counter}}&nbsp;
            <input type="button" v-on:click="reset" value="-" />
        </p>
    </div>
</template>

<script>
    export default{
        name: 'HelloWorld',
        computed:{
            message(){
                return this.$store.state.message
            },
            counter(){
                return this.$store.state.counter
            },
        },
        methods:{
            count(){
                this.$store.dispatch('count')
                console.log(this.$store.dispatch('count'));
            },
            reset(){
                this.$store.dispatch('reset')
            }
        }
    }
</script>