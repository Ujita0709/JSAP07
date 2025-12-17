import { useEffect } from "react";
import axios from "axios";

function Practice06() {
  useEffect(() => {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
  title: "Hello",
  body: "Axios practice",
  userId: 1
}).then((res) => {
  console.log(res.data);
});

  }, []);

  return (
    <div>
      <h2>Practice06</h2>
      <p></p>
    </div>
  );
}

export default Practice06;