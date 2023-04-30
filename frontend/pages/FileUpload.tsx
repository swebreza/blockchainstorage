import FileUploader from "./components/FileUploader";
import Navbar from "./components/Navbar";

const UploadPage = () => {
  return (
    <div>
        <Navbar/>
      <div style={{padding:'3rem'}}>
      <h1>Upload Files</h1>
      <FileUploader />
      </div>
    </div>
  );
};

export default UploadPage;