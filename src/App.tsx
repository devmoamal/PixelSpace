import usePixelGrid from "./hooks/usePixelGrid";
import PixelGrid from "./components/PixelGrid";
import ToolsBar from "./components/ToolsBar";
import NavBar from "./components/NavBar";

function App() {
  const { grid } = usePixelGrid();

  return (
    <>
      <NavBar />
      <div className="flex justify-center mt-4">
        <PixelGrid grid={grid} />
      </div>
      <ToolsBar />
    </>
  );
}

export default App;
