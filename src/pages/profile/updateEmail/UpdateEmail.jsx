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
import useUpdateEmail from "../../../hooks/useUpdateEmail";
import { UpdateEmailSchema } from "../../../validation/UpdateEmailSchema";

export default function UpdateEmail() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(UpdateEmailSchema),
    mode: "onBlur",
    defaultValues: {
      CurrentEmail: "",
      NewEmail: "",
    },
  });

  const updateEmailMutation = useUpdateEmail();
  const updateEmailForm = async (values) => {
    updateEmailMutation.mutateAsync(values);
    reset({ CurrentEmail: "", NewEmail: "" });
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
        {t("Update Email")}
      </Typography>
      <Box
        component={"form"}
        onSubmit={handleSubmit(updateEmailForm)}
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
            {t("Current Email")}
          </Typography>
          <TextField
            fullWidth
            type="email"
            // value={data.email}
            label={t("Current Email")}
            {...register("CurrentEmail")}
            error={errors.CurrentEmail}
            helperText={errors.CurrentEmail?.message}
            sx={{width:'90%',
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
              minWidth: { sm: "150px" },
              fontWeight: "bold",
              display: { xs: "none", sm: "block" },
            }}
          >
            {t("New Email")}
          </Typography>
          <TextField
            fullWidth
            type="email"
            label={t("New Email")}
            {...register("NewEmail")}
            error={errors.NewEmail}
            helperText={errors.NewEmail?.message}
            sx={{width:'90%',
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
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 5, sm: 9, md: 12 }}
          sx={{ pt: 3, display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            fullWidth
            // sx={{ width: { xs: "100%", sm: "auto" } }}
            // sx={{ width:'40%'}}
          >
            {isSubmitting ? <CircularProgress /> : "Update Email"}
          </Button>
          <Button
            variant="outlined"
            color="success"
            fullWidth
            // sx={{ width: { xs: "100%", sm: "auto" } }}
            onClick={() => Navigate("/profile")}
          >
            {t("Cancel")}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
