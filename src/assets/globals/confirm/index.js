import MyConfirm from './confirm.vue'
// 这里是重点
console.log(MyConfirm.name)
const Confirm = {
    install: function(Vue,options){
        Vue.component(MyConfirm.name,MyConfirm)

    }
}

// 导出组件
export default Confirm
