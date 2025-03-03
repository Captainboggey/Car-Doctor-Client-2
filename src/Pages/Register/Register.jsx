import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const {signUpUser}= useContext(AuthContext);

    const handleRegister = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        signUpUser(email,password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>console.error(error))
    } 
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <p>Already Have Account? <Link className='text-red-700' to={'/login'}>Login</Link> First!</p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;