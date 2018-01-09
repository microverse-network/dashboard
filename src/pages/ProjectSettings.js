import React from 'react'
import PropTypes from 'prop-types'
import { Label, Dropdown, Button, Input, Table } from 'semantic-ui-react'

class ProjectSettings extends React.Component {
  static propTypes = {
    projectName: PropTypes.string,
    repository: PropTypes.string,
    numberOfCalls: PropTypes.number,
    branches: PropTypes.array,
    selectedRepo: PropTypes.string,
  }

  state = {
    projectName: '',
    repository: '',
    numberOfCalls: 300,
    branchOptions: [],
    selectedBranch: null,
  }

  componentWillReceiveProps(nextProps) {
    const { selectedRepo, branches } = nextProps
    if (selectedRepo !== this.props.selectedRepo) {
      const branchOptions = branches.map(branch => {
        return { key: branch, value: branch, text: branch }
      })
      this.setState({
        repository: selectedRepo,
        branchOptions,
        selectedBranch: null,
      })
    }
  }

  onSelectedBranchChange = (e, { value: selectedBranch }) =>
    this.setState({ selectedBranch })

  onAppNameChange = event => {
    const { value } = event.target
    this.setState({ projectName: value })
  }

  onCreateAppClick = () => {}

  render() {
    const { branchOptions, selectedBranch, projectName } = this.state
    const { selectedRepo } = this.props
    const repositoryUrl = `https://github.com/${selectedRepo}`
    var mcyml = `${repositoryUrl}/blob`

    if (selectedBranch) {
      mcyml = `${mcyml}/${selectedBranch}/microverse.yml`
    } else {
      mcyml = `${mcyml}/<branch>/microverse.yml`
    }

    if (!selectedRepo) return null

    return (
      <div>
        <Label>Repository: </Label>
        <a target="blank" href={repositoryUrl} style={{ marginLeft: 5 }}>
          {repositoryUrl}
        </a>
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>Name</Table.Cell>
              <Table.Cell>
                <Input
                  placeholder={'Your project name'}
                  fluid
                  value={projectName}
                  onChange={this.onAppNameChange}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Number of Calls</Table.Cell>
              <Table.Cell>300</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Branches</Table.Cell>
              <Table.Cell>
                <Dropdown
                  options={branchOptions}
                  placeholder="Choose a Branch"
                  search
                  fluid
                  selection
                  value={selectedBranch}
                  onChange={this.onSelectedBranchChange}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Build Configuration</Table.Cell>
              <Table.Cell>microverse.yml</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Microverse directory</Table.Cell>
              <Table.Cell>{mcyml}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Button
          primary
          floated="right"
          onClick={this.onCreateAppClick}
          disabled={!projectName || !selectedBranch}>
          Create
        </Button>
      </div>
    )
  }
}

export default ProjectSettings
