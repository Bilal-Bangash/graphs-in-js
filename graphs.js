const vertices = ['A', 'B', 'C', 'D', 'E']
const edges = [
  ['A', 'B'],
  ['A', 'D'],
  ['B', 'C'],
  ['C', 'D'],
  ['C', 'E'],
  ['D', 'E'],
]

// Find Adjacent Nodes

const findAdjacentNodes = (node) => {
  // loop through edges array
  // is my node in it
  // If yes, push the node in pair, into adjacentNodes array
  // If no, keep looping
  const adjacentNodes = []
  for (let edge of edges) {
    // edge=['A','B']
    // check if node exists in the edge get the index
    const nodeIndex = edge.indexOf(node)
    // if it exists
    if (nodeIndex > -1) {
      adjacentNodes.push(nodeIndex === 0 ? edge[1] : edge[0])
    }
  }
  return adjacentNodes
}

console.log('My Adjacent Nodes', findAdjacentNodes('C'))
