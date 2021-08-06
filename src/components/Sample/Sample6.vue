<template>
    <div class="aler alert-primary">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
        <hr>
        <p>Number: {{ num }}</p>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props:{
        title: String,
        num: Number,
    },
    data(){
        return {
            message: 'チェック'
        }
    },
}
</script>
