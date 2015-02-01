function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype.show = function() {
  return this.data;
};

function BTree() {
  this.root = null;
}

BTree.prototype.insert = function(data) {
  var node = new Node(data,null,null),
    found,
    current,
    previous;

  if(!this.root) {
    this.root = node;
  } else {
    current = this.root;
    while(!found){
      previous = current;
        if(data < current.data) {
          current = current.left;
          if(current == null) {
            previous.left = node;
            found = true;
          }
        } else {
          current = current.right;
          if(current == null) {
            previous.right = node;
            found = true;
          }
        }
    }
  }
}

var tree = new BTree();


tree.insert(73);
tree.insert(125);
tree.insert(126);
tree.insert(118);
tree.insert(1);
tree.insert(2);
tree.insert(3);

console.dir(tree);
