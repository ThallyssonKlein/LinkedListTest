const LinkedList = require('./LinkedList');
const Node = require('./Node');

describe('test_insert_first_node_to_tail', function(){
    let linkedList = new LinkedList();
    linkedList.append_node_to_tail(new Node('tail'));
    it('should return tail', function(){
        expect(linkedList.getTail()).toBe('tail');
    });
});

describe('test_insert_first_node_to_head', function(){
    let linkedList = new LinkedList();
    linkedList.append_node_to_head(new Node('head'));
    it('should return head', function(){
        expect(linkedList.getHead()).toBe('head');
    });
});

describe('test_insert_two_nodes_to_head', function(){
    let linkedList = new LinkedList();
    linkedList.append_node_to_head(new Node('head2'));
    linkedList.append_node_to_head(new Node('head1'));
    it('should return head1', function(){
        expect(linkedList.getHead()).toBe('head1');
    });
});

describe('test_insert_two_nodes_to_tail', function(){
    let linkedList = new LinkedList();
    linkedList.append_node_to_tail(new Node('tail2'));
    linkedList.append_node_to_tail(new Node('tail1'));
    it('should return tail1', function(){
        expect(linkedList.getTail()).toBe('tail1');
    });
});

describe('test_insert_nodes_to_head_and_tail', function(){
    let linkedList = new LinkedList();
    linkedList.append_node_to_head(new Node('head'));
    linkedList.append_node_to_tail(new Node('tail'));
    it('should return head', function(){
        expect(linkedList.getHead()).toBe('head');
    });
    it('should return tail', function(){
        expect(linkedList.getTail()).toBe('tail');
    });
});

describe('test_is_empty_with_empty_linked_list', function(){
    let linkedList = new LinkedList();
    it('should be empty', function(){
        expect(linkedList.isEmpty()).toBe(false);
    });
});

describe('test_is_empty_with_two_nodes', function(){
    let linkedList = new LinkedList();
    linkedList.append_node_to_head(new Node('head'));
    linkedList.append_node_to_tail(new Node('tail'));
    it('should not be empty', function(){
        expect(linkedList.isEmpty()).toBe(true);
    });
});