import {Link, useNavigate} from "react-router-dom";
import "./Login.css";
import {useState} from "react"
import axios from "axios";
import {useAuth} from "../../Context/authContext";


export function Login() {

    const {setUser, setToken} = useAuth()
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({email: "", password: ""})

    const loginHandler = async (e)  => {
        e.preventDefault();
        try {
            // const {status, data: {foundUser, encodedToken}} = await axios.post(`/api/auth/login`, loginForm

            // );
            const response = await axios.post(`/api/auth/login`, loginForm)
            if(response.status === 200 || response.status === 201){
                localStorage.setItem("login-token", JSON.stringify({token: response.data.encodedToken, user: response.data.foundUser}))
                setUser(response.data.foundUser)
                setToken(response.data.encodedToken)
            }
            // saving the encodedToken in the localStorage

            // localStorage.setItem("login-token", encodedToken);
            // localStorage.setItem("user", JSON.stringify({user: foundUser}));

            // setUser(foundUser)
            // setToken(encodedToken)
            if(response.data.encodedToken){
                navigate("/home")
            }
        } catch (error) {
            console.log(error);
        }       
        
    }
   
    return (
        <div class="login-container">
        <div class="login-container-wrapper">
            <h2 class="login-page">Login</h2>

            <form onSubmit={(e) => loginHandler(e)}>
                <div class="form-info">
                    <label class="login-text" htmlFor="email">Email address:</label>
                    <input class="login-box" 
                        type="text" 
                        value={loginForm.email} 
                        required 
                        onChange={(e) => setLoginForm((prev) => ({...prev, email: e.target.value}))}/>
                    <label class="login-text" htmlFor="password">Password:</label>
                    <input class="login-box" 
                        type="password" 
                        value={loginForm.password} 
                        required 
                        onChange={(e) => setLoginForm((prev) => ({...prev, password: e.target.value}))}/>
                </div>
                
                <div class="pwd-remember">
                    <div class="rem-container">
                        <input class="login-checkbox" type="checkbox" required/>
                        <span class="login-remember">Remember me</span>
                    </div>
                    
                    <span class="login-forget">Forget your password?</span>
                </div>
                <button class="login-btn" type="submit" onClick={() => setLoginForm({email: "adarshbalika@gmail.com", password: "adarshBalika123"})}
                    >Login</button>
                <Link to="/signup"><span class="login-account">Create New Account</span></Link>
                
            </form> 
        </div>
    </div>
    )
}