export const LOCAL_DOMAIN = "http://127.0.0.1:3000";
export const CMS_DOMAIN = "http://127.0.0.1:1337";

export const getIsMobile = (uaString: string | null) => {
  return /mobile|android|iphone|ipad|phone/i.test(
    (uaString || "").toLowerCase()
  );
};
