<template>
    <div class="alert alert-info">
        <p>{{ message }}</p>
        <div>
            <input class = "from-control" type="text" v-model="input">
            &nbsp;<button class="btn btn-primary" v-on:click="doAction">Click</button>
        </div>
    </div>
</template>
<script>
export  default {
    name: 'Hello:World',
    props: {
        title:String,
    },
    data() {
        return {
            message: 'お名前は？',
            input: 'no name',
        }
    },
    methods: {
        doAction() {
            this.message = 'こんにちは' + this.input + 'さん！'
            this.$emit('result-event', this.input)
        }
    }
}
</script>