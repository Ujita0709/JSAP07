import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function Practice15(){
const mutation = useMutation({
  mutationFn: (newUser) =>
    axios.post("https://jsonplaceholder.typicode.com/users", newUser),
});

return (
    <div>
      <h2>Practice15</h2>

      <button
        onClick={() =>
          mutation.mutate({ name: "Taro" })
        }
      >
        ユーザー追加
      </button>

      {mutation.isLoading && <p>送信中...</p>}
      {mutation.isError && <p>エラーが発生しました</p>}
      {mutation.isSuccess && <p>送信成功！</p>}
    </div>
  );

}

export default Practice15;
