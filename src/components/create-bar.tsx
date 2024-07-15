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
    <div className="fixed bottom-8 left-16 rounded-xl border-4 border-gray-200 bg-white p-4 shadow-xl">
      <span className="absolute -top-5 left-0 cursor-default select-none rounded-full border-4 border-gray-200 bg-white px-4 py-1 text-xs font-bold">
        Add a new Node
      </span>
      <div className="flex h-full w-full gap-2">
        <button
          type="button"
          className="flex items-center justify-center rounded-lg px-4 py-2 text-sm hover:bg-gray-100"
          draggable
          onDragStart={(event) => {
            onDragStart(event, 'textNode');
          }}
        >
          Text Node
        </button>

        <button
          type="button"
          className="flex items-center justify-center rounded-lg px-4 text-sm hover:bg-gray-100"
          draggable
          onDragStart={(event) => {
            onDragStart(event, 'openAINode');
          }}
        >
          OpenAI Node
        </button>

        <button
          type="button"
          className="flex items-center justify-center rounded-lg px-4 text-sm hover:bg-gray-100"
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
