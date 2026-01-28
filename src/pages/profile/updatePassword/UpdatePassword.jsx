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
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

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
        variant="h6"
        sx={{ textAlign: "center", textShadow: "1px 1px 1px #2a2c41", pb:{xs:1, md:5}, display: { xs: "none", sm: "block" },
        fontSize:{xs:'11px', md:'35px'}
       }}
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
          width: { xs: "100%", sm: "80%", md: "70%" },
          display: "flex",
          justifyContent:'center',
          alignItems:'center',
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
              minWidth: { sm: "150px", md:'200px' },
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            {t("Current Password")}
          </Typography>
          <TextField
            fullWidth
            type="password"
            label={t("Current Password")}
            {...register("CurrentPassword")}
            error={errors.CurrentPassword}
            helperText={errors.CurrentPassword?.message}
            sx={{width:'100%',
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "success.main",
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
              minWidth: { sm: "150px", md:'200px' },
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
             sx={{width:'100%',
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "success.main",
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
              minWidth: { sm: "150px", md:'200px' },
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            {t("Confirm New Password")}
          </Typography>
          <TextField
            fullWidth
            type="password"
            label={t("Confirm New Password")}
            {...register("ConfirmNewPassword")}
            error={errors.ConfirmNewPassword}
            helperText={errors.ConfirmNewPassword?.message}
             sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "success.main",
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
        </Box>

        <Stack
          direction={{ xs: "row", sm: "row" }}
          spacing={{ xs: 1, sm: 3, md: 7 }}
         sx={{ pt:{xs:1, md:3} , display: "flex", 
          justifyContent:{xs:'center' ,md:"center"}, alignItems:{xs:'center' ,md:"flex-end"},
            width:{xs:'90%', md:'100%'}, flexDirection: isRTL ? "row-reverse" : "row", 
          }}
        >
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
             sx={{ width: { xs: "90%", md: "30%" },
            fontSize:{xs:'10px', md:'13px'}
           }}
          >
            {isSubmitting ? <CircularProgress /> : t("Update Password")}
          </Button>
          <Button
            variant="outlined"
            color="success.main"
            sx={{ width: { xs: "30%", md: "20%" },
            fontSize:{xs:'11px', md:'13px'}
           }}
            onClick={() => Navigate("/profile")}
          >
            {t("Cancel")}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
