import { Layout, Button } from 'antd'
import styles from './index.less';

const {Header: GlobalHeader}  = Layout;

export default function IndexPage() {
  return (
    <GlobalHeader
      className={styles.header}
    >
      <div className='logo'>2</div>
      <div className="headerTab">1</div>
      <div className='haederRight'>Page index</div>
    </GlobalHeader>
  );
}
