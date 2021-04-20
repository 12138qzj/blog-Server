'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx, app } = this;
        // const userId = ctx.params.id;
        const user = await ctx.service.user.find(18879942330);
        console.log('user', user.user, user.user.username);
        // ctx.body = `hi, egg12f${user.user.username}`;
        ctx.body = user.user;

    }
}

module.exports = HomeController;