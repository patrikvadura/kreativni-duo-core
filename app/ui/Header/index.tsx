'use client'

import data from '@/app/lib/data.json'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
  Link,
} from '@nextui-org/react'
import { ThemeSwitcher } from '@/app/ui/ThemeSwitcher'
import classes from './index.module.scss'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const { theme, setTheme } = useTheme()

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }
    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  const linkStyle: Record<number, string> = {
    1: 'text-primary hover:text-secondary dark:text-white',
    2: 'text-fifty hover:text-primary dark:text-white',
    3: 'text-secondary hover:text-fifty dark:text-white',
    4: 'text-primary hover:text-secondary dark:text-white',
  }

  return (
    <Navbar
      className={`${classes.navbar} ${scrollPosition > 50 ? 'py-2' : 'py-4'}`}
      classNames={{
        wrapper: 'xl:px-0',
      }}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link href="/">
          {data.profile.logo ? (
            <svg className="size-[60px] md:size-[80px]" viewBox="0 0 680 540">
              <path
                d="M427.16 493.38V282.05c0-6.17 1.43-10.81 4.29-13.94 2.85-3.12 6.57-4.68 11.14-4.68s8.34 1.56 11.3 4.68c2.98 3.13 4.46 7.47 4.46 13.03V430.1c.02.46.03.93.03 1.4v49.98c0 7.24.6 13.32 1.83 18.23 1.22 4.92 3.4 8.77 6.57 11.55 3.17 2.78 7.45 4.18 12.87 4.18 5.26 0 10.21-1.57 14.86-4.7a27.37 27.37 0 0 0 10.18-12.23c1.75-4.42 2.63-14.1 2.63-29.04v-37.96c0-6.18 1.44-10.83 4.34-13.95 2.9-3.13 6.67-4.69 11.32-4.69s8.39 1.54 11.2 4.63c2.83 3.09 4.24 7.76 4.24 14v90.45c0 5.95-1.35 10.4-4.06 13.38-2.7 2.97-6.2 4.46-10.46 4.46-4.27 0-7.8-1.54-10.58-4.63-2.78-3.09-4.17-7.41-4.17-12.98v-4a69.64 69.64 0 0 1-11.78 11.9 43.36 43.36 0 0 1-13.5 7.14c-4.87 1.56-10.44 2.34-16.69 2.34-7.54 0-14.3-1.56-20.3-4.69A34.24 34.24 0 0 1 433 521.96c-3.9-6.63-5.84-16.16-5.84-28.58Zm26.47-275.65h15.75c3.96 0 5.94.59 5.94 1.75 0 .62-2.17 3.15-6.53 7.58a333.72 333.72 0 0 1-13.17 12.71c-4.44 4.04-7.5 6.5-9.22 7.35a30.94 30.94 0 0 1-14.22 3.38c-3.34 0-5.02-.97-5.02-2.92 0-1.32 1.01-3.61 3.04-6.88l5.24-9.8c3.03-5.67 5.68-9.28 7.93-10.84 2.26-1.55 5.68-2.33 10.26-2.33ZM14.51 266.17h3.43v-18.73c0-5.03.13-8.97.4-11.83a17.48 17.48 0 0 1 2.22-7.37 14.07 14.07 0 0 1 5.26-5.2c2.28-1.33 4.84-2 7.65-2 3.96 0 7.54 1.49 10.74 4.46a13.2 13.2 0 0 1 4.06 7.26c.57 2.85.86 6.9.86 12.16v21.25h11.42c4.42 0 7.79 1.05 10.11 3.14a10.36 10.36 0 0 1 3.49 8.06c0 4.19-1.66 7.12-4.97 8.8-3.32 1.67-8.06 2.5-14.23 2.5h-5.82v57.36a93 93 0 0 0 .51 11.25 11.45 11.45 0 0 0 2.74 6.4c1.49 1.64 3.9 2.46 7.26 2.46 1.82 0 4.3-.33 7.42-.97a38.6 38.6 0 0 1 7.31-.98c2.52 0 4.78 1.01 6.8 3.03a10.16 10.16 0 0 1 3.03 7.49c0 5.02-2.74 8.87-8.23 11.53-5.48 2.67-13.36 4-23.65 4-9.74 0-17.13-1.63-22.16-4.91a22.8 22.8 0 0 1-9.88-13.6c-1.56-5.78-2.34-13.51-2.34-23.19v-59.86h-4.12c-4.49 0-7.92-1.07-10.28-3.2A10.45 10.45 0 0 1 0 277.37c0-3.28 1.24-5.96 3.71-8.06 2.48-2.1 6.08-3.14 10.8-3.14Zm112.3 14.97v184.54c0 6.24-1.48 10.96-4.45 14.16a14.76 14.76 0 0 1-11.31 4.8c-4.57 0-8.29-1.64-11.14-4.91-2.86-3.28-4.29-7.96-4.29-14.05V282.05c0-6.17 1.43-10.81 4.29-13.94 2.85-3.12 6.57-4.68 11.14-4.68s8.34 1.56 11.3 4.68c2.98 3.13 4.46 7.47 4.46 13.03Zm-15.42-32.22c-4.34 0-8.05-1.33-11.14-4-3.08-2.66-4.63-6.43-4.63-11.3 0-4.43 1.58-8.06 4.75-10.92a15.93 15.93 0 0 1 11.02-4.28c4.04 0 7.62 1.3 10.74 3.88 3.12 2.6 4.68 6.36 4.68 11.31 0 4.8-1.52 8.55-4.57 11.26a15.8 15.8 0 0 1-10.85 4.05Zm69.69 33.93 25.25 70.83 27.19-73.91c2.13-5.94 4.22-10.15 6.28-12.63 2.06-2.47 5.18-3.71 9.37-3.71 3.96 0 7.33 1.33 10.11 4 2.78 2.66 4.17 5.75 4.17 9.25 0 1.37-.25 2.97-.74 4.8a45.29 45.29 0 0 1-1.72 5.14l-2.22 5.49-29.94 74.26c-.83 2.13-1.92 4.83-3.25 8.1a42.1 42.1 0 0 1-4.46 8.4 17.54 17.54 0 0 1-6.05 5.43c-2.4 1.3-5.32 1.94-8.74 1.94-4.42 0-7.94-1-10.57-3.02a20.46 20.46 0 0 1-5.83-6.63c-1.25-2.4-3.37-7.14-6.34-14.22l-29.7-73.46c-.69-1.83-1.4-3.66-2.12-5.49a47.96 47.96 0 0 1-1.82-5.6 20 20 0 0 1-.75-4.9c0-2.14.65-4.25 1.95-6.35 1.3-2.1 3.08-3.8 5.37-5.14 2.28-1.33 4.76-2 7.42-2 5.18 0 8.74 1.49 10.68 4.46 1.95 2.97 4.1 7.95 6.46 14.96Zm133.1-2.17v3.77c5.48-7.23 11.48-12.55 17.99-15.94 6.51-3.39 14-5.08 22.45-5.08 8.22 0 15.57 1.79 22.05 5.37a34.12 34.12 0 0 1 14.5 15.2 36.16 36.16 0 0 1 4 12.33c.61 4.42.92 10.06.92 16.91v58.04c0 6.24-1.43 10.97-4.29 14.16-2.85 3.2-6.57 4.8-11.13 4.8-4.65 0-8.42-1.64-11.32-4.91-2.89-3.28-4.34-7.96-4.34-14.05V319.3c0-10.29-1.42-18.15-4.28-23.6-2.86-5.44-8.55-8.17-17.08-8.17a25.3 25.3 0 0 0-15.2 4.97c-4.56 3.32-7.92 7.87-10.05 13.66-1.52 4.64-2.28 13.33-2.28 26.04v102.04c0 6.32-1.47 11.06-4.4 14.22-2.93 3.16-6.72 4.74-11.37 4.74-4.5 0-8.19-1.64-11.08-4.91-2.9-3.28-4.34-7.96-4.34-14.05v-153.1c0-5.94 1.3-10.38 3.88-13.31 2.6-2.93 6.13-4.4 10.63-4.4 2.74 0 5.21.65 7.42 1.94a13.9 13.9 0 0 1 5.31 5.83c1.34 2.59 2 5.75 2 9.48Zm365.38 195.66c0 9.3-1.44 17.88-4.34 25.73a56.8 56.8 0 0 1-12.58 20.24 55.53 55.53 0 0 1-19.66 12.97c-7.63 3.02-16.2 4.52-25.73 4.52-9.45 0-17.95-1.52-25.5-4.57a56.62 56.62 0 0 1-19.6-13.1 56.6 56.6 0 0 1-12.59-20.12c-2.85-7.74-4.28-16.3-4.28-25.67 0-9.45 1.44-18.1 4.34-25.95a56.46 56.46 0 0 1 12.46-20.13 54.93 54.93 0 0 1 19.67-12.86c7.7-3.01 16.2-4.52 25.5-4.52 9.45 0 18.03 1.52 25.73 4.57 7.7 3.05 14.29 7.4 19.78 13.04a56.35 56.35 0 0 1 12.52 20.12c2.86 7.78 4.29 16.35 4.29 25.73Zm-31.32 0c0-12.73-2.8-22.64-8.4-29.73-5.61-7.09-13.14-10.63-22.6-10.63-6.09 0-11.46 1.58-16.11 4.74-4.65 3.17-8.24 7.83-10.75 14.01-2.52 6.17-3.78 13.38-3.78 21.61 0 8.16 1.24 15.28 3.72 21.38 2.48 6.1 6.02 10.77 10.63 14 4.62 3.25 10.05 4.87 16.3 4.87 9.45 0 16.98-3.56 22.58-10.7 5.6-7.12 8.4-16.97 8.4-29.55Z"
                className="fill-fifty dark:fill-white"
              />
              <path
                d="m104 187.38-32.46-53.35-19.93 18.86v29.24c0 7.09-1.87 12.55-5.6 16.36-3.72 3.82-8 5.73-12.86 5.73-5.66 0-10.1-1.89-13.33-5.66-3.24-3.77-4.85-9.34-4.85-16.7V25.06c0-8.18 1.57-14.4 4.71-18.66C22.82 2.13 27.31 0 33.15 0c5.66 0 10.15 1.93 13.47 5.8 3.33 3.85 4.99 9.56 4.99 17.1v89.18L92.96 68.7c5.12-5.39 9.03-9.07 11.72-11.05 2.7-1.97 5.97-2.96 9.84-2.96 4.58 0 8.4 1.46 11.45 4.38a14.55 14.55 0 0 1 4.58 10.98c0 5.39-4.99 12.57-14.96 21.55l-19.53 17.92 37.72 59.27c2.78 4.4 4.78 7.75 6 10.04a14 14 0 0 1 1.81 6.53c0 5.84-1.6 10.44-4.78 13.8-3.19 3.37-7.39 5.06-12.6 5.06-4.49 0-7.94-1.21-10.37-3.64-2.42-2.42-5.7-6.82-9.83-13.2Zm103.06-36.24v67.2c0 7.45-1.75 13.04-5.25 16.77-3.5 3.73-7.95 5.59-13.34 5.59-5.3 0-9.65-1.89-13.07-5.66-3.4-3.77-5.12-9.34-5.12-16.7V79.48c0-16.53 5.98-24.79 17.92-24.79 6.1 0 10.5 1.93 13.2 5.8 2.7 3.86 4.18 9.56 4.45 17.1 4.4-7.54 8.91-13.24 13.54-17.1 4.62-3.87 10.8-5.8 18.52-5.8a47.4 47.4 0 0 1 22.5 5.8c7.27 3.86 10.9 8.98 10.9 15.35 0 4.5-1.54 8.2-4.64 11.11-3.1 2.92-6.45 4.38-10.04 4.38-1.34 0-4.6-.83-9.76-2.49-5.17-1.66-9.73-2.5-13.68-2.5-5.39 0-9.79 1.42-13.2 4.25s-6.06 7.03-7.95 12.6c-1.88 5.56-3.18 12.19-3.9 19.87a308.76 308.76 0 0 0-1.08 28.08Zm180.1-12.66h-71.93c.1 8.35 1.77 15.72 5.05 22.1 3.28 6.37 7.64 11.17 13.07 14.4a34.5 34.5 0 0 0 17.98 4.86c4.4 0 8.42-.52 12.06-1.55a39.28 39.28 0 0 0 10.57-4.85 80.69 80.69 0 0 0 9.43-7.08c2.88-2.51 6.6-5.92 11.18-10.23 1.89-1.62 4.59-2.43 8.09-2.43 3.77 0 6.82 1.03 9.16 3.1 2.33 2.07 3.5 4.98 3.5 8.76 0 3.32-1.3 7.2-3.9 11.65-2.61 4.44-6.54 8.71-11.8 12.8-5.25 4.08-11.85 7.47-19.8 10.17-7.94 2.7-17.08 4.04-27.4 4.04-23.63 0-42-6.74-55.1-20.2-13.12-13.48-19.67-31.76-19.67-54.84 0-10.86 1.61-20.94 4.85-30.24 3.23-9.3 7.95-17.26 14.14-23.9 6.2-6.65 13.83-11.75 22.9-15.3 9.07-3.54 19.13-5.32 30.18-5.32 14.37 0 26.7 3.03 36.97 9.1 10.29 6.06 17.99 13.9 23.1 23.5 5.13 9.61 7.69 19.4 7.69 29.37 0 9.25-2.65 15.24-7.95 17.98-5.3 2.74-12.75 4.11-22.36 4.11Zm-71.93-20.88h66.68c-.9-12.57-4.29-21.98-10.17-28.22-5.88-6.24-13.63-9.36-23.24-9.36-9.16 0-16.68 3.16-22.56 9.5-5.88 6.33-9.45 15.69-10.7 28.08Z"
                className="fill-secondary dark:fill-white"
              />
              <path
                d="M541.4 183.47c-8.88 6.92-17.48 12.1-25.79 15.56-8.3 3.46-17.62 5.19-27.95 5.19-9.43 0-17.72-1.86-24.86-5.6-7.13-3.72-12.64-8.77-16.5-15.15a39.32 39.32 0 0 1-5.79-20.74c0-10.06 3.19-18.64 9.56-25.73 6.38-7.1 15.14-11.86 26.27-14.28 2.34-.54 8.13-1.75 17.38-3.64a760.8 760.8 0 0 0 23.78-5.18c6.6-1.58 13.76-3.48 21.48-5.73-.45-9.7-2.4-16.81-5.86-21.35-3.45-4.54-10.62-6.8-21.48-6.8-9.34 0-16.37 1.3-21.09 3.9-4.71 2.6-8.75 6.51-12.12 11.72-3.37 5.21-5.75 8.65-7.14 10.3-1.4 1.67-4.38 2.5-8.96 2.5-4.13 0-7.7-1.32-10.7-3.97-3.01-2.65-4.52-6.04-4.52-10.17 0-6.47 2.3-12.76 6.87-18.86 4.58-6.11 11.72-11.14 21.42-15.1 9.7-3.94 21.78-5.92 36.24-5.92 16.16 0 28.87 1.91 38.12 5.73 9.25 3.81 15.78 9.85 19.6 18.12 3.82 8.26 5.72 19.21 5.72 32.86a3004.65 3004.65 0 0 1-.27 42.03c0 6.92 1.15 14.13 3.44 21.62 2.29 7.5 3.43 12.33 3.43 14.49 0 3.77-1.77 7.2-5.32 10.3a17.84 17.84 0 0 1-12.05 4.65c-3.78 0-7.5-1.78-11.18-5.32-3.69-3.55-7.6-8.7-11.72-15.43Zm-2.42-53.2c-5.39 1.97-13.22 4.06-23.5 6.26a577.86 577.86 0 0 0-21.36 4.85 29.08 29.08 0 0 0-11.31 6.06c-3.6 3-5.39 7.2-5.39 12.6 0 5.56 2.11 10.3 6.33 14.2 4.22 3.91 9.75 5.87 16.57 5.87 7.28 0 13.99-1.6 20.14-4.79 6.15-3.18 10.66-7.3 13.54-12.32 3.32-5.57 4.98-14.73 4.98-27.48v-5.26ZM364.9 521.96v-3.08c-4.19 4.8-7.9 8.7-11.97 11.71-4.07 3.01-8.5 5.3-13.25 6.86a49.8 49.8 0 0 1-15.6 2.34 45.93 45.93 0 0 1-20.73-4.74 48.41 48.41 0 0 1-16.51-13.54 61.75 61.75 0 0 1-10.57-20.68 88.3 88.3 0 0 1-3.6-25.7c0-19.5 4.76-34.7 14.28-45.59 9.53-10.89 22.05-16.33 37.6-16.33 8.98 0 16.56 1.54 22.73 4.62 6.17 3.09 11.76 7.83 17.62 14.23v-46.04c0-6.4 1.7-11.24 4.25-14.51 2.56-3.28 6.2-4.92 10.91-4.92 4.73 0 9.65 1.5 12.2 4.52 2.55 3 3.83 7.44 3.83 13.3v137.56c0 5.94-2.1 10.38-4.84 13.35-2.75 2.97-6.84 4.47-11.19 4.47a13.6 13.6 0 0 1-10.56-4.63c-2.78-3.08-4.6-7.48-4.6-13.2Zm-60.92-45.8c0 8.45 1.31 15.65 3.94 21.59 2.63 5.94 6.23 10.41 10.8 13.42 4.56 3.01 9.55 4.51 14.96 4.51 5.49 0 10.5-1.42 15.02-4.28 4.54-2.86 8.15-7.24 10.86-13.14 2.7-5.9 4.05-13.27 4.05-22.1 0-8.3-1.35-15.45-4.05-21.43-2.7-5.97-6.36-10.54-10.97-13.7a26.2 26.2 0 0 0-15.14-4.75 25.54 25.54 0 0 0-15.3 4.86c-4.5 3.24-7.98 7.88-10.46 13.94-2.47 6.05-3.71 13.08-3.71 21.08Z"
                className="fill-primary dark:fill-white"
              />
            </svg>
          ) : (
            <h3 className={classes.name}>
              {data.profile.name} <span>| {data.profile.nameClaim}</span>
            </h3>
          )}
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        {data.menuItems.map((item: { title: string; link: string; id: number }) => (
          <NavbarItem key={item.id}>
            <Link
              href={item.link}
              className={`${linkStyle[item.id] || 'text-secondary'} ${classes.link}`}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <div className="hidden md:inline">
        <ThemeSwitcher />
      </div>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Zavřít' : 'Otevřít'}
        className={classes.menuToggle}
      />

      <NavbarMenu className="bg-header-backgroundMobileToggle flex flex-col justify-center items-center">
        {data.menuItems.map((item: { title: string; link: string; id: number }) => (
          <NavbarMenuItem key={item.id}>
            <Link href={item.link} onClick={() => {setIsMenuOpen(!isMenuOpen)}} className={`${classes.link} ${classes.linkMobile}`}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}

        <div className="md:hidden">
          <ThemeSwitcher />
        </div>
      </NavbarMenu>
    </Navbar>
  )
}
