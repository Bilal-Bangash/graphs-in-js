// graphWithAdjacencyList
class Node {
  constructor(value) {
    this.value = value
    this.edgesList = []
  }

  connect(node) {
    this.edgesList.push(node)
    node.edgesList.push(this)
  }
  getAdjacentNodes() {
    return this.edgesList.map((edge) => edge.value)
  }
  isConnect(node) {
    return this.edgesList.find((edge) => edge.value === node.value)
      ? true
      : false
  }
}
class Graph {
  constructor(nodes) {
    this.nodes = [...nodes]
  }

  addToGraph(node) {
    this.nodes.push(node)
  }
}
const nodeA = new Node('A')
const nodeB = new Node('B')
const nodeC = new Node('C')
const nodeD = new Node('D')
const nodeE = new Node('E')

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE])

nodeA.connect(nodeB)
nodeA.connect(nodeD)
nodeB.connect(nodeC)
nodeC.connect(nodeD)
nodeC.connect(nodeE)
nodeD.connect(nodeE)

for (let node of graph.nodes) {
    console.log(`Node ${node.value}`);
    for (let connectNode of node.edgesList) {
        console.log(`Node ${node.value} is connected to ${connectNode.value}`);
    }
}

console.log(nodeA.isConnect(nodeB))
console.log(nodeA.isConnect(nodeE))
