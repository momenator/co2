const dataField = 'userData';

export const getUserData = () => {
  const userData = window.localStorage.getItem(dataField);
  if (userData) {
    return JSON.parse(userData);
  }
  return [];
};

export const setUserData = (data) => {
  window.localStorage.setItem(dataField, JSON.stringify(data));
}

const isUserDataEmpty = () => {
  const userData = getUserData();
  return userData.length === 0;
}

export const addUserData = (newData) => {
  let userData;
  if (isUserDataEmpty()) {
    setUserData([]);
  }
  userData = getUserData();
  setUserData([ newData, ...userData ]);
};
