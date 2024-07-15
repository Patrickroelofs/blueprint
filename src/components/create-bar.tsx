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
    <div className="w-full flex justify-center">
      <div className="w-11/12 h-24 bg-white border-4 p-4 border-gray-200 shadow-xl rounded-xl fixed bottom-8">
        <div className="grid grid-cols-6 w-full h-full">
          <button
            type="button"
            className="hover:bg-gray-100 flex justify-center items-center rounded-lg"
            draggable
            onDragStart={(event) => {
              onDragStart(event, 'textNode');
            }}
          >
            Text Node
          </button>
        </div>
      </div>
    </div>
  );
}

export { CreateBar };
