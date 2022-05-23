import Grid from '@mui/material/Grid'
import CardTitle from '../components/card'
import { Formfield } from '../components'

function Home() {
  return (
    <Grid
      container
      spacing={2}
      style={{ backgroundColor: 'aqua' }}
      direction="column"
      alignItems="center"
    >
      <Grid item xs={6} md={8}>
        <CardTitle />
      </Grid>
      <Grid item xs={6} xl={8}>
        <Formfield />
      </Grid>
    </Grid>
  )
}

export default Home
