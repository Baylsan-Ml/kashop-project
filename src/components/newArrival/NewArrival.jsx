import { Box, Typography, Container } from "@mui/material";
import newArrival from "../../assets/imgs/newArrival.jpg"; 

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "300px", sm: "400px", md: "500px" }, 
        backgroundImage: `url(${newArrival})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container sx={{ textAlign: "center", color: "white" }}>
        <Typography
          variant="h2"
          component="a" href="#app-bar-with-responsive-menu"
          sx={{
              color:"secondary.main", 
                mr: 2,
                display: { xs: "block", md: "flex" },
                 fontFamily: "Lugrasimo", 
                fontWeight: 900,
                letterSpacing: ".3rem",
                textDecoration: "none",
          }}
        >
          Helix
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
            fontSize: { xs: "16px", sm: "20px", md: "28px" },
            color:"secondary.main", 
                 display: { xs: "block", md: "flex" },
                 fontFamily: "Lugrasimo", 
                fontWeight: 900,
                letterSpacing: ".3rem",
                textDecoration: "none",
                whiteSpace:'normal',
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                maxWidth: { xs: "90%", sm: "70%", md: "60%" },
                
          }}
        >
          {`Discover our unique \ncollection`}
        </Typography>
      </Container>
    </Box>
  );
}
