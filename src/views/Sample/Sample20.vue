<template>
<div id="app">
    <div>
        <router-link :to="{name:'Sample20',params:{name:'TARO',age:'35'}}" class="btn btn-primary mx-2">
            Go to TARO
        </router-link>
        <router-link :to="{name:'Sample20',params:{name:'HANAKO',age:'25'}}" class="btn btn-warning">
            Go to HANAKO
        </router-link>
    </div>
    <p></p>
    <div class="alert alert-primary">
        <h5>{{'名前は' +'['+ name +']' }}</h5>
        <p class="mt-3 h5">{{'年齢は' +'['+ age +']' }}</p>
    </div>
</div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            name: this.$route.params.name,
            age: this.$route.params.age,
        }
    },
    created() {
        this.fetchData()
    },    
    watch: {
        $route:'fetchData'
    },
    methods: {
        fetchData() {
            this.name = this.$route.params.name
            this.age = this.$route.params.age
        }
    },

}
</script>