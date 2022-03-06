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
  
    depthFirstSearch(start,end,visited){
      // keep traversing deeply
      // until you hit a leave node
      // or you are at end node
      if(!visited) visited=new Set()
      if(start.value===end.value){
          console.log('Found it');
          return
      }
      debugger
      console.log('Visiting Node ',start.value);
      visited.add(start)
      for(const adjacency of start.edgesList){
          debugger
          if(!visited.has(adjacency)){
              this.depthFirstSearch(adjacency,end,visited)
          }
      }
    }
  }
  const DFW = new Node('DFW')
  const JFK = new Node('JFK')
  const LAX = new Node('LAX')
  const HNL = new Node('HNL')
  const SAN = new Node('SAN')
  const EWR = new Node('EWR')
  const BOS = new Node('BOS')
  const MIA = new Node('MIA')
  const MCO = new Node('MCO')
  const PBI = new Node('PBI')
  const HKG = new Node('HKG')
  
  const graph = new Graph([DFW, JFK,LAX, LAX, HNL, SAN,EWR,BOS,MIA,MCO,PBI,HKG])
  
  DFW.connect(LAX)
  DFW.connect(JFK)
  LAX.connect(HNL)
  LAX.connect(EWR)
  LAX.connect(SAN)
  SAN.connect(HKG)
  JFK.connect(BOS)
  JFK.connect(MIA)
  MIA.connect(MCO)
  MCO.connect(PBI)
  MIA.connect(PBI)
  

  graph.depthFirstSearch(DFW,HKG,new Set())

//   for (let node of graph.nodes) {
//       console.log(`Node ${node.value}`);
//       for (let connectNode of node.edgesList) {
//           console.log(`Node ${node.value} is connected to ${connectNode.value}`);
//       }
//   }
  
//   console.log(DFW.isConnect(LAX))
  