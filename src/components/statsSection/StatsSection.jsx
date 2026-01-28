import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HandshakeIcon from "@mui/icons-material/Handshake";

export default function StatsSection() {
  const { t } = useTranslation();
  return (
    <Box
      component={"section"}
      sx={{ textAlign: "center", display: "flex", justifyContent: "center" }}
      py={5}
    >
      <Grid
        container
        spacing={4}
        sx={{ textAlign: "center", display: "flex", justifyContent: "center" }}
      >
        <Grid size={{ xs: 8, sm: 6, xl: 4 }} sx={{ borderRadius: "10%" }}>
          <Paper elevation={3} sx={{ borderRadius: "10%" }}>
            <Card
              sx={{
                borderRadius: "10%",
                height: "200px",
                "&:hover": {
                  boxShadow: `0 0.5px 0 #ef660c, 0 1px 5px #2f8ee0`,
                },
              }}
            >
              <CardContent>
                <VisibilityIcon fontSize="large" color="primary" />
                <Typography
                  gutterBottom
                  color="primary.main"
                  sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  +20k
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                  color="warning.dark"
                  sx={{ mb: 1.5, fontWeight: "bold" }}
                >
                  {t("Viewers")}
                </Typography>
                <Typography variant="body2">
                  {t("Thousands of visitors explore our platform every month.")}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid size={{ xs: 8, sm: 6, xl: 4 }} sx={{ borderRadius: "20%" }}>
          <Paper elevation={3} sx={{ borderRadius: "20%" }}>
            <Card
              sx={{
                borderRadius: "10%",
                height: "200px",
                "&:hover": {
                  boxShadow: `0 0.5px 0 #ef660c, 0 1px 5px #2f8ee0`,
                },
              }}
            >
              <CardContent>
                <PersonAddIcon fontSize="large" color="primary" />
                <Typography
                  gutterBottom
                  color="primary.main"
                  sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  +10k
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                 color="warning.dark"
                  sx={{ mb: 1.5, fontWeight: "bold" }}
                >
                  {t("Users")}
                  
                </Typography>
                <Typography variant="body2">
                  {t("A growing community of active and trusted users.")}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid size={{ xs: 8, sm: 6, xl: 4 }} sx={{ borderRadius: "10%" }}>
          <Paper elevation={3} sx={{ borderRadius: "10%" }}>
            <Card
              sx={{
                borderRadius: "10%",
                height: "200px",
                "&:hover": {
                  boxShadow: `0 0.5px 0 #ef660c, 0 1px 5px #2f8ee0`,
                },
              }}
            >
              <CardContent>
                <HandshakeIcon fontSize="large" color="primary" />
                <Typography
                  gutterBottom
                  color="primary.main"
                  sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  +500
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                  color="warning.dark"
                  sx={{ mb: 1.5, fontWeight: "bold" }}
                >
                  {t("Partners")}
                </Typography>
                <Typography variant="body2">
                  {t(
                    "Partnering with leading brands and businesses worldwide.",
                  )}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
