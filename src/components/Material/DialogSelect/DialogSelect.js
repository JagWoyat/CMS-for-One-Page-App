import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value || '');
  };

  const handleChangeName = (event) => {
    setName(event.target.value || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleSubmit = (event, reason) => {
    if (reason !== 'backdropClick' && type !== '' && name !== '') {
      const url = 'http://localhost:4000/api/views';
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, name }),
      };
      fetch(url, requestOptions)
        .then((response) => console.log('Submitted successfully'))
        .catch((error) => console.log('Form submit error', error));
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Open select dialog</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Add element</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Type</InputLabel>
              <Select
                native
                value={type}
                onChange={handleChange}
                input={<OutlinedInput label="Title" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={'Type1'}>Type 1</option>
                <option value={'Type2'}>Type 2</option>
                <option value={'Type3'}>Type 3</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField
                id="outlined-basic"
                label="Name"
                value={name}
                onChange={handleChangeName}
                variant="outlined"
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
