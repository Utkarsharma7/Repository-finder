import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Paper,Typography,TextField,Button,Grid,Select,MenuItem, CssBaseline} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './App.css'
import Info from './info'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const [order,setOrder] = useState('stars')
  const [val,setVal] = useState('desc')
  const [lang,setLang]=useState('')
  const [keyword,setKeyword]=useState('')
  const [data, setData] = useState([]);
  const [numRows, setNumRows] = useState(10); // default to 10 rows

  const handleSearch = async() => {
   const url = `https://api.github.com/search/repositories?q=${keyword}+language:${lang}&sort=${order}&order=${val}`
   if(!lang)
   {
    alert('Please enter a language')
   }
   else if(!keyword)
   {
    alert('Please enter a keyword')
   }
   else
   {
    console.log(url)
    const response = await axios.get(url)
    setData(response.data.items)
    console.log(response.data)
   }
  }
  return (  
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Typography variant="h3" style={{color: 'white', textAlign: 'center',marginTop:'15px'}}>Github Repository finder</Typography>
        <Grid container spacing={2} sx={{padding:2,borderRadius:5,border:'4px solid white',marginTop:5,justifyContent:'center',alignItems:'center',height:'200px'}}>
          <Grid item xs={12}>
            <TextField label="Enter keyword" variant="outlined" onChange={(e)=>setKeyword(e.target.value)} fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Enter Language" variant="outlined" onChange={(e)=>setLang(e.target.value)} fullWidth/>
          </Grid>

          <Grid item xs={12}>
            <Select label="Order by" value={val} onChange={(e)=>setVal(e.target.value)} variant="outlined" fullWidth>
              <MenuItem value="asc">Ascending</MenuItem>
              <MenuItem value="desc">Descending</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={12}>
              <Select label="Order by" value={order} onChange={(e)=>setOrder(e.target.value)} variant="outlined" fullWidth>
                <MenuItem value="stars">Stars</MenuItem>
                <MenuItem value="desc">Forks</MenuItem>
              </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField 
              type="number"
              value={numRows}
              onChange={e => {
                const val = parseInt(e.target.value, 10);
                if (!isNaN(val) && val > 0) setNumRows(val);
                else if (e.target.value === "") setNumRows("");
              }}
              fullWidth
            />
            <p style={{color: 'white'}}>Number of results</p>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
          </Grid>
        </Grid>
        <Info data={data} numRows={numRows}/>
      </div>
    </ThemeProvider>
  )
}

export default App
