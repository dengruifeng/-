import React from 'react'
import { Input, Button, Table } from 'antd';

const dataSource = [];
  
  const columns = [{
        title: '代理昵称',
        dataIndex: 'daili',
        key: 'daili',
    }, {
        title: 'QQ',
        dataIndex: 'QQ',
        key: 'QQ',
    }, {
        title: '视频费率',
        dataIndex: 'video',
        key: 'video',
    }, {
        title: '考试费率',
        dataIndex: 'exam',
        key: 'exam',
    }, {
        title: '单子数',
        dataIndex: 'num',
        key: 'num',
    }, {
        title: '余额(元)',
        dataIndex: 'balance',
        key: 'balance',
    }, {
        title: '总计(元)',
        dataIndex: 'total',
        key: 'total',
    }, {
        title: '最后登陆',
        dataIndex: 'login',
        key: 'login',
    }, {
        title: '操作',
        dataIndex: 'operation',
        render: () => (
            <>
            </>
        ),
    }, {
        title: '联系代理',
        dataIndex: 'relation',
        key: 'relation',
  }];

class agencylist extends React.Component {

    render() {
        return (
            <>
                <div style={{float:'left', marginBottom: 10 , padding: 15 , lineHeight: '22px',
                borderLeft:' 5px solid #009688', backgroundColor: '#f2f2f2' , width: '100%'}}>注意：为代理充值将扣除
                自己的余额，扣除费用=充值金额/代理总费率*您的总费率，你旗下代理充值的时候页面将显示你的QQ。
                <br/>
                </div>
                <div style={{marginBottom: 10}}>
                    <label>代理查询：</label>
                    <Input  placeholder="请输入QQ或者昵称" style={{ width : 150}}></Input>
                    <Button style={{marginLeft: '10px', backgroundColor: '#FF5722',color: '#fff'}}>查询</Button>
                </div>
                <Table dataSource={dataSource} columns={columns} bordered/>
            </>
                )
            }
        
        }
        
export default  agencylist