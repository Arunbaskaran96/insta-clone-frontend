import { MantineProvider } from "@mantine/core"
import Home from "./Pages/Home/Home"


function App() {
  return (
    <div>
      <MantineProvider>
      <Home/>
      </MantineProvider>
    </div>
  )
}

export default App
