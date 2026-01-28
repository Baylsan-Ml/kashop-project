import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  CircularProgress,
  Container,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import "../sendCode/SendCode.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import useLogin from "../../hooks/useLogin.js";
import { useTranslation } from "react-i18next";
import { LoginSchema } from "../../validation/LoginSchema.js";

export default function Login() {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur",
  });

  const { loginMutation } = useLogin();
  const loginForm = async (values) => {
    loginMutation.mutateAsync(values);
  };
  return (
    <Container
      component={"section"}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          minHeight: "70vh",
          m: 5,
          boxShadow: 2,
          border: 1,
          borderLeft: 0,
          borderTop: 0,
          borderColor: "grey.500",
           width: { xs: "90%", sm: "70%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "5px",
        }}
      >
        <Typography
          variant="h1"
          sx={{ textAlign: "center", mt: 3, textShadow: "2px 2px 1px #4e090a", fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" }, }}
          color="primary"
        >
          {t("Login")}
        </Typography>

        <Box
          onSubmit={handleSubmit(loginForm)}
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 5,
            alignItems: "center",
          }}
        >

          <TextField
            label={t("User Email")}
            {...register("email")}
            fullWidth
            variant="outlined"
            error={errors.email}
            helperText={errors.email?.message}
             sx={{width:'90%',
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-error fieldset": {
                  borderColor: "red",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "red",
                },
                "&.Mui-focused Mui-error": {
                  color: "red",
                },
              },
              "& .MuiFormHelperText-root.Mui-error": {
                color: "red",
              },
              
            }}
          />
          <TextField
             label={t("Password")}
            type="password"
            {...register("password")}
            variant="outlined"
           sx={{width:'90%',
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-error fieldset": {
                  borderColor: "red",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "red",
                },
                "&.Mui-focused Mui-error": {
                  color: "red",
                },
              },
              "& .MuiFormHelperText-root.Mui-error": {
                color: "red",
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              width: "90%",
              gap: 5,
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              fullWidth
              disabled={isSubmitting}
              color="primary"
              sx={{ boxShadow: 2 }}
            >
              {isSubmitting ? <CircularProgress /> : t("Login")}
            </Button>
           
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="info.main"
              sx={{ boxShadow: 2, bgcolor:'info.main', color:'success.main' }}
            >
               <Link 
            component={RouterLink}
            to={"/"}
            sx={{textDecoration:'none'}}>
              {t("Cancel")}
              </Link>
            </Button>
            
          </Box>

          <Link
            component={RouterLink}
            to={"/sendCode"}
            sx={{ textDecoration: "none", fontSize: "bold" }}
            color="primary"
          >
            {t("Forget Your Password?")}
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
