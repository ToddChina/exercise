#实训重难点问题分析


### 所遇到的问题
1.使用css画圆的问题 解决方法：使用border-redio
2.模态框插入的问题 解决方法：模态框需要插入到body下
3.如何在模态框中，继续插入模态框 如何继续链接  解决方法：
4.排版问题 解决方法：具体问题具体分析
5.css样式权重的问题  解决方法：!important
6.城市名称切换，使用监听，点击body内的其他位置可以取消显示弹出框  解决方法：利用监听，和侯建东解决这个问题
7.模态框在插入网页的兼容问题 解决方法：简化bootstrap中的代码，没用的或者影响网页正常运行的代码惊醒简化
8.js和jquery问题，具体问题具体分析，主要是jquery代码的问题
9.断点分析的问题 解决方法：顺序分析


### 完成后QC

####tourism.html
1.控制台两个404
2.网页刷新后bar位置需要将特效保留在自驾团
3.链接没有完成
4.模态框没有完成
5.点击城市切换的“城市名称”没有弹出城市切换的框
6.城市搜索没有链接“南京”“温泉”等匹配

####customized.html
1.基本信息中出游性质中不是a标签
2.游玩天数和出行人数没有正则表达式
3.人均预算没有正则表达式和单位
4.特色服务curser变成pointer

####city-search.html
1.排版有问题“请认真检查”
2.热门搜索是能点击的链接
3.中间的banner字体对比度有问题
4.“云南旅游详细”没有链接
5.更多没有下拉菜单
6.点击出发时间的时候控制台报错
7.“出发事件”“价格”“天数”没有下拉菜单
8.点赞没有实现，浏览效果没有实现

####details.html
1.日历的弹出框选择日期报名的效果没有实现
2.轮播效果只能实现单循环
3.“行程介绍”“费用明细”“其他说明”等选项卡功能没有实现
4.scroll天赚功能没有实现
5.图片轮播没有实现
6.收藏不能实现
7.页眉底部的页码不能固定标识


####domestic-list.html&leader.html
1.网页定宽
2.模态框中间有线
3.模态框四角圆叫不统一
4.模态框也有padding-right的问题，只是网页定宽看不出来，控制台可以直观看出style有问题
5.页码切换，下页可以实现，上页不能实现功能，首页和尾页不能实现，且不是按钮
6.body的排版有问题，内容都要比body的width要宽
7.搜索栏中写入“南京”“温泉”能够跳转
8.（leader.html）领队介绍中“中国自驾游联盟南京站”有问题
9.领队产品下拉菜单没有实现
10.领队产品上页下页页码没有实现
11.（leader.html）下面的页面转换没有实现


####online-pay.html
1.城市切换弹出框没有实现
2.模态框没有实现
3.自动跳转页面没有实现
4.刷新倒计时不能从24h开始，且排版有问题，当秒数字全部为双数的时候，秒的数字会被挤到下面
5.banner的hover整个页面向下移

####personal-center.html
1.城市切换的排版问题
2.padding-right
3.选显卡没实现
4.日历没有实现
5.我的收藏选项卡

####order.html
1.导航没有链接
2.修改等不是按钮
3.房间数不能加减
4.邮箱等没有正则表达式
5.下拉菜单没有修改
6.条款并同意为复选框，不是单选框
7.当阅读条款的复选框选中的时候“确认订单并提交”的按钮可选，没有选中的时候不可选