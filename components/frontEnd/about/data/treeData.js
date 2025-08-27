export const treeRootId = '1';

export const initialTree = {
  1: {
    id: '1',
    name: 'root',
    children: ['2', '3'],
    siblings: ['8'],
    spouses: ['10'],
  },
  2: { id: '2', name: 'child2' },
  3: {
    id: '3',
    name: 'child3',
    children: ['4', '5'],
    siblings: ['9'],
    spouses: ['6'],
  },
  4: { id: '4', name: 'grandChild4' },
  5: { id: '5', name: 'grandChild5' },
  6: { id: '6', name: 'spouse of child3', isSpouse: true },
  8: { id: '8', name: 'root sibling', isSibling: true },
  9: { id: '9', name: 'child3 sibling', isSibling: true },
  10: { id: '10', name: 'root spouse', isSpouse: true },
};

// Convert object tree to React Flow nodes & edges
export const convertTreeToFlowElements = (tree) => {
  const nodes = [];
  const edges = [];

  Object.values(tree).forEach((node) => {
    nodes.push({
      id: node.id,
      type: 'customNode',
      data: { name: node.name },
      position: { x: 0, y: 0 }, // will layout later
    });

    // Add child edges
    if (node.children) {
      node.children.forEach((childId) => {
        edges.push({
          id: `e${node.id}-${childId}`,
          source: node.id,
          target: childId,
          type: 'smoothstep',
        });
      });
    }

    // Add spouse edges (horizontal)
    if (node.spouses) {
      node.spouses.forEach((spouseId) => {
        edges.push({
          id: `e${node.id}-${spouseId}`,
          source: node.id,
          target: spouseId,
          type: 'straight',
          animated: true,
          style: { stroke: '#FF6B6B' },
        });
      });
    }

    // Add sibling edges (dotted)
    if (node.siblings) {
      node.siblings.forEach((siblingId) => {
        edges.push({
          id: `e${node.id}-${siblingId}`,
          source: node.id,
          target: siblingId,
          type: 'step',
          style: { strokeDasharray: '5,5', stroke: '#999' },
        });
      });
    }
  });

  return { nodes, edges };
};
