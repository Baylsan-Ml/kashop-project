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
    <Box component={"section"} sx={{ minHeight: "100%", textAlign: "center",  }}>
       
      <Grid container>
        <Grid
          size={{ xs: 4, sm: 3, md: 2, xl: 2 }}
          sx={{ display: "flex", alignItems: "baseline", borderRight:1, borderColor:'primary.main' }}
        >
          <List
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor:'error.main',
              pt:5
            }}
          >
            <Button
              component={NavLink}
              to=""
              sx={{ borderRadius: "20%"}}
            >
              <ListItem>
                <ListItemAvatar>
                  <PortraitIcon color="primary.main" sx={{ fontSize: "30px" }} />
                </ListItemAvatar>
                <ListItemText
                  primary={t("Info")}
                  secondary={t("My personal info")}
                  secondaryTypographyProps={{ style: { color: '#fef6e9' } }}
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
                  secondaryTypographyProps={{ style: { color: '#fef6e9' } }}
                  color="primary.main"
                />
              </ListItem>
            </Button>
          </List>
        </Grid>

        <Grid size={{ xs: 7, sm: 8, md: 9, xl: 9 }}>
          <Box component={"section"}>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
    //  </Container>
  );
}
