const fs = require('fs')
const ipfsClient = require('./ipfsController')
const fileLocation = './AboutHackathon.txt'

//TODO: get the file from the request and respond with the hash and ipfs link

exports.saveFile = async (req, res) => {
  let ipfs = await ipfsClient.ipfsCobtroller()

  let data = fs.readFileSync(fileLocation)
  let options = {
    warpWithDirectory: false,
    progress: (prog) => console.log(`Saved :${prog}`),
  }
  let result = await ipfs.add(data, options)

  return result
  console.log(result)
}
