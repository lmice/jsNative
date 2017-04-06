(function (window) {
    function native(selector) {
        return new native.prototype.init(selector);
    }
    native.prototype = {
        //执行函数传参定义用户设备详细信息
        init: function (selector) {
            this.detailed();
            this.sizzle(selector);
        },
        detailed: function () {
            this.system = {};
            //应用的 ID，可以在网站控制台概览里面查看，字符串类型
            this.system.appId = 'api.appId';
            //应用在桌面显示名称，字符串类型
            this.system.appName = 'api.appName';
            //应用版本号，字符串类型
            this.system.appVersion = 'api.appVersion';
            //系统类型，字符串类型
            this.system.systemType = '';
            //手机平台的系统版本，字符串类型
            this.system.systemVersion = '';
            //引擎版本信息，字符串类型
            this.system.version = '';
            //设备唯一标识，字符串类型
            this.system.deviceId = '';
            //OS中用于推送的Token，若未从系统获取到则返回空字符串，字符串类型
            this.system.deviceToken = '';
            //设备型号，字符串类型
            this.system.deviceModel = '';
            //设备名称，字符串类型
            this.system.deviceName = '';
            //运营商名称，若未获取到则返回none，字符串类型
            this.system.operator = '';
            //当前网络连接类型，如 2g、3g、4g、wifi 等，字符串类型
            this.system.connectionType = '';
            //应用是否全屏，布尔类型，只支持iOS
            this.system.fullScreen = '';
            //屏幕分辨率宽，数字类型
            this.system.screenWidth = '';
            //屏幕分辨率高，数字类型
            this.system.screenHeight = '';
            /*
             当前 window 名称，字符串类型
             该属性值为 openWin() 时传递的 name 参数值，注意首页的名称为 roo
             */
            this.system.winName = '';
            /*
             当前 window 宽度，数字类型
             此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winWidth 为 320，因此前端需根据 winWidth 和 winHeight 来进行布局
             */
            this.system.winWidth = '';
            /*
             *当前 window 高度，数字类型
             此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winHeight 为 568（若不使用iOS7风格则为 548），因此前端需根据 winWidth 和 winHeight 来进行布局
             * */
            this.system.winHeight = '';
            /*
             * frame 名称，字符串类型
             若当前环境为 window 中，则该属性值为空字符串
             * */
            this.system.frameName = '';
            /*
             * frame 宽度，数字类型
             若当前环境为 window 中，则值和 winWidth 相同
             * */
            this.system.frameWidth = '';
            /*
             * frame 高度，数字类型
             若当前环境为 window 中，则值和 winHeight 相同
             * */
            this.system.frameHeight = '';
            /*
             * 页面参数，JSON 对象类型
             用于获取页面间传递的参数值，为 openWin()、openFrame() 等方法中的 pageParam 参数对应值
             * */
            this.system.pageParam = '';
            //widget 参数，JSON 对象类型 用于获取 widget 间传递的参数值，为 openWidget() 方法中的 wgtParam 参数对应值
            this.system.wgtParam = '';
            //应用被第三方应用打开时，传递过来的参数，字符串类型
            this.system.appParam = '';
            //当前应用状态栏是否支持沉浸式效果，布尔类型
            this.system.statusBarAppearance = '';
            //widget: //协议对应的真实目录，即 widget 网页包的根目录，字符串类型 注意该目录为只读，不要往该目录下面写文件
            this.system.wgtRootDir = '';
            //fs: //协议对应地真实目录，字符串类型
            this.system.fsDir = '';
            //cache://协议对应的真实目录，字符串类型
            this.system.cacheDir = '';
            //box://协议对应的真实目录，字符串类型 iOS上面在应用Documents下，安卓上面在系统为app分配的沙箱下，root或者越狱的手机可看到。
            this.system.boxDir = '';
            //获取config.xml配置的debug字段的值。
            this.system.debug = '';
            //渠道号，字符串类型
            this.system.channel = '';
        },
        //注册app监听事件
        addEventListener: function (name, callback) {
            this.listener = {};
            this.listener[name] = callback;
            return this;
        },
        //app监听成功触发事件
        runEventListener: function (name, ret, err) {
            this.listener[name](ret, err);
            return this;
        },
        //app拉取监听事件
        getEventListener: function () {
            var names = [];
            for (var attr in this.listener) {
                names.push(attr);
            }
            this.appLinker(names);
            return this;
        },
        //传输数据给app
        appLinker: function (data) {
        },
        //DOM
        //元素选择器
        sizzle: function (selector) {
            if(selector === undefined){
                return this
            }
            this.elements = [];
            if (typeof (selector) == 'string') {
                var elements = document.querySelectorAll(selector);
                for (var i = 0; i < elements.length; i++) {
                    this.elements.push(elements[i])
                }
            }else if(selector.nodeType == 1 || selector.nodeType == 9){
                this.elements.push(selector)
            }else if(selector[0].nodeType == 1 || selector[0].nodeType == 9){
                for (var i = 0; i < selector.length; i++) {
                    this.elements.push(selector[i])
                }
            }
            return this
        },
        forele : function (fn) {
            for(var i=0;i<this.elements.length;i++){
                fn(this.elements[i],i);
            }
            return this
        },

        //下一个相邻的元素节点
        next :  function () {
            if (this.elements.length == 1){
                var ele = this.elements[0];
                this.elements = [];
                this.elements.push(ele.nextElementSibling);
            }
            return this;
        },
        //上一个相邻的元素节点
        prev : function () {
            if (this.elements.length == 1){
                var ele = this.elements[0];
                this.elements = [];
                this.elements.push(ele.previousElementSibling);
            }
            return this;
        },
        //选择DOM元素的最后一个子元素
        last : function () {
            var ele = this.elements[this.elements.length-1];
            this.elements = [];
            this.elements.push(ele);
            return this;
        },
        first : function () {
            var ele = this.elements[0];
            this.elements = [];
            this.elements.push(ele);
            return this;
        },
        //选择第几个子元素
        eq : function (index) {
            var ele = this.elements[index];
            this.elements = [];
            this.elements.push(ele);
            return this;
        },
        not : function (selector) {
            var notele = document.querySelectorAll(selector);
            for(var i = 0 ;i< this.elements.length;i++){
                for(var a =0;a<notele.length;a++){
                    if(this.elements[i]==notele[a]){
                        this.elements.splice(i,1);
                    }
                }
            }
            return this
        },
        //判断某一个元素是否包含目标元素
        contains : function (chlid) {
            function iscontains(parent,child) {
                if(child.parentNode == parent){
                    return true;
                }else if(child.parentNode == document){
                    return false;
                }
                return iscontains(parent,child.parentNode)
            }
            if(this.elements.length == 1){
                return iscontains.call(this,this.elements[0],this.sizzle(chlid).elements[0]);
            }
            return this;
        },
        //删除元素
        remove : function () {
            this.forele(function (ele) {
                ele.parentNode.removeChild(ele);
            })
        },
        //单一元素身上的属性
        attr : function (name) {
            if(this.elements.length == 1){
                var att =  window.getComputedStyle? window.getComputedStyle( this.elements[0],null)[name] : this.elements[0].currentStyle.name;
                if(att === undefined){
                    att = this.elements[0].getAttribute(name);
                }
            }
            return att;
        },
        toggleClass : function (name) {
            this.forele(function (ele) {
                var cls = ele.className.split(' ');
                var off = true;
                for(var i=0;i<cls.length;i++){
                    if(cls[i] == name){
                        cls.splice(i,1);
                        off = false;
                    }
                }
                if(off){
                    cls.push(name)
                }
                cls = cls.join(' ');
                ele.className = cls;
            });
            return this
        },
        addClass : function (name) {
            this.forele(function (ele) {
                var cls = ele.className.split(' ');
                for(var i=0;i<cls.length;i++){
                    if(cls[i] == name){
                        return
                    }
                }
                cls.push(name);
                cls = cls.join(' ');
                ele.className = cls;
            })
            return this
        },
        rmClass : function (name) {
            this.forele(function (ele) {
                var cls = ele.className.split(' ');
                for(var i=0;i<cls.length;i++){
                    if(cls[i] == name){
                        cls.splice(i,1);
                    }
                }
                cls = cls.join(' ');
                ele.className = cls;
            });
            return this
        },
        hasClass : function (name) {
            var off = false;
            this.forele(function (ele) {
                var cls = ele.className.split(' ');
                for(var i=0;i<cls.length;i++){
                    if(cls[i] == name){
                        off = true;
                    }
                }
            });
            return off;
        },
        //获取单个表单元素的value
        val : function (attr) {
            if(this.elements.length ==  1 &&this.elements[0].tagName == 'INPUT'){
                if(attr !== undefined){
                    this.elements[0].value = attr;
                }
            }
            return this.elements[0].value;
        },
        prepend : function (html) {
            var obj = document.createElement("div");
            obj.innerHTML = html;
            var node = obj.children[0];
            this.elements[0].insertBefore(node,this.elements[0].firstChild);
        },
        //在DOM元素内部，最后一个子元素后面插入HTML字符串
        append : function (html) {
            var obj = document.createElement("div");
            obj.innerHTML = html;
            var node = obj.children[0];
            this.elements[0].appendChild(node);
            obj = null;
            return this
        },
        //在DOM元素前面插入HTML字符串
        before :function (html) {
            var obj = document.createElement("div");
            obj.innerHTML = html;
            var node = obj.children[0];
            this.elements[0].parentNode.insertBefore(node,this.elements[0]);
            return this
        },
        after : function (html) {
            var obj = document.createElement("div");
            obj.innerHTML = html;
            var node = obj.children[0];
            this.elements[0].parentNode.insertBefore(node,this.elements[0].nextElementSibling);
            return this
        },
        html : function (str) {
            if (str !== undefined){
                this.elements[0].innerHTML = str;
            }
            return  this.elements[0].innerHTML;
        },
        offset : function () {
            var ele = this.elements[0];
            var attr = {};
            //不包括边框
            attr.clienW = ele.clientWidth;
            attr.clienH = ele.clientHeight;
            attr.clienL = ele.clientLeft;
            attr.clienT = ele.clientTop;
            //包括边框
            attr.offsetW = ele.offsetWidth;
            attr.offsetH = ele.offsetHeight;
            attr.offsetL = ele.offsetLeft;
            attr.offsetT = ele.offsetTop;

            return attr;
        },
        css : function (attr,val) {
            var element = this.elements[0];
            if(attr == "scale"||attr == "scaleX"
                ||attr == "scaleY"||attr == "scaleZ"
                ||attr == "rotateX"||attr == "rotateY"
                ||attr == "rotateZ"||attr == "rotate"
                ||attr == "skewX"||attr == "skewY"
                ||attr == "translateX"||attr == "translateY"
                ||attr == "translateZ") {
                return native.cssTransform(element, attr, val);
            }
            if(arguments.length == 1){
                var val = getComputedStyle(element)[attr];
                return parseInt(val);
            }
            if(arguments.length == 2){
                this.forele(function (ele) {
                    element = ele;
                    if(attr=='opacity'){
                        element.style[attr]= val;
                        return this
                    }
                    if(typeof val == 'number'){
                        element.style[attr]= val + 'px';
                    }else if (typeof val == 'string'){
                        element.style[attr]= val;
                    }
                })
            }
        },
        //将对象转换成字符串格式
        jsonToStr : function (obj) {
            return JSON.stringify(obj)
        },
        //将JSON字符串转换成JSON对象
        strToJson : function (str) {
            return JSON.parse(str)
        },
        setStorage : function (key,value) {
            return localStorage.setItem(key,value)
        },
        getStorage : function (key) {
            return localStorage.getItem(key);
        },
        rmStorage : function (key) {
            return localStorage.removeItem(key)
        },
        clearStorage : function () {
            return localStorage.clear()
        },
        //添加事件
        on : function (type,fn,Capture) {
            if(Capture===undefined){
                Capture = false;
            }
            //第一个事件对象 //第二个下标记
            this.forele(function (ele,index) {
                ele.addEventListener(type,function (e) {
                    fn(e,index)
                },Capture)
            });
            return this
        },
        touchclick : function (fn) {
            var _this = this;
            this.forele(function (ele) {
                ele.addEventListener('touchstart',function (e) {
                    var off = true;
                    var one = true;
                    ele.addEventListener('touchmove',function () {
                        off = false;
                    });
                    ele.addEventListener('touchend',function () {
                        if(off && one){
                            one = false;
                            fn.call(_this,e,this);
                        }
                    });
                })
            })
        },
        mScroll : function (init) {
            init.el = this.elements[0];
            if(!init.el){
                return;
            }
            var wrap = init.el;
            var inner = init.el.children[0];
            inner.style.position = 'absolute';
            inner.style.top = '0';
            var scrollBar = document.createElement("div");
            var startPoint = 0;
            var index;
            var startEl = 0;
            var lastY = 0;
            var lastDis = 0;
            var lastTime = 0;
            var lastTimeDis = 0;
            var maxTranslate = wrap.clientHeight - inner.offsetHeight;
            if(init.offBar){
                var scale = wrap.clientHeight/inner.offsetHeight;
                inner.style.minHeight = "100%";
                scrollBar.style.cssText = "width:6px;background:rgba(0,0,0,.5);position:absolute;right:0;top:0;border-radius:3px;opacity:0;transition:.3s opacity;";
                wrap.appendChild(scrollBar);
            }
            inner.addEventListener('touchstart', function(e) {
                index = e.changedTouches[0].identifier;
                maxTranslate = wrap.clientHeight - inner.offsetHeight;
                if(init.offBar){
                    if(maxTranslate >= 0) {
                        scrollBar.style.display = "none";
                    } else {
                        scrollBar.style.display = "block";
                    }
                    scale = wrap.clientHeight/inner.offsetHeight;
                    scrollBar.style.height = wrap.clientHeight * scale + "px";
                }
                clearInterval(inner.timer);
                startPoint = e.changedTouches[0].pageY;
                startEl = native(this).css("top");
                lastY = startEl;
                lastTime = new Date().getTime();
                lastTimeDis = lastDis = 0;
                (! init.offBar)||(scrollBar.style.opacity = 1);
            });
            inner.addEventListener('touchmove', function(e) {
                if(e.changedTouches[0].identifier != index){
                    return
                }
                var nowTime = new Date().getTime();
                var nowPoint = e.changedTouches[0].pageY;
                var dis = nowPoint - startPoint;
                var Top = startEl + dis;
                native(inner).css("top",Top);
                (!init.offBar)||native(scrollBar).css("top",-Top*scale);
                lastDis = Top - lastY;
                lastY = Top;
                lastTimeDis = nowTime - lastTime;
                lastTime = nowTime;
                init.change&&init.change.call(inner);
            });
            inner.addEventListener('touchend', function() {
                var speed = Math.round(lastDis / lastTimeDis);
                speed = lastTimeDis <= 0?0 :speed;
                var target = Math.round(speed*60 + native(inner).css("top"));
                if(target > 0){
                    target = 0;
                } else if(target < maxTranslate){
                    target = maxTranslate;
                }
                native.MTween({
                    el:inner,
                    target: {top:target},
                    time: Math.round(Math.abs(target - native(inner).css("top"))*1.8),
                    callBack: function(){
                        init.callBack&&init.callBack.call(inner);
                        (! init.offBar) || (scrollBar.style.opacity = 0);
                    },
                    callIn: function(){
                        init.callIn&&init.callIn.call(inner);
                        init.change&&init.change.call(inner);
                        var Top = native(inner).css("top");
                        !init.offBar||native(scrollBar).css("top",-Top*scale);
                    }
                });
            });
        }
    };
    native.MTween = function (init) {
        var t = 0;
        var b = {};
        var c = {};
        var easeOut = function(t, b, c, d){
            return -c *(t/=d)*(t-2) + b;
        };
        var d = init.time / 20;
        for(var s in init.target){
            b[s] = native(init.el).css(s);
            c[s] = init.target[s] - b[s];
        }
        clearInterval(init.el.timer);
        init.el.timer = setInterval(function(){
            t++;
            if(t>d){
                clearInterval(init.el.timer);
                for( var z in init.target){
                    $(init.el).css(z,init.target[z])
                }
                init.callBack&&init.callBack.call(init.el);
            } else {
                init.callIn&&init.callIn.call(init.el);
                for(var s in b){
                    var val = Number((easeOut(t,b[s],c[s],d)).toFixed(2));
                    native(init.el).css(s, val);
                }
            }
        },20);
    };
    native.ajax = function (option){
        var obj = {};
        for(var attr in option){
            obj[attr] = option[attr];
        }

        var xhr = new XMLHttpRequest();
        var str = '';
        for (var i in obj.data){
            str += i + '=' + obj.data[i] + '&';
        }
        var t = new Date().getTime();
        if(obj.data && obj.type == 'get'){
            xhr.open(obj.type,obj.url + '?'+ encodeURI(str) + 't=' + t ,obj.async)
        }else {
            xhr.open(obj.type,obj.url + '?t=' + t ,obj.async)
        }
        if(obj.type=='post'){
            xhr.send(obj.type);
            xhr.setRequestHeader('content-type',obj.contentType);
        }
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200){
                var res = xhr.responseText;
                obj.success(res);
            }
        }
    };
    native.cssTransform = function (element,attr,val){
        if(!element.transform){
            element.transform = {};
        }
        if(typeof val === "undefined"){
            if(typeof element.transform[attr] === "undefined"){
                switch(attr){
                    case "scale":
                    case "scaleX":
                    case "scaleY":
                    case "scaleZ":
                        element.transform[attr] = 100;
                        break;
                    default:
                        element.transform[attr] = 0;
                }
            }
            return element.transform[attr];
        } else {
            element.transform[attr] = val;
            var transformVal  = "";
            for(var s in element.transform){
                switch(s){
                    case "scale":
                    case "scaleX":
                    case "scaleY":
                    case "scaleZ":
                        transformVal += " " + s + "("+(element.transform[s]/100)+")";
                        break;
                    case "rotate":
                    case "rotateX":
                    case "rotateY":
                    case "rotateZ":
                    case "skewX":
                    case "skewY":
                        transformVal += " " + s + "("+element.transform[s]+"deg)";
                        break;
                    default:
                        transformVal += " " + s + "("+element.transform[s]+"px)";
                }
            }
            element.style.WebkitTransform = element.style.transform = transformVal;
        }
    };
    native.refresh = function (el,range,fn){
        var index;
        var element = this(el).elements[0];
        var lastY = 0;
        var startEl;
        var off = true;
        var dis;
        element.addEventListener('touchstart',function (e) {
            startEl = $(this).css('translateY');
            index = e.changedTouches[0].identifier;
            lastY = e.changedTouches[0].pageY;
        });
        element.addEventListener('touchmove',function (e) {
            if(!off){
                return
            }
            if(e.changedTouches[0].identifier != index){
                return;
            }
            var nowY = e.changedTouches[0].pageY;
            dis =  startEl + (nowY - lastY) * 0.3;

            $(this).css('translateY',dis);
            var tranY = $(this).css('translateY');
            if(tranY > range){
                fn();
            }
        });
        element.addEventListener('touchend',function (e) {
            if(e.changedTouches[0].identifier != index){
                return;
            }
            $.MTween({
                el:this,
                target: {translateY:0},
                time: 100,
                callBack : function () {
                    off = true;
                },
                callIn : function () {
                    off = false;
                }
            });
        });
    };
    native.prototype.init.prototype = native.prototype;
    window.$ = window.native = native;
})(window);
document.body.addEventListener('touchstart',function (e) {
    e.preventDefault();
});
