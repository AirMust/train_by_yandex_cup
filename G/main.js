const tree = [
  {
    id: 'id_0',
    name: 'id_0',
    value: 10,
    children: [
      {
        id: 'id_0_0',
        name: 'id_0_0',
        value: 3,
        children: []
      },
      {
        id: 'id_0_1',
        name: 'id_0_1',
        value: 5,
        children: []
      },
      {
        id: 'id_0_2',
        name: 'id_0_2',
        value: 2,
        children: []
      }
    ]
  },
  {
    id: 'id_1',
    name: 'id_1',
    value: 15,
    children: [
      {
        id: 'id_1_0',
        name: 'id_1_0',
        value: 1,
        children: []
      },
      {
        id: 'id_1_1',
        name: 'id_1_1',
        value: 10,
        children: []
      },
      {
        id: 'id_1_2',
        name: 'id_1_2',
        value: 4,
        children: []
      }
    ]
  }
]

const getNodeBy = tree => {
  const getNodeByAttr = (node, nameAttr, valueAttr) => {
    if (node[nameAttr] === valueAttr) return node
    let value = node.children.find(nodeTemp => {
      return getNodeByAttr(nodeTemp, nameAttr, valueAttr)
    })
    if (value) return value
    return null
  }
  return (nameAttr, valueAttr) => {
    return (
      tree
        .map(node => {
          return getNodeByAttr(node, nameAttr, valueAttr)
        })
        .find(node => node) || null
    )
  }
}

const utilsTree = tree => {
  return { getNodeBy: getNodeBy(tree) }
}
const main = utilsTree(tree)

console.log(main.getNodeBy('value', 3))
