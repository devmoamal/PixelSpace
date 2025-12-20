import { useState } from "react";
import { useExport } from "@/hooks/useExport";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import usePixelGridStore from "@/stores/PixelGridStore";
import { DEFAULT_FILE_NAME } from "@/constants";

type GridToPhotoProps = {
  isOpen: boolean;
  onClose: () => void;
};

function GridToPhoto({ isOpen, onClose }: GridToPhotoProps) {
  const [filename, setFilename] = useState(DEFAULT_FILE_NAME);
  const [scale, setScale] = useState(1);
  const { exportToImage } = useExport();
  const { grid } = usePixelGridStore();

  const handleExport = () => {
    exportToImage(grid, `${filename}.png`, scale);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="bg-white p-6 shadow-lg max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Export Pixel Art</h2>
          <button
            onClick={onClose}
            className="items-center px-1 hover:bg-gray-300"
          >
            <p className="text-2xl">X</p>
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="filename"
              className="block text-sm font-medium mb-2"
            >
              Filename
            </label>
            <Input
              id="filename"
              type="text"
              value={filename}
              onChange={setFilename}
              placeholder="Enter filename"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="scale" className="block text-sm font-medium mb-2">
              Scale Factor
            </label>
            <Input
              id="scale"
              type="number"
              value={scale.toString()}
              onChange={(value) => setScale(Number(value) || 1)}
              placeholder="1"
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              Final size: {(grid[0]?.length || 0) * scale} x{" "}
              {grid.length * scale} pixels
            </p>
          </div>

          <div className="text-sm text-gray-600">
            <p>
              Original Grid: {grid[0]?.length || 0} x {grid.length}
            </p>
            <p>Format: PNG</p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={onClose} className="py-2 flex-1 hover:bg-gray-300">
              Cancel
            </Button>
            <Button
              onClick={handleExport}
              className="py-2 flex-1 hover:bg-gray-300"
            >
              Export
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridToPhoto;
