'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Bars, Xmark } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const navLinks = [
  {
    label: 'Browse Jobs',
    href: '/jobs',
  },
  {
    label: 'Company',
    href: '/companies',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
];

const Navbar = () => 
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending, refetch } = authClient.useSession();

   const userData = session?.user;

  const user = userData ? {
    name: userData.name,
    email: userData.email,
    imageUrl: userData.image
  } : null;


   console.log(userData);
  // console.log(user);

   const handleSignOut = async () => {
      try {
        await authClient.signOut();
        toast.success("Logged out successfully!");
        refetch(); 
      }
      catch (error) {
        console.error("Sign Out Error:", error);
        toast.error("Failed to log out.");
      }
    }


  return (

    <nav className="sticky top-0 z-50 py-4">
      <div className="mx-auto w-[90%]">
        <div className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-linear-to-r from-[#161616] via-[#1B1B1B] to-[#161616] px-6 shadow-lg backdrop-blur-xl">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h2 className="bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent">
              CareerBridge
            </h2>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden flex-1 items-center justify-end gap-12 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-default-600 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions - Sign in Sign Out */}



                 <div className="hidden items-center gap-5 pl-12 lg:flex">

                    {
                        user?
                        
                        <>
                          <Button  className="bg-violet-600 text-white hover:bg-violet-500" onClick={handleSignOut}>
                            Sign Out
                          </Button>
                        </>
                        :
                        <>

                           <Link
                    href="/signin"
                    className="font-medium text-violet-400 transition-colors hover:text-violet-300"
                    >
                    Sign In
                    </Link>

         
                    <Link href="/signup">
                    
                    <Button
                
                    className="bg-violet-600 px-6 font-medium text-white hover:bg-violet-500"
                    >
                    Get Started
                    </Button>
                    </Link>
                    
                </>

                    }
          </div>
            

         






          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center lg:hidden"
          >
            {isMenuOpen ? (
              <Xmark width={24} height={24} />
            ) : (
              <Bars width={24} height={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-[#161616] p-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-medium text-default-600 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
                <Link href="/signin" className="font-medium text-violet-400">
                  Sign In
                </Link>

                <Button
                  as={Link}
                  href="/signup"
                  className="w-full bg-violet-600 text-white"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;