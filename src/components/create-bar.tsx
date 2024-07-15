'use client';

function CreateBar(): JSX.Element {
  const onDragStart = (
    event: React.DragEvent<HTMLButtonElement>,
    nodeType: string,
  ): void => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="bg-white border-4 p-4 border-gray-200 shadow-xl rounded-xl fixed bottom-8 left-16">
      <span className="absolute -top-5 left-0 text-xs bg-white py-1 px-4 border-gray-200 border-4 rounded-full cursor-default select-none">
        Add a new Node
      </span>
      <div className="flex gap-2 w-full h-full">
        <button
          type="button"
          className="hover:bg-gray-100 flex justify-center items-center rounded-lg px-4 text-sm py-2"
          draggable
          onDragStart={(event) => {
            onDragStart(event, 'textNode');
          }}
        >
          Text Node
        </button>
        <button
          type="button"
          className="hover:bg-gray-100 flex justify-center items-center rounded-lg px-4 text-sm"
          draggable
          onDragStart={(event) => {
            onDragStart(event, 'outputNode');
          }}
        >
          Output Node
        </button>
      </div>
    </div>
  );
}

export { CreateBar };
