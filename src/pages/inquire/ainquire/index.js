// 单个提交查询组件
import React from 'react';
import { connect } from 'react-redux';
import {Button,Input,  Radio } from "antd"
import './ui.css'

const RadioGroup = Radio.Group;

class ainquire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value:''
    }
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    })
  }
  render(){
    // const { handleLogin } = this.props;
    return (
    <>
      <div className="logoa">daikanla.com</div>
      <RadioGroup onChange={this.onChange} style={{ textAlign: 'center' , display: 'block' , padding : '10px'}}>
        <Radio value={1}>超星尔雅(学习通)</Radio>
        <Radio value={2}>智慧树(知到)</Radio>
        <Radio value={3}>优学院</Radio>
        <Radio value={4}>学堂云3</Radio>
        <Radio value={5}>高校邦</Radio>
      </RadioGroup>
      <div style={{display: 'flex',  justifyContent: 'center' }}> 
          <Input placeholder="学校 学号 密码 空格隔开，如果是手机号登陆则不用填学校" style={{width: '50%'}}/>
          <Button  style={{ marginLeft: '10px'}}>提交查询</Button>
      </div>
      <div>
        <div style={{textAlign: 'left', fontSize: 16 , width:550 , margin:'auto' , lineHeight: '57px' }}>
          有任何意见、建议或者疑问都可以发送到管理员的邮箱：daikanla@qq.com
        </div>
        <div style={{textAlign: 'left', fontSize: 14  , width:550  , margin:'auto'}}>
          2019-05-06：<br/>
          1.升级学习通。<br/>
          2.学习通、智慧树账号统一补漏。<br/>
          3.反馈问题的时候请务必带上课程账号，详细说明情况，以便于更快的解决问题。
        </div>
      </div>
    </>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {

//   }
// }

// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     handleLogin: () => {
//       // 修改仓库，派发一个动作
//       dispatch({
//         type: 'LOGIN'
//       })

//       // 跳转回首页
//       // console.log(props);
//       // 取出 url 地址身上的 redirect
//       let redirect = props.location.search.substr(10);
//       props.history.replace(redirect);
//     }
//   }
// }

export default ainquire
