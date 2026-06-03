'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Bars, Xmark } from '@gravity-ui/icons';
import { Button, Avatar } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const navLinks = [
  { label: 'Browse Jobs', href: '/jobs' },
  { label: 'Company', href: '/companies' },
  { label: 'Pricing', href: '/pricing' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending, refetch } = authClient.useSession();

  const userData = session?.user;
  const user = userData ? {
    name: userData.name,
    email: userData.email,
    imageUrl: userData.image
  } : null;

  // Pure JavaScript initials extractor
  const getInitials = (name) => {
    if (!name) return "U";
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      toast.success("Logged out successfully!");
      refetch(); 
    } catch (error) {
      console.error("Sign Out Error:", error);
      toast.error("Failed to log out.");
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full py-4 transition-all duration-300">
      <div className="mx-auto w-[90%]">
        {/* Main Glass Header Wrapper */}
        <div className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/0 px-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl transition-all duration-300 hover:border-white/15">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h2 className="bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent tracking-tight">
              CareerBridge
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-end gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions Section */}
          <div className="hidden items-center gap-5 pl-10 lg:flex">
            {user ? (
              <div className="flex items-center gap-4">
                {/* HeroUI Avatar Component */}
                <Avatar className="h-9 w-9 border border-white/20 bg-violet-600/20 text-white font-medium text-xs">
                  {user.imageUrl && (
                    <Avatar.Image 
                      alt={user.name || "User Profile"} 
                      src={user.imageUrl} 
                    />
                  )}
                  <Avatar.Fallback>{getInitials(user.name || "")}</Avatar.Fallback>
                </Avatar>

                <Button 
                  className="rounded-xl border border-white/10 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-red-500/20 hover:border-red-500/30" 
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-violet-400"
                >
                  Sign In
                </Link>

                <Button
                  as={Link}
                  href="/signup"
                  className="rounded-xl bg-violet-600 px-5 font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:bg-violet-500 hover:shadow-violet-500/30"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center rounded-xl p-1.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
            type="button"
          >
            {isMenuOpen ? <Xmark width={22} height={22} /> : <Bars width={22} height={22} />}
          </button>
        </div>

        {/* Mobile Flyout Menu Overlay Card */}
        {isMenuOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-black/40 p-5 shadow-2xl backdrop-blur-2xl lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 flex flex-col gap-3 border-t border-white/10 pt-4">
                {user ? (
                  <div className="flex flex-col items-center gap-4">
                    {/* Mobile Avatar and identity wrapper */}
                    <div className="flex items-center gap-3 w-full px-2">
                      <Avatar className="h-10 w-10 border border-white/20 bg-violet-600/20 text-white font-medium">
                        {user.imageUrl && (
                          <Avatar.Image 
                            alt={user.name || "User Profile"} 
                            src={user.imageUrl} 
                          />
                        )}
                        <Avatar.Fallback>{getInitials(user.name || "")}</Avatar.Fallback>
                      </Avatar>
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-semibold text-white truncate">{user.name}</span>
                        <span className="text-xs text-gray-400 truncate">{user.email}</span>
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => {
                        handleSignOut();
                        setIsMenuOpen(false);
                      }}
                      className="w-full rounded-xl border border-white/10 bg-white/10 text-white backdrop-blur-md"
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <>
                    <Link 
                      href="/signin" 
                      onClick={() => setIsMenuOpen(false)}
                      className="py-2 text-center text-base font-medium text-gray-300 hover:text-violet-400"
                    >
                      Sign In
                    </Link>

                    <Button
                      as={Link}
                      href="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full rounded-xl bg-violet-600 font-semibold text-white shadow-lg shadow-violet-600/20"
                    >
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;