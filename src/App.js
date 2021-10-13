import { Grid, makeStyles } from "@material-ui/core";
import Add from "./components/Add";
import Container from "./components/Container";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
    

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Container />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
};

export default App;