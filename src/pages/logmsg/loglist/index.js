import React from 'react'
import { Table } from 'antd';

const dataSource = [];
  
  const columns = [{
        title: '时间',
        dataIndex: 'time',
        key: 'time',
    }, {
        title: '操作类型',
        dataIndex: 'operation',
        key: 'operation',
    }, {
        title: '操作详情',
        dataIndex: 'operationmsg',
        key: 'operationmsg',
    }, {
        title: 'IP',
        dataIndex: 'IP',
        key: 'IP',
    }, {
        title: '地点',
        dataIndex: 'site',
        key: 'site',
    }];

class loglist extends React.Component {

    render() {
        return (
            <>
                <div style={{float:'left', marginBottom: 10 , padding: 15 , lineHeight: '22px',
                borderLeft:' 5px solid #009688', backgroundColor: '#f2f2f2' , width: '100%'}}>注意：只显示最近100条记录，每学期清空数据一次(余额、代理以及最近单子除外)。
                <br/>
                </div>
                <Table dataSource={dataSource} columns={columns} bordered/>
            </>
                )
            }
        
        }
        
export default  loglist