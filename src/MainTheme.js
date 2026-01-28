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
      // main:'#ef660c',
      // main:'#cc361e'
      main: mode ==='dark'?'#ffbd77': '#ffbd77'  
    },
   secondary:{
    // main:'#f2efe8'
    // main:'#f2fdff'
    // main:'#2e42c9
    // main:'#f4f3f8'
    main: mode ==='dark'?'#fef6e9': '#fef6e9'
    // main:'#fef6e9'

   },
    success: {
      // main:'#4e090a',
    //  main:'#2f8ee0',
        // main: mode==='dark'?'#9a3b11':'#0038bd' ,
        // main:mode==='dark'? '#224666':'#132436'
        // main:'#556133',
        // dark:'#2f8ee0'
        // main:'#305d7a'
       // main:'#ff724c'
      // dark:'#9dac71'
      // main:'#9a3b11'
      // main:'#003f48'
      main: mode==='dark'?'#fef6e9':'#003f48' ,
    },
    error:{
      // main: mode==='dark?'?'#ff724c' :'#9a3b11',
      // main: mode==='dark?'?'#386ba1' :'#132436',
      main:mode==='dark?'?'#ffbd77' :'#0a171d',
    
    },
    info: { 
      // main: '#9dac71',
      // dark:'#4e090a'
      //  main:'#081535',
      // main:'#2a2c41'
      // main: mode ==='dark'?'#b3b3b3': '#454545'
      // main: mode ==='dark'?'#efefef': '#b3b3b3'
      // main:'#9cd7d1'
      main: mode ==='dark'?'#b3b3b3': '#0a171d'
    },

    background: {
       
        // default: mode === 'dark' ? '#000000' : '#f2efe8',
        // paper: mode === 'dark' ?  '#000000' : '#f2efe8',

        default: mode === 'dark' ? '#0a171d' : '#f4f3f8',
        paper: mode === 'dark' ?  '#0a171d' : '#f4f3f8',
        
    },
    
  },

   typography: {
     
      fontFamily: "'Rubik', 'Nunito', sans-serif",
       brand: {
        fontFamily: "'Arizonia', cursive",
        fontWeight: 400,
        fontSize: "2.5rem",
        letterSpacing: "0.05em",
      },

      h1: {
        fontFamily: "'Varela Round', sans-serif",
        fontWeight: 700,
      },
      h2: {
        fontFamily: "'Varela Round', sans-serif",
        fontWeight: 600,
      },
      h3: {
        fontFamily: "'Varela Round', sans-serif",
      },
      h4: {
        fontFamily: "'Nunito', sans-serif",
        fontWeight: 600,
      },
      h5: {
        fontFamily: "'Nunito', sans-serif",
      },
      body1: {
        fontFamily: "'Rubik', sans-serif",
        fontSize: "1rem",
      },
      body2: {
        fontFamily: "'Rubik', sans-serif",
        fontSize: "0.875rem",
      },
      button: {
        fontFamily: "'Rubik', sans-serif",
        textTransform: "none",
        fontWeight: 600,
      },
    },

})
}

export default getTheme;