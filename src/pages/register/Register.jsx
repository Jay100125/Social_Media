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
          <p>Join us on a journey to redefine how you connect, share, and engage with others. Experience the next generation of social media with our app, designed to bring people closer and make every moment count</p>
          <span>Do you have an account?</span>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Register