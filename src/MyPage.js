import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { usePermissions } from "react-admin";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { CardActionArea, CardActions } from "@mui/material";

const MyPage = () => {
  return (
    <Card sx={{ mt: 2, mb: 2 }}>
      <CardMedia
        component="img"
        width="425px"
        aspect-ratio="auto 425 / 193"
        height="193px"
        image="https://bootstrappingecommerce.com/wp-content/uploads/2018/07/Service-Based-Startup-Business-Ideas.jpg"
        alt="Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Coming up with a cool business idea
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Wouldn’t it be great if we could come up with a breakthrough business
          idea? Let’s look at 6 ideation techniques you can use to come up with
          a business idea.
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
          <p>
            Let’s look at <strong>six</strong> ideation techniques you can use
            to come up with a business idea.
          </p>
          <p>
            <strong>#1 The Mirror Technique</strong>
          </p>
          <p>
            Take a popular product for a user segment and make it for another.
            For example, ride-sharing is popular with young people. How about a
            simple call-based pickup and drop service for the elderly?
          </p>
          <p>
            eg: Protin bars are popular with active, young people. So Gladful, a
            startup, started making protein snacks for kids.
          </p>
          <h4>#2 The Challenger Technique</h4>
          <p>
            Take an existing solution and build a new version, solving its
            fundamental problems. For eg, many second-hand items go unsold on
            OLX. How about a platform where the price keeps going down until
            there's a successful bid?
          </p>
          <h4>#3 The Overlap Technique</h4>
          <p>
            Combining two needs into one product. For example, parents want
            their kids to have a gadget at all times for tracking and calling,
            but with limited access to the internet and games. How about a
            smartwatch for kids that would serve this purpose?
          </p>
          <p>
            <strong>#4 The Focus Technique</strong>
          </p>
          <p>
            Take a business model and do any one small thing better. For
            example, car repair is already a business model. How about only a
            tyre-replacement service anywhere in the city for Rs. 100?
          </p>
          <p>
            <strong>#5 The User Technique</strong>
          </p>
          <p>
            Picking one user and solving any one of their key problems. For
            example, for young working professionals who sit the entire day, an
            attachable head-rest for any chair.
          </p>
          <p>
            <strong>#6 The Forecast Technique</strong>
          </p>
          <p>
            Take a user and predict their behavior 5 years from now. For eg, a
            seller wants to target only high-end markets in Mumbai. Can I create
            an app where sellers connect with micro-markets directly?
          </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          disabled
          href="#"
          sx={{}}
          size="small"
          color="primary"
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
export default MyPage;
// const { isLoading, permissions } = usePermissions();
// return isLoading
//     ? (<div>Waiting for permissions...</div>)
//     : (
//         <Card>
//             <CardContent>Lorem ipsum sic dolor amet...</CardContent>
//             {permissions === 'admin' &&
//                 <CardContent>Sensitive data</CardContent>
//             }
//         </Card>
//     );
