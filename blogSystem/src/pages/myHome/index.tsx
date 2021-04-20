
import { useEffect } from 'react'
import { connect } from 'umi'
import styles from './index.less';


const MyHome = (props: any) => {
  const { hometest, dispatch } = props;
  useEffect(() => {
    dispatch({
      type: 'global/querytesst',
      payload:{
        home: '邱在杰'
      }
    })
    return () => {
    }
  }, [])
  
  console.log('hometest', hometest, props);
  return (
    <div>
      <h1 className={styles.title}>Page indexmyhome</h1>
    </div>
  );

}

const mapStateToProps = ({global}: any) =>({
  hometest: global.home,
})

// const mapDispatchToProps = (dispatch: any) =>({
//   hometest: global.home,
// })

export default connect(mapStateToProps)(MyHome)
