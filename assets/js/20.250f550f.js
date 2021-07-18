(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{748:function(t,s,a){"use strict";a.r(s);var n=a(104),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"tmux-使用"}},[t._v("tmux 使用 "),a("a",{staticClass:"header-anchor",attrs:{href:"#tmux-使用"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Tmux 可用于在一个终端窗口中运行多个终端会话。不仅如此，还可以通过 Tmux 使终端会话运行于后台或是按需接入、断开会话，这个功能非常实用。")]),t._v(" "),a("ol",[a("li",[t._v("Tmux的使用场景")])]),t._v(" "),a("ul",[a("li",[t._v("可以某个程序在执行时一直是输出状态，需要结合nohup、&来放在后台执行，并且ctrl+c结束。这时可以打开一个Tmux窗口，在该窗口里执行这个程序，用来保证该程序一直在执行中，只要Tmux这个窗口不关闭")]),t._v(" "),a("li",[t._v("下班后，你需要断开ssh或关闭电脑，将运行的命令或任务放置后台运行。")]),t._v(" "),a("li",[t._v("关闭终端,再次打开时原终端里面的任务进程依然不会中断")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("tmux 安装")])]),t._v(" "),a("ul",[a("li",[t._v("ubuntu"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tmux\n")])])])]),t._v(" "),a("li",[t._v("mac os"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("安装 Homebrew\n$ /usr/bin/ruby -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n\n安装tmux\n$ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tmux\n")])])])])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("tmux 使用")])]),t._v(" "),a("p",[t._v("名词解释：tmux 会话，一个会话可以包含多个窗口，一个窗口可以包含多个面板。")]),t._v(" "),a("p",[t._v("进入tmux面板后，一定要先按 ctrl+b，然后松开，再按其他的组合键才生效。")]),t._v(" "),a("p",[t._v("常用到的几个组合键：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 系统操作")]),t._v("\nctrl+b ?           显示快捷键帮助\nctrl+b d           脱离当前会话，返回Shell界面\nctrl+b s           以菜单方式显示和选择会话\nctrl+b $           重命名当前会话\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 窗口操作")]),t._v("\nctrl+b c           创建新窗口\nctrl+b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("           关闭当前窗口\nctrl+b w           以菜单方式显示及选择窗口\nctrl+b 数字键       切换至指定窗口\nctrl+b ,           重命名当前窗口\nctrl+b "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("           修改当前窗口编号；相当于窗口重新排序\nctrl+b f           在所有窗口中查找指定文本\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 面板操作")]),t._v('\nctrl+b "           模向分隔窗格\nctrl+b %           纵向分隔窗格\nctrl+b x           关闭当前面板\nctrl+b '),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("           把当前面板变为新的窗口\nctrl+b q           显示面板的编号，当数字出现的时候按数字几就选中第几个面板\nctrl+b 方向键      选择面板\nctrl+b z           最大化和最小化面板\nctrl+b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("           复制模式，可以使用方向键或者Pgup、Pgdn查看历史记录，按 q 推出\nctrl+b ctrl+方向键    调整面板大小\n\nctrl+b t           显示时钟。然后按enter键后就会恢复到shell终端状态\n")])])]),a("p",[t._v("常用的命令：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("tmux "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\ntmux new -s 会话名\ntmux a -t 会话名\ntmux kill-session -t 会话名\ntmux "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rename")]),t._v(" -t oldname newname\n")])])]),a("h2",{attrs:{id:"查看端口占用情况"}},[t._v("查看端口占用情况 "),a("a",{staticClass:"header-anchor",attrs:{href:"#查看端口占用情况"}},[t._v("#")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -an\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -an"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("':80'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## grep (global search regular expression(RE) and print out the line,全面搜索正则表达式并把行打印出来)是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lsof")]),t._v(" -i:8080\n")])])]),a("h2",{attrs:{id:"nginx-服务器-403-访问不了"}},[t._v("Nginx 服务器 403 访问不了 "),a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-服务器-403-访问不了"}},[t._v("#")])]),t._v(" "),a("p",[t._v("如果你的 nginx 服务器已经配置好，域名解析正确，安全组端口开放，但是通过域名访问服务器出现403 错误，其实已经说明访问到了数据，基本是nginx配置文件的问题，查看 nginx 日志，发现是权限问题，将 nginx.conf 配置文件开头的 user 用户设置成 root 就可以了。")])])}),[],!1,null,null,null);s.default=r.exports}}]);