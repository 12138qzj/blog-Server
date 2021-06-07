'use strict';

const Controller = require('egg').Controller;
// const jwt = require('jsonwebtoken');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { request = {} } = ctx;
    // const userId = ctx.params.id;
    const user = await ctx.service.user.find(request.body.username);
    console.log('ctx-----------', ctx.request.body);
    console.log('request', request.body.username);
    console.log('user', user);
    if (!user.user) {
      ctx.body = {
        Token: null,
        errmsg: '密码错误',
        errno: 10000,
      };
    } else {
      // const { username, password} = user.user
      // const token = jwt.sign(user.user, {
      //   expiresIn: 60 * 60 * 24,
      //   algorithm: 'RS256',
      // });
      ctx.body = {
        data: {
          Token: 'token未做',
          userInfo: user.user,
        },
        errmsg: '登陆成功',
        errno: 0,
      };
    }
  }
}

module.exports = HomeController;
