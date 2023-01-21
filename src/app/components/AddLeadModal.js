import * as React from 'react';
import Box from '@mui/material/Box';
import { Button} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import DowndownMenu from '../components/DropdownMenu';
import history from "../../history"



export default function AddLeadModal() {

  return (
    <div>
       <DowndownMenu
            options={[
              { label: 'Swich to: Single Lead', value: 'sales/new' },
              { label: 'Swich to: Bulk', value: 'sales/bulk' }
            ]}
            icon="more_horiz"
            onSelect={({ value }) => history.push(`./${value}`)}
          >
            <Button variant="contained" color="primary">
              Switch to another Pipeline
            </Button>
          </DowndownMenu>
     
    </div>
  );
}
