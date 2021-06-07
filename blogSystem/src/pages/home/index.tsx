import { useState, useEffect } from 'react'
import { connect } from 'dva'
import { Layout, Menu } from 'antd';

import { labelTab } from '@/constants/mock';

import Card from '@/components/card';
import ContentTitle from '@/components/contentTitle';

import styles from './index.less';
const MenuItem = Menu.Item;

interface IlabelTab {
  id: number,
  name: string,
  key: string
}

const Home = (props: any) => {
  const { allArticle, dispatch } = props; 
  const [isHot, setIsHot] = useState(false);
  const [article, setArticle] = useState([]);
  const [label, setLabel] = useState('recommend');

  useEffect(()=> {

    // 获取文章数据
    dispatch({
      type: 'global/getArticle'
    })
    console.log('allArticle', allArticle)
  }, [])


  return (
    <>
      <div className={styles.navigation}>
        <Menu
          mode="horizontal"
          defaultChecked
        >
          {
            labelTab.map((item: IlabelTab) => {
              return (
                <MenuItem className={styles.MyMenuItem} key={item.key}>
                  {item.name}
                </MenuItem>
              )
            })
          }
        </Menu>
        <span className={styles.labelSpan}>
          标签管理
        </span>
      </div>
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
        allArticle.map((item: any)=>{
          return <Card key={item.id} {...item} />
        })
      }
      </div>
      
    </>
  );
}

const mapStateToProps = (state: any) => ({
  allArticle: state.global.allArticle,
})
const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

