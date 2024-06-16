import { Box, Button, Container, Paper, Typography } from "@mui/material";

function App() {
  const data = ["Data 1", "Data 2", "Data 3", "Data 4"];

  return (
    <Container sx={{ height: "100svh" }}>
      <Box sx={{ textAlign: "center", bgcolor: "azure" }}>
        <Typography
          variant="h1"
          sx={{ my: 2, cursor: "pointer", "&:hover": { color: "primary.main" } }}
        >
          Hello World
        </Typography>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Subtitle
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
        {data.map((d) => (
          <>
            <Paper elevation={3} sx={{ px: 3, py: 2 }}>
              <Typography
                variant="h3"
                sx={{ color: "primary.main", cursor: "pointer", "&:hover": { color: "black" } }}
              >
                {d}
              </Typography>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus omnis excepturi illo
                repellat eaque quia aut accusamus obcaecati assumenda doloribus!
              </Typography>
              <Button variant="contained" sx={{ mt: 1 }}>
                Click Here
              </Button>
            </Paper>
          </>
        ))}
      </Box>
    </Container>
  );
}

export default App;
