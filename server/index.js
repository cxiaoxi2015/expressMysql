/**
 * @description: Express服务器入口文件
 * @author: xxx
 * @date: 2018/3/16 16:37
 */

// node 后端服务器

const userApi = require('./api/user')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
// 后端api路由
app.use('/api/user', userApi)

// 监听端口
app.listen(9999)
console.log('success listen at port:9999......')
