import { history } from 'umi'
import {  cookie } from '@/utils/common'
import styles from './index.less';

const IndexPage = () => {
  if(cookie.get('blogToken')){
    history.push('/home');
    // console.log('blogToken', cookie.get('blogToken'))
  }
  else{
    history.push('/login');
  }
  console.log('document.cookie', document.cookie)
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}

export default IndexPage;
