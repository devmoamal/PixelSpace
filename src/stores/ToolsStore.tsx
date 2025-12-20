import type { PixelColor } from "@/types";
import { create } from "zustand";

type Tools = {
  isPainting: boolean;
  currentColor: PixelColor;
};

type ToolsStoreState = {
  tools: Tools;
  changeColor: (color: PixelColor) => void;
  changePaintingStatus: (isPainting: boolean) => void;
};

function changeColor(tools: Tools, color: PixelColor) {
  return { ...tools, currentColor: color };
}

function changePaintingStatus(tools: Tools, isPainting: boolean) {
  return { ...tools, isPainting: isPainting };
}

const useToolsStore = create<ToolsStoreState>((set) => ({
  tools: {
    isPainting: false,
    currentColor: "#000",
  },

  changeColor: (color) =>
    set((state) => ({ tools: changeColor(state.tools, color) })),

  changePaintingStatus: (isPainting) =>
    set((state) => ({ tools: changePaintingStatus(state.tools, isPainting) })),
}));

export default useToolsStore;
