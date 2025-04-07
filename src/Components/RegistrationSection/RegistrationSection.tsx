import "./RegistrationSection.css";
import {
  Paper,
  Typography,
  Button,
  Box,
  Stack,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

function RegistrationSection() {
  return (
    <section className="registration-section">
      <Paper elevation={3}>
        <Box display={"flex"} height={"80vh"} width={"80vw"}>
          <RegistrationCardLeft />
          <RegistrationCardRight />
        </Box>
      </Paper>
    </section>
  );
}

function RegistrationCardLeft() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"2rem"}
      width={"45%"}
      bgcolor={"#42b0a5"}
    >
      <Typography variant="h2" textTransform={"capitalize"} color="white">
        welcome back!
      </Typography>
      <Typography
        variant="h5"
        maxWidth={"30rem"}
        textAlign={"center"}
        color="white"
      >
        To keep connected with us please login with your personal info
      </Typography>
      <Button
        variant="outlined"
        size="large"
        sx={{ color: "white", border: "1px solid white" }}
      >
        sign in
      </Button>
    </Box>
  );
}

function RegistrationCardRight() {
  return (
    <Box
      width="55%"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"2rem"}
    >
      <Typography variant="h2" textTransform="capitalize" color="#42b0a5">
        create account
      </Typography>
      <Stack direction="row" gap="1rem">
        <IconButton href="#" sx={{ border: "1px solid gray", color: "black" }}>
          <FaFacebookF />
        </IconButton>
        <IconButton href="#" sx={{ border: "1px solid gray", color: "black" }}>
          <FaGoogle />
        </IconButton>
        <IconButton href="#" sx={{ border: "1px solid gray", color: "black" }}>
          <FaLinkedinIn />
        </IconButton>
      </Stack>

      <Typography variant="h6" color="gray" textTransform="uppercase">
        Or use your email for registration
      </Typography>

      <Stack gap="1.5rem" width="60%">
        <TextField
          label="Name"
          variant="standard"
          sx={{
            "& .MuiInputBase-input": { fontSize: "1.8rem" },
            "& .MuiInputLabel-root": { fontSize: "1.8rem" },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{fontSize:"1.8rem"}}
                >
                  <FaUser />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Email"
          variant="standard"
          sx={{
            "& .MuiInputBase-input": { fontSize: "1.8rem" },
            "& .MuiInputLabel-root": { fontSize: "1.8rem" },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start" sx={{fontSize:"1.8rem"}}>
                  <MdEmail />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="standard"
          sx={{
            "& .MuiInputBase-input": { fontSize: "1.8rem" },
            "& .MuiInputLabel-root": { fontSize: "1.8rem" },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start" sx={{fontSize:"1.8rem"}}>
                  <TbLockPassword />
                </InputAdornment>
              ),
            },
          }}
        />
      </Stack>

      <Button
        variant="outlined"
        sx={{ color: "white", bgcolor:"#42b0a5", width:"60%",}}
      >
        sign up
      </Button>
    </Box>
  );
}

export default RegistrationSection;
