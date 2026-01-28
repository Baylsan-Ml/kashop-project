import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../../validation/ResetPasswordSchema";
import useResetPassword from "../../hooks/useResetPassword";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: "onBlur",
  });

  const { resetPasswordMutation } = useResetPassword();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const resetPasswordForm = async (values) => {
    resetPasswordMutation.mutateAsync(values);
  };
  return (
    <Container
      component={"section"}
      maxWidth="md"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          minHeight: { xs: "auto", md: "70vh" },
          m: { xs: 1, sm: 2, md: 5 },
          p: { xs: 2, sm: 3, md: 4 },
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
            fontSize: { xs: "1.8rem", sm: "2.3rem", md: "3rem" },
            textAlign: "center",
            textShadow: "2px 2px 1px #4e090a",
          }}
          color="primary"
        >
          {t("Reset Password")}
        </Typography>
        <Box
          component={"form"}
          onSubmit={handleSubmit(resetPasswordForm)}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
          mt={5}
        >
          <TextField
            label="new password"
            {...register("newPassword")}
            fullWidthvariant="outlined"
            error={errors.newPassword}
            helperText={errors.newPassword?.message}
             sx={{ width: "85%",
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
            label="code"
            {...register("code")}
            variant="outlined"
            error={errors.code}
            helperText={errors.code?.message}
             sx={{width: "85%", my: 2,
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
            label="confirm your email"
            {...register("email")}
            variant="outlined"
            error={errors.email}
            helperText={errors.email?.message}
             sx={{ width: "85%",
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
              width: "85%",
              gap: 2,
              pt: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              fullWidth
            >
              {isSubmitting ? <CircularProgress size={20} /> : "Reset Password"}
            </Button>
            <Button
              fullWidth
              variant="contained"
              type="button"
              color="info"
              onClick={() => navigate("/login")}
              sx={{ boxShadow: 2, color: "#f2efe8" }}
            >
              {t("Cancel")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
