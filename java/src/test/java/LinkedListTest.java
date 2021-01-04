import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class LinkedListTest {

    private LinkedList linkedList;

    @Before
    public void setUp() throws Exception {
        this.linkedList = new LinkedList(null);
    }

    @Test
    public void test_insert_first_node_to_tail(){
        this.linkedList.append_node_to_tail(new Node("tail"));
        assertEquals("tail", this.linkedList.getTail().getValue());
    }

    @Test
    public void test_insert_first_node_to_head(){
        this.linkedList.append_node_to_head(new Node("head"));
        assertEquals("head", this.linkedList.getHead().getValue());
    }

    @Test
    public void test_insert_two_nodes_to_head(){
        this.linkedList.append_node_to_head(new Node("head2"));
        this.linkedList.append_node_to_head(new Node("head1"));
        assertEquals("head1", this.linkedList.getHead().getValue());
    }

    @Test
    public void test_insert_two_nodes_to_tail(){
        this.linkedList.append_node_to_tail(new Node("tail2"));
        this.linkedList.append_node_to_tail(new Node("tail1"));
        assertEquals("tail1", this.linkedList.getTail().getValue());
    }

    @Test
    public void test_insert_nodes_to_head_and_tail(){
        this.linkedList.append_node_to_head(new Node("head"));
        this.linkedList.append_node_to_tail(new Node("tail"));
        assertEquals("tail", this.linkedList.getTail().getValue());
        assertEquals("head", this.linkedList.getHead().getValue());
    }

    @Test
    public void test_is_empty_with_empty_linked_list(){
        assertTrue(this.linkedList.isEmpty());
    }

    @Test
    public void test_is_empty_with_two_nodes(){
        this.linkedList.append_node_to_head(new Node("element1"));
        this.linkedList.append_node_to_head(new Node("element2"));
        assertFalse(this.linkedList.isEmpty());
    }
}