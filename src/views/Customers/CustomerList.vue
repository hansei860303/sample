<template>
  <nav class="navbar navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="">商品管理デモ</a>
      </div>
    </div>
    </nav>
  <div class="container">
    <div class="card card-primary mb-3">
        <div class="card-header">
          <h5 class="card-title">商品リスト<a href="" class="btn btn-success float-right">新規</a></h5>
        </div>
        <div class="card-body">
          <p>商品がありません。</p>
        </div>
        <table class="table table-striped">
          <thead>
              <tr>
                <th style="width: 10%">ID</th>
                <th style="width: 30%">商品名</th>
                <th style="width: 10%">価格</th>
                <th style="width: 20%">ベンダー</th>
                <th style="width: 30%"></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="float-right">
                  <form>
                    <a href="">詳細</a>&nbsp;
                    <a href="">変更</a>&nbsp;
                    <a href="">削除</a>&nbsp;
                  </form>
                </td>
               </tr>
           </tbody>
        </table>
    </div>
   </div>
</template>