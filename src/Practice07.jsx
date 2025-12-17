import { useEffect } from "react";
import axios from "axios";

function Practice07() {
  useEffect(() => {
  const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});
  
  }, []);

  return (
    <div>
      <h2>Practice07</h2>
      <p></p>
    </div>
  );
}

export default Practice07;