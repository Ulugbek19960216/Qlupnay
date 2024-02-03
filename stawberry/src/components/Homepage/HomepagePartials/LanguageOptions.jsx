import React from 'react'
import { Card, Button, IconButton, Typography, Box} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState }  from "react";


function LanguageOptions() {
    const buttonStyle = {
        borderRadius: '12px',
        marginRight: '15px',
        width: '220px',
        fontFamily: "Montserrat",
        "&.MuiButton-contained": {
            backgroundColor: "#FF2A23",
        },
    };

    const buttonGroupStyle ={
        display: "flex",
        justifyContent: "start",
        width: "100%",
        height: "55px",
        marginTop: "1.5rem"
    };

    const [selectedLanguage, setSelectedLanguage] = useState({
        isUz: true,
        isRu: false,
        isEng: false
    });

    function handleClick(language) {
       const newSelectedLanguage = {
        isUz: language === "Uz",
        isRu: language === "Ru",
        isEng: language === "Eng",
       };

       setSelectedLanguage(newSelectedLanguage);
    }
    

  return (
        <Box display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh">
        
            <Card sx={{width: 650, height: 400, p: 2, borderRadius: "15px"}}>
               <IconButton size="small"  sx={{ width: "30px", float: 'right' }}>
               <    CloseIcon/>
                </IconButton> 

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
                    <Button  sx={buttonStyle} onClick={() => handleClick("Uz")}   variant={selectedLanguage.isUz ? "contained" : "outlined"}>Uzbek</Button>
                    <Button  sx={buttonStyle} onClick={() => handleClick("Ru")}   variant={selectedLanguage.isRu ? "contained" : "outlined"}>Russian</Button>
                    <Button  sx={buttonStyle} onClick={() => handleClick("Eng")}  variant={selectedLanguage.isEng ? "contained" : "outlined"}>English</Button>
                </Box>
            </Box>
        </Card>
        </Box>
    
  )
}

export default LanguageOptions