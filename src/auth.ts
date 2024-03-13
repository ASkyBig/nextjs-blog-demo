import axios from "axios";

const signIn = async (formData: FormData) => {
  return (
    // fetch("http://127.0.0.1:3002/users/1")
    // axios
    //   .get("http://localhost:3002/users/1")
    //   // http://127.0.0.1:3002/users/1
    //   // http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp
    axios
      .post("http://localhost:3002/users/register", {
        user_name: "test",
        password: "1234",
      })
      .then(function (response) {
        console.log("response ++++++", response);
        return response;
      })
      .catch((err: any) => {
        console.log("err ++++++", err);
        return err;
      })
  );
  // const res = await axios({
  //   method: "post",
  //   url: "http://localhost:3002/users/register",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: {
  //     // user_name: formData.get("username"),
  //     // password: formData.get("password"),
  //     user_name: "test",
  //     password: "1234",
  //   },
  // });
  // console.log("res ++++++", res);
  // return res;
};

export { signIn };
