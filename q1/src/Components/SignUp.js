
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import {useState} from 'react'
const SignUp = () => {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
  
    return ( 
    <>

    <Box style={{height:'500px',marginTop:'5px',display:'flex',justifyContent:'center',alignItems:'center'}}>
    
    <Box  style={{height:'300px',width:'400px',border:'1px solid black',marginTop:'30px'}}>
     <Box style={{display:'flex',justifyContent:'center', marginTop:'30px'}}>
      <Typography variant='h6'>Login Page! </Typography>

     </Box>
     

     <Box style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
      <TextField
      value={name}
      variant='standard'
      placeholder='Type Your UserName....'
      onChange={(e)=>setName(e.target.value)}
      />

     </Box>

     <Box style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
      <TextField
      value={password}
      variant='standard'
      placeholder='Type Your Password..'
      onChange={(e)=>setPassword(e.target.value)}
      />

     </Box>



     <Box style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
      
        <Button variant='contained' color='inherit'  style={{width:'65%'}} > Sign In </Button>
      

     </Box>
      <Box style={{display:'flex',justifyContent:'center',marginTop:'5px'}}>
      
       
      

     </Box>
    </Box>

</Box>
    
    </> );
}
 
export default SignUp;