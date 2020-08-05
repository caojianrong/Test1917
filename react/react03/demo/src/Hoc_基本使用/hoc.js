import React ,{Component,Fragment}from 'react'
// 高阶组件是一个函数
// 在返回的新组件中渲染接受到的组件
// 之后在新组件里做各种处理
export default (PramaConponent)=>{
  // PramaConponent 接受的组件

  // 创建的新组件
   class NewComponent extends Component{
       constructor(){
        super()
        this.state={
          name:'暂无数据'
        }
      }
      componentDidMount(){
        setTimeout(()=>{
          this.setState({name:'李雷'})
        },1000)
      }
     render(){
       return(
         <Fragment>
 
            <PramaConponent name={this.state.name}></PramaConponent>
         </Fragment>
       )
     }
   }
  //  返回创建的新组件
   return   NewComponent
}