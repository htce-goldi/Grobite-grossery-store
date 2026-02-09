import { Container, Table, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Orders() {
  const { orders } = useSelector((state) => state.cart);

  return (
    <Container className="py-5">
      <h4 className="mb-4 fw-bold">My Orders</h4>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.date}</td>
                <td>₹{order.total}</td>
                <td>
                  <Badge bg="success">Delivered</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
