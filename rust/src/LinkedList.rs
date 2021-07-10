pub use self::linkedlist::Node;

struct LinkedList {
    head: Node
}

impl LinkedList {
    fn new(head: Node) -> LinkedList {
        LinkedList { 
            head: head
        }
    }
}