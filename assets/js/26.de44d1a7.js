(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{757:function(t,s,e){"use strict";e.r(s);var a=e(104),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"本地测试环境配置-https"}},[t._v("本地测试环境配置 https "),e("a",{staticClass:"header-anchor",attrs:{href:"#本地测试环境配置-https"}},[t._v("#")])]),t._v(" "),e("h3",{attrs:{id:"https-简介"}},[t._v("https 简介 "),e("a",{staticClass:"header-anchor",attrs:{href:"#https-简介"}},[t._v("#")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("https简介\nHTTPS其实是有两部分组成：HTTP + SSL / TLS，也就是在HTTP上又加了一层处理加密信息的模块。服务端和客户端的信息传输都会通过TLS进行加密，所以传输的数据都是加密后的数据")])]),t._v(" "),e("li",[e("p",[t._v("https协议原理\n首先，客户端与服务器建立连接，各自生成私钥和公钥，是不同的。服务器返给客户端一个公钥，然后客户端拿着这个公钥把要搜索的东西加密，称之为密文，并连并自己的公钥一起返回给服务器，服务器拿着自己的私钥解密密文，然后把响应到的数据用客户端的公钥加密，返回给客户端，客户端拿着自己的私钥解密密文，把数据呈现出来")])])]),t._v(" "),e("h3",{attrs:{id:"证书和私钥生成"}},[t._v("证书和私钥生成 "),e("a",{staticClass:"header-anchor",attrs:{href:"#证书和私钥生成"}},[t._v("#")])]),t._v(" "),e("ol",[e("li",[t._v("创建服务器证书密钥文件 server.key：")])]),t._v(" "),e("p",[e("code",[t._v("openssl genrsa -des3 -out server.key 1024")])]),t._v(" "),e("p",[t._v("输入密码，确认密码，自己随便定义，但是要记住，后面会用到。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("创建服务器证书的申请文件 server.csr")])]),t._v(" "),e("p",[e("code",[t._v("openssl req -new -key server.key -out server.csr")])]),t._v(" "),e("p",[t._v("输出内容为：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("Enter pass phrase "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" root.key: ← 输入前面创建的密码 \n\nCountry Name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" letter code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AU"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":CN ← 国家代号，中国输入CN \n\nState or Province Name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("full name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Some-State"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":BeiJing ← 省的全名，拼音 \n\nLocality Name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eg, city"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":BeiJing ← 市的全名，拼音 \n\nOrganization Name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eg, company"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Internet Widgits Pty Ltd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":MyCompany Corp. ← 公司英文名 \n\nOrganizational Unit Name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eg, section"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": ← 可以不输入 \n\nCommon Name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eg, YOUR name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": ← 此时不输入 \n\nEmail Address "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":admin@mycompany.com ← 电子邮箱，可随意填\n\nPlease enter the following ‘extra’ attributes \n\nto be sent with your certificate request \n\nA challenge password "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": ← 可以不输入 \n\nAn optional company name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": ← 可以不输入\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("备份一份服务器密钥文件")])]),t._v(" "),e("p",[e("code",[t._v("cp server.key server.key.org")])]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("去除文件口令")])]),t._v(" "),e("p",[e("code",[t._v("openssl rsa -in server.key.org -out server.key")])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("生成证书文件server.crt")])]),t._v(" "),e("p",[e("code",[t._v("openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt")])]),t._v(" "),e("h3",{attrs:{id:"配置-nginx-服务器"}},[t._v("配置 nginx 服务器 "),e("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx-服务器"}},[t._v("#")])]),t._v(" "),e("ol",[e("li",[t._v("下面为配置文件 "),e("code",[t._v("/etc/nginx/conf.d/xxx.conf")])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("server"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" default ssl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 比起默认的80 使用了443 默认 是ssl方式  多出default之后的ssl")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default 可省略")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启  如果把ssl on；这行去掉，ssl写在443端口后面。这样http和https的链接都可以用")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ssl on;")]),t._v("\n    server_name localhost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 绑定域名")]),t._v("\n\n    ssl_certificate ssl/server.crt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 证书(公钥.发送到客户端的)")]),t._v("\n    ssl_certificate_key ssl/server.key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 私钥")]),t._v("\n    \n    location / "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    proxy_redirect off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁止跳转")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("        \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"问题"}},[t._v("问题 "),e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")])]),t._v(" "),e("h3",{attrs:{id:"this-request-has-been-blocked-the-content-must-be-served-over-https"}},[t._v("This request has been blocked; the content must be served over HTTPS. "),e("a",{staticClass:"header-anchor",attrs:{href:"#this-request-has-been-blocked-the-content-must-be-served-over-https"}},[t._v("#")])]),t._v(" "),e("p",[t._v("HTTPS 是 HTTP over Secure Socket Layer，以安全为目标的 HTTP 通道，所以在 HTTPS 承载的页面上不允许出现 http 请求，一旦出现就是提示或报错：")]),t._v(" "),e("p",[t._v("Mixed Content: The page at ‘https://www.taobao.com/‘ was loaded over HTTPS, but requested an insecure image ‘http://g.alicdn.com/s.gif’. This content should also be served over HTTPS.")]),t._v(" "),e("p",[t._v("CSP 设置 upgrade-insecure-requests")]),t._v(" "),e("p",[t._v("好在 W3C 工作组考虑到了我们升级 HTTPS 的艰难，在 2015 年 4 月份就出了一个 Upgrade Insecure Requests 的草案（http://www.w3.org/TR/mixed-content/），他的作用就是让浏览器自动升级请求。")]),t._v(" "),e("p",[t._v("在我们服务器的响应头中加入：")]),t._v(" "),e("p",[t._v('header("Content-Security-Policy: upgrade-insecure-requests");')]),t._v(" "),e("p",[t._v("我们的页面是 https 的，而这个页面中包含了大量的 http 资源（图片、iframe等），页面一旦发现存在上述响应头，会在加载 http 资源时自动替换成 https 请求。可以查看 google 提供的一个 demo（https://googlechrome.github.io/samples/csp-upgrade-insecure-requests/index.html）：")]),t._v(" "),e("p",[t._v("当然，如果我们不方便在服务器 Nginx 上操作，也可以在页面中加入 meta 头：")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Content-Security-Policy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("upgrade-insecure-requests"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[t._v("从 W3C 工作组给出的 example（http://www.w3.org/TR/upgrade-insecure-requests/#examples），可以看出，这个设置不会对外域的 a 链接做处理，所以可以放心使用。")])])}),[],!1,null,null,null);s.default=n.exports}}]);