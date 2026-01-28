import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegiesterSchema } from "../../validation/RegisterSchema";
import useRegister from "../../hooks/useRegister";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

export default function Regiester() {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(RegiesterSchema),
    mode: "onBlur",
  });

  const { serverErrors, registerMutation } = useRegister();
  const registerForm = async (values) => {
    registerMutation.mutateAsync(values);
  };
  return (
    <Container
      component={"section"}
      maxWidth="md"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          minHeight: { xs: "auto", md: "85vh" },
          p: { xs: 2, sm: 3, md: 5 },
          m: { xs: 1, sm: 2, md: 5 },
          width: { xs: "100%", sm: "90%", md: "70%" },
          boxShadow: 2,
          border: 1,
          borderLeft: 0,
          borderTop: 0,
          borderColor: "grey.500",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
            textAlign: "center",
            textShadow: "2px 2px 1px #4e090a",
          }}
          color="primary"
        >
          {t("Register")}
        </Typography>
        {serverErrors.length > 0
          ? serverErrors.map((err) => (
              <Typography sx={{ color: "red" }}>{err}</Typography>
            ))
          : null}
        <Box
          onSubmit={handleSubmit(registerForm)}
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
            label={t("User Name")}
            {...register("userName")}
            fullWidth
            variant="outlined"
            error={errors.userName}
            helperText={errors.userName?.message}
            sx={{
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
            label={t("Full Name")}
            {...register("fullName")}
            fullWidth
            variant="outlined"
            error={errors.fullName}
            helperText={errors.fullName?.message}
            sx={{
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
            label={t("User Email")}
            {...register("email")}
            fullWidth
            variant="outlined"
            error={errors.email}
            helperText={errors.email?.message}
             sx={{
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
            {...register("password")}
            fullWidth
            variant="outlined"
            error={errors.password}
            helperText={errors.password?.message}
             sx={{
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
            label={t("Phone Number")}
            {...register("phoneNumber")}
            fullWidth
            variant="outlined"
            error={errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
             sx={{
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
              width: "100%",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              color="primary"
              fullWidth
            >
              {isSubmitting ? <CircularProgress /> : t("Regiester")}
            </Button>
            <Button
              variant="contained"
              type="button"
              color="info.main"
              fullWidth
              sx={{
                boxShadow: 2,
                bgcolor: "info.main",
                color: "success.main",
              }}
            >
              <Link
                component={RouterLink}
                to={"/"}
                sx={{ textDecoration: "none" }}
              >
                {t("Cancel")}
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
