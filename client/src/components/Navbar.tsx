import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
  ];

  const divisionLinks = [
    { href: "/tech", label: "Tech Division" },
    { href: "/gas", label: "Gas Division" },
  ];

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                {!logoError ? (
                  <img 
                    src="/assets/Black n color icon.png" 
                    alt="Fidcent Logo" 
                    className="h-8 w-auto"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-2xl font-bold">F</span>
                )}
                <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-[#0BF862] to-[#0C2DF6] bg-clip-text text-transparent">
                  Fidcent
                </span>
              </a>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-[#030921] hover:text-[#0C2DF6] transition-colors",
                    location === link.href && "font-semibold text-[#0C2DF6]"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "text-[#030921] hover:text-[#0C2DF6] transition-colors",
                    divisionLinks.some(link => location === link.href) && "font-semibold text-[#0C2DF6]"
                  )}
                >
                  Divisions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border rounded-md shadow-lg">
                {divisionLinks.map((link) => (
                  <DropdownMenuItem key={link.href} className="hover:bg-gray-50">
                    <Link href={link.href}>
                      <a className="w-full text-[#030921] hover:text-[#0C2DF6]">{link.label}</a>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#030921]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[...mainLinks, ...divisionLinks].map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium text-[#030921] hover:text-[#0C2DF6] hover:bg-gray-50",
                    location === link.href && "text-[#0C2DF6] bg-gray-50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}