import { useState, useEffect } from 'react'
import Header from '@/components/header';
import Card from '@/components/card';
import ContentTitle from '@/components/contentTitle';

import styles from './index.less';

const data = [
  {
    id: "1",
    username:"真男人",
    time: '3小时之前',
    title: '你多久没有',
    describe: '100%tjkl词语表寒假快乐规划VG渤海金控乘飞机回',
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcfb2b103c2d468c8c0ffd06609c449b~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:426:240.awebp'
  },
  {
    id: "2",
    username:"真男人",
    time: '3小时之前',
    title: '你多久没有',
    describe: '100%tjkl词语表寒假快乐规划VG渤海金控乘飞机回',
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcfb2b103c2d468c8c0ffd06609c449b~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:426:240.awebp'
  },
  {
    id: "3",
    username:"真男人",
    time: '3小时之前',
    title: '你多久没有',
    describe: '100%tjkl词语表寒假快乐规划VG渤海金控乘飞机回',
    url: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcfb2b103c2d468c8c0ffd06609c449b~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:426:240.awebp'
  },
  
]

 const Home = () => {
  const [isHot, setIsHot] = useState(false);

  const renderHeader = () =>{
    return <Header />
  }

  // const renderHeader = () =>{
  //   return <Header />
  // }
  {/* <Tabs defaultActiveKey="热门" onChange={callback} style={{padding: '0 50px'}}>
            <TabPane tab="热门" key="热门">
            {
              data.map((item: any)=>{
                return (
                  <>
                    <Card key={item.id} {...item} />
                  </>
                )
              })
            }
            </TabPane>
            <TabPane tab="最新" key="最新">
              {
                data.map((item: any)=>{
                  return (
                    <>
                      <Card key={item.id} {...item} />
                    </>
                  )
                })
              }
            </TabPane>
  </Tabs> */}



  return (
    <>
      {renderHeader()}
      <div className={styles.homeContent}>
        <ContentTitle title={
          <ul>
            <li
              className={ isHot ? '' : 'select' }
              onClick={() =>{
                setIsHot(false)
              }}
              key="hot"
            >
              热门
            </li>
            <li 
             className={ isHot ? 'select' : '' }
             onClick={() =>{
               setIsHot(true)
             }}
             key="new"
            >
              最新
            </li>
          </ul>
        } />
      {
        data.map((item: any)=>{
          return <Card key={item.id} {...item} />
        })
      }
      </div>
      
    </>
  );
}

export default Home;
