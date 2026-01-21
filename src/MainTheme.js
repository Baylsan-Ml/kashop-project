import { createTheme } from "@mui/material/styles";

const getTheme = (mode)=>{
   return createTheme({
  palette: {
    mode:mode,
    primary:{
      main:  '#e38792',
      dark: '#373636'
    },
   secondary:{
    main:'#f2efe8'
   },
    success: {
      main:'#4e090a',
      dark:'#9dac71'
    },
    success:{
      main:'#4e090a',
      dark:'#9dac71'
    },
    info: {
      
      main: '#9dac71',
      dark:'#4e090a'
    },
    background: {
       
        default: mode === 'dark' ? '#000000' : '#f2efe8',
        paper: mode === 'dark' ?  '#000000' : '#f2efe8',
    },
    
  },

})
}

export default getTheme;