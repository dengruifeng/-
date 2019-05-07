import React from 'react'
import { Table , Button , Select , Input  , DatePicker } from "antd"

const Option = Select.Option;
const dataSource = [{
    key: '1',
    name: '胡彦斌',
    lx: "智慧树",
    school: "蓝翔",
    id:"996",
    pwd:"333",
    phone:'123444555',
    login:'已登陆',
    task:'未完成',
    time: '2019-01-02 09:42:32',
    nickname: '贪玩月月'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }];
  
  const columns = [{
    title: '类型',
    dataIndex: 'lx',
    key: 'lx',
  }, {
    title: '学校',
    dataIndex: 'school',
    key: 'school',
  }, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '学号',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '密码',
    dataIndex: 'pwd',
    key: 'pwd',
  }, {
    title: '手机',
    dataIndex: 'phone',
    key: 'phone',
  }, {
    title: '登陆状态',
    dataIndex: 'login',
    key: 'login',
  }, {
    title: '任务状态',
    dataIndex: 'task',
    key: 'task',
  }, {
    title: '提交时间',
    dataIndex: 'time',
    key: 'time',
  }, {
    title: '代理昵称',
    dataIndex: 'nickname',
    key: 'nickname',
  }, {
    title: '操作',
    key: 'operation',
    render: () => (
        <>
            <Button size='small'>查看</Button>
            <Button size='small' style={{marginLeft: '10px' , backgroundColor: '#009688',color: '#fff'}}>改密</Button>
            <Button size='small' style={{marginLeft: '10px', backgroundColor: '#FF5722',color: '#fff'}}>重看</Button>
            <Button size='small' style={{marginLeft: '10px', backgroundColor: '#1E9FFF',color: '#fff'}}>取消</Button>
        </>
      ),
  }];

class syiiabus extends  React.Component {
    
    onChangeOne(value) {
        console.log(`selected ${value}`);
      }
    onChangeTwo(value) {
        console.log(`selected ${value}`);
    }
    onChangeThree(date, dateString) {
        console.log(date, dateString);
      }  
    render() {
        return(
            <>
                <div style={{paddingBottom: 20}}>
                    <label>课程类型：</label>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="全部"
                        optionFilterProp="children"
                        onChange={this.onChangeOne}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="全部">全部</Option>
                        <Option value="超星">超星</Option>
                        <Option value="智慧树">智慧树</Option>
                        <Option value="优学院">优学院</Option>
                        <Option value="学堂云3">学堂云3</Option>
                        <Option value="高校邦">高校邦</Option>
                    </Select>
                    <label style={{paddingLeft: 10}}>代看状态：</label>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="全部"
                        optionFilterProp="children"
                        onChange={this.onChangeTwo}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="全部">全部</Option>
                        <Option value="进行中">进行中</Option>
                        <Option value="待考试">待考试</Option>
                        <Option value="完成">完成</Option>
                        <Option value="任务取消">任务取消</Option>
                    </Select>
                    <label style={{paddingLeft: 10}}>提交时间：</label>
                    <DatePicker onChange={this.onChangeThree} />
                    <label style={{paddingLeft: 10}}>单个搜索：</label>
                    <Input  placeholder="学号或手机号" style={{ width : 150}}></Input>
                    <Button style={{marginLeft: '10px', backgroundColor: '#FF5722',color: '#fff'}}>查询</Button>
                </div>
                <Table dataSource={dataSource} columns={columns} bordered/>
            </>
        )
    }

}

export default syiiabus