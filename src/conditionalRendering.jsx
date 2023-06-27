import { useEffect, useState } from "react";

export function ConditionalRendering() {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const res = await fetch(url);
    const user = await res.json();
    console.log(user);

    if (res.ok) {
      setUser(user);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const url = "https://api.github.com/users/QuincyLarson";
  useEffect(() => {
    fetchUser();
  }, []);
  if (isLoading) {
    return <h4>Loading...</h4>;
  }
  if (isError) {
    return <h4>Something went wrong!</h4>;
  }
  return (
    <>
      <img
        src={user.avatar_url}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "20px",
          margin: "10px",
          listStyleType: "none",
        }}
        alt={user.name}
      />
      <div>
        <h4>{user.name}</h4>
        <h5>Bio: {user.bio}</h5>
        <a href={user.html_url}>Profile</a>
      </div>
    </>
  );
}
