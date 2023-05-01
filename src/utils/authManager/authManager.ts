import {InMemoryStorage} from "../storage";

const storage = InMemoryStorage;

type Auth = {
  token: string,
};

const setAuth = (auth:Auth) =>{
  storage.setItem("auth", JSON.stringify(auth));
}

const removeAuth = () =>{
  storage.removeItem("auth");
}

const getAuth = () =>{
  const auth = storage.getItem("auth");

  if (!auth) return null;
  return JSON.parse(auth) as Auth;
}

const getToken = () => {
  const auth = getAuth();

  if (auth) return auth.token;
  else return null;
}


export default {
  setAuth,
  removeAuth,
  getAuth,
  getToken
}
