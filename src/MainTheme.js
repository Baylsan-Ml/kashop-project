import { createTheme } from "@mui/material/styles";

const getTheme = (mode)=>{
   return createTheme({
  palette: {
    mode:mode,
    primary:{
      main:  '#e38792',
      dark: '#ffbdc5'
    },
   secondary:{
    main:'#f2efe8'
   },
    tertiary: {
      main:'#4e090a',
      dark:'#9dac71'
    },
    info: {
      main: '#9dac71',
      dark:'#4e090a'
    },
    background: {
        default: mode === 'dark' ? '#1e2018' : '#f2efe8',
        paper: mode === 'dark' ?  '#1e2018' : '#f2efe8',
    },
    
  },

})
}

export default getTheme;