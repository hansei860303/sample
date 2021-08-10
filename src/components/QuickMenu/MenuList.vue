<template>
  <div class="menuList">
    <h3>{{ msg }}</h3>
    <br>
    <ul>
      <li><a href="/customerList">顧客情報一覧</a></li> |
      <li><a href="/customerEdit">顧客情報新規</a></li> |
      <li><a href="/customerShow">顧客情報詳細</a></li> |<br>
      <li><a href="">配送会社情報一覧</a></li> |
      <li><a href="">配送会社情報新規</a></li> |
      <li><a href="">配送会社情報詳細</a></li> |<br>
      <li><a href="">商品情報一覧</a></li> |
      <li><a href="">商品情報新規</a></li> |
      <li><a href="">商品情報詳細</a></li> |<br>
      <li><a href="">注文一覧</a></li> | 
      <li><a href="">注文新規</a></li> |
      <li><a href="">注文明細新規</a></li> |<br>      
    </ul>
    <h3>Sample</h3>
    <ul>
      <li><a href="/Sample1">Sample1</a></li> |
      <li><a href="/Sample2">Sample2</a></li> |
      <li><a href="/Sample3">Sample3</a></li> |
      <li><a href="/Sample4">Sample4</a></li> |
      <li><a href="/Sample5">Sample5</a></li> |
      <br>
      <li><a href="/Sample6">Sample6</a></li> |
      <li><a href="/Sample7">Sample7</a></li> |
      <li><a href="/Sample8">Sample8</a></li> |
      <li><a href="/Sample9">Sample9</a></li> |
      <li><a href="/Sample10">Sample10</a></li> |
      <br>
      <li><a href="/Sample11">Sample11</a></li> |
      <li><a href="/Sample12">Sample12</a></li> |
      <li><a href="/Sample13">Sample13</a></li> |
      <li><a href="/Sample14">Sample14</a></li> |
      <li><a href="/Sample15">Sample15</a></li> |
      <br>
      <li><a href="/Sample16">Sample16</a></li> |
      <li><a href="/Sample17">Sample17</a></li> |
      <li><a href="/Sample18">Sample18</a></li> |
      <li><a href="/Sample19">Sample19</a></li> |
      <li><router-link :to="{name:'Sample20',params:{name:'TARO',age:'35'}}">Sample20</router-link></li> |
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
