import Dropzone from 'react-dropzone-uploader';
import './DropZone.scss';
const DropZone = () => {

  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }
 
  return (
    <div>
    <Dropzone 
      // getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept=".csv"
    />
    </div>

  )
}



export default DropZone
// export default SingleFileAutoSubmit