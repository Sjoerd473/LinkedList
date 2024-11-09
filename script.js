class LinkedList {
  constructor(next = null) {
    this.next = next;
  }

  

  prepend(value) {
    if (this.next === null){
        this.next = new Node(value);
    } else{
        let oldHead = this.next;
        let newHead = new Node(value);
        newHead.next = oldHead;
        this.next = newHead;
    }
    
  }
  append(value) {
    let node = this.next
    if (node === null){
        node = new Node(value);
    } if (node){
        while (node.next){
            node = node.next
        
    }
  }
   node.next = new Node(value);
}
  size() {
    let count = 0
    let node = this.next;
    while(node){
        count++
        node = node.next
    }
    return count;
  }
  head() {
    return this.next;
  }
  tail() {}
  at(index) {}
  pop() {}
  contains() {}
  find() {}
  toString() {}

  insertAt(value, index) {}
  removeAt(index) {}
}

class Node {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

let one = new LinkedList;
one.prepend('one')
one.prepend('two')
one.prepend('three')
