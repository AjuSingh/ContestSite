import React from 'react'
import './LoginRegister.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../AuthContext';

const LoginRegister = () => {
    const c = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await c.googleSignIn();
            navigate('/')
        } catch (err) {
            console.error(err);
            alert('Could not sign in');
        }
    }
    return (
        <div className='center'>
            <form className='form1'>
                <h3>Login Here</h3>

                <label className='lrlabel' for="username">Username</label >
                <input className='lrinput' type="text" placeholder="Email or Phone" id="username" />

                <label className='lrlabel' for="password">Password</label >
                <input className='lrinput' type="password" placeholder="Password" id="password" />

                <button onClick={handleGoogleSignIn}>Log In</button>
                <div className="googlefb">
                    <div className="go"><i class="fab fa-google"></i>Google</div>
                    {/* <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div> */}
                </div>
            </form>
            <div className='or'><h3>or</h3></div>
            <form className='form2'>
                <h3>Register Here</h3>

                <label className='lrlabel' for="username1">Username</label >
                <input className='lrinput' type="text" placeholder="Email or Phone" id="username1" />

                <label className='lrlabel' for="name1">Name</label >
                <input className='lrinput' type="text" placeholder="Your Name" id="name1" />

                <label className='lrlabel' for="password1">Password</label >
                <input className='lrinput' type="password" placeholder="Password" id="password1" />

                <label className='lrlabel' for="password2">Confirm Password</label >
                <input className='lrinput' type="password" placeholder="Password again" id="password2" />

                <button>Register</button>

            </form>
        </div>
    )
}

export default LoginRegister
