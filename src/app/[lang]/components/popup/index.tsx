"use client";
// import React, {
//   forwardRef,
//   useState,
//   useImperativeHandle,
//   useEffect,
// } from "react";
// import styles from "./styles.module.scss";
// import cName from "classnames";
// import ReactDom from "react-dom";

// export interface IPopupRef {
//   open: () => void;
// }

// interface IProps {
//   children: JSX.Element;
// }

// export const Popup = forwardRef<IPopupRef, IProps>(({ children }, ref) => {
//   const [visible, setVisible] = useState(false);

//   useImperativeHandle(ref, () => ({
//     open: (): void => {
//       setVisible(true);
//     },
//   }));

//   useEffect(() => {
//     document.body.className = visible ? "forbidScroll" : "";
//   }, [visible]);

//   const renderDom = visible ? (
//     <div
//       className={cName({
//         [styles.popup]: true,
//       })}
//     >
//       <div className={styles.mask} />
//       <div className={styles.popupContent}>
//         <div
//           className={styles.closeBtn}
//           onClick={(): void => {
//             console.log("close");
//             setVisible(false);
//           }}
//         />
//         {children}
//       </div>
//     </div>
//   ) : (
//     <></>
//   );

//   // return renderDom;
//   return typeof document !== "undefined"
//     ? ReactDom.createPortal(renderDom, document.body)
//     : renderDom;
// });
import React, {
  forwardRef,
  useState,
  useEffect,
  useImperativeHandle,
  useContext,
  useMemo,
} from "react";
import styles from "./styles.module.scss";
import ReactDom from "react-dom";
import { UserAgentContext } from "@/stores/userAgent";
import { Environment } from "@/constants/enum";
import cName from "classnames";

export interface IPopupRef {
  open: () => void;
}

interface IProps {
  children: JSX.Element;
}

export const Popup = forwardRef<IPopupRef, IProps>(({ children }, ref) => {
  const [visible, setVisible] = useState(false);
  const [enter, setEnter] = useState(false);
  const [leave, setLeave] = useState(false);

  useEffect(() => {
    document.body.className = visible ? "forbidScroll" : "";
    let timeout;
    if (visible) {
      setEnter(true);
      timeout = setTimeout((): void => {
        setEnter(false);
      }, 300);
    } else {
      setLeave(true);
      timeout = setTimeout((): void => {
        setLeave(false);
      }, 300);
    }
    return (): void => {
      timeout = null;
    };
  }, [visible]);

  useImperativeHandle(ref, () => ({
    open: (): void => {
      setEnter(true);
      setVisible(true);
      setTimeout((): void => {
        setEnter(false);
      }, 300);
    },
  }));

  const renderDom = visible ? (
    <div
      className={cName({
        [styles.popup]: true,
        [styles.enter]: enter,
        [styles.leave]: leave,
      })}
    >
      <div className={styles.mask} />
      <div className={styles.popupContent}>
        <div
          className={styles.closeBtn}
          onClick={(): void => {
            setLeave(true);
            setTimeout((): void => {
              setVisible(false);
              setLeave(false);
            }, 300);
          }}
        />
        {children}
      </div>
    </div>
  ) : (
    <></>
  );

  return typeof document !== "undefined"
    ? ReactDom.createPortal(renderDom, document.body)
    : renderDom;
});
