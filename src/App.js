import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import React,{Component} from 'react';
import './App.css'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component{
  render(){
    return(
    <Layout>
        <Header className="header">
          <div className="logo" >
            <div class="layui-logo">代看啦 | daikanla.com</div>
            <div>我是渣渣辉</div>
          </div>
        </Header>
        <Layout >
          <Sider width={200} style={{ background: '#393D49' }}>
            <Menu
              mode="inline"
              style={{ height: '100vh', borderRight: 0 , background: '#393D49' , color: 'white'}}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />查询提交</span>}>
                <Menu.Item key="1">单个提交</Menu.Item>
                <Menu.Item key="2">课程进度</Menu.Item>
                <Menu.Item key="3">批量查询</Menu.Item>
                <Menu.Item key="4">查询结果</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />代理管理</span>}>
                <Menu.Item key="5">添加代理</Menu.Item>
                <Menu.Item key="6">代理列表</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />日志管理</span>}>
                <Menu.Item key="9">日志列表</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
    </Layout>
    )
  }
}
export default App;