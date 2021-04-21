import { useState } from 'react'
import { Input } from 'antd'
import './index.less'

const { Search } = Input;

const SearchCom = (props: any) => {
  const [ isLoading, setIsLoading] = useState(false);

  const onSearch = (value: any) => console.log(value);
    return (
    <Search
      className='search'
      placeholder="搜索"
      allowClear
      enterButton="搜索"
      size="large"
      onSearch={onSearch}
      loading={isLoading} 
    />
  )
}

export default SearchCom;
