import React ,{Component, Fragment} from 'react'
import './index.less'
import { Button } from 'antd'
class RichEditor extends Component{
  constructor(){
    super()
  }
  preview=()=>{
    let edit= this.refs.editor.innerHTML 
    console.log('编辑内容',edit)
    this.refs.preview.innerHTML =edit
  }
  render(){
    return(
      <div class='wrapper'>
        <div className='editor'>
          <h3>编辑区</h3>
          <div class='tools'>
          <Button onClick={()=>{
            document.execCommand('bold', false, null);
          }}> 加粗</Button>
          <Button onClick={()=>{
            document.execCommand('formatblock', false, '<h1>');
          }}>h1</Button>
          <Button onClick={()=>{
            let url = 'https://goss.veer.com/creative/vcg/veer/800water/veer-134671947.jpg'
            document.execCommand('insertImage', false, url);
          }}>图片</Button>
          </div>
          <div contentEditable ref='editor' className='content'>
            <p>hehe</p>
          </div>
        </div>
        <div className='preview'>
          <h3>预览区</h3>
          <button onClick={this.preview}>预览</button>
          <div ref='preview'>

          </div>
        </div>
      </div>
    )
  }
}
export default RichEditor
