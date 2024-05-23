class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.maxLength = 0;
  }
  append(data) {
    const newNode = new Node(data);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
    } else {
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    if (this.length >= this.maxLength) {
      this.head = this.head.next;
    } else {
      this.length++;
    }
  }

  contains(data) {
    if (this.length === 0) {
      return false;
    }

    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  print() {
    if (this.length === 0) {
      console.log("Circular linked list is empty.");
      return;
    }

    let current = this.head;
    let output = "";

    for (let i = 0; i < this.length; i++) {
      output += current.data + " -> ";
      current = current.next;
    }

    console.log(output.slice(0, -4)); // Remove the last " -> "
  }
}

const circularList = new CircularLinkedList();
circularList.maxLength = 5; // Set the maximum length

// generating a random number 
function generateRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

//export function
export function generatedNumber(advertisement) {
let index;
let maxAttempts = advertisement.length;

while (maxAttempts > 0) {
  index = generateRandomNumber(advertisement.length);

  if (!circularList.contains(index)) {
    circularList.append(index);
    return index;
  }

  maxAttempts--;
}

// If all attempts are exhausted and a unique index is not found,
// you can choose an alternative action, such as returning null or throwing an error.
// In this example, null is returned to indicate failure to generate a unique number.
return null;
}