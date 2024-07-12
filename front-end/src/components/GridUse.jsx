import React from 'react';
import { Grid, TextField, Typography, Container, CssBaseline } from '@mui/material';

const GridUse = ({ schema }) => {
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h6" gutterBottom>
        {schema.subsection}
      </Typography>
      <Grid container spacing={3}>
        {schema.items[0].fields.map((field, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField
              name={field.name}
              label={field.label}
              type={field.type}
              InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
              fullWidth
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GridUse;
