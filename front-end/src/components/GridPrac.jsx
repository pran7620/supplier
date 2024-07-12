import React from 'react'

import { Box, Grid} from '@mui/material'

function GridPrac() {
  return (
// xs={12}: This means that on extra-small screens (xs) and up, this Grid item will take up all 12 columns (full width).
      
      <Grid item xs={12} container spacing={2}>
        {/* lg={6}: This means that on large screens (lg) and up, this Grid item will take up 6 out of 12 columns (half the width). */}
        
        <Grid  item lg={6}>
        <h1 style={{backgroundColor:'green'}}>Block1</h1>
        </Grid>
       
        <Grid  item  lg={6}>
        <h1 style={{backgroundColor:'green'}}>Block1</h1>
        </Grid>

</Grid>
        /* <Grid >
        <h1 style={{backgroundColor:'green'}}>Block1</h1>
        </Grid>
        <Grid >
        <h1 style={{backgroundColor:'green'}}>Block1</h1>
        </Grid> */
  
      

// // The outermost Grid item acts as a container (<Grid item xs={12} container spacing={2}>) that spans the full width on all screen sizes (since xs={12} means 12 out of 12 columns).
//Inside this container, there are two Grid items, each taking up half the width (lg={6}) on large screens and up. Since no other breakpoints are specified, these items will stack vertically on smaller screens.

   
  )
}

export default GridPrac
