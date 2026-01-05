'use client';
import ClientNavHeader from "@/app/components/styles/global_styles/client/header";
import Cart from "@/app/components/styles/client_styles/cart/cart";
import ClientFooter from "@/app/components/styles/global_styles/client/footer";

const OrdersCartPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#F9FAFB]">
        <ClientNavHeader />
        <Cart />
        <ClientFooter/>
    </div>
  )
}
export default OrdersCartPage;