import React ,{Fragment,Component}from 'react'
import Recommend  from './Recommend'
import  Singer from  './Singer'
import My from  './My'
import Link from  './Link'
import Route from  './Route'
class Box extends Component{

  render(){
    return(
     <Fragment>
        <Link to='/recommend'>推荐</Link>
        <Link to='/singer'>歌手</Link>
        <Link to='/my'>我的</Link>

        <Route path='/recommend' component={Recommend}></Route>
        <Route path='/singer' component={Singer}></Route>
        <Route path='/my' component={My}></Route>

     </Fragment>

    )
  }
}

export default Box