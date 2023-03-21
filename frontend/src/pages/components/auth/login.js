const Login = () => {
  return (
    <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-full mb-40'>
      <div>
        <div className='App-header'>
          <form>
            <label>
              {' '}
              <h1>Signup</h1>
            </label>
            <br />
            <br />
            <input type='text' placeholder='Userneme' />

            <br />
            <br />
            <div>
              <input type='password' placeholder='password' />
            </div>
            <br />
            <div>
              <text type='password' placeholder='Confirm password' />
            </div>

            <div to='./index'>
              <button className='rounded border-lime-200 m-1 p-2 bg-purple-500'>
                Login
              </button>
            </div>
          </form>

          <button className='rounded border-lime-200 m-1 p-2 bg-purple-500'>
            Signup
          </button>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Login
