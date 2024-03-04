"use client";
import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
} from "react";
import styles from "./styles.module.scss";
import cName from "classnames";

export interface IPopupRef {
  open: () => void;
}

interface IProps {
  children: JSX.Element;
}

export const Popup = forwardRef<IPopupRef, IProps>(({ children }, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    open: (): void => {
      setVisible(true);
    },
  }));

  useEffect(() => {
    document.body.className = visible ? "forbidScroll" : "";
  }, [visible]);

  const renderDom = visible ? (
    <div
      className={cName({
        [styles.popup]: true,
      })}
    >
      <div className={styles.mask} />
      <div className={styles.popupContent}>
        <div
          className={styles.closeBtn}
          onClick={(): void => {
            console.log("close");
            setVisible(false);
          }}
        />
        {children}
      </div>
    </div>
  ) : (
    <></>
  );

  return renderDom;
});
