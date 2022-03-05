const vertices = ['A', 'B', 'C', 'D', 'E']
const verticesIndex = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
}
const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
]

// find Adjacencies

const findAdjacencies = (node) => {
  const adjacentNodes = []
  // get the row in the matrix
  for (let i = 0; i < vertices.length; i++) {
    nodeVertex = verticesIndex[node]
    adjacencyMatrix[nodeVertex][i] === 1 && adjacentNodes.push(vertices[i])
  }
  // loop through the row
  // if there is 1, push that node
  // otherwise skip
  return adjacentNodes
}

// isConnected

const isConnected = (node1, node2) => {
  node1Vertex = verticesIndex[node1] // C=2
  node2Vertex = verticesIndex[node2] // E=4
  return !!adjacencyMatrix[node1Vertex][node2Vertex] //adjacencyMatrix[2][4]
}
console.log('Find Adjacent Node: ', findAdjacencies('C'))
console.log('A, E Is Connected? : ',isConnected('A','E'));
console.log('A, B Is Connected? : ',isConnected('A','B'));
console.log('C, B Is Connected? : ',isConnected('C','B'));
console.log('B, D Is Connected? : ',isConnected('B','D'));
console.log('B, E Is Connected? : ',isConnected('B','E'));