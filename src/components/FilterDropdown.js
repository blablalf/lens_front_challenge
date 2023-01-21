import React from 'react';

import "./FilterDropdown.css";

const FilterDropdown = ({ options, onChange }) => {
    return (
        <div className="filter-dropdown">
            <label className="filter-label" htmlFor="sortCriteria">Sort by:</label>
            <select className="filter-select" id="sortCriteria" onChange={onChange}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterDropdown;
