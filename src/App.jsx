import { Container, ThemeProvider } from "@mui/material";
import Filters from "./components/Filters/Filters";
import ProductList from "./components/ProductList/ProductList";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Filters />
        <ProductList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
