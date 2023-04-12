import React from "react";

const Filter = () => {
    return(
        
        <div className="filter-container flex justify-end mb-8">
            <select id="filters" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="all">Filter</option>
        <option value="remote">Remote</option>
        <option value="onsite">Onsite</option>
        </select>
        </div>

    )
}

export default Filter;