import Header from '@/components/header'
import styles from './index.less';

export default function Home() {

  const renderHeader = () =>{
    return <Header />
  }

  // const renderHeader = () =>{
  //   return <Header />
  // }

  return (
    <>
      {renderHeader()}
      <h1 className={styles.title}>Page indexhome</h1>
    </>
  );
}
