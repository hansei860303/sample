<template>
    <div id="app">
        <HelloJSX title="Composition API"
         msg="This is Compositon API sample."/>
    </div>
</template>

<script>
import HelloJSX from '@/components/Sample/Sample17.vue'

export default {
    name: 'app',
    components:{
        HelloJSX
    },
}
</script>