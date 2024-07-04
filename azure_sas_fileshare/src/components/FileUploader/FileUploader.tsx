import React, {useState} from 'react'
import './FileUploader.css'

const FileUploader = () => {

  const [file, setFile] = useState<File | null>(null); 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
      setFile(e.target.files[0]);
    }
  }
  
  const handleUpload = () => {
    console.log("upload triggered")
  };

  return (
    <>
      <label htmlFor='file' className='sr-only'>
        choose a file
      </label>
      <input id='file' type="file" onChange={handleFileChange} />
      {file && (
        <section>
          <ul>
            File detials :
            <li className='file-name'>Name: {file.name}</li>
            <li className='file-type'>Type: {file.type}</li>
            <li className='file-size'>Size: {file.size}</li>
          </ul>
        </section>
      )}
      {file && (
        <button onClick={handleUpload}> Upload File</button>
      )}
       {file && (
        <img src={file.name}></img>
      )}
    </>
  )
};

export default FileUploader