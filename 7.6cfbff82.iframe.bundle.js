(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{2773:function(module,exports,__webpack_require__){var isObject=__webpack_require__(303),now=__webpack_require__(2774),toNumber=__webpack_require__(2775),nativeMax=Math.max,nativeMin=Math.min;module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var timeWaiting=wait-(time-lastCallTime);return maxing?nativeMin(timeWaiting,maxWait-(time-lastInvokeTime)):timeWaiting}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return leadingEdge(lastCallTime);if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},2774:function(module,exports,__webpack_require__){var root=__webpack_require__(210);module.exports=function(){return root.Date.now()}},2775:function(module,exports,__webpack_require__){var baseTrim=__webpack_require__(2776),isObject=__webpack_require__(303),isSymbol=__webpack_require__(799),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}},2776:function(module,exports,__webpack_require__){var trimmedEndIndex=__webpack_require__(2777),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},2777:function(module,exports){var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},2836:function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__(19),$trim=__webpack_require__(1177).trim;$({target:"String",proto:!0,forced:__webpack_require__(2837)("trim")},{trim:function trim(){return $trim(this)}})},2837:function(module,exports,__webpack_require__){var PROPER_FUNCTION_NAME=__webpack_require__(548).PROPER,fails=__webpack_require__(22),whitespaces=__webpack_require__(1178);module.exports=function(METHOD_NAME){return fails((function(){return!!whitespaces[METHOD_NAME]()||"​᠎"!=="​᠎"[METHOD_NAME]()||PROPER_FUNCTION_NAME&&whitespaces[METHOD_NAME].name!==METHOD_NAME}))}},2838:function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__(19),IS_PURE=__webpack_require__(416),NativePromise=__webpack_require__(1768),fails=__webpack_require__(22),getBuiltIn=__webpack_require__(231),isCallable=__webpack_require__(49),speciesConstructor=__webpack_require__(1179),promiseResolve=__webpack_require__(1769),redefine=__webpack_require__(152);if($({target:"Promise",proto:!0,real:!0,forced:!!NativePromise&&fails((function(){NativePromise.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(onFinally){var C=speciesConstructor(this,getBuiltIn("Promise")),isFunction=isCallable(onFinally);return this.then(isFunction?function(x){return promiseResolve(C,onFinally()).then((function(){return x}))}:onFinally,isFunction?function(e){return promiseResolve(C,onFinally()).then((function(){throw e}))}:onFinally)}}),!IS_PURE&&isCallable(NativePromise)){var method=getBuiltIn("Promise").prototype.finally;NativePromise.prototype.finally!==method&&redefine(NativePromise.prototype,"finally",method,{unsafe:!0})}},2839:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,"._1XYpVjisGdqpjhnJhEI4Kd button{padding:.35em;transition:transform .25s cubic-bezier(0.18, 0.89, 0.32, 1.28)}._1XYpVjisGdqpjhnJhEI4Kd ._2porhtyYmcRGqtbrOo7r2V{font-size:.8em;margin-top:1em;margin-bottom:1em}._1RePrGzrASfRf4Gitb4ViR button:first-of-type{transform:translateY(5em)}._1RePrGzrASfRf4Gitb4ViR button:nth-of-type(2){transform:translateY(-5em)}","",{version:3,sources:["webpack://./client/components/login/LoginButtons/LoginButtons.module.scss"],names:[],mappings:"AAGE,gCACE,aAAA,CACA,8DAAA,CAGF,kDACE,cAAA,CACA,cAAA,CACA,iBAAA,CAKF,8CACE,yBAAA,CAGF,+CACE,0BAAA",sourcesContent:["@import '../../../styles/variables';\n\n.login-buttons {\n  button {\n    padding: 0.35em;\n    transition: transform 0.25s $cubic;\n  }\n\n  .separator {\n    font-size: 0.8em;\n    margin-top: 1em;\n    margin-bottom: 1em;\n  }\n}\n\n.register-mode {\n  button:first-of-type {\n    transform: translateY(5em);\n  }\n\n  button:nth-of-type(2) {\n    transform: translateY(-5em);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"login-buttons":"_1XYpVjisGdqpjhnJhEI4Kd",separator:"_2porhtyYmcRGqtbrOo7r2V","register-mode":"_1RePrGzrASfRf4Gitb4ViR"},__webpack_exports__.a=___CSS_LOADER_EXPORT___},2840:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,"._3Go4PYEWxMKFmEmMkM0LgW{display:block}._3Go4PYEWxMKFmEmMkM0LgW .label{display:block;font-size:.75em;font-weight:bold}._3Go4PYEWxMKFmEmMkM0LgW input[type=text],._3Go4PYEWxMKFmEmMkM0LgW input[type=password],._3Go4PYEWxMKFmEmMkM0LgW input[type=email],._3Go4PYEWxMKFmEmMkM0LgW textarea{width:100%;display:block}","",{version:3,sources:["webpack://./client/components/Form/FormGroup/FormGroup.module.scss"],names:[],mappings:"AAAA,yBACE,aAAA,CAEA,gCACE,aAAA,CACA,eAAA,CACA,gBAAA,CAGF,qKAIE,UAAA,CACA,aAAA",sourcesContent:['.form-group {\n  display: block;\n\n  :global .label {\n    display: block;\n    font-size: 0.75em;\n    font-weight: bold;\n  }\n\n  input[type="text"],\n  input[type="password"],\n  input[type="email"],\n  textarea {\n    width: 100%;\n    display: block;\n  }\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"form-group":"_3Go4PYEWxMKFmEmMkM0LgW"},__webpack_exports__.a=___CSS_LOADER_EXPORT___},2841:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,".xKVMy3c70VuaQzgrmPksj{transition:all .25s cubic-bezier(0.18, 0.89, 0.32, 1.28);background-color:#fff;padding:1em;border:1px solid silver;border-radius:5px;color:#000;text-align:left}._1J6A0L11ORhBBlWV03uT2O{font-size:.85em}","",{version:3,sources:["webpack://./client/components/login/Login.module.scss"],names:[],mappings:"AAEA,uBACE,wDAAA,CACA,qBAAA,CACA,WAAA,CACA,uBAAA,CACA,iBAAA,CACA,UAAA,CACA,eAAA,CAGF,yBACE,eAAA",sourcesContent:["@import '../../styles/variables';\n\n.login-form {\n  transition: all 0.25s $cubic;\n  background-color: white;\n  padding: 1em;\n  border: 1px solid silver;\n  border-radius: 5px;\n  color: black;\n  text-align: left;\n}\n\n.server-error {\n  font-size: 0.85em;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"login-form":"xKVMy3c70VuaQzgrmPksj","server-error":"_1J6A0L11ORhBBlWV03uT2O"},__webpack_exports__.a=___CSS_LOADER_EXPORT___},2849:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(2836),__webpack_require__(1770),__webpack_require__(2838),__webpack_require__(355),__webpack_require__(153),__webpack_require__(1765),__webpack_require__(1767),__webpack_require__(1766),__webpack_require__(1764),__webpack_require__(417);var react=__webpack_require__(0),debounce=__webpack_require__(2773),debounce_default=__webpack_require__.n(debounce),index_es=__webpack_require__(205),free_solid_svg_icons_index_es=__webpack_require__(100),User_service=__webpack_require__(794),Button=__webpack_require__(260),HorizontalSeparator=__webpack_require__(1136),injectStylesIntoStyleTag=__webpack_require__(11),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),LoginButtons_module=__webpack_require__(2839),options={insert:"head",singleton:!1},LoginButtons_LoginButtons_module=(injectStylesIntoStyleTag_default()(LoginButtons_module.a,options),LoginButtons_module.a.locals||{}),jsx_runtime=__webpack_require__(1);function LoginButtons(_ref){var mode=_ref.mode,onLogin=_ref.onLogin,onRegister=_ref.onRegister,loading=_ref.loading;return Object(jsx_runtime.jsxs)("div",{className:LoginButtons_LoginButtons_module["login-buttons"]+" "+("register"===mode?LoginButtons_LoginButtons_module["register-mode"]:"")+" text-center",children:[Object(jsx_runtime.jsx)(Button.a,{variant:"light",type:"register"===mode?"button":"submit",className:("register"===mode?"btn--light":"btn--blue")+" "+(loading&&"login"===mode?"btn--loading":"")+" btn w-100",loading:loading&&"login"===mode,disabled:loading,onClick:onLogin,children:"Intră în cont"}),Object(jsx_runtime.jsx)(HorizontalSeparator.a,{text:"sau",className:LoginButtons_LoginButtons_module.separator}),Object(jsx_runtime.jsx)(Button.a,{variant:"light",type:"register"===mode?"submit":"button",className:("register"===mode?"btn--blue":"btn--light")+" "+(loading&&"register"===mode?"btn--loading":"")+" btn w-100",loading:loading&&"register"===mode,disabled:loading,onClick:onRegister,children:"Înregistrează-te"})]})}LoginButtons.displayName="LoginButtons";try{LoginButtons.displayName="LoginButtons",LoginButtons.__docgenInfo={description:"",displayName:"LoginButtons",props:{mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"login"'},{value:'"register"'}]}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onRegister:{defaultValue:null,description:"",name:"onRegister",required:!0,type:{name:"() => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["client/components/login/LoginButtons/LoginButtons.tsx#LoginButtons"]={docgenInfo:LoginButtons.__docgenInfo,name:"LoginButtons",path:"client/components/login/LoginButtons/LoginButtons.tsx#LoginButtons"})}catch(__react_docgen_typescript_loader_error){}var Form=__webpack_require__(1181),FormGroup_module=__webpack_require__(2840),FormGroup_module_options={insert:"head",singleton:!1},FormGroup_FormGroup_module=(injectStylesIntoStyleTag_default()(FormGroup_module.a,FormGroup_module_options),FormGroup_module.a.locals||{});function FormGroup(_ref){var children=_ref.children,className=_ref.className;return Object(jsx_runtime.jsx)("div",{className:FormGroup_FormGroup_module["form-group"]+" "+className,children:children})}FormGroup.displayName="FormGroup";try{FormGroup.displayName="FormGroup",FormGroup.__docgenInfo={description:"",displayName:"FormGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["client/components/Form/FormGroup/FormGroup.tsx#FormGroup"]={docgenInfo:FormGroup.__docgenInfo,name:"FormGroup",path:"client/components/Form/FormGroup/FormGroup.tsx#FormGroup"})}catch(__react_docgen_typescript_loader_error){}var store,Checkbox=__webpack_require__(1180),InputWithIcon=__webpack_require__(1182),PasswordReveal=__webpack_require__(1183),user_actions=__webpack_require__(169);__webpack_require__(793),__webpack_require__(1728);var Login_module=__webpack_require__(2841),Login_module_options={insert:"head",singleton:!1},login_Login_module=(injectStylesIntoStyleTag_default()(Login_module.a,Login_module_options),Login_module.a.locals||{});function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var Login_Login=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Login,_Component);var _super=_createSuper(Login);function Login(_props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Login),(_this=_super.call(this,_props)).checkUsernameDebouncedFn=void 0,_this.onUsernameChange=function(e){var _e$target$value,value=null!==(_e$target$value=e.target.value)&&void 0!==_e$target$value?_e$target$value:"";value=value.trim(),_this.setState({username:value,usernameExists:void 0}),value&&(_this.checkUsernameDebouncedFn&&_this.checkUsernameDebouncedFn.cancel(),_this.checkUsernameDebouncedFn=debounce_default()((function(){User_service.a.checkUsername(value).then((function(){return _this.setState({usernameExists:!0})})).catch((function(){return _this.setState({usernameExists:!1})}))}),250),_this.checkUsernameDebouncedFn())},_this.changeMode=function(newMode){var mode=_this.state.mode;newMode!==mode&&setTimeout((function(){return _this.setState({mode:newMode})}),0)},_this.submit=function(props){var mode=_this.state.mode,onSuccess=_this.props.onSuccess,apiToCall="register"===mode?User_service.a.register:User_service.a.login;_this.setState({loading:!0}),apiToCall(props).then((function(user){(function getStore(){return store})().dispatch(Object(user_actions.d)(user)),onSuccess&&onSuccess(user)})).catch((function(error){return _this.setState({serverError:error.message})})).finally((function(){return _this.setState({loading:!1})}))},_this.state={mode:"login",loading:!1,serverError:null,username:"",usernameExists:void 0},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Login,[{key:"componentWillUnmount",value:function componentWillUnmount(){var _this$checkUsernameDe;null===(_this$checkUsernameDe=this.checkUsernameDebouncedFn)||void 0===_this$checkUsernameDe||_this$checkUsernameDe.cancel()}},{key:"render",value:function render(){var _this2=this,_this$state=this.state,mode=_this$state.mode,loading=_this$state.loading,serverError=_this$state.serverError,usernameExists=_this$state.usernameExists,username=_this$state.username,className=this.props.className;return Object(jsx_runtime.jsx)("div",{className:login_Login_module["login-form"]+" "+(className||""),children:Object(jsx_runtime.jsxs)(Form.a,{onSubmit:this.submit,onInput:function onInput(){return _this2.setState({serverError:null})},children:[Object(jsx_runtime.jsx)(FormGroup,{className:"mb-4",children:Object(jsx_runtime.jsxs)("label",{children:[Object(jsx_runtime.jsx)("span",{className:"label",children:"register"===mode?"Email":"Email sau username"}),Object(jsx_runtime.jsx)("input",{required:!0,type:"text",autoCapitalize:"none",name:"register"===mode?"email":"emailOrUsername"})]})}),"register"===mode&&Object(jsx_runtime.jsx)(FormGroup,{className:"mb-4",children:Object(jsx_runtime.jsxs)("label",{children:[Object(jsx_runtime.jsx)("span",{className:"label",children:" Username "}),Object(jsx_runtime.jsxs)(InputWithIcon.a,{required:!0,type:"text",name:"username",onChange:this.onUsernameChange,children:[usernameExists&&Object(jsx_runtime.jsx)(index_es.a,{width:"1em",className:"text-red",icon:free_solid_svg_icons_index_es.h}),!1===usernameExists&&Object(jsx_runtime.jsx)(index_es.a,{width:"1em",className:"text-green",icon:free_solid_svg_icons_index_es.b}),void 0===usernameExists&&username&&Object(jsx_runtime.jsx)(index_es.a,{width:"1em",className:"rotate",icon:free_solid_svg_icons_index_es.g})]})]})}),Object(jsx_runtime.jsx)(FormGroup,{className:"mb-4",children:Object(jsx_runtime.jsxs)("label",{children:[Object(jsx_runtime.jsx)("span",{className:"label",children:" Parola "}),Object(jsx_runtime.jsx)(PasswordReveal.a,{})]})}),"register"===mode&&Object(jsx_runtime.jsx)(Checkbox.a,{required:!0,name:"confirm",className:"d-flex mb-4",children:Object(jsx_runtime.jsxs)("span",{style:{fontSize:"0.85em"},children:["Am citit și sunt de acord cu"," ",Object(jsx_runtime.jsx)("a",{href:"/termeni-si-conditii",className:"link",children:"Termenii și Condițiile"})," ","de utilizare."]})}),serverError&&Object(jsx_runtime.jsx)("p",{className:login_Login_module["server-error"]+" text-red text-bold",children:serverError}),Object(jsx_runtime.jsx)(LoginButtons,{mode:mode,loading:loading,onLogin:function onLogin(){return _this2.changeMode("login")},onRegister:function onRegister(){return _this2.changeMode("register")}})]})})}}]),Login}(react.Component);__webpack_exports__.default=Login_Login;try{Login_Login.displayName="Login",Login_Login.__docgenInfo={description:"",displayName:"Login",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onSuccess:{defaultValue:null,description:"",name:"onSuccess",required:!1,type:{name:"(user?: { name: string; username: string; email: string; avatar: string; role: string; description?: string; }) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["client/components/login/Login.tsx#Login"]={docgenInfo:Login_Login.__docgenInfo,name:"Login",path:"client/components/login/Login.tsx#Login"})}catch(__react_docgen_typescript_loader_error){}}}]);