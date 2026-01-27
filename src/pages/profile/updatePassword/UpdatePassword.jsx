import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { UpdatePasswordSchema } from "../../../validation/UpdatePasswordSchema";
import useUpdatePassword from "../../../hooks/useUpdatePassword";

export default function UpdatePassword() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(UpdatePasswordSchema),
    mode: "onBlur",
    defaultValues: {
      CurrentPassword: "",
      NewPassword: "",
      ConfirmNewPassword: "",
    },
  });

  const updatePasswordMutation = useUpdatePassword();
  const updatePasswordForm = async (values) => {
    updatePasswordMutation.mutateAsync(values);
    reset({ CurrentPassword: "", NewPassword: "", ConfirmNewPassword: "" });
  };
  return (
    <Container
      component={"section"}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", textShadow: "1px 1px 1px #2a2c41", pb: 5 }}
        color="primary"
      >
        {t("Update Password")}
      </Typography>
      <Box
        component={"form"}
        onSubmit={handleSubmit(updatePasswordForm)}
        bgcolor={""}
        sx={{
          gap: 1,
          width: { xs: "100%", sm: "80%", md: "50%" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 1,
          }}
        >
          <Typography
            sx={{
              minWidth: { sm: "150px" },
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            {t("Current Password")}
          </Typography>
          <TextField
            fullWidth
            type="password"
            label={t("new password")}
            {...register("CurrentPassword")}
            error={errors.CurrentPassword}
            helperText={errors.CurrentPassword?.message}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 1,
          }}
        >
          <Typography
            sx={{
              minWidth: { sm: "150px" },
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            {t("New Password")}
          </Typography>
          <TextField
            fullWidth
            type="password"
            label={t("New Password")}
            {...register("NewPassword")}
            error={errors.NewPassword}
            helperText={errors.NewPassword?.message}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 1,
          }}
        >
          <Typography
            sx={{
              minWidth: { sm: "150px" },
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            {t("Confirm New Password")}
          </Typography>
          <TextField
            fullWidth
            type="password"
            label={t("new password")}
            {...register("ConfirmNewPassword")}
            error={errors.ConfirmNewPassword}
            helperText={errors.ConfirmNewPassword?.message}
          />
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 5, sm: 9, md: 12 }}
          sx={{ pt: 3, display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            sx={{ width: { xs: "100%", sm: "auto" } }}
            // sx={{ width:'40%'}}
          >
            {isSubmitting ? <CircularProgress /> : "Update Password"}
          </Button>
          <Button
            variant="outlined"
            color="success.main"
            sx={{ width: { xs: "100%", sm: "auto" } }}
            onClick={() => Navigate("/profile")}
          >
            {t("Cancel")}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
