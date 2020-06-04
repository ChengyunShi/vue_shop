* 登录/退出功能
1.  登录概述
    1.1 登录业务流程
    (1)在登录页面输入用户名和密码
    (2)调用后台接口进行验证
    (3)通过验证之后，根据后台的响应状态跳转到项目主页

2.  登录业务的相关技术点
    * http是无状态的
    * 通过cookie在客户端记录状态
    * 通过session在服务器端记录状态
    * 通过token方式维持状态
    
    前端和服务器之间不存在跨域问题可使用cookie和session记录状态，存在跨域问题需使用token
    
    token原理：
    客户端登录页面输入用户名和密码进行登录，服务器验证通过之后生成该用户的token并返回，客户端存储该token，后续所有的请求都携带该token发送请求

居中的几种方式
    
    1.利用position
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    2.水平居中利用flex
    display: flex;
    justify-content: center;

box-sizing 
    
    The box-sizing property can be used to adjust this behavior:

    content-box gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.
    border-box tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements.
    
Vue form

:model 绑定
v-model 

async await / .then

全局挂载

    git
    git status  //show the working tree status
    
    git remote add <remote_name> <remote_url>   //add a new remote, two argument name: a remote name, a remote url
    
    git push    //update remote refs along with associated objects
    git push <remote_name> <branch_name> //update a specific branch on the remote
    
    git add //add file contents to the index
    git add -A (git add --all)      //stage all (new, modified, deleted) files
    git add .                       //stage all (new, modified, deleted) files
    git add -u (git add --update)   //stage modified and deleted files only
    git add --ignore-removal .      //stage new and modified files only
    
    git checkout <branch_name>  //switch to a specific branch
    git checkout -b <new_branch_name>   //create a new branch and switch to the new branch
    
    git branch  //list all the branches and see the current branch
    git branch -d (git branch --delete) //delete a branch
    git branch <new_brach_name> //create a new branch
    
    
    git commit  //record changes to the repository
    git commit -m <msg> (git commit --message=<msg>)    //commit with message <msg>
