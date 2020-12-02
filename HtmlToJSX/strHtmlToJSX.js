/**
 * Функция преобразовывает строку html в формат JSX (насколько я его понял)
 * @param {string} template
 *
 *  <button class="btn_icn btn_contained" onclick="getData('edit_data', 'btnBack')">
 *		<i class="material-icons ">
 *     < chevron_left /> -- важно чтоб любой текст был в такой обертке
 *    </i>
 * 	</button>
 *                          ||
 *                         \  /
 *                          \/
 *                {
 *                	"type": "button",
 *                	"props": {
 *                		"class": "btn_icn btn_contained",
 *                		"onclick": "getData('edit_data', 'btnBack')"
 *                	},
 *                	"children": [
 *                		{
 *                			"type": "i",
 *                			"props": {
 *                				"class": "material-icons "
 *                			},
 *                			"children": [
 *                				" chevron_left"
 *                			]
 *                		}
 *                	]
 *                }
 */
const htmlToJXS = template => {
  // Регулярка для поиска html элементов
  const EXP_TAG = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/gi
  // Регулярка для поиска атрибутов внутри html строки
  const EXP_ATR = /(\S+)=["]?((?:.(?!["]?\s+(?:\S+)=|[>"]))+.)["]?/gi
  // Ругулярка для поиска наименования тега
  const EXP_NAME_TAG = /<(\w+)[^>]*>/gi
  // Регуляка которая < aaa bbb /> => " aaa bbb"
  const EXP_TEXT = /<(.*)[^>]\/>/gi

  let res = template.match(EXP_TAG)

  /**
   * Функция создает условно уникальную строку c html тегом
   * Пример: <div> => <div>|#|1, < tete/> => < tete/>|#|1/>
   * @param {string} strNode
   * @param {int} index
   */
  const createNodeUniqStr = (strNode, index) =>
    `${strNode}|#|${index + (strNode[strNode.length - 2] === '/' ? '/>' : '')}`
  res = res.map(createNodeUniqStr)

  /**
   * Функция создает первичный вид ноды jxs
   * id - Идентификатор ноды,
   * parentId - Id родительской ноды
   * children - массив будующих потомков
   * @param {array} arr
   * @param {int} index
   */
  const createNodeTemp = (arr, index) => {
    return {
      id: arr[index],
      parentId: index === 0 ? null : arr[index - 1],
      children: []
    }
  }

  /**
   * Функция создает список первичных нод
   * @param {array} arr
   */
  const createNodeList = arr => {
    let nodeList = []
    let i = 0
    while (i < arr.length) {
      if (arr[i][1] === '/') {
        arr.splice(i - 1, 2)
        i -= 1
      } else if (arr[i][arr[i].length - 2] === '/') {
        nodeList.push(createNodeTemp(arr, i))
        arr.splice(i, 1)
      } else {
        nodeList.push(createNodeTemp(arr, i))
        i++
      }
    }
    return nodeList
  }

  /**
   * Функция преобразует список первичных нод в дерево
   * @param {array} list
   */
  const listToTree = list => {
    let roots = []
    let map = list.reduce((res, node, index) => {
      res[node.id] = index
      return res
    }, {})
    list.forEach((node, i) => {
      if (node.parentId !== null) {
        list[map[node.parentId]].children.push(node)
      } else {
        roots.push(node)
      }
    })
    return roots
  }

  const tempTree = listToTree(createNodeList(res))

  /**
   * Функция из ноды первичного вида преобразует в
   * ноду JSX, выделяются props и т.д.
   * @param {object} obj
   */
  const parseIdTempNode = obj => {
    const EXP_NAME_TAG = /<(\w+)[^>]*>/gi
    const EXP_TEXT = /<(.*)[^>]\/>/gi
    const EXP_MARKS = /[^"](.*)[^"]/gi

    str = obj.id.split('|#|')[0]
    let listAttr = str.match(EXP_ATR)
    let props =
      listAttr &&
      listAttr.reduce((props, attr) => {
        let [key, value] = attr.split('=')
        props[key] = value.match(EXP_MARKS)[0]
        return props
      }, {})
    let tagName = EXP_NAME_TAG.exec(str)
    if (tagName) return { type: tagName['1'], props: props, children: [] }
    let textName = EXP_TEXT.exec(str)
    return textName['1']
  }

  /**
   * Рекурсивный обход дерева
   * @param {object} nodeTemp
   */
  const decarateTempNode = nodeTemp => {
    let resultNode = parseIdTempNode(nodeTemp)
    if (nodeTemp.children.length) {
      nodeTemp.children.map(node => {
        resultNode.children.push(decarateTempNode(node))
      })
    }
    return resultNode
  }

  let treeNode = tempTree.map(obj => {
    return decarateTempNode(obj)
  })

  return treeNode
}
