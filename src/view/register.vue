<template>
  <div class="register">
    <el-form
      class="registerForm"
      status-icon
      label-width="80px"
      ref="registerForm"
      :model="registerForm"
      :rules="registerRules"
    >
      <div class="logo">这里是logo</div>
      <el-form-item class="formItem" label="用户名" prop="username">
        <el-input v-model="registerForm.username" placeholder="请输入登录用户名" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item class="formItem" label="密码" prop="password">
        <el-input
          type="password"
          v-model="registerForm.password"
          placeholder="请输入登录密码"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item class="formItem" label="确认密码" prop="password">
        <el-input
          type="password"
          v-model="registerForm.password"
          placeholder="请重新输入登录密码"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label-width="0" class="registerBtns">
        <el-button @click="goLogin()">登录</el-button>
        <el-button type="primary" @click="handleRegister()">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      registerForm: {
        username: "",
        password: "",
        confirmPwd: ""
      },
      registerRules: {
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
        ],
        confirmPwd: [
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
  mounted() {},
  methods: {
    handleRegister() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.$router.push("/page/home");
        } else {
          return false;
        }
      });
    },
    goLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped lang='less'>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  // background: url("../assets/loginBg.jpg") no-repeat center center;
  background-size: 100% 100%;
  .registerForm {
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
    .registerBtns {
      text-align: center;
    }
  }
}
</style>
