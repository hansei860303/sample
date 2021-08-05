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

