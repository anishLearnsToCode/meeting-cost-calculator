import './App.css';
import ApplicationNavBar from "./components/ApplicationNavBar";
import Box from "@mui/material/Box";
import ApplicationDashboard from "./components/ApplicationDashboard";

function App() {
  return (
    <>
      <ApplicationNavBar />
      <Box>
          <ApplicationDashboard />
      </Box>
    </>
  );
}

export default App;
