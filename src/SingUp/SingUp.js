import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './SingUp.css';


const SingUp = () => {
    const {createNewUser} = useContext(AuthContext)
    const[error,setError] = useState(null)


    const handdleSingUp = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);

       

        if(password.length < 6){
            setError(`Please use minimum 6 character`);
            return;
        }

        if(password !== confirm){
            setError(`Password does not match try again`);
            return;
        }

        createNewUser(email,password)
        .then(res => {
            const user = res.user;
            console.log(user)
        })
        .catch(err => console.error(error))

    }

    return (
        <div className='form-container'>
        <h1 className='form-tittle'>Sing Up</h1>
        <form onSubmit={handdleSingUp}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                 <input type="password" name="password" id=""  required/>
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                 <input type="password" name="confirm" id=""  required/>
            </div>
            <input className='btn-submit' type="submit" value="Sing Up" />
        </form>
        <p>All ready have an account <Link to='/login'>Sing Up</Link></p>
        <p className='error-singup'>{error}</p>
    </div>
    );
};

export default SingUp;<h1>Sing up </h1>