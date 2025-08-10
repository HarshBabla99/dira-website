import BrandHeader from "@/components/BrandHeader";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { items, total, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      clear();
      setSubmitting(false);
      alert("Thank you! Your order has been placed (mock). A confirmation email will be sent shortly.");
      navigate("/");
    }, 900);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BrandHeader />
      <main className="section">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <section aria-labelledby="checkout-title">
            <h1 id="checkout-title" className="heading-md">Checkout</h1>
            <form onSubmit={onSubmit} className="mt-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2 text-sm">
                  Full name
                  <input required className="border rounded-md px-4 py-3 bg-background" placeholder="Jane Doe" />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  Email
                  <input type="email" required className="border rounded-md px-4 py-3 bg-background" placeholder="jane@example.com" />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm">
                Address
                <input required className="border rounded-md px-4 py-3 bg-background" placeholder="123 Serenity Lane" />
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                <label className="flex flex-col gap-2 text-sm">
                  City
                  <input required className="border rounded-md px-4 py-3 bg-background" placeholder="San Francisco" />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  State
                  <input required className="border rounded-md px-4 py-3 bg-background" placeholder="CA" />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  ZIP
                  <input required className="border rounded-md px-4 py-3 bg-background" placeholder="94107" />
                </label>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <label className="flex flex-col gap-2 text-sm md:col-span-2">
                  Card number (mock)
                  <input required className="border rounded-md px-4 py-3 bg-background" placeholder="4242 4242 4242 4242" />
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2 text-sm">
                    Expiry
                    <input required className="border rounded-md px-4 py-3 bg-background" placeholder="MM/YY" />
                  </label>
                  <label className="flex flex-col gap-2 text-sm">
                    CVC
                    <input required className="border rounded-md px-4 py-3 bg-background" placeholder="123" />
                  </label>
                </div>
              </div>
              <button disabled={submitting || items.length === 0} className="btn w-full">
                {submitting ? 'Processing…' : `Place Order — $${total.toFixed(2)}`}
              </button>
            </form>
          </section>
          <aside className="card-lux h-max">
            <h2 className="font-serif text-lg">Order Summary</h2>
            <div className="mt-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-sm text-muted-foreground">Your cart is empty.</p>
              ) : (
                items.map((i) => (
                  <div key={i.id} className="flex items-center gap-4">
                    <img src={i.image} alt={i.alt} className="h-16 w-16 rounded-md border object-cover" />
                    <div className="flex-1">
                      <p className="text-sm">{i.name} × {i.quantity}</p>
                    </div>
                    <span className="text-sm font-medium">${(i.price * i.quantity).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>
            <div className="mt-6 flex items-center justify-between border-t pt-4">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
