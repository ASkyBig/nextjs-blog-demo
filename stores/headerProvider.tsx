"use client";
import React, { createContext } from "react";

interface IHeaderContextProps {
  [key: string]: any;
}
export const HeaderContext = createContext<IHeaderContextProps>({});

const HeaderProvider = ({
  children,
  headerList,
}: {
  children: JSX.Element;
  headerList: any;
}): JSX.Element => {
  return (
    <HeaderContext.Provider value={headerList}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
