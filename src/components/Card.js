import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ type, details, lat, lng }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia component="img" height="140" image={img} alt="green iguana" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Incident Type: {type}
        </Typography>
        <Typography variant="body1">
          Details: <span>{details}</span>
        </Typography>
        <span>Latitude: {lat.toFixed(2)}</span> <br />
        <span>Longitude: {lng.toFixed(2)}</span>
      </CardContent>
    </Card>
  );
}
