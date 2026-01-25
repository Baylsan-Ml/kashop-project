import React, { useEffect, useState } from 'react'
import useUpdateProfileInfo from '../../hooks/useUpdateProfileInfo'
import useProfile from '../../hooks/useProfile';
import { useTranslation } from 'react-i18next';
import { Box, Button, CircularProgress, Modal, Stack, TextField, Typography, Tabs ,Tab } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useUpdateProfileInfoSchema } from '../../validation/UpdateProfileInfoSchema';
import { yupResolver } from "@hookform/resolvers/yup";
import UpdateEmail from './updateEmail/UpdateEmail';
import ProfileInfoUpdate from './profileInfoUpdate/ProfileInfoUpdate';
import UpdatePassword from './updatePassword/UpdatePassword';
import PropTypes from 'prop-types';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProfileInfo() {

   const [value, setValue] =useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const{data, isLoading, isError}= useProfile();
 
  const {register, handleSubmit, reset, formState:{errors}}=useForm({
      resolver:yupResolver(useUpdateProfileInfoSchema),
      mode:'onBlur'
    })
  const {t}= useTranslation();
 

         useEffect(() => {
         if (data) {
         reset({
         fullName: data.fullName,
         city: data.city,
         phoneNumber: data.phoneNumber,
      });
    }
  }, [data, reset]);
    
        if(isLoading) return <CircularProgress color='primary.main'/>
        if(isError) return <Typography>Error</Typography>
        console.log(data);

  const onSubmit = (values) => {
    useUpdateProfileInfo(values, {
      onSuccess: () => {
        setIsEditing(false);
      },
    });
  };
    
     const handleCancel = () => {
    reset({
      fullName: data.fullName,
      city: data.city,
      phoneNumber: data.phoneNumber,
    });
    setIsEditing(false);
  };

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'secondary.main',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:'10%'
};

  return (
     <Box  sx={{minHeight:'70vh', borderColor: 'grey.500', 
    display:'flex', flexDirection:'column', justifyContent:'center', borderRadius: '5px'}}>
       <Typography variant='h3' sx={{textAlign: 'center', textShadow:'2px 2px 1px #4e090a', py:5}} color='primary' >
        {t("Personal Information")}
        </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={t("Info")} {...a11yProps(0)} />
          <Tab label={t("Update Email")} {...a11yProps(1)} />
          <Tab label={t("Update Password")} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ProfileInfoUpdate/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <UpdatePassword/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <UpdateEmail />
      </CustomTabPanel>
    </Box>
  )
}
