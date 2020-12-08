import React from 'react'

import Select, { Props as SelectProps } from 'react-select'

export interface DropdownProps extends SelectProps {}

export const customControlStyles = {
  borderRadius: 0,
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  minHeight: 35,
  outline: 0,
  position: 'relative',
  transition: 'all 100ms',
  boxSizing: 'border-box',
  backgroundColor: '#3B364A',
  borderWidth: '1px',
  borderStyle: 'solid',
  boxShadow: 'none',
  borderColor: 'rgba(255, 255, 255, .1)',
  ':hover': {
    boxShadow: 'none',
    borderColor: 'rgba(255, 255, 255, .1)'
  },
  minWidth: 175
}

const defaultStyles = {
  input: (provided: any) => ({
    ...provided,
    fontSize: 12,
    color: '#FFF'
  }),
  singleValue: () => ({
    fontSize: 12,
    color: '#FFF',
    fontWeight: 600
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  dropdownIndicator: (provided: any, state: any) => {
    return {
      ...provided,
      color: state.isFocused ? '#FFF' : 'rgba(255, 255, 255, .7)',
      ':hover': {
        color: '#FFF'
      }
    }
  },
  placeholder: () => ({
    color: 'rgba(255, 255, 255, .8)',
    fontSize: 12
  }),
  control: (provided: any) => ({
    ...provided,
    ...customControlStyles
  }),
  container: (provided: any) => ({
    ...provided,
    outline: 0,
    ':focus': {
      outline: 0
    }
  })
}

const Dropdown = ({
  customStyles = {},
  options = [],
  ...props
}: DropdownProps) => {
  return (
    <Select
      styles={{ ...defaultStyles, ...customStyles }}
      options={options}
      {...props}
    />
  )
}

export default Dropdown
