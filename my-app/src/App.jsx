
import { Button, Card, CardContent, Typography, TextField, Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './defalutTheme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h1" sx={{ fontSize: '24px' }} align="center" gutterBottom>
          Welcome to My App
        </Typography>

        <Card variant="outlined" sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="body1" gutterBottom>
              This is a simple example of a Material UI card component.
            </Typography>
            <TextField
              label="Enter something"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="secondary" fullWidth>
              Submit
            </Button>

          </CardContent>
        </Card>

        <Button variant="outlined" color="secondary" fullWidth>
          Secondary Button
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
