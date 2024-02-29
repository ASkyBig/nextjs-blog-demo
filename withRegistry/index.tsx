"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/stores/theme";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const withRegistry = (children: JSX.Element) => {
  return (
    <>
      <AntdRegistry> {children}</AntdRegistry>
    </>
  );
};

export default withRegistry;
