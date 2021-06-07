// import React from 'react'
import { isExternal } from '@/utils/common'

// a 标签跳转新窗口
function Href({ children, href, ...rest }: any) {
  let url = href
  if (!isExternal(href)) {
    url = `http://${href}`
  }
  return (
    <a target='_blank' rel='noreferrer noopener' {...rest} href={url}>
      {children}
    </a>
  )
}

export default Href
