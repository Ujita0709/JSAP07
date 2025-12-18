import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

const addUser = async (newUser) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
  return res.data;
};

function Practice17() {
  const queryClient = useQueryClient();

  // 一覧取得（キャッシュされる）
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // 追加（手動実行）
  const addMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      console.log("追加成功 → users を invalidate");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
});


  if (usersQuery.isLoading) return <p>Loading...</p>;
  if (usersQuery.isError) return <p>Error</p>;

  return (
    <div>
      <h2>Practice17</h2>

      <button onClick={() => addMutation.mutate({ name: "Taro" })}>
        追加
      </button>

      {addMutation.isPending && <p>送信中...</p>}
      {addMutation.isError && <p>追加でエラー</p>}
      {addMutation.isSuccess && <p>追加 成功</p>}

      <hr />

      <ul>
        {usersQuery.data.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Practice17;