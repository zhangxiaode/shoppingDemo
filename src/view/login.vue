<template>
  <div class="login">
    <el-form
      class="loginForm"
      status-icon
      label-width="70px"
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="logo">这里是logo</div>
      <el-form-item class="formItem" label="用户名" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入登录用户名" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item class="formItem" label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入登录密码"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label-width="0" class="loginBtns">
        <el-button @click="goRegister()">注册</el-button>
        <el-button type="primary" @click="handleLogin()">登录</el-button>
        <el-button @click="goModifyPwd()">忘记密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ajax from "@/utils/ajax.js";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 32,
            message: "用户名长度在 6 到 32 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  components: {},
  mounted() {
    ajax.get("/cms/category/list").then(res => {
      console.log(res);
    });
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$router.push("/page/home");
        } else {
          return false;
        }
      });
    },
    goRegister() {
      this.$router.push("/register");
    },
    goModifyPwd() {
      this.$router.push("/modifyPwd");
    }
  }
};
</script>

<style scoped lang='less'>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  // background: url("../assets/loginBg.jpg") no-repeat center center;
  background-size: 100% 100%;
  .loginForm {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 400px;
    margin-top: -200px;
    margin-left: -250px;
    .logo {
      font-size: 36px;
      color: #ccc;
      text-align: center;
      margin-bottom: 100px;
    }
    .formItem {
      margin-bottom: 30px;
    }
    .loginBtns {
      text-align: center;
    }
  }
}
</style>
