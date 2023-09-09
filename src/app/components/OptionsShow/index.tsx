/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import CloseIcon from '@/app/components/Icon/CloseIcon';
import { columData } from '@/app/container/columns';

export type TOptionShowProps = {
  options: Array<string>;
  setSelectedOptions: (options: Array<string>) => void;
};
const OptionShow = ({ options, setSelectedOptions }: TOptionShowProps) => {
  const optionsShow = useMemo(
    () => options.map((option) => columData.find(({ key }) => key === option)),
    [options]
  );

  const handleDeleteOption = (key: string) => {
    const newOption = options.filter((item) => item !== key);
    setSelectedOptions(newOption);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(options);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setSelectedOptions(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='optionsShow' key='optionsShow'>
        {(provided) => (
          <ul
            className='grid grid-cols-1 divide-y divide-[#DCDCDC]'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {optionsShow.map(({ title, key }: any, idx) => (
              <Draggable key={key} draggableId={key} index={idx}>
                {(provided) => (
                  <div
                    className='flex items-center justify-between p-2 last:!border-b last:border-[#DCDCDC]'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <span className='ml-8'>{title}</span>
                    <button onClick={() => handleDeleteOption(key)}>
                      <CloseIcon />
                    </button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default OptionShow;
