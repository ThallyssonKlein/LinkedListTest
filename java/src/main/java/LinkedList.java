public class Customer {
    
    private Node head = null;

    public Customer(Node head) {
        this.head = head;
    }

    public void append_node_to_tail(String new_element){
        Node current = this.head;
        if(this.head != null){
            while(current.next != null){
                current.next.previous = current;
                current = current.next;
            }
            current.next = new_element;
        }
    }

    public Node tail() {
        Node current = this.head;
        while(current.next != null){
            current = current.next;
        }
        return current;
    }

    public Node head() {
        return this.head;
    }

    public boolean is_empty() {
        if(this.head != null){
            return false;
        }else{
            return true;
        }
    }
}
