module.exports = class LinkedList{

    constructor(head = null){
        this.head = head;
    }

    append_node_to_tail = function(new_element){
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

    append_node_to_head = function(new_element){
        let current = new_element;
        current.next = this.head;
        this.head = current;
    }

    getTail = function(){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current.value;
    }

    getHead = function(){
        return this.head.value;
    }

    isEmpty = function(){
        if(this.head){
            return true;
        }else{
            return false;
        }
    }
}