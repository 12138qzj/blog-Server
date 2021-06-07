'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // console.log('controller______', controller);
  //   router.get('/blogServer', controller.home.index);
  router.post('/blogServer/login', controller.home.index); // 登陆
  router.post('/blogServer/findArticle', controller.article.getFindArticle); // 查找文章

  router.post('/blogServer/editArticle', controller.editArticle.index); // 获取文章编辑内容
  router.post('/blogServer/register', controller.register.index); // 注册

  router.get('/blogServer/getInfo', controller.article.getInfo); // 获取用户信息
  router.get('/blogServer/getArticleAuth', controller.article.getArticleAuth); // 获取文章权限
  router.get('/blogServer/addArticleAuth', controller.article.addArticleAuth); // 添加文章
  router.get('/blogServer/deleteArticleAuth', controller.article.deleteArticleAuth); // 删除文章
  router.get('/blogServer/getTeamSpace', controller.article.getTeamSpace); // 获取团队空间
  router.get('/blogServer/getCollection', controller.article.getCollection); // 获取收藏文章
  router.get('/blogServer/getPersonal', controller.article.getPersonal); // 获取个人文章
  router.get('/blogServer/getTeamSpace', controller.article.getTeamSpace); // 获取团队空间
  router.get('/blogServer/getSpaceArticle', controller.article.getSpaceArticle); // 获取文章空间

  router.get('/blogServer/getArticle', controller.article.getAll); // 获取所有文章
  router.post('/blogServer/findArticle', controller.article.getFindArticle); // 查找文章

  // router.post('/blogServer/upDateArticle', controller.article.upDateArticle); // 修改文章

  // router.get('/login', controller.news.list);
};

