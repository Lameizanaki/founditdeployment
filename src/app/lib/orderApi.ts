// API utility for order management

export async function createOrder(order: {
  clientId: number;
  freelancerId: number;
  proposalTitle: string;
  budget: number;
  status?: string;
}) {
  const res = await fetch("http://localhost:8085/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  if (!res.ok) throw new Error("Failed to create order");
  return await res.json();
}

export async function getOrdersByFreelancer(freelancerId: number) {
  const res = await fetch(
    `http://localhost:8085/api/orders/freelancer/${freelancerId}`
  );
  if (!res.ok) throw new Error("Failed to fetch orders");
  return await res.json();
}

export async function getOrdersByClient(clientId: number, token?: string) {
  const res = await fetch(
    `http://localhost:8085/api/orders/client/${clientId}`,
    {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch orders");
  return await res.json();
}

export async function getOrderById(orderId: number) {
  const res = await fetch(`http://localhost:8085/api/orders/${orderId}`);
  if (!res.ok) throw new Error("Failed to fetch order");
  return await res.json();
}

export async function updateOrderStatus(orderId: number, status: string) {
  const res = await fetch(
    `http://localhost:8085/api/orders/${orderId}/status?status=${status}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!res.ok) throw new Error("Failed to update order status");
  return await res.json();
}
