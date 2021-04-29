# shoppingstreet

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<!-- 
一、 别名问题：
引用文件时会受到路径问题的干扰
可以在webpack.base.conf.js文件中做以下相关配置：
resolve: {
  设置可以省略的扩展名
  extensions:['.is',',vue','.json'],  
  设置别名
  alias: {
    '@': resolve('src'),
    'assets': resolve('@/assets'),
    'components': resolve('@/components'),
    'views': resolve('@/views'),
  }
  在script标签内使用alias时可以直接使用，如： import TabBar from "components/tabbar/TabBar";
  但是在html标签内使用alias时，需要加上~号，如：~assets/img/tabbar/category.svg
}
 -->

 <!--
 1.使用github托管自己的代码 
 1). git客户端下载和安装以及配置:
      git config global --user.name "yourgitName"
      git config global --user.email "yourgithubEmail"
      git config --list命令来查看你的配置信息
 2). 保持git和你的github通讯，我们采用SSH，所以你需要生成一个SSH key，保证git和github可以通讯。
      a. 登录github账号，点击头像，点击Settings,点击SSH and GPG keys,点击绿色按钮New SSH key
      b. 打开git bash,输入命令生成ssh: ssh-keygen -t rsa -C "80776976@qq.com", 去路径下找到id_rsa.pub，复制里面的内容，粘贴到才github的new SSH key的key
 3). 在github中创建一个项目
      在github上面创建一个仓库，点击头像旁边的加号，选择New Repository，写上仓库名字, 然后点击下面的Create Repository即创建成功.
 4). 使用下面的命令来测试git是否和github可以通讯，在git bash中输入下面的命令:ssh -T git@github.com
 5). 在本地创建项目,关联远程长裤,并将本地代码推送到github远程仓库中
      git remote add origin https://github.com/lixiu001/shoppingSting.git
      git push -u origin main
 -->
