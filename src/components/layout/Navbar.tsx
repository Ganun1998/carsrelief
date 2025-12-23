import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TopContactBar } from "./TopContactBar";
import logo from "../../assets/logo.jpg"

const programs = [
    { name: "All Programs", href: "/programs" },
  { name: "Child Protection", href: "/programs/child-protection" },
  { name: "Education", href: "/programs/education" },
  { name: "WASH", href: "/programs/wash" },
  { name: "Nutrition", href: "/programs/nutrition" },
  { name: "Health", href: "/programs/health" },
  { name: "Peace Building", href: "/programs/peace-building" },
  { name: "MHPSS", href: "/programs/mental-health" },
  { name: "Livelihoods", href: "/programs/livelihoods" },
];

const aboutPages = [
  { name: "About Us", href: "/about" },
  { name: "Core Values", href: "/core-values" },
  { name: "Organization Structure", href: "/organization-structure" },
  { name: "Leadership", href: "/team" },
];

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Who We Are",
    href: "/about",
    hasDropdown: true,
    dropdownType: "about",
  },
  {
    name: "What We Do",
    href: "/programs",
    hasDropdown: true,
    dropdownType: "programs",
  },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setProgramsOpen(false);
    setAboutOpen(false);
    setMobileAboutOpen(false);
    setMobileProgramsOpen(false);
  }, [location.pathname]);

  const getDropdownItems = (type: string) => {
    return type === "programs" ? programs : aboutPages;
  };

  const isDropdownOpen = (type: string) => {
    return type === "programs" ? programsOpen : aboutOpen;
  };

  const setDropdownOpen = (type: string, value: boolean) => {
    if (type === "programs") {
      setProgramsOpen(value);
    } else {
      setAboutOpen(value);
    }
  };

  return (
    <>
      <TopContactBar />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-medium"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-soft group-hover:shadow-glow transition-all duration-300">
                <img
                  src={logo}
                  alt="CARS Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="font-display font-bold text-xl text-trust">
                  CARS
                </span>
                <p className="text-md text-hope">
                  Children Affairs Relief Services
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() =>
                        setDropdownOpen(link.dropdownType!, true)
                      }
                      onMouseLeave={() =>
                        setDropdownOpen(link.dropdownType!, false)
                      }
                    >
                      <button
                        className={cn(
                          "flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                          "text-foreground hover:bg-muted"
                        )}
                      >
                        {link.name}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            isDropdownOpen(link.dropdownType!) && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen(link.dropdownType!) && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 pt-2 w-64"
                          >
                            <div className="bg-card rounded-xl shadow-strong border border-border p-2">
                              {getDropdownItems(link.dropdownType!).map(
                                (item) => (
                                  <Link
                                    key={item.href}
                                    to={item.href}
                                    className="block px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
                                  >
                                    {item.name}
                                  </Link>
                                )
                              )}
                              <div className="border-t border-border mt-2 pt-2">
                                <Link
                                  to={link.href}
                                  className="block px-4 py-3 rounded-lg text-primary font-medium hover:bg-muted transition-colors duration-200"
                                >
                                  All {link.name} →
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "px-4 py-2 rounded-lg font-medium transition-all duration-300",
                        location.pathname === link.href
                          ? "bg-muted text-foreground"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/donate">
                <Button variant="hope" size="lg" className="gap-2">
                  Donate Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden bg-card rounded-b-2xl shadow-strong"
              >
                <div className="p-4 space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.hasDropdown ? (
                        <>
                          <button
                            onClick={() => {
                              if (link.dropdownType === "about") {
                                setMobileAboutOpen(!mobileAboutOpen);
                              } else {
                                setMobileProgramsOpen(!mobileProgramsOpen);
                              }
                            }}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors duration-200"
                          >
                            {link.name}
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 transition-transform duration-300",
                                (link.dropdownType === "about"
                                  ? mobileAboutOpen
                                  : mobileProgramsOpen) && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {(link.dropdownType === "about"
                              ? mobileAboutOpen
                              : mobileProgramsOpen) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 overflow-hidden"
                              >
                                {getDropdownItems(link.dropdownType!).map(
                                  (item) => (
                                    <Link
                                      key={item.href}
                                      to={item.href}
                                      className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                                    >
                                      {item.name}
                                    </Link>
                                  )
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.href}
                          className={cn(
                            "block px-4 py-3 rounded-lg transition-colors duration-200",
                            location.pathname === link.href
                              ? "bg-muted text-foreground font-medium"
                              : "text-foreground hover:bg-muted"
                          )}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <Link to="/donate" className="block">
                      <Button variant="hope" size="lg" className="w-full gap-2">
                        Donate Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}
