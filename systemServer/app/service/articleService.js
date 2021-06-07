
/* eslint-disable */
const Service = require('egg').Service;
// app/service/user.js。
class ArticleService extends Service {
  async findArticle(articleId) {
    console.log('____________________查询文章数据____________________', );

    const article = await this.app.mysql.get('article', { id: articleId });

    return article;
  }

  async getAll() {
    console.log('____________________获取文章数据____________________', );

    const AllArticle = await this.app.mysql.select('article');
    // console.log('AllArticle', AllArticle)

    return AllArticle;
  }

  async upDateArticle(articleId) {

    // const row = {
    //   id: articleId
    //   name: 'fengmk2',
    //   otherField: 'other field value',    // any other fields u want to update
    //   modifiedAt: this.app.mysql.literals.now, // `now()` on db server
    // };
    
    // const options = {
    //   where: {
    //     custom_id: 456
    //   }
    // };
    // const result = await this.app.mysql.update('posts', row, options); // 更新 posts 表中的记录
    
    // => UPDATE `posts` SET `name` = 'fengmk2', `modifiedAt` = NOW() WHERE custom_id = 456 ;
    const result = await this.app.mysql.update('article', row);
    // 判断更新成功
    const updateSuccess = result.affectedRows === 1;

  }
}

module.exports = ArticleService;
