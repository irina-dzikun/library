import { createContext, useState } from "react";

function toFirstLetterUp(name) {
  const splitted = name.split("");
  const first = splitted[0].toUpperCase();
  const rest = [...splitted];
  rest.splice(0, 1);
  const result = [first, ...rest].join("");
  return result;
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [client, setClient] = useState();

  function register(firstName, lastName, email, password) {
    const cardNumber = Math.random().toString(16).slice(2, 11);
    let allClients = [];
    const client = {
      firstName: toFirstLetterUp(firstName),
      lastName: toFirstLetterUp(lastName),
      email: email,
      password: password,
      cardNumber: cardNumber,
    };
    if (localStorage.getItem("clients") === null) {
      allClients.push(client);
      localStorage.setItem("clients", JSON.stringify(allClients));
      setClient(client);
    } else {
      allClients = JSON.parse(localStorage.getItem("clients"));
      let isExist = false;
      for (let i = 0; i <= allClients.length - 1; i++) {
        if (allClients[i].email === email) {
          isExist = true;
          break;
        }
      }
      if (!isExist) {
        allClients.push(client);
        localStorage.setItem("clients", JSON.stringify(allClients));
        setClient(client);
      }
    }
  }

  function logIn(email, password) {
    const allClients = JSON.parse(localStorage.getItem("clients"));

    allClients.map((item) => {
      if (item.email === email && item.password === password) {
        setClient(item);
      }
    });
  }

  return (
    <AuthContext.Provider value={{ cleint: client, register: register, logIn: logIn }}>{children}</AuthContext.Provider>
  );
};
