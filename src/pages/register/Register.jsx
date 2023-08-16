import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Welcome To the New World.</h1>
          <p>Embark on a journey with us to explore our planet's beauty, diversity, and enchanting stories. Join our blog for captivating narratives, stunning imagery, and travel tips that spark wanderlust and create unforgettable adventures.</p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Register