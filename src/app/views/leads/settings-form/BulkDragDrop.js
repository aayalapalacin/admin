import React,{useState} from 'react'
import { Button } from '@material-ui/core';


const BulkDragDrop = () => {
    const [isUploading, setIsUploading] = useState(false);

  return (
    <div>
        <div>
        <Button
                fullWidth
                color="primary"
                variant="contained"
                type="submit"
              >
                {isUploading ? 'Pending' : 'Start Uploading'}
              </Button>
        </div>
    </div>
  )
}

export default BulkDragDrop