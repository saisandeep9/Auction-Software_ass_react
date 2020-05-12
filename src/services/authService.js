import axios from "axios";

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}
const tokenKey = "token";
setJwt(getToken());

function loginUrl() {
  return "http://localhost:3900/api/auth";
}

export async function login(email, password) {
  console.log("auth", email, password);
  const response = await axios.post(loginUrl(), { email, password });
  console.log("res", response);
  if (response && response.headers["x-auth-token"]) {
    const userToken = response.headers["x-auth-token"];
    localStorage.setItem(tokenKey, userToken);
    return true;
  } else {
    return false;
  }
}

export function getToken() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  getToken,
};
