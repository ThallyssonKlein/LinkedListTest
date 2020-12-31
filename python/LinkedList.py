class Node():
    def __init__(self, value = None):
        self.value = value
        self.next = None
        self.previous = None

class LinkedList():
    def __init__(self, head = None):
        self.head = head

    def append_node_to_tail(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current.next.previous = current
                current = current.next                    
            current.next = new_element
        else:
            self.head = new_element
    
    def append_node_to_head(self, new_element):
        current = new_element
        current.next = self.head
        self.head = current
        
    def tail(self):
        current = self.head
        while current.next:
            current = current.next
        return current
    
    def is_empty(self):
        if self.head:
            return False
        else:
            return True