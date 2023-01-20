import React, { useState } from "react";
import { Button, TextField, MenuItem } from "@material-ui/core";
import { StyledDropzone } from "../../../components/Dropzone";
import { uploadFiles, selectMedia } from "../../../redux/actions/MediaActions";

const BulkDragDrop = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [upload, setUpload] = useState(false);

  return (
    <div className="bulkContainer">
      <div className="bulkContent flex">
        <div className="bulkDrag">
          <StyledDropzone
            uploadFiles={uploadFiles}
            hideZone={() => setUpload(false)}
          />
        </div>
        <div className="bulkDropdown">
          <TextField defaultValue="1" variant="outlined" size="small" select>
            <MenuItem value="1">Upload type</MenuItem>
            <MenuItem value="2">Form Entries</MenuItem>
            {/* <MenuItem value="3">Six Month</MenuItem> */}
            {/* <MenuItem value="4">Last Year</MenuItem> */}
          </TextField>
        </div>
        <div className="bulkUpload">
          <Button fullWidth color="primary" variant="contained" type="submit">
            {isUploading ? "Pending" : "Start Upload"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BulkDragDrop;
