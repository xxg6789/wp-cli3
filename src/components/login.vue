<template>
  <div>
    <header class="header">
      <div class="fix_nav">
        <div style="max-width:768px;margin:0 auto;background:#000000;position: relative;">
          <a class="nav-left back-icon" href="javascript:history.back();">返回</a>
          <div class="tit" style="font-size:18px;">会员登陆</div>
        </div>
      </div>
    </header>
    <div class="maincontainer">
      <div class="container itemdetail mini-innner">
        <div class="row">
          <div class="col-md-12 tal mt20">
            <form
              id="theForm"
              name="theForm"
              class="form-signin"
              action="/p/j_spring_security_check"
              method="POST"
            >
              <input
                type="hidden"
                id="returnUrl"
                name="returnUrl"
                value="http://m.legendshop.cn/p/orderDetails"
              >
              
              <input
                v-model="username"
                name="j_username"
                id="username"
                type="text"
                style="margin-bottom: -2px;-webkit-appearance:none; "
                class="form-control"
                placeholder="帐户名/手机号码"
                message="账号"
                required="true"
                autofocus
                tabindex="1"
              >
              <br>
              <input
                v-model="password"
                id="pwd"
                name="j_password"
                type="password"
                class="form-control"
                placeholder="请输入密码"
                message="密码"
                required="true"
                style="-webkit-appearance:none;"
                autocomplete="off"
                tabindex="2"
              >
              <label class="checkbox">
                <input
                  id="_spring_security_remember_me"
                  name="_spring_security_remember_me"
                  type="checkbox"
                  tabindex="4"
                > 记住我
                <a href="/forget" style="float:right">忘记密码</a>
              </label>
              <div class="clear"></div>
              <div class="col-xs-6 p0">
                <button
                  type="button"
                  class="btn btn-info btn-block"
                 
                  tabindex="5"
                  @click="checkLogin"
                >登 陆</button>
              </div>
              <div class="col-xs-5 p0" style="margin-left:10px;">
                <button
                  type="button"
                  class="btn btn-default btn-block"
                  @click="registerFn"
                  tabindex="6"
                >注 册</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as types from '../store/types'
export default {
  data(){
    return {
      username:'xxg',
      password:'xxg123'
    }
  },
  methods:{
    checkLogin(){
      this.$store.dispatch({
        type:types.CHECK_USER,
        username:this.username,
        password:this.password
      }).then(
        (data)=>{
          if(data.username==this.username && data.password==this.password){
            this.$router.push('/userhome')
          }else{
            this.$router.push('/error')
          }
        }
      )
    },
    registerFn(){
      this.$router.push('/reg')
    }
  }
}
</script>