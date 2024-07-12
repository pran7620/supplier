import {
  Button,
  Box,
  TextField,
  Typography,
  Container,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, { useContext } from "react";
import { MultiStepContext } from "../StepContext";
import { four } from "../components/json/Four";

function Four() {
  const {
    handleChange,
    errors,
    touched,
    submitForm,
    currentStep,
    values,
    setFieldValue,
    handleSubmit,
    setStep,
  } = useContext(MultiStepContext);

  const redirectToFirst = () => {
    setStep(1);
  };

  console.log("errors", errors);

  const renderInputField = (fieldJson, values, handleChange) => {
    const data = fieldJson.form.sections[0].fields;

    console.log("values in fourth step", values);

    return data.map((item) => {
      const { type, name, label, subsection, items } = item;

      switch (type) {
        case "text":
          return (
            <Box key={name} sx={{ marginTop: 3 }}>
              <TextField
                fullWidth
                type={type}
                label={label}
                name={name}
                variant="standard"
                value={values[name] || ""}
                onChange={handleChange}
              />
              {errors[name] && touched[name] ? (
                <p className="text-red-500 text-sm">{errors[name]}</p>
              ) : null}
            </Box>
          );

        case "checkbox":
          return (
            <Box key={name}  sx={{ display: "flex", alignItems: "center", mb: 2,marginTop:3 }}>
              <Box>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="consent"
                      checked={values.consent}
                      onChange={handleChange}
                    />
                  }
                />

                {errors.consent && touched.consent && (
                  <Typography color="error">{errors.consent}</Typography>
                )}
              </Box>
              <Box>
                <Typography variant="h6" sx={{fontSize:"16px"}}>
                  {label}
                </Typography>
              </Box>
            </Box>
          );
        default:
          return null;
      }
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper
        elevation={3}
        sx={{ display: "flex", flexDirection: "column", gap: 4, p: 4 }}
      >
        <Box>{renderInputField(four, values, handleChange)}</Box>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            gap: "2",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => setStep(3)}
          >
            Back
          </Button>
          <br />

          {currentStep === 4 && (
            <Button variant="contained" type="submit">
              Submit
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default Four;
