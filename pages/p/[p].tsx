import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import Collapse from '@mui/material/Collapse';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from "@mui/material"
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ReactAce from 'react-ace-editor'
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
export default function Page() {
  const router = useRouter()
  let n: string = router.query.p
  const handleClick = (href) => {
    router.push(href)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              marginRight: 5
            }}
          >
            <Box component="span" fontWeight='fontWeightBold'>
              CodingBat Redesign
            </Box>
          </Typography>
          <Button color="inherit" onClick={() => handleClick("/")} color="inherit">Problems</Button>

          <Button color="inherit" sx={{ marginLeft: "10px" }}>Account</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ padding: "10px", width: "100%" }}>
        <Box sx={{ display: 'flex', width: "100%" }}>

          <Card variant="outlined" sx={{ m: 2, width: "100%" }}>
            <CardContent>
              <Stack direction="row" spacing={1}>
                <Typography variant="h4" component="div">
                  {"Problem 1"}
                </Typography>
                <Chip label="Warmup-1" color="primary" variant="outlined" />
                <Chip label="Python" color="primary" variant="outlined" />
              </Stack>
              <Typography sx={{ mb: 1.5, width:"80%" }} color="text.secondary">
                {"I need to write something in place of the description so I'm just going to write some random things over here. This problem has a very cool description that 100% describes if the description of this very important problem"}
              </Typography>
              <LinearProgressWithLabel variant="determinate" value={0.5 * 100} />
              <Stack direction="row" spacing={1}>
              <ReactAce
                mode="python"
                setReadOnly={false}
                className="code"
                showPrintMargin={false}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                sx={{width:"60%",height:"60%", border:"solid 2px black"}}
                defaultValue={"def test():"}
              />
                <Box sx={{m:5, padding:"5px"}}>
                  <Button variant="contained">Test Code</Button>
                  <Typography variant="h6" component="div">
                    {"Test Results"}
                  </Typography>
                  
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}