// linked list class
// read, add, remove and so on

// what is linked list?
// it's a linear data structure and elements are linked together using pointers. We have different nodes within linked list. 

// The first node is called the head. Each node has two things: it has the actual data and it has pointers/reference to next element in the linked list. 

// The very last node one has a tail and it references to null. And this is how you know it's end of the list. 

// Everything stems from the head.

// create specific node and have linked list class.

// before we do, here's a very simple example. 



// EXAMPLE STARTS HERE
// node 1 with data equals 100
// const n1 = {
//   data: 100
// }

// node 2 with data equals 200.
// const n2 = {
  // data: 200
// }

// HOW DO WE LINK n2(node 2) to n1?(add a reference from n1 to n2)
// 

// n1.next = n2 

// console.log(n1)
// we have a next property, which points to the next node, which has the data of 200. 
// { data: 100, next: { data: 200 } }

// This was a minimalist barebone example. 
// EXAMPLE ENDS HERE


// CLASS NODE and it will represent each individual node. Creating this node will instantiate the class. 

// Each node will take in two things, which are data and pointer(which is called next, and it is set to null by default because very last one references to null)

// We will take the data that's passed in and set it to the data property and same with the next. 
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// constructing node 
// const n1 = new Node(100);
// console.log(n1);
// Node { data: 100, next: null }
// this is just one single node. 

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node 
  // it doesn't matter how many nodes are in the list
  // the reason we are passing this.head is if there is already something in the head, we want to push that to the next.  
  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  // insert last node 
  // insert at index 
  // get at index 
  // remove at index 
  // clear list

  // print list data
  printListData() {
    // current represents the current node. We will loop through all the nodes and putting each piece of data. 
    let current = this.head; 
    
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }

}

// ll stands for linked list
const ll = new LinkedList();
ll.insertFirst(100)
// console.log(ll)
// LinkedList { head: Node { data: 100, next: null }, size: 0 }

ll.insertFirst(200)
// console.log(ll)
// NOW 200 is inserted first and 100 is pushed over. It's pushed over because we set next.head to the next value. 
// LinkedList {
//   head: Node { data: 200, next: Node { data: 100, next: null } },
//   size: 0
// }

ll.insertFirst(300)
ll.printListData();
// THE REASON 300 is first is because it's the last insert that we've called. 
// 300
// 200
// 100





