import React, { useContext } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Typography, Button, Container, Paper, FormControl } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MultiStepContext } from "../StepContext";
import { useTheme } from "@mui/material/styles";
import { first } from "../components/json/First";


function TestComponent() {
  const {
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setFieldValue,
    setStep,
  } = useContext(MultiStepContext);

  const theme = useTheme();

  const handleBlurForDatePicker = (field) => {
    // setTouched({ ...touched, [field]: true });
  };

  const renderInputField = (fieldJson, values, handleChange) => {
    return fieldJson.form.sections.map((section) => {
      const data = section.fields;
      const title = section.sections_title;

      return (
        <Box key={section.order}>
          <Typography variant="h5">{title}</Typography>
          {data.map((item) => {
            const { type, name, label } = item;

            if (type === "date") {
              return (
                <Box key={name} sx={{ marginTop: 3, width: '100%' }}>
                  <Typography>{label}</Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      name={name}
                      closeOnSelect={true}
                      label={label}
                      value={values[name]}
                      onChange={(newValue) => setFieldValue(name, newValue)}
                      onClose={() => handleBlurForDatePicker(name)}
                      variant="standard"
                      sx={{ width: '100%' }}  // Set width here
                    />
                  </LocalizationProvider>
                  {errors[name] && touched[name] && !values[name] ? (
                    <Box
                      component="p"
                      sx={{
                        color: theme.palette.error.main,
                        fontSize: "0.875rem",
                      }}
                    >
                      {errors[name]}
                    </Box>
                  ) : null}
                </Box>
              );
            }

            return null;
          })}
        </Box>
      );
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {renderInputField(first, values, handleChange)}
        <Box sx={{ mb: 2 }}>
          <FormControl fullWidth>
            <Button variant="contained" color="primary" onClick={() => setStep(2)}>
              Next
            </Button>
          </FormControl>
        </Box>
      </Paper>
    </Container>
  );
}

export default TestComponent;
