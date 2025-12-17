import { useEffect } from "react";
import axios from "axios";

function Practice04() {
  useEffect(() => {
    axios
      .get("https://invalid-url.example.com")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("エラーが発生しました", err.message);
      });
  }, []); // ← ここが重要

  return (
    <div>
      <h2>Practice04</h2>
      <p>コンソールを確認してください</p>
    </div>
  );
}

export default Practice04;
