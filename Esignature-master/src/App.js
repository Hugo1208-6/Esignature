import { useState } from "react";
import { Preview } from "./Preview";
import { Grid, makeStyles } from "@material-ui/core";
import Add from "./components/Add";
import Container from "./components/Container";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
    

const App = () => {
  const [files,setFiles] = useState([]);
  const onSuccess =(savedfiles)=>{
    setFiles(savedfiles)

  };
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  return (
    
    <div>
      <div>
        <ToastContainer/>
     </div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Container onSuccess={onSuccess}/>
        </Grid>
        
      </Grid>
      <Add />
      <Preview files={files}/>
    </div>
  );
};

export default App;