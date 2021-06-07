
import { useEffect } from 'react'
import { connect } from 'umi'
import { Layout } from 'antd'
import AdminSideBar from '@/components/sidebar'
import Breadcrumb from '@/components/Breadcrumb'


const { Sider, Header, Content, Footer } = Layout

import './index.less';


const MyHome = (props: any) => {
  const { hometest, dispatch } = props;
  useEffect(() => {
    dispatch({
      type: 'global/querytesst',
      payload:{
        home: '邱在杰'
      }
    })
    return () => {
    }
  }, [])
  
  console.log('hometest', hometest, props);
  return (
    <Layout>
      <Sider width={200} className='admin-sider' >
        <AdminSideBar selectedKeys={[location.pathname]} />
      </Sider>
      <Layout className='admin-content-wrap'>
        <Breadcrumb />
        <Content className='admin-content'>
          {props.children}
        </Content>
      </Layout>

    </Layout>
  );

}

const mapStateToProps = ({global}: any) =>({
  hometest: global.home,
})

// const mapDispatchToProps = (dispatch: any) =>({
//   hometest: global.home,
// })

export default connect(mapStateToProps)(MyHome)
