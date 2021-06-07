'use strict';

const Controller = require('egg').Controller;
// const jwt = require('jsonwebtoken');
class ArticleController extends Controller {

  // 获取所有文章
  async getAll() {
    const { ctx } = this;
    // const userId = ctx.params.id;
    const result = await ctx.service.articleService.getAll();
    // console.log('result文章', result);
    ctx.body = {
      data: {
        data: result,
      },
      errmsg: 'success',
      errno: 0,
    };
  }

  // 获取所有文章
  async getFindArticle() {
    const { ctx } = this;
    const { request = {} } = ctx;
    // const userId = ctx.params.id;
    // const user = await ctx.service.user.find(request.body.username);
    // const userId = ctx.params.id;
    // console.log('request文章', request);
    const result = await ctx.service.articleService.findArticle(request.body.id);
    // console.log('result文章', result);
    ctx.body = {
      data: {
        data: result,
      },
      errmsg: 'success',
      errno: 0,
    };
  }

  // 修改文章
  async upDateArticle() {
    // const { ctx } = this;
    // const { request = {} } = ctx;
    // const result = await ctx.service.articleService.findArticle(request.body.id);


  }
}

module.exports = ArticleController;
