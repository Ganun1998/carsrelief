import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import hero2 from "@/assets/hero2.jpg";
import logo from "@/assets/logo.jpg"

const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    details: ["Gumba Sherikat,", "Juba, South Sudan"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+211 926 559 555", "+211 929 995 792"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@carsrelief.org"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00 AM - 5:00 PM"],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={hero2}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We'd love to hear from you. Whether you want to partner with us,
              support our work, or learn more about our programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full overflow-hidden">
            {/* Contact Info */}
            <AnimatedSection animation="fade-right">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Get In Touch
              </h2>

              <div className="grid sm:grid-cols-1 gap-8 w-full">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 w-full break-words"
                  >
                    <div className="w-12 h-12 bg-trust/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-trust" />
                    </div>

                    <div className="w-full">
                      <h3 className="font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p
                          key={i}
                          className="text-muted-foreground text-sm break-words"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  Follow Us
                </h3>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href="#"
                    className="p-3 bg-muted rounded-lg hover:bg-trust transition-all duration-300"
                  >
                    <Facebook className="w-6 h-6 text-trust hover:text-primary-foreground" />
                  </a>

                  <a
                    href="#"
                    className="p-3 bg-muted rounded-lg hover:bg-trust transition-all duration-300"
                  >
                    <Twitter className="w-6 h-6 text-black hover:text-primary-foreground" />
                  </a>

                  <a
                    href="#"
                    className="p-3 bg-muted rounded-lg hover:bg-trust transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6 text-[#0077B5] hover:text-primary-foreground" />
                  </a>

                  <a
                    href="#"
                    className="p-3 bg-muted rounded-lg hover:bg-trust transition-all duration-300"
                  >
                    <Instagram className="w-6 h-6 text-[#E4405F] hover:text-primary-foreground" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="fade-left">
              <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-strong w-full">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="w-full">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-trust transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-trust transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-trust transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="donation">Donation Information</option>
                      <option value="programs">Program Information</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-trust transition-all duration-300 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="trust"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
<section className="py-20 bg-muted">
  <div className="container mx-auto px-4 lg:px-8">

    <AnimatedSection
      animation="fade-up"
      className="text-center max-w-3xl mx-auto mb-12"
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
        Where We Work
      </h2>
      <p className="text-muted-foreground text-lg">
        Our headquarters are in Juba, with field offices and operations across multiple states in South Sudan.
      </p>
    </AnimatedSection>

    <AnimatedSection animation="scale">
      <div className="bg-card rounded-2xl shadow-strong overflow-hidden">
        <div className="p-8 lg:p-12">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-trust rounded-xl flex items-center justify-center">
              <img
                src={logo}
                alt="CARS Logo"
                className="w-10 h-10 object-contain rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">
                CARS Headquarters
              </h3>
              <p className="text-muted-foreground">Juba, South Sudan</p>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.691930307893!2d31.606160974753067!3d4.8228625951526425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x171281002c43960f%3A0x415073f320bfd66!2sGumbo_Sherikat!5e0!3m2!1sen!2set!4v1765029405752!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0 }}

              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </AnimatedSection>

  </div>
</section>

    </Layout>
  );
}
