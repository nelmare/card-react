import React, { useEffect } from "react";
import { Close, Header, Wrapper } from "./styled";

export default function Popup({ isShow, onClose, title, children }) {
  const handlerEsc = (evt) => {
    if (evt.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  }, []);
  return isShow ? (
    <Wrapper>
      <Header>
        {title}
        {""}
        <Close size="small" onClick={onClose}>
          x
        </Close>
      </Header>
      {children}
    </Wrapper>
  ) : null;
}
