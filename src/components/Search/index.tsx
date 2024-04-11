'use client';

import React from 'react';
import { useJobs } from '../../context/JobContext';

export default function Search() {
  const [selectTypeSearch, setSelectTypeSearch] = React.useState<string>('level');
  const { searchForLevel, setSearchForLevel, searchForId, setSearchForId, handleSearch } =
    useJobs();

  return (
    <div>
      <label htmlFor="search">Search Job for level</label>
      <div className="flex gap-3 my-3">
        <div className="flex gap-2 text-white">
          <input
            id="level"
            type="radio"
            name="level"
            value="level"
            checked={selectTypeSearch === 'level'}
            onChange={() => {
              setSearchForLevel('');
              setSelectTypeSearch('level');
            }}
          />
          <label htmlFor="level">Level</label>
        </div>
        <div className="flex gap-2 text-white">
          <input
            id="ID"
            type="radio"
            name="ID"
            value="ID"
            checked={selectTypeSearch === 'ID'}
            onChange={() => {
              setSearchForId('1');
              setSelectTypeSearch('ID');
            }}
          />
          <label htmlFor="ID">ID</label>
        </div>
      </div>
      {selectTypeSearch === 'level' ? (
        <input
          type="text"
          name="search"
          id="search"
          placeholder="E.g., Junior"
          value={searchForLevel}
          onChange={(e) => setSearchForLevel(e.target.value)}
        />
      ) : (
        <input
          type="number"
          name="search"
          id="search"
          defaultValue={1}
          min={1}
          value={searchForId}
          onChange={(e) => setSearchForLevel(e.target.value)}
        />
      )}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
