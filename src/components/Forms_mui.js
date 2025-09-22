import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Formsmui = () => {
  return (
    <Container maxWidth="sm" >
        
        <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
            <Typography variant='h3'>Contact Form</Typography>
            <TextField label='Name' variant='outlined'></TextField>
            <TextField label='Email' variant='outlined'/>
            <TextField label='Message' multiline rows={4} variant='outlined'/>

            <Button variant='contained' color='error'>Send</Button>
        </Box>
    </Container>
  )
}

export default Formsmui
