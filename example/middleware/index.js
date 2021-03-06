const path = require('path')
const koaNunjucks = require('koa-nunjucks-2')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const pureKoaRouter = require('../../index')
// const routes = require('../routes') 传文件内容，数组
// const routes = path.join(__dirname, '../routes') 传文件目录
const routes = path.join(__dirname, '../routes/tasks.js')  // 传文件名称
const controllerDir = path.join(__dirname, '../controller')

module.exports = (app) => {
  app.use(koaNunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }))
  app.use(bodyParser({ enableTypes: [ 'json', 'form', 'text' ] }))
  app.use(koaStatic(path.join(__dirname, '../static')))
  app.use(pureKoaRouter({
    routes,
    controllerDir
  }))
}
