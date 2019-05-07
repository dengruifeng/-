import React from 'react'
import {
    Form, Input, Button, Checkbox, Icon
  } from 'antd'


  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 8 },
  };

class addagency extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            checkNick: true,
        }
    }
    check = () => {
        this.props.form.validateFields(
          (err) => {
            if (!err) {
              console.info('success');
            }
          },
        );
      }
      checkAA = () => {
        this.props.form.resetFields(

        )
      }

      handleChange = (e) => {
        this.setState({
          checkNick: e.target.checked,
        }, () => {
          this.props.form.validateFields(['nickname'], { force: true });
        });
      }

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <>
                <div>
                    <Form.Item {...formItemLayout} label="昵称" colon={false}>
                    {getFieldDecorator('昵称', {
                        rules: [{
                        required: this.state.checkNick,
                        }],
                        initialValue:""
                    })(
                        <Input placeholder="请输入代理昵称" />
                    )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="QQ" colon={false}>
                    {getFieldDecorator('QQ', {
                        rules: [{
                        required: this.state.checkNick,
                        initialValue:""
                        }],
                    })(
                        <Input placeholder="请输入代理QQ" />
                    )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="密码" colon={false}>
                    {getFieldDecorator('密码', {
                        rules: [{
                        required: this.state.checkNick,
                        initialValue:""
                        }],
                    })(
                        <Input placeholder="请设置代理登陆密码" />
                    )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="确认密码" colon={false}>
                    {getFieldDecorator('确认密码', {
                        rules: [{
                        required: this.state.checkNick,
                        initialValue:""
                        }],
                    })(
                        <Input placeholder="请再次输入密码" />
                    )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="视频费率" colon={false}>
                    {getFieldDecorator('视频费率', {
                        rules: [{
                        required: this.state.checkNick,
                        initialValue:""
                        }],
                    })(
                        <Input placeholder="请设置视频费率" />
                    )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="考试费率" colon={false}>
                    {getFieldDecorator('考试费率', {
                        rules: [{
                        required: this.state.checkNick,
                        initialValue:""
                        }],
                    })(
                        <Input placeholder="考试费率不能自己设置" />
                    )}
                    </Form.Item>
                    <Form.Item {...formTailLayout}>
                    <Button type="primary" onClick={this.check}>
                        立即提交
                    </Button>
                    <Button  onClick={this.checkAA} style = {{margin : 10}}>
                        重置
                    </Button>
                    </Form.Item>
                </div>
                <div style={{fontSize: 16}}>
                    <Icon type="exclamation-circle" style={{color: '#FF5722'}} />  请认真填写，
                    请勿滥开代理账号，每开一个账号将收取<span style={{color:'red'}}>5元</span>手续费，昵称不
                    允许纯数字或其他无意义的字符。视频费率和考试费率单位为元，最多保留两位小数点，并且不能低于
                    自己的视频费率和考试费率。
	            </div>
            </>
        )
    }
} 
const WrappedDynamicRule = Form.create({ name: 'dynamic_rule' })(addagency);
export default WrappedDynamicRule