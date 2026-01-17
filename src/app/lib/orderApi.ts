// API utility for order management
import { API_ENDPOINTS } from "@/app/config/api";

export async function createOrder(order: {
  clientId: number;
  freelancerId: number;
  proposalTitle: string;
  budget: number;
  status?: string;
}) {
  const res = await fetch(API_ENDPOINTS.ORDERS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  if (!res.ok) throw new Error("Failed to create order");
  return await res.json();
}

export async function getOrdersByFreelancer(freelancerId: number) {
  const res = await fetch(
    API_ENDPOINTS.ORDERS_FREELANCER(freelancerId)
  );
  if (!res.ok) throw new Error("Failed to fetch orders");
  return await res.json();
}

export async function getOrdersByClient(clientId: number, token?: string) {
  const res = await fetch(
    API_ENDPOINTS.ORDERS_CLIENT(clientId),
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
  const res = await fetch(API_ENDPOINTS.ORDER_BY_ID(orderId));
  if (!res.ok) throw new Error("Failed to fetch order");
  return await res.json();
}

export async function updateOrderStatus(orderId: number, status: string) {
  const res = await fetch(
    API_ENDPOINTS.ORDER_STATUS(orderId) + `?status=${status}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!res.ok) throw new Error("Failed to update order status");
  return await res.json();
}
