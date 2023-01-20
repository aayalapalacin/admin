import React,{useState} from 'react'
import { Button, TextField, MenuItem } from '@material-ui/core';
import { StyledDropzone } from '../../../components/Dropzone';
import { uploadFiles, selectMedia } from '../../../redux/actions/MediaActions';



const BulkDragDrop = () => {
    const [isUploading, setIsUploading] = useState(false);
    const [upload, setUpload] = useState(false);

  return (
    <div>
        <div>
        {/* <DowndownMenu
                options={
                  [
                    { label: 'Only save to 4Geeks.com', value: 'only_save' },
                    { label: 'Also commit markdown to github', value: 'push' }
                  ]
                  
                }
                icon="more_horiz"
                // onSelect={async ({ value }) => {
                //   if (!value) return null;
                //   const _errors = await saveAsset();
                //   if (Object.keys(_errors).length > 0) setErrorDialog(true);
                //   else {
                //     if (value == 'push') handleAction('push');
                //   }
                // }}
              >
                <Button variant="contained" color="primary">
                  bytti
                </Button>
              </DowndownMenu> */}
        <TextField defaultValue="1" variant="outlined" size="small" select>
        <MenuItem value="1">Upload type</MenuItem>
        <MenuItem value="2">Form Entries</MenuItem>
        {/* <MenuItem value="3">Six Month</MenuItem> */}
        {/* <MenuItem value="4">Last Year</MenuItem> */}
       </TextField>
   
              <StyledDropzone uploadFiles={uploadFiles} hideZone={() => setUpload(false)} />
        <Button
                fullWidth
                color="primary"
                variant="contained"
                type="submit"
              >
                {isUploading ? 'Pending' : 'Start Upload'}
              </Button>
        </div>
    </div>
  )
}

export default BulkDragDrop