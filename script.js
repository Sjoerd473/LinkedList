class LinkedList {
  constructor(next = null) {
    this.next = next;
  }

  prepend(value) {
    if (this.next === null) {
      this.next = new Node(value);
    } else {
      let oldHead = this.next;
      let newHead = new Node(value);
      newHead.next = oldHead;
      this.next = newHead;
    }
  }
  append(value) {
    let node = this.next;
    if (node === null) {
      node = new Node(value);
    }
    if (node) {
      while (node.next) {
        node = node.next;
      }
    }
    node.next = new Node(value);
  }
  size() {
    let count = 0;
    let node = this.next;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  head() {
    return this.next;
  }
  tail() {
    let lastNode = this.next;

    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  at(index) {
    let i = 0;
    let node = this.next;
    if (node) {
      while (i !== index) {
        i++;
        node = node.next;
      }
      return node;
    }
  }
  pop() {
    let lastNode = this.next;

    if (lastNode) {
      while (lastNode.next.next) {
        lastNode = lastNode.next;
      }
    }
    lastNode.next = null;
  }
  contains(value) {
    let node = this.next;
    while (node) {
      node = node.next;
      if (node.name === value) {
        return true;
      } else if (node.next === null) {
        return false;
      }
    }
  }
  find(value) {
    let i = 0;
    let node = this.next;
    while (node) {
      node = node.next;
      i++;
      if (node.name === value) {
        return "Index number: " + i;
      } else if (node.next === null) {
        return false;
      }
    }
  }
  toString() {
    let node = this.next;
    let string = "";
    while (node) {
      if (node.next === null) {
        return string + `( ${node.name} ) -> null`;
      }
      string += `( ${node.name} ) -> `;
      node = node.next;
    }
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    }
    let node = this.next;
    let i = 0;
    while (node) {
      if (i === index - 1) {
        let newNode = new Node(value);
        newNode.next = node.next;
        node.next = newNode;
      }
      i++;
      node = node.next;
    }
  }
  removeAt(index) {
    if (index === 0) {
      this.next = this.next.next;
      return;
    }

    let node = this.next;
    let i = 0;

    while (node) {
      if (i === index - 1) {
        if (node.next.next === null) {
          node.next = null;
        } else {
          node.next = node.next.next;
          node.next.next = null;
        }
      }
      i++;
      node = node.next;
    }
  }
}

class Node {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

let one = new LinkedList();
one.prepend("one");
one.prepend("two");
one.prepend("three");
