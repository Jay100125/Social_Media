import { Link } from "react-router-dom"
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
          Step into a world of awe-inspiring experiences and breathtaking destinations. Join us on a voyage of discovery where every corner of the globe becomes a story waiting to be told. 
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
            </Link>            
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login