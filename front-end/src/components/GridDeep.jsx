import React from 'react'
import { Grid, Paper } from '@mui/material'
import Container from '@mui/material'

function GridDeep() {
  return (
    <Grid container>

        <Grid  item xs={12} sm={6} md={3} lg={4}>
            <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={4}> 
        <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6}md={3} lg={4}>
        <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6}md={3} lg={4}>
        <Paper>4</Paper>
        </Grid>
      

    </Grid>
  )
}

export default GridDeep
