import React from 'react';
import './App.css';

function App() {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [disabled, setDisabled] = React.useState(true);

	React.useEffect(() => {
		if (username.length > 2 && password.length > 4) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [username, password]);

	return (
		<>
			<form>
				<div>
					<input
						type="text"
						value={username}
						onChange={(evt) => {
							setUsername(evt.target.value.trim());
						}}
						placeholder="username"
					/>
				</div>
				<div>
					<input
						type="password"
						value={password}
						onChange={(evt) => {
							setPassword(evt.target.value.trim());
						}}
						placeholder="password"
					/>
				</div>
				<button type="submit" disabled={disabled}>
					Submit
				</button>
			</form>
			<h1>{username}</h1>
		</>
	);
}

export default App;
