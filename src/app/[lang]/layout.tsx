import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import React, { FC } from "react";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import Header from "@components/header";
import { Footer, IFooterProps } from "@components/footer";
import getLayoutData from "@api/layout";
import ThemeContextProvider from "@/stores/theme";
import UserAgentProvider from "@/stores/userAgent";
import TranslationsProvider from "@/stores/TranslationsProvider";
import HeaderProvider from "@/stores/headerProvider";

import { getIsMobile, getIsSupportWebp } from "@/utils";
// import { getDictionary } from "./dictionaries";
import initTranslations from "@i18n/index";
import i18nConfig, { getNamespaces } from "@i18n/i18nConfig";

import styles from "./page.module.scss";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export interface ILayoutProps {
  footerData: IFooterProps;
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();

  const isMobile = getIsMobile(headersList.get("user-agent"));
  return {
    title: isMobile ? "mobile" : "pc",
    description: "Generated by create next app: " + headersList.get("x-url"),
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ lang: locale }));
}

const RootLayout: FC<{
  children: JSX.Element;
  params: { lang: string; locale: string };
}> = async ({ children, params }) => {
  const data = await getLayoutData();
  const headersList = Object.fromEntries(headers().entries());

  const isMobile = getIsMobile(headersList["user-agent"]);
  const isSupportWebp = getIsSupportWebp(headersList["accept"]);
  // const dict = await getDictionary(params.lang);
  const dict = {};

  const ns = getNamespaces();
  const { resources } = await initTranslations(params.lang, ns);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <TranslationsProvider
        namespaces={ns}
        locale={params.lang}
        resources={resources}
      >
        <ThemeContextProvider>
          <UserAgentProvider>
            <HeaderProvider headerList={headersList}>
              <body className={inter.className}>
                <Header isMobile={isMobile} dict={dict} />
                <AntdRegistry>
                  <main className={styles.main}>{children}</main>
                </AntdRegistry>
                <Footer {...data} />
                <Script id="theme-script" strategy="beforeInteractive">
                  {`const item = localStorage.getItem('theme') || 'light';
          localStorage.setItem('theme', item);
          document.getElementsByTagName('html')[0].dataset.theme = item;`}
                </Script>
              </body>
            </HeaderProvider>
          </UserAgentProvider>
        </ThemeContextProvider>
      </TranslationsProvider>
    </html>
  );
};

export default RootLayout;
