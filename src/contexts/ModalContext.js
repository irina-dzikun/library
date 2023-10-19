import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpenDropMenu, setIsOpenDropMenu] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
  const [isOpenModalLogIn, setIsOpenModalLogIn] = useState(false);
  const [isOpenModalProfile, setIsOpenModalProfile] = useState(false);
  const [isOpenModalBuyCard, setIsOpenModalBuyCard] = useState(false);

  function toggleDropMenu() {
    if (isOpenDropMenu) {
      setIsOpenDropMenu(false);
    } else {
      setIsOpenDropMenu(true);
    }
  }

  function toggleModalRegister() {
    if (!isOpenModalRegister) {
      setIsOpenModalRegister(true);
      setIsOpenDropMenu(false);
    } else {
      setIsOpenModalRegister(false);
    }
  }

  function toggleModalLogIn() {
    if (!isOpenModalLogIn) {
      setIsOpenModalLogIn(true);
      setIsOpenDropMenu(false);
    } else {
      setIsOpenModalLogIn(false);
    }
  }

  function toggleModalProfile() {
    if (!isOpenModalProfile) {
      setIsOpenModalProfile(true);
      setIsOpenDropMenu(false);
    } else {
      setIsOpenModalProfile(false);
    }
  }

  function toggleModalBuyCard() {
    if (!isOpenModalBuyCard) {
      setIsOpenModalBuyCard(true);
    } else {
      setIsOpenModalBuyCard(false);
    }
  }

  return (
    <ModalContext.Provider
      value={{
        isOpenDropMenu: isOpenDropMenu,
        toggleDropMenu: toggleDropMenu,
        isOpenModalRegister: isOpenModalRegister,
        toggleModalRegister: toggleModalRegister,
        isOpenModalLogIn: isOpenModalLogIn,
        toggleModalLogIn: toggleModalLogIn,
        isOpenModalProfile: isOpenModalProfile,
        toggleModalProfile: toggleModalProfile,
        isOpenModalBuyCard: isOpenModalBuyCard,
        toggleModalBuyCard: toggleModalBuyCard,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
