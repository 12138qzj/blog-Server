// import { useEffect, useState } from 'react'
import { SIDEBAR } from '@/config'
// import axios from '@/utils/axios'
// import { useSelector } from 'react-redux'

// components
import { Link } from 'react-router-dom'
import Href from '@/components/Href'
import Icon from '@ant-design/icons';

import { Divider, Tag } from 'antd'

// import { Alert } from 'antd'
// import { ANNOUNCEMENT } from '@/config'

// import useFetchList from '@/hooks/useFetchList'

function SideBar(props: any) {
  // const tagList = useSelector(state => state?.article.tagList || [])

  // const { dataList: articleList } = useFetchList({
  //   withLoading: false,
  //   requestUrl: '/article/list',
  //   queryParams: {
  //     order: 'viewCount DESC',
  //     page: 1,
  //     pageSize: 6
  //   }
  // })

  return (
    <aside className='app-sidebar'>
      <img src={SIDEBAR.avatar} className='sider-avatar' alt='' />
      <h2 className='title'>{SIDEBAR.title}</h2>
      <h5 className='sub-title'>{SIDEBAR.subTitle}</h5>
      <ul className='home-pages'>
        {Object.entries(SIDEBAR.homepages).map(([linkName, item]: any) => (
          <li key={linkName}>
            {item.icon}
            <Href href={item.link}>{linkName}</Href>
          </li>
        ))}
      </ul>

      {/* {ANNOUNCEMENT.enable && <Alert message={ANNOUNCEMENT.content} type='info' />} */}

      <Divider orientation='left'>热门文章</Divider>
      <ul className='article-list'>
        
        <li key='1'>
          <Link to={`/article/1`}>测试热门文章</Link>
        </li>
        {/* {articleList.map((d: any) => (
          <li key={d.id}>
            <Link to={`/article/${d.id}`}>{d.title}</Link>
          </li>
        ))} */}
      </ul>

      <Divider orientation='left'>标签</Divider>
      <div className='tag-list'>
        <Tag key='12' color='red'>
          <Link to={`/tags/12`}>测试文章标签</Link>
        </Tag>
        {/* {tagList.map((tag: any, i: number) => (
          <Tag key={i} color={tag.color}>
            <Link to={`/tags/${tag.name}`}>{tag.name}</Link>
          </Tag>
        ))} */}
      </div>
    </aside>
  )
}

export default SideBar
