import { useReducer, useEffect } from "react";

function Header({ name, year }) {
  return (
    <>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </>
  );
}

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <h2>Welcome to this beautiful restaurant!</h2>
      <img
        src="https://via.placeholder.com/200"
        alt="A photo of a smiling chef owner"
        height={200}
      />
      <h2>The restaurant is currently {openStatus ? "Open" : "Closed"}</h2>
      <button onClick={onStatus}>
        {openStatus ? "Close Restaurant" : "Open Restaurant"}
      </button>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyleType: "none" }}>
            {dish.title}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  // ✅ useReducer instead of useState
  const [status, toggle] = useReducer((status) => !status, true);

  // ✅ useEffect to log changes
  useEffect(() => {
    console.log(`The restaurant is ${status ? "open" : "closed"}`);
  }, [status]);

  const items = [
    "Macaroni and cheese",
    "Salmon with potatoes",
    "Tofu with vegetables",
    "Minestrone soup",
  ];

  const dishObjects = items.map((dish, i) => ({
    id: i,
    title: dish,
  }));

  return (
    <>
      <Header name="Cailey" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
    </>
  );
}

export default App;
