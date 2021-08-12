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
        <h5 class="card-title" v-if="flag">顧客更新</h5>
        <h5 class="card-title" v-else>顧客新規</h5>
      </div>
      <div class="card-body">
        <div class="text-danger">{{ message }}</div>
        <div class="form-group row" v-show="flag">
          <label class="col-md-2 control-label">ID</label>
          <div class="col-md-1">
            {{ id }}
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2 control-label">顧客名</label>
          <div class="col-md-10">
            <input class="form-control" type="text" v-model="customerName" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2 control-label">お問い合わせ</label>
          <div class="col-md-10">
            <input class="form-control" type="text" v-model="mainContactName" />
            <div class="text-danger"></div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2 control-label">国</label>
          <div class="col-md-10">
            <input class="form-control" type="text" v-model="country" />
            <div class="text-danger"></div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2 control-label">都市</label>
          <div class="col-md-10">
            <input class="form-control" type="text" v-model="city" />
            <div class="text-danger"></div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2 control-label">アドレス</label>
          <div class="col-md-10">
            <input class="form-control" type="text" v-model="addressLine1" />
            <div class="text-danger"></div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2 control-label">郵便番号</label>
          <div class="col-md-10">
            <input class="form-control" type="text" v-model="postalCode" />
            <div class="text-danger"></div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2 control-label">電子メール</label>
          <div class="col-md-10">
            <input class="form-control" type="text" v-model="contactEmail" />
            <div class="text-danger"></div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-2 control-label">電話番号</label>
          <div class="col-md-10">
            <input class="form-control" type="text" v-model="mainPhone" />
            <div class="text-danger"></div>
          </div>
        </div>
        <div class="form-group row">
          <div class="offset-md-2 col-md-9">
            <button class="btn btn-success m-2" v-on:click="doCreateOrUpdate">
              保存
            </button>
            <button class="btn btn-success m-2" v-show="!flag" @click="doPaste">
              ペースト
            </button>
          </div>
        </div>
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
      message: null,
      flag: false,
    };
  },
  methods: {
    doCreateOrUpdate() {
      this.message = null;
      let url = url1 + "save";
      let params = {};
      if (this.$route.params.id == "noparams") {
        params = {
          customerName: this.customerName,
          mainContactName: this.mainContactName,
          country: this.country,
          city: this.city,
          addressLine1: this.addressLine1,
          postalCode: this.postalCode,
          contactEmail: this.contactEmail,
          mainPhone: this.mainPhone,
        };
      } else if (this.result !== null) {
        params = {
          id: this.id,
          customerName: this.customerName,
          mainContactName: this.mainContactName,
          country: this.country,
          city: this.city,
          addressLine1: this.addressLine1,
          postalCode: this.postalCode,
          contactEmail: this.contactEmail,
          mainPhone: this.mainPhone,
        };
      }
      axios
        .put(url, params)
        .then((response) => {
          this.result = response.data;
          if (this.$route.params.id == "noparams") {
            this.message = "レコード【新規】しました。";
          } else {
            this.message = "レコード【更新】しました。";
          }
        })
        .catch((error) => {
          console.log(error);
          this.result = null;
          if (this.$route.params.id == "noparams") {
            this.message = "レコード【新規】失敗しました。";
          } else {
            this.message = "レコード【更新】失敗しました。";
          }
        });
    },
    doFindById() {
      if (
        this.$route.params.id !== null &&
        this.$route.params.id !== "noparams"
      ) {
        let url = url1 + "findById/" + this.$route.params.id;
        axios
          .get(url)
          .then((response) => {
            this.result = response.data;
            if (this.result != null) {
              this.flag = true;
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
    doPaste() {
      let record = this.$store.state.c.customerRecord;
      if (record != null) {
        this.customerName = record.customerName;
        this.mainContactName = record.mainContactName;
        this.country = record.country;
        this.city = record.city;
        this.addressLine1 = record.addressLine1;
        this.postalCode = record.postalCode;
        this.contactEmail = record.contactEmail;
        this.mainPhone = record.mainPhone;
      }
    },
  },
  mounted() {
    this.doFindById();
  },
};
</script>

