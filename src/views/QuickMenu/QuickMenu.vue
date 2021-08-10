<template>
  <div class="quickMenu">
    <img alt="Vue logo" src="../../assets/logo.png">
    <MenuList msg="QuickMenu"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuList from '@/components/QuickMenu/MenuList.vue'

export default {
  name: 'QuickMenu',
  components: {
    MenuList
  }
}
</script>
