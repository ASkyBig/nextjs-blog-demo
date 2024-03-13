// import type { NextPage } from "next";
// import initTranslations from "../../../i18n";

// const About: NextPage = async (params: any) => {
//   const { t } = await initTranslations(params.params.lang);

//   // const { t } = useTranslation("en");

//   return (
//     <>
//       <div>login page</div>
//     </>
//   );
// };

// export default About;
"use client";

import { authenticate } from "../../../lib/action";
import { useFormState, useFormStatus } from "react-dom";
import axios from "axios";

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  // axios.get("http://localhost:3002/users").then((res) => {
  //   console.log("res +++++", res);
  // });

  return (
    <form action={dispatch}>
      <input name="username" placeholder="username" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit">
      Login
    </button>
  );
}
