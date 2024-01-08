import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";
import React, { useState } from "react";

const Search = ({onSearchChange}) => {
    
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?countryIds=NO&namePrefix=${inputValue}`,
            geoApiOptions
          )
            .then((response) => response.json())
            .then((response) => {
              return {
                options: response.data.map((city) => {
                  return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                  };
                }),
              };
            });
        };
    

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData); 
    };
    
    
    
    return (
         <AsyncPaginate 
         placeholder="Search for norwegian city"
         debounceTimeout={500}
         value={search}
         onChange={handleOnChange}
         loadOptions={loadOptions}
         />
    )
}

export default Search;