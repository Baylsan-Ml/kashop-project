import React from "react";
import useProfile from "../../hooks/useProfile";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Stack
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PortraitIcon from "@mui/icons-material/Portrait";
import ViewStreamIcon from "@mui/icons-material/ViewStream";




export default function Profile() {
  const { data, isLoading, isError } = useProfile();
  const { t } = useTranslation();

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>Error</Typography>;

  console.log(data);

  
  return (
    //  <Container sx={{minHeight:'70vh', textAlign:'center', py:5}} >
    <Box component={"section"} sx={{ minHeight: "90vh", textAlign: "center" }}>
       
      <Grid container>
        <Grid
          size={{ xs: 6, sm: 3, md: 2, xl: 2 }}
          sx={{ display: "flex", alignItems: "baseline", position: "relative", }}
        >
          <List
            sx={{
              width: "100%",
              height: "100vh",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor:'error.main'
            }}
          >
            <Button
              component={NavLink}
              to=""
              sx={{ borderRadius: "20%", pt: 5 }}
            >
              <ListItem>
                <ListItemAvatar>
                  <PortraitIcon color="primary.main" sx={{ fontSize: "30px" }} />
                </ListItemAvatar>
                <ListItemText
                  primary={t("Info")}
                  secondary={t("My personal info")}
                  color="primary.main"
                />
              </ListItem>
            </Button>
            <Button
              component={NavLink}
              to="orders"
              sx={{ borderRadius: "20%" }}
            >
              <ListItem>
                <ListItemAvatar>
                  <ViewStreamIcon color="primary.main" sx={{}} />
                </ListItemAvatar>
                <ListItemText
                  primary={t("Orders")}
                  secondary={t("Order history")}
                  color="primary.main"
                />
              </ListItem>
            </Button>
          </List>
        </Grid>

        <Grid size={{ xs: 6, sm: 8, md: 9, xl: 9 }}>
          <Box component={"section"}>
            {/* <Typography  component={'h2'} variant='h2' m={3} color='success'
              sx={{textShadow: '2px 2px 2px rgba(0,0,0,0.3)', }}>{t("My Proflie")}</Typography> */}

            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
    //  </Container>
  );
}
