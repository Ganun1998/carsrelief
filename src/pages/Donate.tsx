import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useToast } from '@/hooks/use-toast';
import hero3 from '@/assets/hero3.jpg';

const donationAmounts = [25, 50, 100];

const whyDonate = [
  'Direct impact on vulnerable children and families',
  '100% transparency in how funds are used',
  'Tax-deductible contributions',
  'Regular updates on program outcomes',
  'Join a community of changemakers',
];

export default function Donate() {

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const { toast } = useToast();

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    toast({
      title: "Thank You!",
      description: `Your ${donationType} donation of $${amount} will make a real difference. Redirecting to payment...`,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={hero3} alt="Donate to CARS" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary text-sm font-medium mb-6">
              Make a Difference Today
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Your Gift Transform Lives
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Every donation, no matter the size, helps us reach more children with
              life-saving protection, education, healthcare, and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Donation Form */}
            <AnimatedSection animation="fade-right">
              <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-strong">
                <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                  Choose Your Donation
                </h2>

                {/* Donation Type */}
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                      donationType === 'one-time'
                        ? 'bg-trust text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                      donationType === 'monthly'
                        ? 'bg-trust text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-foreground mb-4">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                          selectedAmount === amount && !customAmount
                            ? 'bg-gradient-hope text-foreground shadow-glow'
                            : 'bg-muted text-foreground hover:bg-muted/80'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full pl-10 pr-4 py-4 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-hope transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Donate Button */}
                <Button
                  variant="hope"
                  size="xl"
                  className="w-full gap-2"
                  onClick={handleDonate}
                >
                  <CreditCard className="w-5 h-5" />
                  Donate ${customAmount || selectedAmount} {donationType === 'monthly' && '/month'}
                </Button>

                <p className="text-center text-muted-foreground text-sm mt-6">
                  Secure payment powered by trusted payment providers
                </p>
              </div>
            </AnimatedSection>

            {/* Impact Info */}
            <AnimatedSection animation="fade-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Your Impact
              </h2>
              
              <div className="bg-trust/10 p-8 rounded-2xl">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Why Donate to CARS?
                </h3>
                <ul className="space-y-3">
                  {whyDonate.map((reason, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-trust flex-shrink-0" />
                      <span className="text-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="scale" className="text-center max-w-3xl mx-auto">
            <blockquote className="font-display text-2xl md:text-2xl font-medium text-primary-foreground mb-8 leading-relaxed">
              "The support from donors like you helps us reach thousands of children
              with life-saving services. Together, we are building a brighter future for
              South Sudan's children."
            </blockquote>
            <cite className="text-primary-foreground/80">
              — CARS Executive Director
            </cite>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
