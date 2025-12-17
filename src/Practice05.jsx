import { useEffect } from "react";
import axios from "axios";

function Practice05() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users", {
  params: { id: 3 }
}).then((res) => {
  console.log(res.data);
});

  }, []);

  return (
    <div>
      <h2>Practice05</h2>
      <p></p>
    </div>
  );
}

export default Practice05;