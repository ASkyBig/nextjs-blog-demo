import type { NextPage } from "next";
import initTranslations from "../../../i18n";

import Content from "./components/content";
const About: NextPage = async (params: any) => {
  const { t } = await initTranslations(params.params.lang);

  // const { t } = useTranslation("en");

  return (
    <>
      {/* <Content /> */}
      <h1>{t("About Me")}</h1>
      <p>{t("hobby")}</p>
      <h2>{t("how to reach me")}</h2>
      <p>{t("wechat")}: empzd2s4MTg=</p>
      <h2>{t("Where am I")}</h2>
      <p>{t("shanghai")}</p>
    </>
  );
};

export default About;
