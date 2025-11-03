'use client';

import Link from 'next/link';
import css from './Header.module.css';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'home' },
    { href: '/works', label: 'works' },
    { href: '/about-me', label: 'about-me' },
    { href: '/contacts', label: 'contacts' },
  ];
  return (
    <header className={css.header}>
      <Link href="/" className={css.logoLink}>
        <svg className={css.logoIcon} width="52" height="52">
          <use href="/icons.svg#icon-frog-flat"></use>
        </svg>
        Alof
      </Link>
      <nav>
        <ul className={css.navigation}>
          {navItems.map(item => (
            <li
              key={item.href}
              className={pathname === item.href ? css.activeItem : ''}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
