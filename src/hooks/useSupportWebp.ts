import { useContext } from "react";
import { HeaderContext } from "@/stores/headerProvider";

export default function useSupportWebp(): boolean {
  const headerList = useContext(HeaderContext);

  return headerList["accept"]?.includes("image/webp");
}
