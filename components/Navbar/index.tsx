import React, { useEffect, useState } from 'react';

// Libraries
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Component and Hook
import { Dropdown } from 'components';
import { useRouter } from 'next/router';
import { useHeaderVisible } from 'hooks';
import { Bars3Icon } from '@heroicons/react/20/solid';

// Assets
import LogoImage from 'public/images/logo.png';

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const visible = useHeaderVisible(pathname !== '/' ? 20 : 200);

  useEffect(() => {
    const body = document.querySelector('body');
    if (open) body!.style.overflow = 'hidden';
    else body!.style.overflow = 'auto';
  }, [open]);

  return (
    <motion.header
      className={clsx(
        'fixed z-20 top-0 left-0 w-full transition-top duration-300 px-4 md:px-0',
        visible ? 'bg-gray-50' : 'bg-transparent'
      )}
      animate={{ scale: 1 }}
      initial={{ scale: 1.5 }}>
      <div className="flex items-center justify-between w-auto py-2.5 px-4 text-black-900 max-w-screen-lg mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className={clsx(
            'text-center w-full md:w-auto transition-opacity',
            pathname == '/' && !visible ? 'opacity-0' : 'opacity-100'
          )}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="md:flex hidden items-center uppercase">
          <div className="md:flex lg:flex space-x-8 text-gray-500">
            <Link className="hover:text-neutral-800" href="/">
              Beranda
            </Link>
            <Dropdown list trigger={<button type="button">Tentang</button>}>
              <Link href="/about" className="py-2 px-4 w-full">
                Festival Relawan
              </Link>
              <Link href="/about#about-tab" className="py-2 px-4 w-full">
                Tim Aksi Baik
              </Link>
            </Dropdown>
            <Link className="hover:text-neutral-800" href="/awards">
              Indorelawan Awards
            </Link>
            <Link className="hover:text-neutral-800" href="/instagram">
              Instagram
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex item-center">
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="bg-black fixed top-0 left-0 z-10 opacity-70 w-screen h-screen"
            />
          )}
          <motion.div
            animate={open ? 'open' : 'closed'}
            transition={{ duration: 0.3 }}
            variants={{
              open: { x: '0', left: '0' },
              closed: { x: '-100%', left: '-100%' },
            }}
            className="fixed top-0 -left-full overflow-hidden z-20 h-screen bg-white"
            style={{ width: 'calc(100vw - 6rem)' }}>
            <Logo className="mt-4 ml-4" />
            <nav
              onClick={() => setOpen(false)}
              className="space-y-4 text-xl h-full mt-8">
              <Link href="/">
                <div className="text-left px-8 py-4 w-full">Beranda</div>
              </Link>
              <Link href="/about">
                <div className="text-left px-8 py-4 w-full">Tentang</div>
              </Link>
              <Link href="/awards">
                <div className="text-left px-8 py-4 w-full">
                  Indorelawan Awards
                </div>
              </Link>
              <Link href="/instagram">
                <div className="text-left px-8 py-4 w-full">Instagram</div>
              </Link>
            </nav>
          </motion.div>
          <button
            aria-label="Buka Menu"
            onClick={() => setOpen(!open)}
            className="w-6 h-6 ml-2 mr-1 rounded">
            <Bars3Icon className="w-full h-full" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

const Logo: React.FC<React.BaseHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      className={clsx(
        'inline-flex text-xl translate-x-4 md:translate-x-0',
        className
      )}>
      <Image
        priority
        width={140}
        height={70}
        src={LogoImage}
        alt="Festival Relawan Logo"
      />
    </div>
  );
};

export default React.memo(Navbar);
