export const getAuthToken = () => {
  return JSON.parse(localStorage.getItem("example-token"));
};

export const setAuthToken = (token: string): void => {
  return localStorage.setItem("example-token", JSON.stringify(token));
};

export const removeAuthToken = (): void => {
  return localStorage.clear();
};
