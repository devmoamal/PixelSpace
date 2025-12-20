import useToolsStore from "@/stores/ToolsStore";

function useTools() {
  const tools = useToolsStore((state) => state.tools);
  const changeColor = useToolsStore((state) => state.changeColor);
  const changePaintingStatus = useToolsStore(
    (state) => state.changePaintingStatus
  );
  return { tools, changeColor, changePaintingStatus };
}

export default useTools;
