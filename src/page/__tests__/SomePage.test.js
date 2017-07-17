import React from 'react';
import {shallow, mount, render} from 'enzyme';
import SomePage from '../SomePage'

describe('test the page', () => {
  //SomePage.prototype.onDialogCancel=jest.fn() 如果不想测试引用的组件，可以用shallow
  
  test('we test with mount', () => {
    //throw new Error()
    //装载组件
    const v = mount(
      <SomePage textContent="page content"></SomePage>
    )
    //检查dom结构
    expect(v.contains(
      <h2>default value</h2>
    )).toBe(true)
    expect(v.contains(
      <p>page content</p>
    )).toBe(true)

    //检查弹窗状态
    expect(v.find('.dialog-mask').props().style).toHaveProperty('display', 'none')

    //模拟点击'.btn-show-dialog'
    v
      .find('.btn-show-dialog')
      .simulate('click')
    expect(v.find('.dialog-mask').props().style).toHaveProperty('display', 'block')

    //模拟点击'.btn-ok'
    v
      .find('.btn-ok')
      .simulate('click')
    expect(v.find('.dialog-mask').props().style).toHaveProperty('display', 'none')
    
    expect(v.contains(<p>msg confirmed</p>)).toBe(true)

    //模拟点击'.btn-cancel'
    v
      .find('.btn-show-dialog')
      .simulate('click')
    v.find('.btn-cancel')
      .simulate('click')
    
    expect(v.find('.dialog-mask').props().style).toHaveProperty('display', 'none')
  })

  // test('we test with shallow', () => {
  //   const v = shallow(
  //     <SomePage textContent="page content"></SomePage>
  //   )
    
  // })
})