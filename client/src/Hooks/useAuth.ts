import { MError } from "../Utils/Error";
import User from "../Models/User";

const api = import.meta.env.VITE_API;
// const host = encodeURI(import.meta.env.VITE_HOST);

export default function useAuth() {
  const authLogin = async (data: User) => {
    const index = window.USERS.findIndex((v) => v.email == data.email && data.password == v.password);
    if (index <= -1) throw new MError("User does not exists");
    const user = window.USERS[index];
    window.LOGGED_IN_USER = user;
    return user;
    // const res = await fetch(`${api}/auth/login`, {
    //   method: "POST",
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: data.toJson()
    // });
    //
    // const resjson = await res.json();
    // if (res.status >= 200 && res.status < 300) {
    //   return new User(resjson);
    // }
    // throw new MError(resjson);
  };

  const authRegister = async(data: User) => {
    data.id = crypto.randomUUID();
    window.USERS.push(data);
    // const res = await fetch(`${api}/auth/register`, {
    //   method: "POST",
    //   credentials: "include",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: data.toJson()
    // });
    //
    // if (res.status >= 200 && res.status < 300) {
    //   return "";
    // }
    // const resjson = await res.json();
    // throw new MError(resjson);
  };

  const authLogout = (cb: () => void) => {
    fetch(`${api}/auth/logout`, {
      method: "GET",
      credentials: "include"
    });

    cb();
  };

  const authVerify = async () => {
    if (window.LOGGED_IN_USER == null) {
         throw new MError("Invalid");
    }
    return window.LOGGED_IN_USER;
    // const res = await fetch(`${api}/auth/verify`, {
    //   method: "GET",
    //   credentials: "include"
    // });
    //
    // const resjson = await res.json();
    // if (res.status >= 200 && res.status < 399) {
    //   return new User(resjson);
    // }
    // throw new MError(resjson);
  }

  return {
    authLogin,
    authLogout,
    authVerify,
    authRegister
  }
}
