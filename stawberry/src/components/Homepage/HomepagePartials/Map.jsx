import React from 'react';
import { IconButton, Button, Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

function Location() {
   
    const closeIcon = {
        width: "35px",
        size: "small",
        float: "right",
    }

    const backIcon = {
        width: "35px",
        size: "small",
        float: "left",
    }
    const doneButton = {
        width: "75px",
        border: "1px solid black",
        borderRadius: "20px",
        fontFamily: "Montserrat",
        textTransform: "none",
        float: "right",
        "&.MuiButton-contained": {
            backgroundColor: "#FF2A23",
        },
    }

    const container = {
        margin: "5rem auto",
        backgroundColor: "#F5F5F5",
        padding: "1rem",
        borderRadius: "40px",
        width: "700px",
        height: "670px",
    }

    const wrapper = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        height: "70vh",
        padding: "0.5rem",
    }

    const address = {
        display: "flex",
        flexDirection: "column",
        padding: "18px 15px",
        border: "1px solid black",
        borderRadius: "40px",
        width: "470px",
        height: "33px",
    }

    const map = {
        width: "500px",
        borderRadius: "30px",
        overflow: "hidden"
    }
     
  return (
    <Box sx={container}>
        <IconButton  sx={backIcon}><ArrowBackIcon /></IconButton>
        <IconButton sx={closeIcon}><CloseIcon/></IconButton>
        <Box sx={wrapper}>
            <Box sx={address}>
                <Typography   sx={{fontWeight: "800", fontSize: "0.8rem"}}>Dress Code</Typography>
                <Typography variant = "subtitle" sx={{fontWeight: "normal", fontSize: "1rem"}}>Glenview Avenue, RevesBy, NSW 2212</Typography>
            </Box>
            <Box sx={map}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13238.683218215952!2d150.9983061188211!3d-33.949594072914614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bef0926d11f1%3A0xac26e89655b546cb!2sGlenview%20Ave%2C%20Revesby%20NSW%202212%2C%20Australia!5e0!3m2!1sen!2suk!4v1707071341520!5m2!1sen!2suk" 
                width="100%"
                height="470"
                borderRadius="40px"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </Box>
        </Box>
        <Button  variant="contained" sx={doneButton}>Done</Button>
    </Box>
  )
}

export default Location;