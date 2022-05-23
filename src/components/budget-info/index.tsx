import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function BugetInfo() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Card sx={{ minWidth: 375 }}>
          <CardContent>
            <Typography color="text.primary" gutterBottom variant="h6">
              Entry{' '}
            </Typography>
            <Typography variant="h4" />
            <Typography sx={{ textAlign: 'left' }} color="text.secondary">
              Salary{' '}
              <Typography style={{ fontWeight: 'bold', textAlign: 'right' }}>
                0.00{' '}
              </Typography>
            </Typography>
            <hr />
          </CardContent>
        </Card>
        <br />
        <Card sx={{ minWidth: 375, marginLeft: '10px' }}>
          <CardContent>
            <Typography color="text.primary" gutterBottom variant="h6">
              Egress{' '}
            </Typography>
            <Typography variant="h4" />
            <Typography sx={{ textAlign: 'left' }} color="text.secondary">
              Salary{' '}
              <Typography style={{ fontWeight: 'bold', textAlign: 'right' }}>
                0.00{' '}
              </Typography>
            </Typography>
            <hr />
          </CardContent>
        </Card>
      </Box>
    </div>
  )
}
export default BugetInfo
