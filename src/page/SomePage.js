import React from 'react'
import './somePage.styl'
import Dialog from './components/MyDialog'
export default class SomePage extends React.Component{
  constructor(props){
    super()
    this.state = {
      defaultProp:'default value',
      dialogVisible:false,
      ...props
    }
  }

  render(){
    return <div className="main-wrapper">
      <Dialog
        visible={this.state.dialogVisible}
        title={'dialog title'}
        onOk={this.onDialogOk.bind(this)}
        onCancel={this.onDialogCancel.bind(this)}
      ></Dialog>

      <h2>{this.state.defaultProp}</h2>
      <p>{this.state.textContent}</p>
      <button className="btn btn-show-dialog" onClick={this.onBtnClick.bind(this)}>show dialog!</button>
    </div>
  }

  onDialogCancel(){
    this.setState({dialogVisible:false})
  }

  onDialogOk(){
    this.setState({
      dialogVisible:false,
      textContent:'msg confirmed'
    })
  }

  onBtnClick(){
    this.setState({dialogVisible:true})
  }
}