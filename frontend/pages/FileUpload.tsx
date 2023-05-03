import { Button } from '@material-ui/core'
import FileUploader from './components/FileUploader'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer'
import axios from 'axios'

/* configure Infura auth settings */
const projectId = '2N3nLfT8GAq1IotvkUgjc06KQ5M'
const projectSecret = '000bb6d713015a7d2060a2ca9c440070'
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

/* create the client */
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
})

const UploadPage = () => {
  const [formData, setFormData] = useState(``)
  const [fileUrl, updateFileUrl] = useState(``)
  async function onChange(e: any) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://infura-ipfs.io/ipfs/${added.path}`
      updateFileUrl(url)
      console.log('IPFS URI: ', url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  useEffect(() => {
    if (fileUrl) {
      try {
        console.log(formData, fileUrl)
        const response = axios.post(
          `http://localhost:8000/api/user/addFile/${sessionStorage.getItem(
            'id'
          )}`,
          JSON.stringify({
            name: formData,
            url: fileUrl,
          }),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        // console.log(response)
        alert('Uploaded was Successful!!!')
      } catch (error) {
        console.log(error)
        alert('Uploaded was Unsuccessful!!!')
      }
    }
  }, [fileUrl, formData])

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData(e.target.value)
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: '3rem' }}>
        <h1>Upload File</h1>
        <input type='text' name='name' onChange={handleChange} />
        <input type='file' onChange={onChange} />
        {fileUrl && (
          <div>
            <img src={fileUrl} width='600px' />
            <a href={fileUrl} target='_blank'>
              {fileUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default UploadPage
