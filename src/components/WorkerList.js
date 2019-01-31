import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

import {
  DiagramEngine,
  DefaultNodeFactory,
  DefaultLinkFactory,
  DiagramModel,
  DefaultNodeModel,
  LinkModel,
  DefaultPortModel,
  DiagramWidget,
} from 'storm-react-diagrams'

const colors = {
  main: 'rgb(0,192,255)',
  worker: 'rgb(192,255,0)',
}

const createNode = (
  model,
  { name, type, children = [] },
  { x = 10, y = 10 } = {}
) => {
  const node = new DefaultNodeModel(name, colors[type])
  node.x = x
  node.y = y
  model.addNode(node)

  children.forEach((bundle, index) => {
    const child = createNode(model, bundle, {
      x: x + 200,
      y: 100 * index + 10 + y,
    })
    const link = connect(node, child)
    model.addLink(link)
  })

  return node
}

const connect = (from, to) => {
  const portOut = from.addPort(
    new DefaultPortModel(false, `from-${from.name}-to-${to.name}`, to.name)
  )
  const portIn = to.addPort(
    new DefaultPortModel(true, `to-${to.name}-from-${from.name}`, from.name)
  )

  const link = new LinkModel()

  link.setSourcePort(portOut)
  link.setTargetPort(portIn)

  return link
}

export default class WorkerList extends Component {
  constructor(props) {
    super(props)
    this.engine = new DiagramEngine()
    this.engine.registerNodeFactory(new DefaultNodeFactory())
    this.engine.registerLinkFactory(new DefaultLinkFactory())
  }

  render() {
    const { bundles } = this.props
    const model = new DiagramModel()
    bundles.forEach(bundle => {
      createNode(model, bundle)
    })
    this.engine.setDiagramModel(model)

    //6) render the diagram!
    return <DiagramWidget diagramEngine={this.engine} />
  }
}
