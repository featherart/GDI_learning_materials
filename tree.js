function Node(value) {
  this.value = value
  this.left = null
  this.right = null
}

function BSTree() {
  this.root = null
}

BSTree.prototype.add = function(value) {
  let node = new Node(value)
  if (!this.root) this.root = node
  else {
    let current = this.root
    while(current) {
      if (node.value < current.value) {
        if (!current.left) {
          current.left = node
          return
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = node
          return
        }
        current = current.right
      }
    }
  }
}


let tree = new BSTree()
tree.add(7)
tree.add(9)
tree.add(4)
console.log(tree)
