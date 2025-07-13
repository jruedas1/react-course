import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion({ items }){
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index) => {

        // functional state update
        // for handling delayed rendering
        // called a setter function
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === index) {
                return -1;
            } else {
                return index;
            }
        });

        // simple state update
        // if (expandedIndex === index)  {
        //     setExpandedIndex(-1);
        // } else {
        //     setExpandedIndex(index);
        // }
    }

    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;

        const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>

        return (
          <div key={item.id}>
              <div className={'flex justify-between p-3 bg-gray-50 items-center cursor-pointer'} onClick={() => handleClick(index)}>
                  {item.label}
                  {icon}
              </div>
              {isExpanded && <div className={'p-5'}>{item.content}</div>}
          </div>
        );
    });
    return <div className='border rounded divide-y overflow-hidden'>{renderedItems}</div>
}

export default Accordion;