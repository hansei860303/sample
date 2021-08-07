<template>
    <div class="alert alert-primary">
        <h1>{{ title }}</h1>
        <pre v-on:click = "clear">{{ message }}</per>
        <br>
        <div>
            <input type = "text"  v-on:keydown="type" 
            class = "from-control"></div>     
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data: function(){
        return {
            title: 'Event',
            message: '',
        }
    },
    methods:{
        type(event) {
            this.message += event.key + ' '
            if (event.key == "Escape") {
                this.message = ''
            }
            event.target.value = ''
        },
        clear() {
            this.message = ''
        }
    },
}
</script>