import Vue from 'vue'
import plugins from '../plugins'
import directives from '../utils/directives'
import filters from '../utils/filters'

// import '../assets/styles/api.css'

/**
 * 核心控制器
 */
export default class Controller {
  constructor (page) {
    console.log(1, process.env, 2)
    // 注册page
    this.page = page
    // 监听启动事件
    window.apiready = this.launch.bind(this)
  }

  /**
   * 启动逻辑
   */
  launch () {
    this.installPlugins()   // 安装插件
    this.installDirectives()   // 安装插件
    this.installFilters()   // 安装插件

    return new Vue({
      el: '#app',
      render: h => h(this.page)
    })
  }

  /**
   * 安装插件
   */
  installPlugins () {
    if (plugins) {
      Object.values(plugins).forEach(plugin => {
        Vue.use(plugin)
      })
    }
  }

  /**
   *  安装指令
   */
  installDirectives () {
    if (directives) {
      Object.entries(directives).forEach(([key, fun]) => {
        Vue.directive(key, fun)
      })
    }
  }

  /**
   * 安装过滤器
   */
  installFilters () {
    if (filters) {
      Object.entries(filters).forEach(([key, fun]) => {
        Vue.filter(key, fun)
      })
    }
  }
}
