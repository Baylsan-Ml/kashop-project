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
import { useUpdateProfileInfoSchema } from "../../../validation/UpdateProfileInfoSchema";
import useUpdateProfileInfo from "../../../hooks/useUpdateProfileInfo";
import useProfile from "../../../hooks/useProfile";
import { useEffect, useState } from "react";

export default function ProfileInfoUpdate() {
  const { t } = useTranslation();
  const { data: profileData, isLoading } = useProfile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(useUpdateProfileInfoSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      city: "",
      phoneNumber: "",
    },
  });

  //getting data from API
  useEffect(() => {
    if (profileData) {
      reset({
        fullName: profileData.fullName || "",
        city: profileData.city || "",
        phoneNumber: profileData.phoneNumber || "",
      });
    }
  }, [profileData, reset]);
  const updateProfileInfoMutation = useUpdateProfileInfo();
  const updateProfileInfoForm = async (values) => {
    updateProfileInfoMutation.mutateAsync(values);
    reset(values);
  };

  // const [isEditing, setIsEditing] = useState(false);

  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
         py: {xs: 0.5, md:2},
      }}
    >
      {/* <Typography
        variant="h5"
        sx={{ textAlign: "center", textShadow: "1px 1px 1px #2a2c41", pb: 5 }}
        color="primary"
      >
        {t("Update Info")}
      </Typography> */}
      
      <Box
        component={"form"}
        onSubmit={handleSubmit(updateProfileInfoForm)}
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
              display: { xs: "none", sm: "block" },
              minWidth: "150px",
              fontWeight: "bold",
            }}
          >
            {t("Full Name")}
          </Typography>
          <TextField
            fullWidth
            label={t("Full Name")}
            {...register("fullName")}
            error={errors.fullName}
            helperText={errors.fullName?.message}
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
            alignItems:'center',
            justifyContent:'center',
            gap: 1,
          }}
        >
          <Typography
            sx={{
              display: { xs: "none", sm: "block" },
              minWidth: "150px",
              fontWeight: "bold",
            }}
          >
            {t("City")}
          </Typography>
          <TextField
            fullWidth
            label={t("City")}
            {...register("city")}
            error={errors.city}
            helperText={errors.city?.message}
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
            alignItems:'center',
            justifyContent:'center',
            gap: 1,
          }}
        >
          <Typography
            sx={{
              display: { xs: "none", sm: "block" },
              minWidth: "150px",
              fontWeight: "bold",
            }}
          >
            {t("Phone Number")}
          </Typography>
          <TextField
            fullWidth
            label={t("Phone Number")}
            {...register("phoneNumber")}
            error={errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
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
        <Stack
          direction={{ xs: "row", sm: "row" }}
          spacing={{ xs: 2, sm: 9, md: 12 }}
          sx={{ pt:{xs:1, md:3}, display: "flex", justifyContent:{xs:'center' ,md:"flex-end"}, alignItems:{xs:'center' ,md:"flex-end"},
            width:{xs:'93%', md:'70%'}
          }}
        >
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
             sx={{ width: { xs: "70%", md: "100%" },
            fontSize:{xs:'11px', md:'15px'}}}
          >
            {isSubmitting ? <CircularProgress /> : "Update Info"}
          </Button>
          <Button
            variant="outlined"
            color="success"
            sx={{ width: { xs: "50%", md: "100%" },
            fontSize:{xs:'11px', md:'15px'}}}
            onClick={() => Navigate("/profile")}
          >
            {t("Cancel")}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
