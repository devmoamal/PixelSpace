import { DEFAULT_COLOR, DEFAULT_TOOL } from "@/constants";
import type { PixelColor, Util } from "@/types";
import { create } from "zustand";

type Tools = {
  currentTool: Util;
  isPainting: boolean;
  currentColor: PixelColor;
};

type ToolsStoreState = {
  tools: Tools;
  changeColor: (color: PixelColor) => void;
  changePaintingStatus: (isPainting: boolean) => void;
  changeTool: (tool: Util) => void;
};

function changeColor(tools: Tools, color: PixelColor) {
  return { ...tools, currentColor: color };
}

function changePaintingStatus(tools: Tools, isPainting: boolean) {
  return { ...tools, isPainting: isPainting };
}

function changeTool(tools: Tools, tool: Util) {
  return { ...tools, currentTool: tool };
}

const useToolsStore = create<ToolsStoreState>((set) => ({
  tools: {
    currentTool: DEFAULT_TOOL,
    isPainting: false,
    currentColor: DEFAULT_COLOR,
  },

  changeColor: (color) =>
    set((state) => ({ tools: changeColor(state.tools, color) })),

  changePaintingStatus: (isPainting) =>
    set((state) => ({ tools: changePaintingStatus(state.tools, isPainting) })),
  changeTool: (tool) =>
    set((state) => ({ tools: changeTool(state.tools, tool) })),
}));

export default useToolsStore;
