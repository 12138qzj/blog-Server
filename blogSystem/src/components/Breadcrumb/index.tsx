import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'
import { Breadcrumb } from 'antd'

// import { useListener } from '@/hooks/useBus'


// export function useListener(name, fn) {
//   const bus = useBus()
//   React.useEffect(() => {
//     bus.on(name, fn)
//     return () => {
//       bus.off(name, fn)
//     }
//   }, [bus, name, fn])
// }

/**
 * 面包屑
*/
function PvBreadcurmb(props: any) {
  const history = useHistory()
  const [list, setList] = useState([])
  const breadcrumbList = list.length > 0 ? [{ link: '/admin', name: '首页' }].concat(list) : []

  // useListener('breadcrumbList', list => setList(list))

  const handleClick = (e: any, goBack = false) => {
    if (goBack) {
      e.preventDefault()
      history.go(-1)
    }
  }

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbList.map((item: any, index) => (
        <Breadcrumb.Item key={index}>
          {typeof item === 'string' ? item : <Link to={item.link || '/'} onClick={e => handleClick(e, item.goBack)}>{item.name}</Link>}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}

export default PvBreadcurmb
