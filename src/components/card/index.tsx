import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function CardTitle() {
  return (
    <Card
      sx={{ minWidth: 375, textAlign: 'center' }}
      style={{
        alignContent: 'center',
        alignItems: 'center',
        maxWidth: '100%'
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Budget available
        </Typography>
        <Typography variant="h4" color="text.secondary">
          0.00
        </Typography>
        <Typography
          style={{
            display: 'flex'
          }}
          variant="body1"
          color="text.primary"
        >
          Ingress
        </Typography>
        <Typography
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          variant="body1"
          color="text.secondary"
        >
          0.00
        </Typography>
        <hr />
        <Typography
          style={{
            display: 'flex'
          }}
          variant="body1"
          color="text.primary"
        >
          Egress
        </Typography>
        <Typography
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          variant="body1"
          color="text.secondary"
        >
          0.00
        </Typography>
        <hr />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="small">Copy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
export default CardTitle
