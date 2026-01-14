'use client';
import ClientNavHeader from "@/app/components/styles/global_styles/client/header";
import PaymentSuccessForm from "@/app/components/styles/client_styles/payment_accept_delivery/payment_success_form";
import ClientFooter from "@/app/components/styles/global_styles/client/footer";

const PaymentAcceptDeliveryPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#F9FAFB]">
        <ClientNavHeader />
        <PaymentSuccessForm />
        <ClientFooter/>
    </div>
  )
}
export default PaymentAcceptDeliveryPage;