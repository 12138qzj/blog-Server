const Service = require('egg').Service;
// app/service/user.js
class UserService extends Service {
    async find(uid) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        console.log('1111', this.ctx.mysql, '_+_+_+_+_+_+_++_+', this.app);
        console.log('____________________', this.ctx.mysql, this.ctx.db, this);

        // const user = await this.ctx.db.query('select * from user ');
        // const user = await this.app.mysql.query('select * from user where username=?', uid);
        const user = await this.app.mysql.get('user', { username: uid });

        // eg：
        // const post = await this.app.mysql.get('posts', { id: 12 });
        // => SELECT * FROM `posts`
        // WHERE `id` = 12 LIMIT 0, 1;

        // const user = await this.ctx;


        return { user };
    }
}
module.exports = UserService