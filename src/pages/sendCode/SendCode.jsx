import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SendCodeSchema } from "../../validation/SendCodeSchema";
import useSendCode from "../../hooks/useSendCode";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";


export default function SendCode() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(SendCodeSchema),
    mode: "onBlur",
  });

  const { sendCodeMutation } = useSendCode();
  const { t } = useTranslation();
  const sendCodeForm = async (value) => {
    sendCodeMutation.mutateAsync(value);
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
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
            textAlign: "center",
            mt: 3,
            textShadow: "2px 2px 1px #4e090a",
          }}
          color="primary"
        >
          {t("Send Code")}
        </Typography>
        <Box
          component={"form"}
          onSubmit={handleSubmit(sendCodeForm)}
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
            label={t("enter your email")}
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
          <Box
            sx={{
              display: "flex",
              width: "100%",

              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              sx={{ boxShadow: 2 }}
            >
              {isSubmitting ? <CircularProgress /> : "Send Code"}
            </Button>
            
           <Button
           fullWidth
              variant="contained"
              type="submit"
              color="info.main"
              sx={{ boxShadow: 2, bgcolor:'info.main', color:'success.main' }}
            >
               <Link
            component={RouterLink}
            to={"/login"} 
            fullWidth
            sx={{textDecoration:'none'}}>
              {t("Cancel")}
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
