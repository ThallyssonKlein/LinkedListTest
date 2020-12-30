class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}
module.exports = function LinkedList(head = null){
    this.head = head;

    this.append_node_to_tail = function(new_element){
        let current = this.head;
        if(this.head){
            while(current.next){
                next.previous = current;
                current = current.next;
            }
            current.next = new_element;
        }else{
            this.head = new_element;
        }
    }

    this.append_node_to_head = function(new_element){
        let current = new_element;
        current.next = this.head;
        this.head = current;
    }

    this.getTail = function(){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current;
    }

    this.getHead = function(){
        return this.head;
    }

    this.is_empty = function(){
        if(this.head){
            return true;
        }else{
            return false;
        }
    }
}