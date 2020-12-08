import * as React from 'react'
import Dropdown, { customControlStyles } from './components/Dropdown/Dropdown'
import SearchFilterGroup from './SearchFilterGroup'

import styles from './styles.module.css'

interface SearchFilterProps {
  children: JSX.Element[]
  onGroupChange?: (groupName: string) => any
}
const SearchFilter = ({
  children,
  onGroupChange = () => {}
}: SearchFilterProps) => {
  const childs = React.Children.map(children, (child: JSX.Element) => {
    return child.type.name === SearchFilterGroup.name ? child : null
  }).filter((el) => el !== null)

  const handleGroupChange = React.useCallback((group: any) => {
    setSelectedGroup(group)
    onGroupChange(group)
  }, [])

  const getGroupOptions = () =>
    childs.map(({ props: { label, name } }) => ({
      label: label || name,
      value: name
    }))

  const optionsGroupList = React.useMemo(getGroupOptions, [getGroupOptions])

  const firstGroup = optionsGroupList.find((el) => el !== undefined)
  const [selectedGroup, setSelectedGroup] = React.useState(firstGroup) as any

  return (
    <div className={styles.searchFilterWrapper}>
      <Dropdown
        options={optionsGroupList}
        onChange={handleGroupChange}
        value={selectedGroup}
        customStyles={{
          control: (provided: any) => ({
            ...provided,
            ...customControlStyles,
            backgroundColor: '#775C9D',
            minWidth: 120
          })
        }}
      />
      <div>{childs.filter((el) => el.props.name === selectedGroup.value)}</div>
    </div>
  )
}

export default SearchFilter
