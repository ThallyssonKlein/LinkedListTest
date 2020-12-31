import unittest
from LinkedList import LinkedList, Node

class TestLinkedList(unittest.TestCase):
    def setUp(self):
        self.linked_list = LinkedList()

    def test_insert_first_node_to_tail(self):
        self.linked_list.append_node_to_tail(Node('tail'))
        self.assertEqual('tail', self.linked_list.tail().value)

    def test_insert_first_node_to_head(self):
        self.linked_list.append_node_to_head(Node('head'))
        self.assertEqual('head', self.linked_list.head.value)

    def test_insert_two_nodes_to_head(self):
        self.linked_list.append_node_to_head(Node('head2'))
        self.linked_list.append_node_to_head(Node('head1'))
        self.assertEqual('head1', self.linked_list.head.value)

    def test_insert_two_nodes_to_tail(self):
        self.linked_list.append_node_to_tail(Node('tail2'))
        self.linked_list.append_node_to_tail(Node('tail1'))
        self.assertEqual('tail1', self.linked_list.tail().value)

    def test_insert_nodes_to_head_and_tail(self):
        self.linked_list.append_node_to_head(Node('head'))
        self.linked_list.append_node_to_tail(Node('tail'))
        self.assertEqual('tail', self.linked_list.tail().value)
        self.assertEqual('head', self.linked_list.head.value)

    def test_is_empty_with_empty_linked_list(self):
        self.assertTrue(self.linked_list.is_empty())

    def test_is_empty_with_two_nodes(self):
        self.linked_list.append_node_to_head(Node('element1'))
        self.linked_list.append_node_to_head(Node('element2'))
        self.assertFalse(self.linked_list.is_empty())
if __name__ == '__main__':
    unittest.main()