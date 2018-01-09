import React from 'react'
import PropTypes from 'prop-types'
import { loadProjects } from 'utils/ApiClient'
import { Button, Label, Container, Grid, Card } from 'semantic-ui-react'

class Projects extends React.Component {
  state = { projects: null }
  componentWillMount() {
    loadProjects()
      .then(projects => {
        this.setState({ projects })
      })
      .catch(error => {
        // TODO add notification
        this.setState({ projects: [] })
      })
  }
  cardOnClick = _id => {
    this.props.history.push('/projects/' + _id + '/details')
  }

  onCreateNewAppClick = () => {
    this.props.history.push('/newproject')
  }

  render() {
    const { projects } = this.state
    if (!projects) {
      return <div>NO APP FOUND</div>
    }
    return (
      <Container fluid={true}>
        <Button
          circular
          basic
          color="red"
          icon="plus"
          size="massive"
          floated="right"
          onClick={this.onCreateNewAppClick}
        />
        <Grid divided="vertically">
          <Grid.Row columns={4}>
            {projects.map(app => {
              const {
                _id,
                name,
                limit,
                version,
                versions,
                environment,
                methods,
              } = app
              return (
                <Grid.Column key={_id}>
                  <Card onClick={this.cardOnClick.bind(this, _id)}>
                    <Card.Content>
                      <Button basic icon="trash outline" floated="right" />
                      <Card.Header>{name}</Card.Header>
                      <Card.Meta>{version + ' - ' + limit}</Card.Meta>
                    </Card.Content>
                    <Card.Content>
                      <Card.Header>
                        <Label>API:</Label>
                      </Card.Header>
                      <Card.Description>
                        {methods.map(({ name }) => (
                          <Label basic key={name}>
                            {name}
                          </Label>
                        ))}
                      </Card.Description>
                      <Card.Description style={{ paddingTop: 20 }}>
                        Running on {environment}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      {versions.map(version => (
                        <Label key={version}>v{version}</Label>
                      ))}
                    </Card.Content>
                  </Card>
                </Grid.Column>
              )
            })}
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
}

export default Projects
