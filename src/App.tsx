import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container sx={{ height: "100svh" }}>
      <Box sx={{ textAlign: "center", bgcolor: "azure" }}>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h2">Subtitle</Typography>
      </Box>
    </Container>
  );
}

export default App;
