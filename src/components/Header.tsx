import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const Header: React.FC = () => (
  <Grid container justify='center'>
    <Box m={2}>
      <header>
        <Typography component='h3' variant='h3'>
          Pokemon
        </Typography>
      </header>
    </Box>
  </Grid>
)
export default Header
