import { Button } from '@material-ui/core';
import { size } from 'lodash';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';



const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

export function StyledDropzone(props)
{
  const baseStyle = {
    flex: 1,
    fontSize: props.fontSize,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: props.padding,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  };
  

  const dispatch = useDispatch();
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone();

  const acceptedFileItems = acceptedFiles.map((file) => 
  // console.log(file,"file selected")
  (
    
    <div key={file.path} className="card m-1 p-1">
      {file.path}
      {' '}
      -
      {file.size}
      {' '}
      bytes
    </div>
  ));

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {}),
  }), [
    isDragActive,
    isDragReject,
    isDragAccept,
  ]);

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
      <div className="flex">
        {acceptedFileItems}
      </div>
      {acceptedFiles.length > 0 ? (
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(props.uploadFiles(acceptedFiles));
            props.hideZone();
          }}
        >
          Save
        </Button>
      ) : ''}
    </div>
  );
}
