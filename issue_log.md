###Welcome to use MarkDown

### 2016.11.21
1. 使用 import Vue from 'vue'方式引入的Vue使用的是node_modules/dist/vue.common.js,这个js使用问题的，一直报错。
我就想把这个不用，然后名字改了，想让用vue.js。但是用webpack构建的时候引入的是1.0.26版本的vue.common.js（这个js我找了好久都不知道是从哪里引入的）。
最后，我选择把vue.js这个js文件改名为vue.common.js,然后就可以用了。