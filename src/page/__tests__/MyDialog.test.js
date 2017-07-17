import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MyDialog from  '../components/MyDialog/index'

it('test the dialog',()=>{
  // 由于事件是由调用方注入的，这里mock掉
  const onOk = jest.fn()
  const onCancel = jest.fn()
  //渲染组件
  const v = shallow(<MyDialog
    title="一个标题"
    onOk={onOk}
    onCancel={onCancel}
    visible={false}
  ></MyDialog>)
  //检查dom
  expect(v.contains(<h4>一个标题</h4>)).toBe(true)

  let containerStyle = v.find('.dialog-mask').props().style
  //检查行内样式
  expect(containerStyle).toHaveProperty('display','none')
  //检查修改props后的行为
  v.setProps({visible:true})
  containerStyle = v.find('.dialog-mask').props().style
  expect(containerStyle).toHaveProperty('display','block')
  //模拟事件并确认相应的事件被调用
  v.find('.btn-ok').simulate('click')
  expect(onOk).toHaveBeenCalled()
  
  v.find('.btn-cancel').simulate('click')
  expect(onCancel).toHaveBeenCalled()
})