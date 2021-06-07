const isLogin = 'isLogin'


export const SaveIsLogin = (data: string) => {
  // 设置过期时间
  const obj={
    data,
    time:Date.now(),
    expire: 60 * 60 * 24 * 1000,
  };
  localStorage.setItem(isLogin, JSON.stringify(obj))
}
export const GetIsLogin = () => {

  const val =localStorage.getItem(isLogin);
  if(!val){
    return null;
  }

  const isLoginData =JSON.parse(val);

  console.log('localstorage',Date.now(),isLoginData?.time, isLoginData?.expire,  Date.now()- isLoginData?.time >isLoginData?.expire)
  if(Date.now()- isLoginData?.time >isLoginData?.expire){
    RemoveIsLogin();
    return null;
  }

  return isLoginData.data || ''
}
export const RemoveIsLogin = () => {
  
  localStorage.removeItem(isLogin)
}

