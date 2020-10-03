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

  // INSERT FIRST NODE ************************************************ 
  // it doesn't matter how many nodes are in the list
  // the reason we are passing this.head is if there is already something in the head, we want to push that to the next.  
  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  // INSERT LAST NODE ************************************************ 
  insertLast(data) {
    let node = new Node(data);
    // initializing current
    let current;

    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      // it allows us to traverse the list.
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // insert at index ************************************************ 
  // it means inserting anywhere between index. We pass in two things, data and index(where we want to insert)
  insertAt(data, index) {

    // if index is greater than 0 and the size, we just return(we don't do anything). If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    // initialize node with the new data 
    const node = new Node(data)
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current //node before index
      count++;
      // we're making rooms for new node
      current = current.next; //node after the index
    }

    node.next = current; //take the node that we initialized above  and set the next value to the current. new node next should be whatever the value of current. 

    previous.next = node;

    this.size++; // we increase the size because we just added the node 
  
  }

  // get at index ************************************************ 
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }



  // remove at index ************************************************ 
  // clear list************************************************ 

  // print list data*********************************************************
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
// ll.printListData();
// THE REASON 300 is first is because it's the last insertfirst that we've called.  
// 300
// 200
// 100


ll.insertLast(400)




// ll.insertAt(500, 2) //I want to put the data(500) at index 2.
// ll.printListData();
// 300
// 200
// 500
// 100
// 400


// ll.insertAt(500, 0) //I want to put the data(500) at index 2.
// ll.printListData();
// 500
// 300
// 200
// 100
// 400


// ll.insertAt(500, 10) //index of 10 doesn't exist so when we run this, 500 is not just there. It doesn't get added. 
// ll.printListData();
// 300
// 200
// 100
// 400

// ll.getAt(2);
// 100 //it means that at index 2, the value is 100;

// ll.getAt(0);
// 300

// ll.getAt(10);
// we get nothing because at index of 10, there is no value;










