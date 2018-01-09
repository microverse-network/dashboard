import React from 'react'
import { Dropdown } from 'semantic-ui-react'

class SelectRepository extends React.Component {
  render() {
    const { repositories, selectedRepo, onChange } = this.props

    if (!repositories) return <div>No Repository found!</div>

    return (
      <Dropdown
        options={repositories}
        placeholder="Choose a Repository"
        search
        fluid
        selection
        value={selectedRepo}
        onChange={onChange}
      />
    )
  }
}

export default SelectRepository
