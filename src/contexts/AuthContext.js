import { createContext, useState } from "react";

const toFirstLetterUp = (name) => {
  const splitted = name.split("");
  const first = splitted[0].toUpperCase();
  const rest = [...splitted];
  rest.splice(0, 1);
  const result = [first, ...rest].join("");
  return result;
};

const toNameProfile = (firstName, lastName) => {
  const splittedFirst = firstName.split("");
  const splittedLast = lastName.split("");
  const first = splittedFirst[0];
  const last = splittedLast[0];
  const result = [first, last].join("");
  return result.toUpperCase();
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [client, setClient] = useState();

  const register = (firstName, lastName, email, password) => {
    const cardNumber = Math.random().toString(16).slice(2, 11);
    let allClients = [];
    const client = {
      firstName: toFirstLetterUp(firstName),
      lastName: toFirstLetterUp(lastName),
      email: email,
      password: password,
      cardNumber: cardNumber.toUpperCase(),
      nameProfile: toNameProfile(firstName, lastName),
      visits: 0,
      buy: false,
      rentBooks: [],
    };
    if (localStorage.getItem("clients") === null) {
      client.visits = 1;
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
        client.visits = 1;
        allClients.push(client);
        localStorage.setItem("clients", JSON.stringify(allClients));
        setClient(client);
      }
    }
  };

  const logIn = (email, password) => {
    const allClients = JSON.parse(localStorage.getItem("clients"));
    let result = false;
    allClients.forEach((item) => {
      if (item.email === email && item.password === password) {
        ++item.visits;
        localStorage.setItem("clients", JSON.stringify(allClients));
        setClient(item);
        result = true;
      }
    });
    return result;
  };

  const buyCard = (client) => {
    const allClients = JSON.parse(localStorage.getItem("clients"));
    let result = false;
    allClients.forEach((item) => {
      if (item.email === client.email) {
        item.buy = true;
        localStorage.setItem("clients", JSON.stringify(allClients));
        setClient(item);
        result = true;
      }
    });
    return result;
  };

  const toClientRentBooks = (allRentedBooks) => {
    const allClients = JSON.parse(localStorage.getItem("clients"));
    allClients.forEach((item) => {
      if (item.email === client.email) {
        item.rentBooks = allRentedBooks;
        localStorage.setItem("clients", JSON.stringify(allClients));
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        client: client,
        register: register,
        logIn: logIn,
        buyCard: buyCard,
        toClientRentBooks: toClientRentBooks,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
