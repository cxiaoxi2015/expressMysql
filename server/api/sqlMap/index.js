/**
 * @description: SQL语句映射文件
 * @author: xxx
 * @date: 2018/3/16 16:37
 */
// sql语句
let sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, age) values (0, ?, ?)'
    // login: `select count(*) from user where user_pass='${password}' and user_name='${username}'`
  }
}

module.exports = sqlMap
