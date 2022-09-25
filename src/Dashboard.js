import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardCover from "@mui/joy/CardCover";
import { Title } from "react-admin";
import styles from "./styles.css";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
// export default () => (
//     <Card variant="outlined">
//         <Title title="Welcome to the administration" />
//         <CardContent>All Components Will be listed Here after CIE</CardContent>
//     </Card>
// );

export default () => (
  <>
    <CardMedia
      component="img"
      sx={{
        mt: 3,
        mb: 1,
        alignSelf: "center",
        width: "242.5px",
        height: "109px",
        borderRadius: "0.5rem",
        boxShadow: "0 0 0.6rem rgba(0,0,0,0.1)",
        borderRadius: "10px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
      }}
      // image="https://www.msrit.ml/img/msritlogo.png"
      // image="http://d2e9h3gjmozu47.cloudfront.net/brand.png"
      // image="http://exam.msrit.edu/components/com_examresult/assets/images/logo.png"
      image="https://user-images.githubusercontent.com/71520844/185781029-0afe7079-1d90-4cbc-9c8f-ce424c73a916.png"
      alt="Ramaiah Institute of Technology Logo"
    />
    <Card
      sx={{
        mt: 3,
        ml: 1,
        width: "100%",
        alignSelf: "center",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        borderRadius: 2,
        // width: {
        //   xs: 300, // theme.breakpoints.up('xs')
        //   sm: 400, // theme.breakpoints.up('sm')
        //   md: 500, // theme.breakpoints.up('md')
        //   lg: 600, // theme.breakpoints.up('lg')
        //   xl: 700, // theme.breakpoints.up('xl')
        // },
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontWeight: 500, fontSize: "1.5rem" }}
          color="text.primary"
          gutterBottom
        >
          <b>CGPA Calculator (Estimator)</b>
        </Typography>
        <Typography sx={{ mt: 2 }} color="text.secondary">
          Website made by{" "}
          <Link
            sx={{ fontWeight: 600, fontStyle: "Didot" }}
            href="https://myselfshravan.github.io"
            underline="none"
          >
            {"Shravan"}
          </Link>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href="#/calci"
          size="medium"
          variant="contained"
          boxShadow="1"
          color="primary"
          sx={{ ml: 1, mr: 1, mb: 2 }}
        >
          Enter Marks
        </Button>
      </CardActions>
      <CardActions>
        <Button
          href="#/calculator"
          size="medium"
          variant="contained"
          boxShadow="1"
          color="primary"
          sx={{ ml: 1, mr: 1, mb: 2 }}
        >
          Check Grades and CGPA
        </Button>
      </CardActions>
    </Card>
  </>
);
