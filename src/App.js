import {Layout, Menu,  Icon} from 'antd';
import React,{Component} from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Ainquire from './pages/inquire/ainquire'
import Syllabus from './pages/inquire/syllabus/index'
import Listinquire from './pages/inquire/listinquire/index'
import Inquiremsg from './pages/inquire/inquiremsg/index'
import Addagency from './pages/agency/addagency/index'
import Agencylist from './pages/agency/agencylist/index'
import Loglist from './pages/logmsg/loglist/index'
import './App.css'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class App extends Component{
  render(){
    return(
    <Layout>
        <Header className="header"  style={{ height: '10vh',}}>
          <div className="logo" >
            <div className="layui-logo">代看啦 | daikanla.com</div>
            <div>我是渣渣辉</div>
          </div>
        </Header>
        <Layout >
          <Sider width={200} style={{ background: '#393D49' }}>
            <Menu
              mode="inline"
              style={{ height: '90vh', borderRight: 0 , background: '#393D49' , color: 'white'}}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />查询提交</span>}>
                <Menu.Item key="1"><NavLink to="/ainquire"> 单个提交 </NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/syllabus">课程进度  </NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to="/listinquire">批量查询 </NavLink></Menu.Item>
                <Menu.Item key="4"><NavLink to="/inquiremsg">查询结果 </NavLink></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />代理管理</span>}>
                <Menu.Item key="5"> <NavLink to="/addagency">添加代理 </NavLink></Menu.Item>
                <Menu.Item key="6"> <NavLink to="/agencylist">代理列表</NavLink></Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />日志管理</span>}>
                <Menu.Item key="9"><NavLink to="/loglist"> 日志列表 </NavLink></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
            >
            <Switch>
              <Route path="/ainquire" component={Ainquire}></Route>
              <Route path="/syllabus" component={Syllabus}></Route>
              <Route path="/listinquire" component={Listinquire}></Route>
              <Route path="/inquiremsg" component={Inquiremsg}></Route>
              <Route path="/addagency" component={Addagency}></Route>
              <Route path="/agencylist" component={Agencylist}></Route>
              <Route path="/loglist" component={Loglist}></Route>
              <Route path="/" component={Ainquire}></Route>
            </Switch>
            </Content>
          </Layout>
        </Layout>
    </Layout>
    )
  }
}
export default App;