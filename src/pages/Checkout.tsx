import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Lock, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.zipCode) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.cardNumber || !formData.expiry || !formData.cvv) {
      toast({
        title: "Missing payment info",
        description: "Please fill in all payment fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Add some products before checking out.</p>
          <Button variant="hero" onClick={() => navigate('/')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => step === 'info' ? navigate('/') : setStep('info')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            {step === 'info' ? 'Back to shop' : 'Back to information'}
          </button>
          <h1 className="font-display text-4xl text-foreground">Checkout</h1>
        </div>

        <AnimatePresence mode="wait">
          {step === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h2 className="font-display text-3xl text-foreground mb-4">Order Confirmed!</h2>
              <p className="text-muted-foreground max-w-md mb-2">
                Thank you for your order. We've sent a confirmation email to <span className="text-foreground font-medium">{formData.email}</span>
              </p>
              <p className="text-muted-foreground/70 text-sm mb-8">
                Order #LUX-{Math.random().toString(36).substring(2, 8).toUpperCase()}
              </p>
              <Button variant="hero" size="lg" onClick={() => navigate('/')}>
                Continue Shopping
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="checkout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid lg:grid-cols-2 gap-12"
            >
              {/* Form Section */}
              <div>
                {/* Progress Steps */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`flex items-center gap-2 ${step === 'info' ? 'text-primary' : 'text-muted-foreground'}`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === 'info' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>1</span>
                    <span className="font-medium">Information</span>
                  </div>
                  <div className="flex-1 h-px bg-border" />
                  <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-primary' : 'text-muted-foreground'}`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === 'payment' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>2</span>
                    <span className="font-medium">Payment</span>
                  </div>
                </div>

                {step === 'info' ? (
                  <form onSubmit={handleInfoSubmit} className="space-y-6">
                    <div>
                      <h2 className="font-display text-xl text-foreground mb-4">Contact</h2>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="font-display text-xl text-foreground mb-4">Shipping Address</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe"
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="123 Main St"
                          className="mt-1"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="New York"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="10001"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Continue to Payment
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <div>
                      <h2 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Payment Details
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Demo mode - no real charges
                      </p>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="4242 4242 4242 4242"
                            className="mt-1"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input
                              id="expiry"
                              name="expiry"
                              value={formData.expiry}
                              onChange={handleInputChange}
                              placeholder="MM/YY"
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              className="mt-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        `Pay $${totalPrice.toFixed(2)}`
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Order Summary */}
              <div className="lg:pl-8 lg:border-l border-border">
                <h2 className="font-display text-xl text-foreground mb-6">Order Summary</h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium text-foreground">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border mt-6 pt-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-primary font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-display pt-3 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border/50">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Your payment information is secure and encrypted
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Checkout;
