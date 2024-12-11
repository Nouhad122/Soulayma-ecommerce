import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({setOpenedList, inpValue, setInpValue}) => {
  const searchRef = useRef(null);
  const [openedSearch, setOpenedSearch] = useState(false);

  const handleFocus = (scope) =>{
    if(scope === "scope1"){
        searchRef.current.focus();
    }
    else{
        setOpenedSearch(true);
        setOpenedList(false);
        searchRef.current.focus();
    }
  }
  return (
    <>
    <div className={`nav-input ${openedSearch ? '' : 'closed-search'}`}>
        <input
            placeholder='Search For Item...'
            value={inpValue} ref={searchRef}
            onChange={(e) => setInpValue(e.target.value)}
        />
        <FontAwesomeIcon className='scope' onClick={() => handleFocus("scope1")} icon={faMagnifyingGlass} />
        <FontAwesomeIcon onClick={() => setOpenedSearch(false)} className='x-search' icon={faXmark}/>
    </div>
    <FontAwesomeIcon className='scope2' onClick={() => handleFocus("scope2")} icon={faMagnifyingGlass} />
    </>
  )
}

export default SearchInput
