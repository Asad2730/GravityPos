import React from 'react';
import TableFields from "./tableFields";

  export default function Table({th,tr}) {
    return (
      <div className="px-4 sm:px-6 lg:px-8"> 
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <TableFields
                  tableheaders={th}
                  tableRows={tr}
                />
            </div>
          </div>
        </div>
      </div>
    )
  }
  