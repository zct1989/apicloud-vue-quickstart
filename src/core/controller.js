import Vue from 'vue'

export default class Controller {
  constructor(App) {
    window.apiready = function () {
      new Vue({
        el: '#app',
        render: h => h(App)
      })
    }
  }
}