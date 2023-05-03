import { Button } from "@material-ui/core";
import FileUploader from "./components/FileUploader";
import Navbar from "./components/Navbar";
import { useState } from 'react'
import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer'



/* configure Infura auth settings */
const projectId = "2N3nLfT8GAq1IotvkUgjc06KQ5M"
const projectSecret = "000bb6d713015a7d2060a2ca9c440070"
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

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

const [fileUrl, updateFileUrl] = useState(``)
  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://infura-ipfs.io/ipfs/${added.path}`
      updateFileUrl(url)
      console.log("IPFS URI: ", url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  return (
    <div >
      <Navbar />
      <div style={{padding:'3rem'}}>

      <h1>Upload File</h1>
      {/* <input type="text" name="name" id="" /> */}
      <input
        type="file"
        onChange={onChange}
        />
      {
        fileUrl && (
          <div>
            <img src={fileUrl} width="600px" />
            <a href={fileUrl} target="_blank">{fileUrl}</a>
          </div>
        )
      }
      </div>
    </div>
  );
}


  
//   return (
//     <div>
//         <Navbar/>
//       <div style={{padding:'3rem'}}>
//       <h1>Upload Files</h1>
//       <Button
//   variant="contained"
//   component="label"
// >
//    Upload File 
//   <input
//     type="file"
    
//   />
// </Button> 
//       <FileUploader />
//       </div>
//     </div>
//   );
// };

export default UploadPage;