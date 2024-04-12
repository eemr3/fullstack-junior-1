'use client';

import React from 'react';
import { useJobs } from '../../context/JobContext';
import { Input } from '../Input';
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
        <Input.Root className="flex items-center gap-2 text-white">
          <Input.InputCustom
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
            className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
          />
          <Input.Label htmlFor="level" text="Level" />
        </Input.Root>
        <Input.Root className="flex items-center gap-2 text-white">
          <Input.InputCustom
            id="ID"
            type="radio"
            name="ID"
            value="ID"
            checked={selectTypeSearch === 'ID'}
            onChange={() => {
              setSearchForId('1');
              setSearchForLevel('');
              setSelectTypeSearch('ID');
            }}
            className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
          />
          <Input.Label htmlFor="ID" text="ID" />
        </Input.Root>
      </div>
      <div className="flex gap-2 mb-10">
        {selectTypeSearch === 'level' ? (
          <Input.Root>
            <Input.InputCustom
              id="search"
              type="text"
              name="search"
              placeholder="E.g., Junior"
              value={searchForLevel}
              onChange={(e) => setSearchForLevel(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Input.Root>
        ) : (
          <Input.Root>
            <Input.InputCustom
              id="searchForId"
              type="number"
              name="searchForId"
              min={1}
              value={searchForId}
              onChange={(e) => setSearchForId(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Input.Root>
        )}
        <button onClick={handleSearch}>
          <Lupa className="fill-white" />
        </button>
      </div>
    </div>
  );
}
