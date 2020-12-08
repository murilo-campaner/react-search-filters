import React, { useCallback, useState } from 'react'

import { SearchFilter, SearchFilterGroup } from 'react-search-filters'
import 'react-search-filters/dist/index.css'

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const handleRemoveOption = useCallback((option) => {
    setSelectedOptions((prev) => {
      const index = prev.findIndex((el: any) => el.value === option.value)
      if (index !== -1) {
        prev.splice(index, 1)
        return [...prev]
      }
      return prev
    })
  }, [])
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <SearchFilter onGroupChange={console.log}>
        <SearchFilterGroup
          name='Ativo'
          type='dropdown'
          config={{
            isMulti: true,
            closeMenuOnSelect: false,
            controlShouldRenderValue: false,
            isClearable: false,
            value: selectedOptions,
            options: [
              { label: 'EUR/USD', value: 'eurusd' },
              { label: 'EUR/GBP', value: 'eurgbp' }
            ],
            onChange: (values: any) => setSelectedOptions(values)
          }}
        />
        <SearchFilterGroup
          name='Data'
          type='date-range'
          config={{
            startDatePlaceholderText: 'Data inicial',
            endDatePlaceholderText: 'Data final'
          }}
        />
        <SearchFilterGroup name='Data2' type='date' config={{}} />
        <SearchFilterGroup name='Operação' type='dropdown' config={{}} />
        <SearchFilterGroup name='Valor' type='money' config={{}} />
      </SearchFilter>

      <div>
        {selectedOptions.map((option: any) => {
          return (
            <div key={option.value}>
              <span>{option.label}</span>
              <button onClick={() => handleRemoveOption(option)}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
