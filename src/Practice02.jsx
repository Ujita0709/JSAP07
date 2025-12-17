import { useEffect } from "react";
import axios from "axios";

function Practice02() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <h2>Practice02</h2>
      <p>ユーザー一覧を取得しました（console を確認）</p>
    </div>
  );
}

export default Practice02;