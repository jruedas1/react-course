import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/all";
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props){

    const { config, data } = props;

    const { sortBy, sortOrder, sortedData, setSortProperty } = useSort(data, config);

    const updatedConfig = config.map( column => {
       if (!column.sortValue) return column;
       return {
           ...column,
           header: () => (
                      <th className='cursor-pointer hover:bg-gray-100'
                          onClick={() => setSortProperty(column.label)}
                      >
                          <div className='flex items-center'>
                              {getIcons(column.label, sortBy, sortOrder)}
                              {column.label}
                          </div>
                      </th>
            )
        }
    });

    return <div>
                <Table {...props} data={sortedData} config={updatedConfig} />
            </div>
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    }
    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    } else if (sortOrder === 'asc'){
        return <div>
            <GoArrowSmallUp />
        </div>;
    } else if (sortOrder === 'desc'){
        return <div>
            <GoArrowSmallDown />
        </div>;
    }
}

export default SortableTable;