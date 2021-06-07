import { useEffect } from 'react';
import { history } from 'umi';
import _ from 'lodash';
import { Layout, Button, Tooltip, Menu } from 'antd';
import { cookie } from '@/utils/common'
import Search from '@/components/search'
import { request } from '@/utils/axios'
import { SaveIsLogin, GetIsLogin } from '@/utils/storage'
import UserInfo from './right'

import logo from '@/assets/logo.jpg';

import styles from './index.less';

const {Header: GlobalHeader}  = Layout;
const MenuItem = Menu.Item;

export default function IndexPage( props: any ) {

  // const { history, location: { pathname} } = props;
  
  console.log('history', history);
  // 回到首页
  const goToIndex = () =>{
    history.push('/home');
  }

  const { userInfo = {}} = GetIsLogin() || ''
  if(_.isEmpty(userInfo)){
    history.push('/login')
  }

  const renderHeaderMenu = () =>{
    const Itmes = (
      <>
        <MenuItem className={styles.MyMenuItem} key='home'>
          首页
        </MenuItem>
        <MenuItem className={styles.MyMenuItem} key='hotspotKey'>
          热点
        </MenuItem>
     </>
    )
    return (
      <Menu
        mode="horizontal"
        // selectedKeys="home"
      >
        { Itmes }
      </Menu>
    )
  }

  const renderHeaderExtra = () =>{
    return (
      <div className={styles.headerSearch}>
       
          <Search />
      </div>
    )
  }

  useEffect(()=>{

    console.log('请求进入')
  }, [])

  return (
    <GlobalHeader
      className={styles.header}
    >
      <div
        className={styles.logo}
        onClick={goToIndex}
      >
        <img src={logo} alt="" />
      </div>
      <div className={styles.headerTab}>
        {renderHeaderMenu()}
      </div>
      <div className={styles.haederRight}>
        { renderHeaderExtra() }
        <UserInfo userInfo={userInfo} />
      </div>
    </GlobalHeader>
  );
}
