//这里封装对业务逻辑处理的公用函数

export default{
  a:(str)=>{
    console.log(str);
  },
  validate:{//正则表达式
    tel:function(telNum){
      return /^1[34578]\d{9}$/.test(telNum)
    },
    telOrPhone:function(telNum){
      return (/^1[34578]\d{9}$/.test(telNum)) || (/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/.test(telNum))
    },
    psw:function(psw){//匹配6-20位的任何字类字符，包括下划线。与“[A-Za-z0-9_]”等效。
      return /^(\w){6,20}$/.test(psw)
    },

    email:function(email){//匹配6-20位的任何字类字符，包括下划线。与“[A-Za-z0-9_]”等效。
      return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)
    },
    mustnum:function(val){//只能输入数字
      return /^\d+$/.test(val)
    },
    security_code:function(val){//验证码
      return /^\d{6}$/.test(val)
    },
    certificate:function(val){//验证身份证号
      return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(val)
    },
    carNum:function(val){
      var a=/^[a-z0-9]+$/i.test(val)
      var b=val.length==5 || val.length==6
      return a && b
    }
  },
  validator:{//表单自定义验证
    checkBankCard:function(rule, value, callback){

      if (!( /^\d{15}|\d{20}$/.test(value) ) ) {
        callback(new Error('请输入15到19位的银行卡号'));
      } else {
        callback();
      }
    },
    num:(rule, value, callback) => {
      if (!( /^\d+$/.test(value) ) ) {
        callback(new Error('请输入数字'));
      } else {
        callback();
      }
    },
    tel:(rule, value, callback) => {
      if (!( /^1[34578]\d{9}$/.test(value) ) ) {
        callback(new Error('请输入正确手机号'));
      } else {
        callback();
      }
    },
    mustFixed2:(rule, value, callback) => {
      if (!( /^-?\d+\.?\d{0,2}$/.test(value) ) ) {
        callback(new Error('请输入精确到小数点后两位的数字'));
      } else {
        callback();
      }
    },
    canFix2:(rule, value, callback) => {
      if(!(  /^\d+(\.\d+)?$/.test(value) ) ){

        callback(new Error('请输入数字'));
      }else {
        callback();
      }


    },
    telOrPhone:(rule, value, callback) => {
      if ((! (/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/.test(value) ))   && (!( /^1[34578]\d{9}$/.test(value) ))   ) {
        callback(new Error('请填写如010-XXXXXXX固定电话或手机号'));
      } else {
        callback();
      }
    },
    psw:(rule, value, callback) => {
      if (!( /^\w+$/.test(value) ) ) {
        callback(new Error('请输入英文、数字、下划线组合的密码'));
      } else {
        callback();
      }
    },
    carNum:(rule, value, callback) => {
      if (!( /^[a-z0-9]+$/i.test(value) ) ) {
        callback(new Error('请输入数字与字母组合'));
      } else if(val.length!=6 || val.length!=5){
        callback(new Error('请输入5~6位的车牌号'));
      }else{
        callback();
      }
    },
  },




}
