git/svn 多人团队合作 多个人操作同一个项目

git  工具  远程仓库 本地仓库
github    多个远程仓库的集合体 
远程仓库    服务器上的代码仓库
本地仓库    在自己电脑上的代码仓库
工作区      写代码的地方
暂存区      暂时保存代码的地方
分支        永久储存代码修改的地方
  

#### 基本指令
     
    git  init 创建本地仓库
    git status 查看当前的git状态
    git  add  将工作区的修改提交到暂存区
        git add .  添加全部的工作区文件
        git add  具体文件路径 提交一个文件
    git  commit  将暂存区的修改 提交到分   支
        git  commit -m ‘本次操作的注释’
    git  branch   查看当前本地分支
    git  branch -a 查看远程和本地所有分支
    git  branch  -d  分支名 表示删除分支  注意不能自杀
    git  checkout 分支名 切换分支
    git checkout -b 分支名  创建新分支并切换
    git log   查看操作信息
    git reflog 查看操作信息
    git reset --hard 版本id 版本回退与前进
    git merge 分支名 分支合并
    1.执行命令的分支 应该是母分支
    2.将子分支合并到木分支上
    分支合并过程中经常会产生冲突（多个分支同一个文件 有不同的修改 git工具不能确定保留哪一个 产生冲突让开发者自己解决）
    解决冲突的 需要的留着 不要的删掉

#### 远程仓库相关
  1. 本地和远程仓库建立连接
     a. 远程仓库已经创建   git clone  url  
     b. 远程仓库没有创建 
        创建本地仓库 git init
        在与远程仓库关联
        git remote add 远程仓库名（origin） 连接地址 
  2. 提交本地分支代码到远程仓库的分支
     git  push  远程仓库名（origin） 分支名 （master）
  3. 更新本地代码
     git  pull  远程仓库名(origin) 分支名(mater)
    
#### .gitignore


#### gitflow (git工作流)
master 主分支    和线上代码完全保持一致
预上线分支  测试分支
dev    开发分支  开发者的开发分支
个人分支         开发者在个人分支写功能
bug 分支        线上代码出现bug后的分支

主程 
    创建远程仓库 
    在本地创建 dev分支
    在dev分支初始化项目
    将dev分支推送到远程仓库
其他人员
    先克隆远程仓库代码
    从dev切换出个人分支
    在个人分支开发功能
    将个人分支合并dev分支 
    更新dev分支 git pull
    将dev 提交到远程仓库
 
 #### 4人项目组
 组长 创建远程仓库 拉组员 用react-cli 创建一个项目 上传到远程仓库 
 路人甲 封装缓存
 路人乙 axios 二次封装
 路人丙 配置路由
       配置rudex
#### api接口
node git 管理node api 

#### 4人操作同一数据库
mongod --bind_ip_all

#### yapi  easy-mock  mock  json-mock
https://github.com/YMFE/yapi
npm install -g yapi-cli --registry https://registry.npm.taobao.org
yapi server 