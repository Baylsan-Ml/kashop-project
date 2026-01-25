import { createTheme } from "@mui/material/styles";

const getTheme = (mode)=>{
   return createTheme({
  palette: {
    mode:mode,
    primary:{
      // main:  '#e38792',
      // main: '#b8a8fe',
      // main:'#fcc050',
      // dark: '#373636'
      main:'#ef660c'
    },
   secondary:{
    // main:'#f2efe8'
    // main:'#f2fdff'
    // main:'#2e42c9
    // main:'#f4f3f8'
    main:'#fff5f4'

   },
    success: {
      // main:'#4e090a',
    //  main:'#2f8ee0',
        main: mode==='dark'?'#305d7a':'#0038bd' ,
        // dark:'#2f8ee0'
        // main:'#305d7a'

    // main:'#ff724c'
      // dark:'#9dac71'
      // main:'#9a3b11'
    },
    error:{
      main: mode==='dark?'?'#ff724c' :'#9a3b11',
    },
    info: { 
      // main: '#9dac71',
      // dark:'#4e090a'
      //  main:'#081535',
      // main:'#2a2c41'
      main: mode ==='dark'?'#9cd7d1': '#454545'
      // main:'#9cd7d1'
    },

    background: {
       
        // default: mode === 'dark' ? '#000000' : '#f2efe8',
        // paper: mode === 'dark' ?  '#000000' : '#f2efe8',

        default: mode === 'dark' ? '#081535' : '#f4f3f8',
        paper: mode === 'dark' ?  '#081535' : '#f4f3f8',
        
    },
    
  },

})
}

export default getTheme;