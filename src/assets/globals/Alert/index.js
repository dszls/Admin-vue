import MyAlert from './alert.vue'
// 这里是重点
console.log(MyAlert.name)
const Alert = {
    install: function(Vue,options){
        Vue.component(MyAlert.name,MyAlert)

    }
}

// 导出组件
export default Alert
