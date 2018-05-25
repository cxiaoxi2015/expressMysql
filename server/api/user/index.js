/**
 * @description: 登录
 * @author: xxx
 * @date: 2018/3/16 17:28
 */

let models = require('../db')
let express = require('express')
let router = express.Router()
let mysql = require('mysql')
let $sql = require('../sqlMap')

// 连接数据库
const conn = mysql.createConnection(models.mysql)

conn.connect()
let jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '403',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// 登录接口
router.post('/login', (req, res) => {
  let mObj = {}
  for (let obj in req.body) {
    mObj = JSON.parse(obj)
  }
  let sql = `select * from user where user_name='${mObj.username}'`
  conn.query(sql, function (err, result) {
    if (err) {
      res.send({ 'msg': '接口错误', 'code': 500 }).end()
    } else {
      if (result.length === 0) {
        res.send({ 'msg': '该用户不存在', 'code': 402 }).end()
      } else {
        let dataw = result[0]
        // login success
        if (dataw.user_pass === mObj.password) {
          // // save the session
          // req.session['user_id'] = dataw.user_id;
          dataw.msg = '登录成功'
          dataw.code = 200
          res.send(dataw).end()
        } else {
          res.send({ 'msg': '密码不正确', 'code': 401 }).end()
        }
      }
    }
  })
})

module.exports = router
