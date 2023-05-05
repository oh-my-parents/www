const storage = localStorage;

const setAuth = (token: string) => {
  storage.setItem("auth", token);
};

const removeAuth = () => {
  storage.removeItem("auth");
};

const getAuth = () => {
  const auth = storage.getItem("auth");

  if (!auth) return null;
  return auth;
};

const getToken = () => {
  return getAuth();
};

export default {
  setAuth,
  removeAuth,
  getAuth,
  getToken,
};
