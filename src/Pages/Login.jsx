// shortcur imr
import React, { useRef } from 'react';
import '../Styles/Login.scss';

// shortcut slr 
//en jsx "className" se debe reemplazar por className

const Login = () => {
	const form = useRef(null);
	//event se añade para que no cargue los datos de usuario en la url
	const handleSubmit = (event) => {
		//event.prevent... se usa para que siga lo que se le da como parametros y no lo muestre en url
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

    return (
      <div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button className="primary-button login-button" onClick={handleSubmit}> Log in</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button"> Sign up </button>
			</div>
		</div>
    );
}

export default Login;