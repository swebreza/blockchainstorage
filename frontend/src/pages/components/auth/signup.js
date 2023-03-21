var axios = require('axios')
import React from 'react'
import { useState } from 'react'

const Signup = () => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  })
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
    console.log(values)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    // var data = JSON.stringify({
    //   name: 'test',
    //   lastname: 'test',
    //   email: 'admin@admin.test',
    //   password: '1234567890',
    // })

    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/signup',
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-full mb-40 text-black'>
      <div>
        <div className='App-header'>
          <form>
            <label>
              {' '}
              <h1>Signup</h1>
            </label>
            <br />
            <br />
            <input
              type='text'
              placeholder='First Name'
              name='firstname'
              onChange={handleChange('firstname')}
            />

            <br />
            <br />
            <input
              type='text'
              placeholder='Last Name'
              name='lastname'
              onChange={handleChange('lastname')}
            />

            <br />
            <br />
            <input
              type='text'
              placeholder='Email'
              name='email'
              onChange={handleChange('email')}
            />

            <br />
            <br />
            <div>
              <input
                type='password'
                placeholder='password'
                name='password'
                onChange={handleChange('password')}
              />
            </div>
            <br />

            <div>
              <button className='rounded border-lime-200 m-1 p-2 bg-purple-500'>
                Signup
              </button>
            </div>
          </form>

          <button
            className='rounded border-lime-200 m-1 p-2 bg-purple-500'
            type='submit'
            onClick={onSubmit}
          >
            Login
          </button>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Signup
