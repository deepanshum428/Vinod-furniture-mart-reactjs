const loggedInUserStr = localStorage.getItem("loggedin-user");

export const LOGGEDIN_USER = loggedInUserStr?JSON.parse(loggedInUserStr):null;

export const saveUser =(user) => {
    localStorage.setItem("loggedin-user",JSON.stringify(user));
}