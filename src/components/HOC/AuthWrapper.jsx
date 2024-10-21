const AuthWrapper = props => {
  const isUserValid = true
  if(isUserValid){
    return props.children
  } else {
    localStorage.clear()
    sessionStorage.clear()
    window.location.href = 'user'
  }
}

export default AuthWrapper