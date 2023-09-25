const getToken = (key: string) => {
  const token = localStorage.getItem(key);

  return token && JSON.parse(token);
};

export default getToken;
