import React from 'react'
import PropTypes from 'prop-types'

import { fetchRepositories } from 'utils/ApiClient'
import { Segment, Header } from 'semantic-ui-react'
import { find } from 'lodash'

import ProjectSettings from './ProjectSettings'
import SelectRepository from './SelectRepository'

class NewProject extends React.Component {
  static propTypes = {
    repositories: PropTypes.array,
    selectedRepo: PropTypes.string,
  }

  state = {
    repositories: null,
    selectedRepo: null,
  }

  componentDidMount() {
    fetchRepositories().then(repositories => {
      this.setState({ repositories })
    })
  }

  handleChange = (e, { value }) => this.setState({ selectedRepo: value })

  renderContent() {
    const { selectedRepo, repositories } = this.state
    var branches = []
    if (selectedRepo) {
      branches = find(repositories, { value: selectedRepo }).branches
    }

    const accordionProps = [
      {
        title: 'Select a repository',
        index: 0,
        render: (
          <SelectRepository
            repositories={repositories}
            selectedRepo={selectedRepo}
            onChange={this.handleChange}
          />
        ),
      },
      {
        title: 'Project Settings',
        index: 1,
        render: (
          <ProjectSettings selectedRepo={selectedRepo} branches={branches} />
        ),
      },
    ]

    return (
      <div>
        {accordionProps.map(({ index, title, render }) => {
          return (
            <Segment vertical key={index}>
              <Header as="h4">{title}</Header>
              {render}
            </Segment>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        <Header as="h2">
          Create A Project
          <Header.Subheader>
            Pick your repository that has microverse.yml file in github. Then
            you can manage your project!!
          </Header.Subheader>
        </Header>
        {this.renderContent()}
      </div>
    )
  }
}

export default NewProject
