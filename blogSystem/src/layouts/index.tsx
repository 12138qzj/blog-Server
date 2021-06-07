import React, { Component } from 'react';
import { history } from 'umi'
import { connect } from 'dva';
import { ConfigProvider, Layout } from 'antd';
import Header from '@/components/header';
import { SaveIsLogin, GetIsLogin } from '@/utils/storage'

import styles from './index.less';
 
const { Content } = Layout;
 
const MyLayout = (props: any) => {
  const { children } = props;
  console.log('children', children);

  if(!GetIsLogin()){
    history.push('/login')
  }

  return (
    <ConfigProvider >
      <Layout>
        <Header />
        <Layout style={{ zIndex: 1 }}>
          <Content className={styles.content} style={{ zIndex: 2 }}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
 }
 
 export default MyLayout;
 