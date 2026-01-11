import React from "react";
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function PasswordInput({ errors, control, name = "password" ,label="Password" }) {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    const { t } = useTranslation();

    return (

        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <FormControl sx={{  }} fullWidth variant="outlined" error={!!errors[name]}>
                    <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                    <OutlinedInput
                        value={field.value ?? ""} 
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        {...field}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label={label}
                    />
                    {errors[name] && (
                        <FormHelperText>
                            {errors[name]?t(errors[name].message):""}
                        </FormHelperText>
                    )}

                </FormControl>
            )}
        />


    )
}
