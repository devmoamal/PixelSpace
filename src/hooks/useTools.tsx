import useToolsStore from "@/stores/ToolsStore";

function useTools() {
  const tools = useToolsStore((state) => state.tools);
  const changeColor = useToolsStore((state) => state.changeColor);
  const changePaintingStatus = useToolsStore(
    (state) => state.changePaintingStatus
  );
  const changeTool = useToolsStore((state) => state.changeTool);

  return { tools, changeColor, changePaintingStatus, changeTool };
}

export default useTools;
