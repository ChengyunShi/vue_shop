function findComponentUpward (context, componentName) {
    let parent = context.$parent
    let name = parent.$options.name

    while (parent && (!name || [componentName].indexOf(name) < 0)) {
        parent = parent.$parent
        if (parent) {
            name = parent.$options.name
        }
    }
    return parent
}

function findComponentsUpward (context, componentName) {
    let parents = []
    const parent = context.$parent

    if (parent) {
        if (parent.$options.name === componentName) parents.push(parent)
        return parent.concat(findComponentsUpward(parent, componentName))
    } else {
        return []
    }
}

function findComponentDownward (context, componentName) {
    const childrenList = context.$children
    let children = null

    if (childrenList.length) {
        for (const child of childrenList) {
            const name = child.$options.name

            if (name === componentName) {
                children = child
                break
            } else {
                children = findComponentDownward(child, componentName)
                if (children) {
                    break
                }
            }
        }
    }
    return children
}

function findComponentsDownward (context, componentName) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) {
            components.push(child)
        }
        const foundChildren = findComponentsDownward(child, componentName)
        return components.concat(foundChildren)
    }, [])
}

function findBrothersComponents (context, componentName, exceptMe = true) {
    let res = context.$parent.$children.filter(item => {
        return item.$options.name === componentName
    })
    let index = res.findIndex(item => item._uid === context._uid)
    if (exceptMe) res.splice(index, 1)
    return res
}

export {
    findComponentUpward,
    findComponentsUpward,
    findComponentDownward,
    findComponentsDownward,
    findBrothersComponents
}
