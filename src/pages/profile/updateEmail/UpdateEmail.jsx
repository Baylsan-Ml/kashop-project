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
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

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
        variant="h6"
        sx={{ textAlign: "center", textShadow: "1px 1px 1px #2a2c41", pb:{xs:1, md:5}, display: { xs: "none", sm: "block" },
        fontSize:{xs:'11px', md:'35px'}
       }}
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
            alignItems:'center',
            justifyContent:'center',
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
           sx={{width: {xs:'100%', md:'90%'}, 
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
            alignItems:'center',
            justifyContent:'center',
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
            sx={{width: {xs:'100%', md:'90%'},
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
          spacing={{ xs: 1, sm: 5, md: 7 }}
          sx={{ pt:{xs:1, md:3} , display: "flex", 
          justifyContent:{xs:'center' ,md:"center"}, alignItems:{xs:'center' ,md:"flex-end"},
            width:{xs:'95%', md:'75%'},  flexDirection: isRTL ? "row-reverse" : "row",
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
            {isSubmitting ? <CircularProgress /> : t("Update Email")}
          </Button>
          <Button
            variant="outlined"
            color="success"
             sx={{ width: { xs: "90%", md: "30%" },
            fontSize:{xs:'10px', md:'13px'}
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
