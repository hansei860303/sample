<template>
  <div class="menuList">
    <h3>{{ msg }}</h3>
    <ul>
      <li><a href="">顧客情報新規</a></li>
      <li><a href="">顧客情報一覧</a></li>
    </ul>
    <h3>Sample</h3>
    <ul>
      <li><a href="/Sample1">Sample1</a></li>
      <li><a href="/Sample2">Sample2</a></li>
      <li><a href="/Sample3">Sample3</a></li>
      <li><a href="/Sample4">Sample4</a></li>
      <li><a href="/Sample5">Sample5</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
