import { Twitter, Github, Linkedin, Youtube } from "lucide-react";
import type { FC } from "react";

type FooterLinks = {
  [category: string]: string[];
};

type SocialLink = {
  icon: FC<React.SVGProps<SVGSVGElement>>;
  href: string;
  label: string;
};

const footerLinks: FooterLinks = {
  Products: ["Payments", "Billing", "Connect", "Radar", "Atlas", "Terminal"],
  Solutions: [
    "Ecommerce",
    "SaaS",
    "Marketplaces",
    "Platforms",
    "Creator Economy",
  ],
  Developers: [
    "Documentation",
    "API Reference",
    "API Status",
    "Changelog",
    "Support",
  ],
  Resources: [
    "Guides",
    "Customer Stories",
    "Blog",
    "Annual Conference",
    "Contact",
  ],
  Company: ["About", "Customers", "Partners", "Jobs", "Newsroom"],
};

const socialLinks: SocialLink[] = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer: FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-white">stripe</span>
            </a>
            <p className="text-sm text-slate-500 mb-6 max-w-xs">
              Financial infrastructure for the internet. Millions of companies
              use Stripe to grow their business.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Settings
              </a>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Stripe, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
