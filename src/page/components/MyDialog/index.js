import React from 'react'
import './index.styl' 

export default class MyDialog extends React.Component{
  constructor(props){
    super()
    this.state = {}
    this.setNewProps(props)
  }

  componentWillReceiveProps(props){
    this.setNewProps(props)
  }

  setNewProps(props){
    
    this.state.title = props.title
    this.state.visible = props.visible
    this.state.onOk = props.onOk
    this.state.onCancel = props.onCancel
  }

  render(){
    return <div 
      className={`dialog-mask some-css-class`}
      style={{display:this.state.visible?'block':'none'}}
    >
      <div className="dialog-box">
        <h4>{this.state.title}</h4>
        <button className="btn btn-ok" onClick={this.state.onOk.bind(this)}>ok!</button>
        <button className="btn btn-cancel"  onClick={this.state.onCancel.bind(this)}>cancel!</button>
      </div>
    </div>
  }
} 