import apiAuthentification  from '../api/api.authentification'
// import {BASE_URL_LOGIN} from "../../Constants";


//login du user avec ses identifiants
const authenticate = (username, password) => {
  const encodedUsernameKey = encodeURIComponent('username')
  const encodedUsernameValue = encodeURIComponent(username)
  const encodedPasswordKey = encodeURIComponent('password')
  const encodedPasswordValue = encodeURIComponent(password)

  const usernameBody = encodedUsernameKey + '=' + encodedUsernameValue
  const passwordBody = encodedPasswordKey + '=' + encodedPasswordValue
  const formBody = usernameBody + '&' + passwordBody
const BASE_URL_LOGIN = "http://localhost:8080/login"
  return apiAuthentification.post(BASE_URL_LOGIN, formBody)
}
export default authenticate