import { Content } from "./article/Content";
import { ThemeProvider } from "./context/ThemeProvider";
function App() {
  return (
    <>
      <ThemeProvider>
        <Content />
      </ThemeProvider>
    </>
  );
}

export default App;
