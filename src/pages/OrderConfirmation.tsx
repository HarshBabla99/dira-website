import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import BrandHeader from "@/components/BrandHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
  alt?: string;
}

interface OrderDetails {
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  vat: number;
  total: number;
  paymentMethod: string;
  transactionId?: string;
}

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state as OrderDetails | null;

  useEffect(() => {
    document.title = "Order Confirmed | Thank You";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Your order has been confirmed. Thank you for shopping with us.");
    }
  }, []);

  // Redirect if no order details
  useEffect(() => {
    if (!orderDetails) {
      navigate("/shop");
    }
  }, [orderDetails, navigate]);

  if (!orderDetails) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <BrandHeader />
      <main className="py-12 sm:py-16 flex-1">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-10">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="font-serif text-3xl sm:text-4xl mb-2">Thank You for Your Order!</h1>
            <p className="text-muted-foreground">Your order has been received and is being processed.</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 space-y-6">
            <h2 className="font-serif text-xl border-b border-border pb-3">Order Summary</h2>

            <div className="space-y-3">
              {orderDetails.items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${orderDetails.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${orderDetails.deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>VAT (15%)</span>
                <span>${orderDetails.vat.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-base pt-2 border-t border-border">
                <span>Total</span>
                <span>${orderDetails.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-border pt-4 text-sm text-muted-foreground">
              <p><strong>Payment:</strong> {orderDetails.paymentMethod}</p>
              {orderDetails.transactionId && (
                <p><strong>Transaction ID:</strong> {orderDetails.transactionId}</p>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/shop">
              <Button variant="outline" size="lg">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
