import { useState, useEffect, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Menu,
  X,
  CreditCard,
  Shield,
  Zap,
  Globe,
  Code,
  BookOpen,
  Users,
  BarChart3,
} from "lucide-react";

type NavItem = {
  icon: FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

const products: NavItem[] = [
  {
    icon: CreditCard,
    title: "Payments",
    description: "Accept payments globally",
  },
  { icon: Shield, title: "Radar", description: "AI-powered fraud prevention" },
  { icon: Zap, title: "Billing", description: "Subscription management" },
  { icon: Globe, title: "Connect", description: "Marketplace payments" },
];

const developers: NavItem[] = [
  { icon: Code, title: "Documentation", description: "Start integrating" },
  { icon: BookOpen, title: "API Reference", description: "Complete API docs" },
];

const resources: NavItem[] = [
  { icon: Users, title: "Support", description: "Get help from our team" },
  {
    icon: BarChart3,
    title: "Guides",
    description: "Best practices & tutorials",
  },
];

const navGroups: NavGroup[] = [
  { label: "Products", items: products },
  { label: "Solutions", items: products },
  { label: "Developers", items: developers },
  { label: "Resources", items: resources },
];

interface NavDropdownContentProps {
  items: NavItem[];
}

const NavDropdownContent: FC<NavDropdownContentProps> = ({ items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="grid gap-2 p-4 w-[420px] lg:grid-cols-2"
    >
      {items.map((item) => (
        <a
          key={item.title}
          href="#"
          className="flex items-start gap-3 rounded-xl p-3 hover:bg-slate-50 transition-colors group"
        >
          <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
            <item.icon className="w-4 h-4 text-indigo-600" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-900">
              {item.title}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
          </div>
        </a>
      ))}
    </motion.div>
  );
};

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-200/60"
          : "bg-white/80 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <svg className="h-8 w-auto" viewBox="0 0 60 25" fill="none">
              <text
                x="0"
                y="20"
                fontFamily="system-ui,sans-serif"
                fontWeight="700"
                fontSize="22"
                fill="#0f172a"
              >
                stripe
              </text>
            </svg>
          </a>

          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navGroups.map(({ label, items }) => (
                  <NavigationMenuItem key={label}>
                    <NavigationMenuTrigger className="bg-transparent text-sm text-slate-600 hover:text-slate-900 font-normal h-9">
                      {label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavDropdownContent items={items} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <a
              href="#"
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Pricing
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Sign in
            </a>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-5 h-9 text-sm font-medium shadow-md shadow-indigo-200">
              Contact sales →
            </Button>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-slate-100"
            >
              <div className="py-4 space-y-1">
                {[
                  "Products",
                  "Solutions",
                  "Developers",
                  "Resources",
                  "Pricing",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col gap-2 px-2">
                  <Button
                    variant="outline"
                    className="w-full rounded-full text-sm h-10"
                  >
                    Sign in
                  </Button>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-full text-sm h-10">
                    Contact sales
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
