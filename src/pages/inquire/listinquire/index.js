import React from 'react'
import {Button,Input,  Radio } from "antd"

const TextArea = Input.TextArea
const RadioGroup = Radio.Group;

class listinquire extends React.Component{
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
        return(
            <>
                <div>
                    <label >网课类型：</label>
                    <RadioGroup onChange={this.onChange} style={{padding : '10px'}}>
                        <Radio value={1}>超星尔雅(学习通)</Radio>
                        <Radio value={2}>智慧树(知到)</Radio>
                        <Radio value={3}>优学院</Radio>
                        <Radio value={4}>学堂云3</Radio>
                        <Radio value={5}>高校邦</Radio>
                    </RadioGroup>
                </div>
                <div style={{display: 'flex'}} >
                    <label  style={{width: 100}}>账号密码：</label>
                    <div style={{width: '100%'}}>
                        <TextArea rows={20} placeholder="格式：一行一个账号,学校 学号 密码 空格隔开，
                        如果是手机号登陆则不用填学校。账号后面可加备注，详情请点击上方'使用帮助'，可以参考里面的例子。"></TextArea>
                        <Button style={{margin: '10px',backgroundColor: '#FF5722',color: '#fff'}}>查询</Button>
                        <Button style={{margin: '10px'}}>重置</Button>
                    </div>
                </div>
            </>
        )
    }
}

export default listinquire