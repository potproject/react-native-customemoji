Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src\\customemoji.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);var _reactNative=require("react-native");var _inlineimage=require("./inlineimage");var _inlineimage2=_interopRequireDefault(_inlineimage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var defaultEmojis={};var defaultEmojiStyle={};var defaultResponsibleImage=true;var CustomEmoji=function(_React$Component){_inherits(CustomEmoji,_React$Component);function CustomEmoji(props){_classCallCheck(this,CustomEmoji);var _this=_possibleConstructorReturn(this,(CustomEmoji.__proto__||Object.getPrototypeOf(CustomEmoji)).call(this,props));_this.parse=_this.parse.bind(_this);_this.emojiCheck=_this.emojiCheck.bind(_this);_this.emojiStyle=props.emojiStyle||defaultEmojiStyle;_this.emojis=props.emojis||defaultEmojis;_this.responsibleImage=props.responsibleImage||defaultResponsibleImage;return _this;}_createClass(CustomEmoji,[{key:"render",value:function render(){return _react2.default.createElement(_reactNative.View,{style:this.props.style,__source:{fileName:_jsxFileName,lineNumber:36}},this.emojis?this.parse(this).props.children:this.props.children);}},{key:"parse",value:function parse(component){var _this2=this;var _component$props=component.props;_component$props=_component$props===undefined?{}:_component$props;var children=_component$props.children;if(!children){return component;}var componentProps=_extends({},component.props,{ref:undefined,key:undefined});return _react2.default.cloneElement(component,componentProps,_react2.default.Children.map(children,function(child){var _child$type=child.type;_child$type=_child$type===undefined?{}:_child$type;var displayName=_child$type.displayName;if(typeof child==="string"){return _this2.emojiCheck(_react2.default.createElement(_reactNative.Text,_extends({},componentProps,{style:component.props.style,__source:{fileName:_jsxFileName,lineNumber:58}}),child));}if(displayName==="Text"&&!_this2.isTextNested(child)){return _this2.emojiCheck(child);}return _this2.parse(child);}));}},{key:"emojiCheck",value:function emojiCheck(component){var text=component.props.children;if(typeof text!=="string"){return component;}var componentProps=_extends({},component.props,{ref:undefined,key:undefined});var lastIndex=0;var elements=[];for(var nextIndex=0;nextIndex<text.length;){for(var emoji in this.emojis){if(text.slice(nextIndex,nextIndex+emoji.length)===emoji){if(lastIndex<nextIndex){elements.push(_react2.default.createElement(_reactNative.Text,{key:+elements.length,__source:{fileName:_jsxFileName,lineNumber:84}},text.slice(lastIndex,nextIndex)));}if(this.responsibleImage){elements.push(_react2.default.createElement(_inlineimage2.default,{key:elements.length,style:this.emojiStyle,source:this.emojis[emoji],__source:{fileName:_jsxFileName,lineNumber:88}}));}else{elements.push(_react2.default.createElement(Image,{key:elements.length,style:this.emojiStyle,source:this.emojis[emoji],__source:{fileName:_jsxFileName,lineNumber:90}}));}lastIndex=nextIndex+emoji.length;nextIndex=nextIndex+emoji.length;}else{nextIndex++;}}}elements.push(_react2.default.createElement(_reactNative.Text,{key:elements.length,__source:{fileName:_jsxFileName,lineNumber:100}},text.slice(lastIndex)));return _react2.default.cloneElement(component,componentProps,elements);}},{key:"isTextNested",value:function isTextNested(component){if(!_react2.default.isValidElement(component)){throw"Invalid component";}return typeof component.props.children!=="string";}}]);return CustomEmoji;}(_react2.default.Component);var _class=function(_React$Component2){_inherits(_class,_React$Component2);function _class(props){_classCallCheck(this,_class);return _possibleConstructorReturn(this,(_class.__proto__||Object.getPrototypeOf(_class)).call(this,props));}_createClass(_class,[{key:"render",value:function render(){return _react2.default.createElement(CustomEmoji,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:118}}));}}]);return _class;}(_react2.default.Component);exports.default=_class;
Object.defineProperty(exports,"__esModule",{value:true});exports.default=require("./customemoji.js");
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="src\\inlineimage.js";var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require("react");var _react2=_interopRequireDefault(_react);var _reactNative=require("react-native");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var InlineImage=function InlineImage(props){var style=props.style;if(style&&_reactNative.Platform.OS!=="ios"){style=_extends({},_reactNative.StyleSheet.flatten(props.style));["width","height"].forEach(function(propName){if(style[propName]){style[propName]*=_reactNative.PixelRatio.get();}});}return _react2.default.createElement(_reactNative.Image,_extends({},props,{style:style,__source:{fileName:_jsxFileName,lineNumber:24}}));};InlineImage.propTypes=_reactNative.Image.propTypes;exports.default=InlineImage;
