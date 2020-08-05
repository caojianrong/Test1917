import React ,{Fragment,Component}from 'react'

class Route extends Component{
  constructor(){
    super()
    this.state={
      hashPath:'/'
    }
  }
  componentDidMount(){
    // 组件创建 监听hash 值改变
    window.addEventListener('hashchange',()=>{
     
      let hash=window.location.hash.split('#')[1]
      console.log('hash改变',hash)
      this.setState({hashPath:hash})
      // hash改变之后获取新的hash值
    })
  }
  render(){
    console.log(this)
    // 接受props 传递的路径 和要渲染的组件
    let  Hehe = this.props.component
    
    let  {path}=this.props
    let  {hashPath}=this.state
    return(
     <Fragment>
       {/* 传递的路径和url的路径做对比控制组件的显示 */}
       {path==hashPath?<Hehe></Hehe>:''}
     </Fragment>

    )
  }
}

export default Route