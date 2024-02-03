import React from 'react'
import {Button, Card,  Typography, Box} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState }  from "react";

function LanguageOptions() {

    
    const buttonStyle = {
        borderRadius: '12px',
        marginRight: '15px',
        width: '220px',
        fontFamily: "Montserrat"
    };

    const buttonGroupStyle ={
        display: "flex",
        justifyContent: "start",
        width: "100%",
        height: "55px",
        marginTop: "1.5rem"
    }

  return (
        <Box display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh">
        
            <Card sx={{width: 650, height: 400, p: 2, borderRadius: "15px"}}>
                <CloseIcon sx={{ float: "right" }}/>

                <Box 
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="35vh"
                    width="100%"
                >
                <Box 
                    display="flex"
                    justifyContent="start"
                    width="100%">
                    <Typography  gutterBottom align='left' justifySelf="flex-start" fontFamily="Montserrat" variant='h4'>
                        Language
                    </Typography>
                </Box>
                <Box sx={buttonGroupStyle}>
                    <Button sx={buttonStyle} color="error" variant='contained'>Uzbek</Button>
                    <Button sx={buttonStyle}  variant='outlined'>Russian</Button>
                    <Button sx={buttonStyle}  variant='outlined'>English</Button>
                </Box>
            </Box>
        </Card>
        </Box>
    
  )
}

export default LanguageOptions