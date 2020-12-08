import * as React from 'react'
import Dropdown from './components/Dropdown/Dropdown'
import Input from './components/Input/Input'
import DatePicker from './components/Datepicker/DatePicker'
// import styles from './styles.module.css'

interface SearchFilterGroupProps {
  name: string
  label?: string
  placeholder?: string
  type: 'dropdown' | 'date' | 'date-range' | 'money'
  config: any
}
const SearchFilterGroup = ({ type, ...props }: SearchFilterGroupProps) => {
  const elementFactory = (type: string, config: any) => {
    switch (type) {
      case 'dropdown':
        return <Dropdown {...config} />
      case 'money':
        return <Input {...config} />
      case 'date-range':
      case 'date':
        return <DatePicker id={name} type={type} {...config} />
      default:
        return null
    }
  }

  const component = elementFactory(type, props.config)
  return component
}

export default SearchFilterGroup
