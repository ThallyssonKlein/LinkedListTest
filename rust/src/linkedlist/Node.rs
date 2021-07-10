pub struct Node {
    value: String
    next: Node,
    previous: Node
}

impl Node {
    pub fn new(value: &str) -> Node {
        Node {
            value: value.to_string()
        }
    }
}