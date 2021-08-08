<template>
    <div class="alert alert-primary">
        <h1>{{title}}</h1>
        <pre>{{ message }}</pre>
        <br>
        <div class="area" 
        v-on:click.="click"
        v-on:click.exact="exact"
        v-on:click.shift="shift"
        v-on:click.ctrl="ctrl"
        v-on:click.alt="alt">
            click here!
        </div>
    </div>
</template>

<script>
export default {
        name: 'HelloWorld',
    data() {
        return {
            title: 'Event',
            message: '',
        }
    },
    methods: {
        click() {
            this.message = 'click'
        },
        exact() {
            this.message += '**no any key**'
        },
        shift() {
            this.message += '[shift]'
        },
        ctrl() {
            this.message += '[ctrl]'
        },
        alt() {
            this.message += '[alt]'
        },
    },
}
</script>

<style>
.area {
    width:300px;
    height:100px;
    background-color: black;
    padding:10px;
    font-size:20pt;
}
</style>