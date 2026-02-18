import AppRoutes from "./routes/Routes";

function App() {
  const isLoggedIn = false;
  return (
    <>
      <AppRoutes isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
