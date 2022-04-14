<template>
  <nav class="navbar navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="/customerList">顧客管理デモ</a>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="card card-primary mb-3">
      <div class="from-group">
        <input type="number" v-model="findID" />
        <button class="btn btn-success m-2" @click="doFindById(findID)">
          ID検索
        </button>
      </div>
      <div class="card-header">
        <h5 class="card-title">
          顧客リスト<a
            href="/customerEdit/noparams"
            class="btn btn-success float-right"
            >新規</a
          >
        </h5>
      </div>
      <div class="card-body" v-show="!flag">
        <p>商品がありません。</p>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>顧客名</th>
            <th>お問い合わせ</th>
            <th>国</th>
            <th>都市</th>
            <th>アドレス</th>
            <th>郵便番号</th>
            <th>電子メール</th>
            <th>電話番号</th>
            <th></th>
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
            <td class="float-right" v-show="flag">
              <a href="#" v-on:click.prevent.stop="doCustomerShow(customer.id)"
                >詳細</a
              >&nbsp;
              <a href="#" v-on:click.prevent.stop="doCustomerEdit(customer.id)"
                >変更</a
              >&nbsp; <a href="#" v-on:click.prevent.stop="doDeleteById(customer.id)">削除</a>&nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
a {
  color: #42b983;
}
</style>

<script>
import axios from "axios";

let url1 = "http://localhost:9001/api/customers/";

export default {
  name: "Customers",
  data() {
    return {
      result: [],
      findID: null,
      flag: true,
    };
  },
  methods: {
    doFindAll() {
      this.result = [];
      let url = url1 + "findAll/-1";
      axios
        .get(url)
        .then((response) => {
          this.result = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.result = null;
          this.flag = false;
        });
    },
    doFindById(findID) {
      this.result = [];
      if (findID == "" || findID == null) {
        this.doFindAll();
        if (this.result.length == 0) {
          this.flag = true;
        } else {
          this.flag = false;
        }
      } else {
        let url = url1 + "findById/" + findID;
        axios
          .get(url)
          .then((response) => {
            this.result.push(response.data);
            this.setFlag(response.data.id);
          })
          .catch((error) => {
            console.log(error);
            this.result = null;
          });
      }
    },
    setFlag(id) {
      if (typeof id == "undefined") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
    doCustomerShow(comtomerId) {
      this.$router.push({
        name: "CustomerShow",
        params: { id: comtomerId },
      });
    },
    doCustomerEdit(comtomerId) {
      this.$router.push({
        name: "CustomerEdit",
        params: { id: comtomerId },
      });
    },
    doDeleteById(comtomerId) {
      let url = url1 + "delete/" + comtomerId;
      axios
        .delete(url)
        .then((response) => {
          this.result = response.data;
          this.doFindAll();
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.doFindAll();
  },
};
</script>