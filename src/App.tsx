import usePixelGrid from "./hooks/usePixelGrid";
import PixelGrid from "./components/PixelGrid";
import ToolsBar from "./components/ToolsBar";
import NavBar from "./components/NavBar";

function App() {
  const { grid } = usePixelGrid();

  return (
    <div className="font-pixel2">
      <NavBar />
      <div className="flex justify-center mt-4">
        <PixelGrid grid={grid} />
      </div>
      <ToolsBar />
    </div>
  );
}

export default App;
