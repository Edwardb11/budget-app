import Grid from '@mui/material/Grid'
import { BugetInfo, CardTitle, Formfield } from '../components'

function Home() {
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item xs={6} md={8}>
        <CardTitle />
      </Grid>
      <Grid item xs={6} xl={8}>
        <Formfield />
      </Grid>
      <Grid item xs={6} xl={8}>
        <BugetInfo />
      </Grid>
    </Grid>
  )
}

export default Home
