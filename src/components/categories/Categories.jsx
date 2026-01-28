import {
  Box,
  Card,
  CircularProgress,
  Container,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import { useCategories } from "../../hooks/useCategories";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

export default function Categories() {
  const { isLoading, isError, data } = useCategories();

  const { t } = useTranslation();
  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>Error</Typography>;
  return (
    <>
      <Box p={3} sx={{ textAlign: "center" }}>
        <Typography
          component={"h2"}
          variant="h4"
          color="info.main"
          m={3}
          sx={{
            textShadow: "2px 2px 2px rgba(0,0,0,0.3)",
            fontSize: { xs: "32px", sm: "42px", md: "56px" },
          }}
        >
          {t("Categories")}
        </Typography>
        <Typography
          color="primary.main"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            fontSize: { xs: "12px", sm: "20px", md: "25px" },
            textShadow: "1px 1px 1px rgba(56, 31, 18, 0.3)",
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Container maxWidth="xl">
          <Grid container sx={{ textAlign: "center" }}>
            {data.response.map((category) => (
              <Grid
                key={category.id}
                size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                sx={{ p: 1, display: "flex", flexDirection: "column" }}
              >
                <Link
                  component={RouterLink}
                  to={`/Products/category/${category.id}`}
                  sx={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      py: 1,
                      px:{xs:5, md:3},
                      borderRadius:'25px',
                      cursor: "pointer",
                      fontWeight: "bold",
                      bgcolor: "success.main",
                      color: "warning.main",
                      boxShadow: 1,
                      "&:hover": {
                        transform: "translateY(-1px)",
                        boxShadow: `0 1px 0 #fcc050, 0 8px 8px #ff734c7b`,
                      },
                    }}
                  >
                    <Typography>{category.name}</Typography>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
