!function(){function _getCompiled(nools){return function(){return function(options){options=options||{};var defined={Array:Array,String:String,Number:Number,Boolean:Boolean,RegExp:RegExp,Date:Date,Object:Object},scope=options.scope||{},optDefined=options.defined||{};for(var i in optDefined)defined[i]=optDefined[i];return nools.flow("scope-compiled",function(){var Message=defined.Message=this.addDefined("Message",function(){var Defined=function(message){this.message=message},proto=Defined.prototype;return proto.message="",proto.constructor=function(message){this.message=message},Defined}());scope.matches=function(str,regex){return regex.test(str)},scope.console=console,this.rule("Hello",{scope:scope},[[Message,"m","matches(m.message, /^hello(\\s*world)?$/)"]],function(facts,flow){var m=facts.m,m=facts.m,modify=flow.modify;modify(m,function(){this.message+=" goodbye"})}),this.rule("Goodbye",{scope:scope},[[Message,"m","matches(m.message, /.*goodbye$/)"]],function(){})})}}()}"undefined"!=typeof exports?"undefined"!=typeof module&&module.exports&&(module.exports=_getCompiled(require("../../"))):"function"==typeof define&&define.amd?define(["../../"],function(nools){return _getCompiled(nools)}):_getCompiled(this.nools)()}.call(this);