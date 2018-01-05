import React from 'react'
import PropTypes from 'prop-types'
import { loadApps } from 'utils/ApiClient'
import { Button, Label, Container, Grid, Card } from 'semantic-ui-react'

class Apps extends React.Component {
  state = { apps: null }
  componentWillMount() {
    loadApps()
      .then(apps => {
        this.setState({ apps })
      })
      .catch(error => {
        // TODO add notification
        this.setState({ apps: [] })
      })
  }
  cardOnClick(_id) {
    this.props.history.push('/apps/' + _id + '/details')
  }

  render() {
    const { apps } = this.state
    if (!apps) {
      return <div>NO APP FOUND</div>
    }
    return (
      <Container fluid={true}>
        <Grid divided="vertically">
          <Grid.Row columns={4}>
            {apps.map(app => {
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

Apps.propTypes = {
  apps: PropTypes.array,
}

export default Apps
