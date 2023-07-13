import React, { ChangeEvent } from 'react';
import { Button, Grid, TextField } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

interface SearchProps {
  handleChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
  text: string;
  list: any[]; // Replace 'any' with the appropriate type for your list items
  handleQuestion: () => void;
}

const SearchBox: React.FC<SearchProps> = ({ handleChangeText, text, list, handleQuestion }) => {

    return (
        <>
        <Grid
         container
         direction="column"
         alignItems="center"
     >
         <Grid item xs={12}
         >
             <TextField
                 id="filled-basic"
                 label="Filled"
                 variant="filled"
                 sx={{ 
                 height:"3rem",
                 width: "80ch",
             }}
             value={text}
             onChange={handleChangeText}
             />
         <Button         
         variant="contained"
         onClick={handleQuestion}
         sx={{ 
             height:"3rem",
             marginLeft: "8px",
             marginTop: "auto",
             marginBottom: "auto"
         }}
         {
             ...(list.length % 2 === 0 ? { disabled: true } : {})
         }
     
         >
             {<SearchOutlinedIcon/>}
             </Button>
         </Grid>
     </Grid>
        </>
    );
};

export default SearchBox;