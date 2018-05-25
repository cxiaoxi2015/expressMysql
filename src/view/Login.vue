<template>
  <div id="login">
    <Row style="padding-top:150px">
      <Col span="6" offset="16">
        <div style="padding: 20px">
          <Card :bordered="false">
            <p slot="title">登 录</p>
            <Form ref="formLogin" :label-width="80">
              <FormItem label="用户名" prop="userName">
                <Input type="text" v-model="username" />
              </FormItem>
              <FormItem label="密 码" prop="password">
                <Input type="password" v-model="password" />
              </FormItem>
              <FormItem>
                <Button type="primary" @click="loginIn">登 录</Button>
                <Button type="ghost" @click="loginReset('formCustom')" style="margin-left: 8px">重 置</Button>
              </FormItem>
            </Form>
          </Card>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    // 登录
    loginIn () {
      this.axios.post('http://127.0.0.1:9999/api/user/login', {
        username: this.username,
        password: this.password
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
      }).then((res) => {
        // console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    },
    // 重置
    loginReset () {}
  }
}
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss">
  #login{
    width:100%;
    height:100%;
    background:url("../assets/images/login_bg2.jpg") 100% 100%;
    background-size:cover;
  }
</style>
