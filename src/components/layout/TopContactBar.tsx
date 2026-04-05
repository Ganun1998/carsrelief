import { Mail, Phone, Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react';

export function TopContactBar() {
  return (
    <div className="bg-trust text-primary-foreground py-2 text-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a 
              href="mailto:info@carsrelief.org" 
              className="flex items-center gap-2 hover:text-secondary transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@carsrelief.org </span>
            </a>
            <a 
              href="tel:+211 926 559 555" 
              className="flex items-center gap-2 hover:text-secondary transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+211 926 559 555 </span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-primary-foreground/80">Follow us:</span>
            <div className="flex items-center gap-2">
              <a 
                href="https://www.facebook.com/61576192844517/posts/122179819904873094/?app=fbl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-200"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://wa.me/+211917774444" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://linkedin.com/company/carssouthsudan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-200"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://instagram.com/carssouthsudan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-200"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
