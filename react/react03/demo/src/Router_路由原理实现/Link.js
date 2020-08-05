import React ,{Fragment,Component}from 'react'

class Link extends Component{
  jump=()=>{
    window.location.hash=this.props.to
  }
  render(){
    return(
     <Fragment>
          <div onClick={this.jump}>{this.props.children}</div>
     </Fragment>

    )
  }
}

export default Link