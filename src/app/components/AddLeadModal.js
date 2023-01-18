import * as React from 'react';
import Box from '@mui/material/Box';
import { Button} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddLeadModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">Add new lead</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
             <Link
              to="/growth/sales/new"
              color="primary"
              className="btn btn-primary"
            > 
         <Button variant="contained" color="primary"> Single Lead</Button>  
             </Link>
         <Button variant="contained" color="primary"> Bulk</Button>
        </Box>
      </Modal>
    </div>
  );
}
