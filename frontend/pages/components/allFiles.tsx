import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AllFiles = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    if (sessionStorage.getItem('id')) {
      try {
        const response = axios.get(
          `http://localhost:8000/api/user/allfiles/${sessionStorage.getItem(
            'id'
          )}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        console.log(response.then((res) => setData(res.data)))
        // alert('Uploaded was Successful!!!')
        console.log(data)
      } catch (error) {
        console.log(error)
        alert('Uploaded was Unsuccessful!!!')
      }
    }
  }, [])
  return (
    <div>
      <Navbar />
      <div className='p-10 font-medium'>
        <div>All Files</div>
        <div className='grid grid-cols-4'>
          {data.map((file: any) => {
            return (
              <div className='p-10 font-medium'>
                <div>{file.name}</div>
                <div>
                  <a href={file.url} target='_blank'>
                    {file.url}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllFiles
