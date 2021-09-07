<template>
  <div class="from-group">
    <input type="number" v-model="findID" />
    <button class="btn btn-success m-2" @click="doFindById(findID)">
      検索
    </button>
  </div>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>顧客名&nbsp;</th>
        <th>お問い合わせ&nbsp;</th>
        <th>国&nbsp;</th>
        <th>都市&nbsp;</th>
        <th>アドレス&nbsp;</th>
        <th>郵便番号&nbsp;</th>
        <th>電子メール&nbsp;</th>
        <th>電話番号</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="customer in result" :key="customer.id">
        <td>{{ customer.id }}</td>
        <td>{{ customer.customerName }}</td>
        <td>{{ customer.mainContactName }}</td>
        <td>{{ customer.country }}</td>
        <td>{{ customer.city }}</td>
        <td>{{ customer.addressLine1 }}</td>
        <td>{{ customer.postalCode }}</td>
        <td>{{ customer.contactEmail }}</td>
        <td>{{ customer.mainPhone }}</td>
      </tr>
    </tbody>
  </table>
  <p></p>
</template>

<script>
export default {
  name: "Customers",
    setup(){
        const data ={
            msg: 'This is ref-value!',
            count:0
        }
        return {
            data
        }
    }
}
</script>