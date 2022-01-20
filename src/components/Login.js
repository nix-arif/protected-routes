import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const Login = () => {
	const navigate = useNavigate();
	const { login } = useAuth();

	const handleLogin = () => {
		login().then(() => {
			navigate('/dashboard');
		});
	};

	return (
		<div>
			<h1>login</h1>
			<button onClick={handleLogin}>Log in</button>
		</div>
	);
};

export default Login;
