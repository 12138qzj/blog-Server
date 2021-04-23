/**
 * Routes:
 *  - src/routes/PrivateRoute.js
 */
 import React, { Component } from 'react';
 import { connect } from 'dva';
 import { ConfigProvider, Layout } from 'antd';
//  import PHeader from './components/PHeader';
//  import PMenu from './components/PMenu';
 import styles from './index.less';
 
 const { Content } = Layout;
 
 const MyLayout = (props: any) => {
//    constructor(props) {
//      super(props);
//      this.state = {};
//    }
 
//    const renderContent = (pathname: string) => {
//      const { children, teamData, typeSelect, userTeamId } = props;
//      if (/^\/team\/.{7,14}\/project\/.{7,14}/g.test(pathname)) {
//        // 项目内
//        const res = /(^\/team\/(.{7,14})\/project\/[0-9a-zA-Z\-_]{7,14})(.*)/g.exec(pathname) || [];
//        const routerPrefix = res[1] || '';
//        const teamId = res[2] || '';
//        const link = res[3] || '';
//        return (
//          <>
//            {/* <GoBack teamData={teamData} teamId={teamId} typeSelect={typeSelect} userTeamId={userTeamId} />
//            <TabMenu routerPrefix={routerPrefix} link={link} /> */}
//            {children}
//          </>
//        );
//      }
 
//      // 其他
//      return children;
//    };
 
//    const { pathname } = location;
//    const loadingStatus = loading.global;
//    const config = {
//     //  renderEmpty: (componentName) => {
//     //    if (componentName === 'Select') {
//     //      return <PNoData type="pureText" />;
//     //    }
//     //    return <PNoData />;
//     //  },
//    };
//    if (pathname.startsWith('/home')) {
//     return <ConfigProvider {...config}>{children}</ConfigProvider>;
//   }
   
 
    return (
      <ConfigProvider >
         <Layout>
         123456789876543234r
           {/* <PHeader title={PHeaderTitle} pathname={pathname} location={location} /> */}
           <Layout style={{ zIndex: 1 }}>
             {/* nuwa 和 promise dcmp dmc公用一个菜单组件 */}
             {/* {/^\/(dcmp|dmc){1}\/?$/.test(pathname)
               ? null
               : pathname !== '/' &&
                 !pathname.startsWith('/chibi') &&
                 !pathname.startsWith('/announcement') && (
                //    <PMenu
                //      pathname={pathname}
                //      navHashArr={pathname.replace(/\/nuwa\/?/, '').split('/')}
                //      dcmpHashArr={/\/dcmp\/(copyConfiguration|publish){1}\/[a-zA-Z0-9]+\/([0-9]+)\/?$/.exec(pathname)}
                //      key={`${pathname.replace(/\/nuwa\/?/, '').split('/')[0]}-${pathname.replace(/\/dmc\/?/, '').split('/')[0]}`}
                //    />
                 )} */}
             <Content className={styles.content} style={{ zIndex: 2 }}>
               {/* <Loading loading={loadingStatus}>{this.renderContent(pathname)}</Loading> */}
             </Content>
           </Layout>
         </Layout>
       </ConfigProvider>
    );
 }
 
 export default MyLayout;
 