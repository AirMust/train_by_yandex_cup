/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

let data = []
let nameFn = {
    select: 1,
    filter: 0
}

function query(collection) {
    data = collection
    let listFn = [].slice.call(arguments).slice(1)
    listFn.sort((a, b) => nameFn[a.name] - nameFn[b.name])
    listFn.map(fn => {

        if(fn.name === 'filter'){
            data = filterIn(fn.arg.property, fn.arg.values)['data']
        }
        else if (fn.name === 'select'){

            data = select(...fn.arg)['data']
        }
    })
    return data
}

/**
 * @params {String[]}
 */
function select() {
    nameAttrS = [].slice.call(arguments)
    let dataTemp = data.map(obj => {
        x = {}
        nameAttrS.forEach(nameAttr => {
            if(nameAttr in obj)
                x[nameAttr] = obj[nameAttr]
        })
        return x
    })
    return {name: 'select', data: dataTemp, arg: nameAttrS}
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn (property, values){
    let dataTemp = data.filter(obj => values.indexOf(obj[property]) > -1)
    return {name: 'filter', data: dataTemp, arg: {property: property, values: values}}
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
