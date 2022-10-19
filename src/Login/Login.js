import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './Login.css';


const Login = () => {
    const {userSingIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const handdleSingIn = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email,password);
        userSingIn(email,password)
        .then(res => {
            const user = res.user;
            console.log(user)
            form.reset()
            navigate(from, {replace : true})
        })
        .catch(error => console.error(error))

    }


    return (
        <div className='form-container'>
            <h1 className='form-tittle'>log in</h1>
            <form onSubmit={handdleSingIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                     <input type="password" name="password" id=""  required/>
                </div>
                <input className='btn-submit' type="submit" value="Log In" />
            </form>
            <p>New ema jhon users <Link to='/singup'>Sing Up</Link></p>
        </div>
    );
};

export default Login;