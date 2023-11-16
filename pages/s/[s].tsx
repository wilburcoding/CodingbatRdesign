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
import {CardActionArea}from "@mui/material"
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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
const sections = [
  {
    "name":"Warmup-1",
    "lang":"Python",
    "description":"Simple warmup problems to get started, no loops (solutions available)",
    "progress":0.87
  },
  {
    "name":"Warmup-1",
    "lang":"Java",
    "description":"Simple warmup problems to get started, no loops (solutions available)",
    "progress":0.52
  },
  {
    "name":"String-1",
    "lang":"Python",
    "description":"Basic python string problems -- no loops",
    "progress":0.08
  },
  {
    "name":"String-1",
    "lang":"Java",
    "description":"Basic string problems -- no loops",
    "progress":0.36
  },
  {
    "name":"Logic-1",
    "lang":"Java",
    "description":"Basic boolean logic puzzles -- if else && || !",
    "progress":0.17
  },
  {
    "name":"Logic-1",
    "lang":"Python",
    "description":"Basic boolean logic puzzles -- if else && || !",
    "progress":0.62
  },
  {
    "name":"String-2",
    "lang":"Java",
    "description":"Medium string problems -- 1 loop.",
    "progress":0.52
  },
  {
    "name":"String-2",
    "lang":"Python",
    "description":"Medium python string problems -- 1 loop.",
    "progress":0.95
  },
  {
    "name":"Array-2",
    "lang":"Java",
    "description":"Medium array problems -- 1 loop",
    "progress":1.00
  },
  {
    "name":"AP-1",
    "lang":"Java",
    "description":"AP CS medium problems",
    "progress":0.50  
  },
  {
    "name":"Recursion-2",
    "lang":"Java",
    "description":"Harder recursion problems",
    "progress":0.61
  },
  {
    "name":"Warmup-2",
    "lang":"Java",
    "description":"Medium warmup string/array loops (solutions available)",
    "progress":0.71
  },
  {
    "name":"Warmup-2",
    "lang":"Python",
    "description":"Medium warmup string/array loops (solutions available)",
    "progress":0.71
  },
  {
    "name":"List-1",
    "lang":"Python",
    "description":"Basic python list problems -- no loops.",
    "progress":0.06
  },
  {
    "name":"Array-1",
    "lang":"Java",
    "description":"Basic array problems -- no loops.",
    "progress":0.06
  },
  {
    "name":"Logic-2",
    "lang":"Java",
    "description":"Medium boolean logic puzzles -- if else && || !",
    "progress":0.25
  },
  {
    "name":"Logic-2",
    "lang":"Python",
    "description":"Medium boolean logic puzzles -- if else && || !",
    "progress":0.25
  },
  {
    "name":"String-3",
    "lang":"Java",
    "description":"Harder String problems -- 2 loops",
    "progress":0.87
  },
  {
    "name":"List-2",
    "lang":"Python",
    "description":"Medium python list problems -- 1 loop.",
    "progress":0.57
  },
  {
    "name":"Array-3",
    "lang":"Java",
    "description":"Harder array problems -- 2 loops, more complex logic",
    "progress":0.37
  },
  {
    "name":"Recursion-1",
    "lang":"Java",
    "description":"Basic recursion problems",
    "progress":0.1
  },
  {
    "name":"Map-1",
    "lang":"Java",
    "description":"Basic Map get()/put(), no loops",
    "progress":0.82
  },
  {
    "name":"Map-2",
    "lang":"Java",
    "description":"Maps with bulk data and loops",
    "progress":0.72
  },
  {
    "name":"Functional-1",
    "lang":"Java",
    "description":"Functional mapping operations on lists with lambdas",
    "progress":0.95
  },
  {
    "name":"Functional-2",
    "lang":"Java",
    "description":"Functional filtering and mapping operations on lists with lambdas",
    "progress":0.25
  }
]
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function Page() {
  const router = useRouter()
  let n:string = router.query.s
  let d = sections.map((e) => e.name)
  let section = null;
  let filtered = sections.filter((e) => String(e.name + "-" + e.lang) == n);
  if (filtered.length > 0) {
    section = filtered[0]
  }
  const fCheck = () => {
    section = null;
    filtered = sections.filter((e) => String(e.name + "-" + e.lang) == n);
    if (filtered.length > 0) {
      section = filtered[0]
    }
    return section != null
    
  }
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
              marginRight:5
            }}
            >
            <Box component="span" fontWeight='fontWeightBold'>
              CodingBat Redesign
            </Box>
          </Typography>
          <Button color="inherit" onClick={() => handleClick("/")} color="inherit">Problems</Button>

          <Button color="inherit" sx={{marginLeft:"10px"}}>Account</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{padding:"10px", width:"100%"}}>
        <Box sx={{display:'flex', width:"100%"}}>
          {fCheck()? (
            <Card variant="outlined" sx={{m:2, width:"100%"}}>
                <CardContent>
                  <Stack direction="row" spacing={1}>
                    <Typography variant="h4" component="div">
                      {section.name}
                    </Typography>        
                    <Chip label={section.lang} color="primary" variant="outlined" />
                  </Stack>
      
      
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {section.description}
                  </Typography>
                  <LinearProgressWithLabel variant="determinate" value={section.progress * 100} />
                  <Stack direction="row" spacing={1}>

                  <Card sx={{m:2,width:"45%"}}>
                    <CardActionArea sx={{padding:2}}>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="h6" m={0} component="div">
                          {"Problem 1"}
                        </Typography>        
                        <Chip label={"Completed"} m={0} color="success" variant="outlined" />
                      </Stack>
                      <Typography sx={{ mt:1.5 }} color="text.secondary">
                        {"Make a Code Club Project :)"}
                      </Typography>
                    </CardActionArea>
                  </Card>
                  <Card sx={{m:2,width:"45%"}}>
                      <CardActionArea sx={{padding:2}}>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="h6" m={0} component="div">
                          {"Problem 2"}
                        </Typography>        
                        <Chip label={"In Progress"} m={0} color="warning" variant="outlined" />
                      </Stack>
                      <Typography sx={{ mt:1.5 }} color="text.secondary">
                        {"Present your amazing code club project in the next meeting."}
                      </Typography>
                    </CardActionArea>
                  </Card>
                    </Stack>
                  <Stack direction="row" spacing={1} sx={{mt:2}}>

                  <Card sx={{m:2,width:"45%"}}>
                    <CardActionArea sx={{padding:2}}>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="h6" m={0} component="div">
                          {"Problem 3"}
                        </Typography>        
                        <Chip label={"Not Started"} m={0} color="primary" variant="outlined" />
                      </Stack>
                      <Typography sx={{ mt:1.5 }} color="text.secondary">
                        {"Pretend Hunter isn't playing Geoguessr right now"}
                      </Typography>
                    </CardActionArea>
                  </Card>
                  <Card sx={{m:2,width:"45%"}}>
                      <CardActionArea sx={{padding:2}}>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="h6" m={0} component="div">
                          {"Problem 4"}
                        </Typography>        
                        <Chip label={"In Progress"} m={0} color="warning" variant="outlined" />
                      </Stack>
                      <Typography sx={{ mt:1.5 }} color="text.secondary">
                        {"Pay attention in class and don't play any games. "}
                      </Typography>
                    </CardActionArea>
                  </Card>
                    </Stack>
      
                </CardContent>

      
            </Card>

          ) : (
            <Card variant="outlined" sx={{m:2, width:"100%"}}>
              <CardContent>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {"Section not found"}
                </Typography>

              </CardContent>
            
            </Card>
          )}
        </Box>
      </Container>
  
      </Box>
    
    )

    
}