import React, { useState } from "react";
import { Button, TextField, MenuItem } from "@material-ui/core";
import { StyledDropzone } from "../../../components/Dropzone";
import { uploadFiles, selectMedia } from "../../../redux/actions/MediaActions";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';

const BulkDragDrop = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [upload, setUpload] = useState(false);
  
  const useStyles = makeStyles({
   textField:{
    width: '100%',
   }
  });
  const classes = useStyles();

  return (
    <div className="bulkContainer">
      <Grid container spacing={3} alignItems="center">
            <Grid item md={4}>
            <div className="ml-4 mr-2 mb-4 ">
          <StyledDropzone
            padding="0px 10px"
            fontSize="10px"
            uploadFiles={uploadFiles}
            hideZone={() => setUpload(false)}
          />
        </div>
            </Grid>
            <Grid item md={4}>
            <div className="bulkDropdown mx-2  mb-4 ">
          <TextField className={classes.textField} defaultValue="1" variant="outlined" size="small" select>
            <MenuItem value="1">Upload type</MenuItem>
            <MenuItem value="2">Form Entries</MenuItem>
            {/* <MenuItem value="3">Six Month</MenuItem> */}
            {/* <MenuItem value="4">Last Year</MenuItem> */}
          </TextField>
        </div>
            </Grid>
            <Grid item md={4}>
            <div className="bulkUpload  ml-2 mr-4 mb-4 ">
          <Button fullWidth color="primary" variant="contained" type="submit">
            {isUploading ? "Pending" : "Start Upload"}
          </Button>
        </div>
            </Grid>
            </Grid>
    
      <div className="bulkContent row flex">
       
       
        
      </div>
    </div>
  );
};

export default BulkDragDrop;
