class Node(data) {
  this.data = data
  this.left = null
  this.right = null
}

class Tree() {
  constructor(){
    this.root = "Hi! I'm a root"
  }  
}

Tree.prototype.add = function() {
  console.log(this.root)
  this.left = "Hi! I'm a left child."
  this.right = "Hi! I'm a right child."
  console.log(this.left)
  console.log(this.right)
}

var tree = new Tree()
tree.add()
