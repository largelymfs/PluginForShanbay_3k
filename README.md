## 扇贝网（shanbay.com）GRE核心词汇考法精析（小3000）释义不准的解决方法

#### 此方法只适用于网页版扇贝

![alt tag](http://img3x8.ddimg.cn/15/18/23458758-1_w_1.jpg)

### For Firefox users:

1. 打开火狐浏览器安装一个叫“GreaseMonkey”的插件
2. 然后返回本项目的界面，下载(clone or download) “shanbay.user.js”这个文件
3. 再从本地把“shanbay.user.js”这个文件拖到浏览器中，根据浏览器的提示进行操作

### For Google Chrome users:
1. 打开谷歌浏览器请安装一个叫“Tampermonkey”的插件
2. 点击右上角“Tampermoneky”的图标，有一个选项叫“Add a new script", 点击后会看见“New userscript”
2. 然后回到本项目的界面，打开“shanbay.user.js”这个文件
3. 复制粘贴“shanbay.user.js”中的代码到“New userscript”, 点击左上角保存后就可以使用了

### For Safari (Mac, iOS) and Chrome iOS users:
1. 新建书签
2. 把书签的地址清空，把 "shanbay.bookmarlet" 的内容复制到书签地址栏。
3. 保存。
4. 需要使用时，先进入 "shanbay.com/bdc/review"，然后点击该书签，待弹出 "success" 提示框之后，即可正常。


### update log

2017.04.08

把 `setInterval()` 改为 `MutationObserver` 的方法，由每隔一段时间检查并修改 DOM 内容，改为由浏览器自动监听 DOM 修改事件，并触发本插件。更改之后，几乎不会出现 "闪烁" (先出现扇贝释义，再被替换为小3000释义) 的现象。


2017.04.07

1. 将 array 改为 object，加快查询速度。将逐个插入 `{单词, 释义}` 的做法改为 使用 `JSON.parse()` 一次性读入并解析。

2. 把 `{单词, 释义}` 导出为 json，一个用于人工查看、增加，另一个用于去除所有空格、换行，替换单引号 `'` 放在代码中。



