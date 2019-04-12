function updateChildren(vnode, newVnode) {
    var children = vnode.children || []
    var newChildren = newVnode.children || []

    children.forEach(function(childVnode, index) {
        if(childVnode.tag !== newChildren[index].tag) {
            replaceNode(childVnode, newChildren[index]);
        } else {
            updateChildren(childVnode, newChildren[index]);
        }
    })
}