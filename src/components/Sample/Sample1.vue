<template>
    <div class="alert alert-info">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
        <div>
            <input class = "from-control" type="text" v-model="input">
            &nbsp;<button class="btn btn-primary" v-on:click="doAction">Click</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        title:String,
    },
    data() {
        return {
            message:'お名前は？',
            input:'no name',
        }
    },
    methods: {
        doAction() {
        this.message = 'こんにちは、' + this.input + 'さん!'
        }
    }
}
</script>