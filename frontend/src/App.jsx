import { useAuth } from "./context/AuthContext";
import AppRoutes from "./routes/Routes";

function App() {
  // const { user } = useAuth();
  const user = true;
  return (
    <>
      <AppRoutes isLoggedIn={user} />
    </>
  );
}

export default App;
