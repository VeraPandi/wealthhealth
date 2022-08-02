import React from "react";
import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

const Datepicker = ({ name, value, setValue, error, helpertext }) => {
   return value || !error ? (
      <Stack margin="16px 0">
         <DatePicker
            label={name}
            renderInput={(params) => (
               <TextField
                  sx={{
                     // Outline and label color
                     "& .MuiInputLabel-root.Mui-focused": {
                        color: "#000",
                     },
                     "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                           borderColor: "#93ad18",
                        },
                     },
                  }}
                  {...params}
               />
            )}
            value={value}
            onChange={(newValue) => setValue(newValue)}
         />
      </Stack>
   ) : (
      <Stack margin="16px 0">
         <DatePicker
            label={name}
            renderInput={(params) => (
               <TextField
                  sx={{
                     // Outline and label color
                     "& .MuiInputLabel-root.Mui-focused": {
                        color: "#000",
                     },
                     "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                           borderColor: "#93ad18",
                        },
                     },
                  }}
                  {...params}
                  error
                  helperText={helpertext}
               />
            )}
            value={value}
            onChange={(newValue) => setValue(newValue)}
         />
      </Stack>
   );
};

export default Datepicker;
