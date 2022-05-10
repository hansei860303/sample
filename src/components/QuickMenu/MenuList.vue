<template>
  <div class="menuList">
    <h3>{{ msg }}</h3>
    <br />
    <ul>
      <li><router-link to="/customerList">顧客情報</router-link></li>
      |
      <li><router-link to="/customerShow/1">顧客情報詳細</router-link></li>
      |
      <li><router-link to="/customerEdit/1">顧客情報更新</router-link></li>
      |
      <li><router-link to="/customerEdit/noparams">顧客情報新規</router-link></li>
      |

    </ul>
    <h3>開発用Sample</h3>
    <ul>
      <li><router-link to="/Sample1">Sample1</router-link></li>
      |
      <li><router-link to="/Sample2">Sample2</router-link></li>
      |
      <li><router-link to="/Sample3">Sample3</router-link></li>
      |
      <li><router-link to="/Sample4">Sample4</router-link></li>
      |
      <li><router-link to="/Sample5">Sample5</router-link></li>
      |<br />
      <li><router-link to="/Sample6">Sample6</router-link></li>
      |
      <li><router-link to="/Sample7">Sample7</router-link></li>
      |
      <li><router-link to="/Sample8">Sample8</router-link></li>
      |
      <li><router-link to="/Sample9">Sample9</router-link></li>
      |
      <li><router-link to="/Sample10">Sample10</router-link></li>
      |<br />
      <li><router-link to="/Sample11">Sample11</router-link></li>
      |
      <li><router-link to="/Sample12">Sample12</router-link></li>
      |
      <li><router-link to="/Sample13">Sample13</router-link></li>
      |
      <li><router-link to="/Sample14">Sample14</router-link></li>
      |
      <li><router-link to="/Sample15">Sample15</router-link></li>
      |<br />
      <li><router-link to="/Sample16">Sample16</router-link></li>
      |
      <li><router-link to="/Sample17">Sample17</router-link></li>
      |
      <li><router-link to="/Sample18">Sample18</router-link></li>
      |
      <li><router-link to="/Sample19">Sample19</router-link></li>
      |
      <li>
        <router-link
          :to="{ name: 'Sample20', params: { name: 'TARO', age: '35' } }"
          >Sample20</router-link
        >
      </li>
      |<br />
      <li><router-link to="/Sample21">Sample21</router-link></li>
      |
      <li><router-link to="/Sample22">Sample22</router-link></li>
      |
      <li><router-link to="/Sample23">Sample23</router-link></li>
      |
      <li><router-link to="/Sample24">Sample24</router-link></li>
      |
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuList",
  props: {
    msg: String,
  },
};
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
