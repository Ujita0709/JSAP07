import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Practice12() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => res.data),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul>
      {data.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default Practice12;