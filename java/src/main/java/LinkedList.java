import lombok.Getter;

public class LinkedList {

    @Getter
    private Node head = null;

    public LinkedList(Node head) {
        this.head = head;
    }

    public void append_node_to_tail(Node new_element){
        Node current = this.head;
        if(this.head != null){
            while(current.getNext() != null){
                current.getNext().setPrevious(current);
                current = current.getNext();
            }
            current.setNext(new_element);
        }else{
            this.head = new_element;
        }
    }

    public void append_node_to_head(Node new_element){
        Node current = new_element;
        current.setNext(this.head);
        this.head = current;
    }

    public Node getTail() {
        Node current = this.head;
        while(current.getNext() != null){
            current = current.getNext();
        }
        return current;
    }

    public boolean isEmpty() {
        if(this.head != null){
            return false;
        }else{
            return true;
        }
    }
}