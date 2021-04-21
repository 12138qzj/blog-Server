import { history } from 'umi'
import { Layout, Button, Tooltip, Menu } from 'antd';
import Search from '@/components/search'
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

  const renderHeaderMenu = () =>{
    history.push('/home');
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

        <div>
          登陆
        </div>
      </div>
    </GlobalHeader>
  );
}
