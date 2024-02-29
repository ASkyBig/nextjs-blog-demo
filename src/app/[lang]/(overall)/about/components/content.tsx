"use client";

import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("About Me")}</h1>
      <p>{t("hobby")}</p>
      <h2>{t("how to reach me")}</h2>
      <p>{t("wechat")}: empzd2s4MTg=</p>
      <h2>{t("Where am I")}</h2>
      <p>{t("shanghai")}</p>
      <p>{t("test")}</p>
    </>
  );
};

export default Content;
