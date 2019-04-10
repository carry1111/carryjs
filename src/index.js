(function() {
    var carry_api = {
        _typeof: function(target){
            var template = {
                "[object Array]" : "array",
                "[object Object]" : "object",
                "[object Number]" : "number - object",
                "[object Boolean]" : "boolean - object",
                "[object String]" : "string - object",
            }
            if(target === null){
                return "null";
            }
            if(typeof(target) == 'object'){
                //数组
                //对象
                //包装类
                var str = Object.prototype.toString.call(target);
                return template[str];
            }else{
                return typeof(target);
            }
        }
    };
    this.carryjs = carry_api;
})()