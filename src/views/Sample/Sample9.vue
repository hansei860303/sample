<template>
    <div class="aler alert-primary">
        <h1>{{ title }}</h1>
        <pre v-on:click="clear">{{message}}</pre>
        <br>
        <div id="out" class="out" v-on:click="a_event">A
            <div id="mid" class="mid" v-on:click="b_event">B
                <div id="in" class="in" v-on:click="c_event">C
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'HelloWorld',
    data: function(){
        return {
            title: 'Event',
            message: 'イベントの伝播について。\n',
        }
    },
    methods:{
        a_event(event){
            this.message += "A-Event [" + event.target.id
            + '➡'+ event.currentTarget.id + "]\n"
        },
        b_event(event){
            this.message += "B-Event [" + event.target.id
            + '➡'+ event.currentTarget.id + "]\n"
        },
        c_event(event){
            this.message += "C-Event [" + event.target.id
            + '➡'+ event.currentTarget.id + "]\n"
        },
        clear(){
            this.message = 'イベントの伝播について。\n'
        }         
    },
}
</script>
