'use client';

import React from 'react';
import { useJobs } from '../../context/JobContext';
import { InputCustom } from '../Input';
import Lupa from '../Icons/Lupa';

export default function Search() {
  const [selectTypeSearch, setSelectTypeSearch] = React.useState<string>('level');
  const { searchForLevel, setSearchForLevel, searchForId, setSearchForId, handleSearch } =
    useJobs();

  return (
    <div>
      <label className="text-white" htmlFor="search">
        Search Job for:
      </label>
      <div className="flex gap-3 my-3">
        <InputCustom
          id="level"
          type="radio"
          name="level"
          value="level"
          checked={selectTypeSearch === 'level'}
          onChange={() => {
            setSearchForLevel('');
            setSearchForId('');
            setSelectTypeSearch('level');
          }}
          text="Level"
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
        />
        <InputCustom
          id="ID"
          type="radio"
          name="ID"
          value="ID"
          checked={selectTypeSearch === 'ID'}
          onChange={() => {
            setSearchForId('1');
            setSelectTypeSearch('ID');
          }}
          text="ID"
          className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <div className="flex gap-2 mb-10">
        {selectTypeSearch === 'level' ? (
          <InputCustom
            id="search"
            type="text"
            name="search"
            placeholder="E.g., Junior"
            value={searchForLevel}
            onChange={(e) => setSearchForLevel(e.target.value)}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        ) : (
          <InputCustom
            id="searchForId"
            type="number"
            name="searchForId"
            min={1}
            value={searchForId}
            onChange={(e) => setSearchForId(e.target.value)}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        )}
        <button onClick={handleSearch}>
          <Lupa className="fill-white" />
        </button>
      </div>
    </div>
  );
}