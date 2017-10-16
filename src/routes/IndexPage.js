import React from 'react';
import { connect } from 'dva';

import LTable from './LTable';
import FileTable from './FileTable';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less' 


import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

import Login from './Login';
import './login.css';


function IndexPage() {
  return (
    <Tabs defaultActiveKey="1" style={{
      width: '95%', margin: '10px auto'
    }}> 
      <TabPane tab={<span><Icon type="usergroup-add" />用户信息管理</span>} key="1">
        <LTable />
      </TabPane> 
      <TabPane tab={<span><Icon type="file" />文件管理</span>} key="2">
        <FileTable />
      </TabPane>
      <TabPane tab={<span><Icon type="check-square-o" />进程管理</span>} key="3">
        Tab 2
      </TabPane>
    </Tabs>
    // <div style={{backgroundColor: '#f9f9f9'}}>
    //   <Login />
    // </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
