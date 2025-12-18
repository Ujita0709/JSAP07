import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async () => {
  console.log(" fetchUsers (GET /users)");
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

const addUser = async (newUser) => {
  console.log(" addUser (POST /users)", newUser);
  const res = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
  return res.data;
};

export default function PracticeFinal() {
  const queryClient = useQueryClient();

  // ① 一覧取得（自動）
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // ② 追加（手動）
  const addMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // ③ 追加成功 → users一覧キャッシュを古いとマーク → 再取得
      console.log(" 追加成功 → invalidate users");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  if (usersQuery.isLoading) return <p>Loading...</p>;
  if (usersQuery.isError) return <p>Error</p>;

  return (
    <div style={{ padding: 12 }}>
      <h2>総合課題：ユーザー管理</h2>

      <button
        onClick={() => addMutation.mutate({ name: "Hanako" })}
        disabled={addMutation.isPending}
      >
        ユーザー追加
      </button>

      {addMutation.isPending && <p>送信中...</p>}
      {addMutation.isError && <p>追加に失敗しました</p>}
      {addMutation.isSuccess && <p>追加しました（※テストAPIのため永続化はされない場合あり）</p>}

      <hr />

      <ul>
        {usersQuery.data.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}