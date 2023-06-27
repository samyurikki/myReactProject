export const User = ({ avatar_url, login, html_url }) => {
  return (
    <li
      style={{
        display: "flex",
        backgroundColor: "#ffffe0",
        padding: "8px",
        margin: "5px",
        borderRadius: "10px",
      }}
    >
      <img
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "20px",
          margin: "10px",
        }}
        src={avatar_url}
        alt={login}
      />
      <div>
        <h6>{login}</h6>
        <a href={html_url}>Profile</a>
      </div>
    </li>
  );
};

function GetUser() {
  const [usersList, setUsersList] = useState([]);
  const url = "https://api.github.com/users";

  async function getUsersList() {
    const response = await fetch(url);
    console.log(response);
    const users = await response.json();
    setUsersList(users);
  }

  useEffect(() => {
    getUsersList();
  }, []);
  return (
    <>
      <h3>Github Users</h3>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100vw",
          overflowX: "initial",
        }}
      >
        {usersList.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </ul>
    </>
  );
}
