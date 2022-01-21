import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();
  console.log(state);

  const handleLogin = () => {
    login().then(() => {
      navigate(state ? state.path : "/dashboard");
    });
  };

  return (
    <div className="login">
      <h1>login</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default Login;
