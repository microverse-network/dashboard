import React from 'react'
import PropTypes from 'prop-types'

import { Button, Label, Container, Grid, Card } from 'semantic-ui-react'

class Apps extends React.Component {
  cardOnClick(cardId) {
    this.props.history.push('/apps/details')
  }

  render() {
    const { apps } = this.props

    if (!apps.length) {
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

Apps.defaultProps = {
  apps: [
    {
      _id: 'BVqz9Vyv51amjVEzFwXecRa8k023',
      hash: '0x543AB43A345BCD4D',
      name: 'Main app',
      limit: '300 calls/min',
      version: '2.5',
      versions: [1.1, 1.2, 1.3, 2.1],
      meta: {
        created: new Date(),
      },
      labels: [],
      healthcheck: 'Running',
      environment: 'Chrome 63.0',
      region: 'Node',
      methods: [
        { name: 'Square', signature: 'Number, Function' },
        { name: 'Lookup', signature: 'String | Object, Function' },
      ],
    },
    {
      _id: 'BVqz9Vyv51amjVEzFwXecRa8k024',
      hash: '0x543AB43A345BCD4E',
      name: 'Main app2',
      limit: '300 calls/min',
      version: '2.3',
      versions: [1.1, 1.2, 1.3, 2.1],
      meta: {
        created: new Date(),
      },
      labels: [],
      healthcheck: 'Running',
      environment: 'Chrome 63.0',
      region: 'Node',
      methods: [
        { name: 'Square', signature: 'Number, Function' },
        { name: 'Lookup', signature: 'String | Object, Function' },
      ],
    },
  ],
}

export default Apps
