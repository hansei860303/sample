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
      <div class="card-header">
        <h5 class="card-title">顧客詳細</h5>
      </div>
      <div class="card-body">
        <div>
          <div class="form-group row">
            <label class="col-md-2">ID</label>
            <div>{{ id }}</div>
          </div>
          <div class="form-group row">
            <label class="col-md-2">顧客名</label>
            <div>{{ customerName }}</div>
          </div>
          <div class="form-group row">
            <label class="col-md-2">お問い合わせ</label>
            <div>{{ mainContactName }}</div>
          </div>
          <div class="form-group row">
            <label class="col-md-2">国</label>
            <div>{{ country }}</div>
          </div>
          <div class="form-group row">
            <label class="col-md-2">都市</label>
            <div>{{ city }}</div>
          </div>
          <div class="form-group row">
            <label class="col-md-2">アドレス</label>
            <div>{{ addressLine1 }}</div>
          </div>
          <div class="form-group row">
            <label class="col-md-2">郵便番号</label>
            <div>{{ postalCode }}</div>
          </div>
          <div class="form-group row">
            <label class="col-md-2">電子メール</label>
            <div>{{ contactEmail }}</div>
          </div>
          <div class="form-group row">
            <label class="col-md-2">電話番号</label>
            <div>{{ mainPhone }}</div>
          </div>
        </div>
        <button class="btn btn-success m-2" @click="doCopy">コピー</button>
      </div>
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
      result: null,
      id: null,
      customerName: null,
      mainContactName: null,
      country: null,
      city: null,
      addressLine1: null,
      postalCode: null,
      contactEmail: null,
      mainPhone: null,
    };
  },
  methods: {
    doFindById() {
      if (this.$route.params.id !== null) {
        let url = url1 + "findById/" + this.$route.params.id;
        axios
          .get(url)
          .then((response) => {
            this.result = response.data;
            if (this.result != null) {
              this.id = this.result.id;
              this.customerName = this.result.customerName;
              this.mainContactName = this.result.mainContactName;
              this.country = this.result.country;
              this.city = this.result.city;
              this.addressLine1 = this.result.addressLine1;
              this.postalCode = this.result.postalCode;
              this.contactEmail = this.result.contactEmail;
              this.mainPhone = this.result.mainPhone;
            }
          })
          .catch((error) => {
            console.log(error);
            this.result = null;
          });
      }
    },
  },
  mounted() {
    this.doFindById();
  },
};
</script>