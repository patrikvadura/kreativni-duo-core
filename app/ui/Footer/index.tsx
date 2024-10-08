import React from 'react'
import Link from 'next/link'
import FooterSocial from './FooterSocial'
import classes from './index.module.scss'

export default function Footer() {
  return (
    <footer className="container">
      <div className={classes.main}>
        <Link href="https://visiosnap.cz" className={`${classes.copyright} group`}>
          Powered by{' '}
          <svg
            width={100}
            className="inline fill-black dark:fill-white opacity-75 transition duration-300 ease-in-out group-hover:opacity-100 ml-0.5 -translate-y-0.5"
            viewBox="0 0 656 146"
          >
            <path d="M26.5 17.5C55.4 35.8 69 53.1 64.3 71 59 90.2 36.8 94.8 0 89.5l3-20.2c27.2 4 40.2 1.2 41.5-3.6 1.6-6.1-7-17-29-30.9l11-17.3ZM77 0l19.4 6.4C87.8 32.6 88.2 46 92.7 48c5.7 2.6 18-4 35.4-23.2l15.2 13.7c-23 25.4-42.4 35.8-59.3 28C66 58 65.3 35.4 77 0Zm11 86.5c8.3-18 31-18.7 66.4-7L148 98.9c-26.1-8.7-39.4-8.2-41.5-3.7-2.7 5.7 3.9 18 23.1 35.4L116 145.7c-25.3-23-35.8-42.3-28-59.2Z" />
            <circle cx="55.3" cy="127.3" r="18.4" />
            <path d="m227.8 51.6 13 37.8 12.9-37.8h13.8l-17 49.1H230l-17-49h14.8Zm45 0h14.5v49.1h-14.5v-49Zm-.7-16.2H288v9.7h-15.8v-9.7Zm35.7 49.3a8.5 8.5 0 0 0 3.1 6c1.9 1.7 4.6 2.4 8.1 2.4 6 0 8.9-1.9 8.9-5.6a5 5 0 0 0-1.5-4c-1-.9-2.8-1.5-5.4-1.8l-11-1.4c-4.6-.6-8.2-2.1-10.6-4.5a13.3 13.3 0 0 1-3.6-9.8c0-5.3 2-9.3 6-12 4-2.7 9.5-4 16.3-4 6.8 0 12.2 1.3 16.3 4a15 15 0 0 1 6.7 12h-13.4c-.3-2.1-1.2-3.8-2.8-5a11 11 0 0 0-6.8-2c-3 0-5.3.6-6.7 1.6a4.6 4.6 0 0 0-2.2 4c0 1.4.5 2.5 1.4 3.3 1 .9 2.5 1.4 4.8 1.7l10.3 1.2c5.7.7 9.8 2.3 12.3 4.8a14 14 0 0 1 3.8 10.4c0 10.8-7.6 16.3-23 16.3-8.1 0-14.2-1.7-18.2-5s-6-7.5-6.1-12.6h13.3Zm42-33h14.5v49h-14.5v-49Zm-.7-16.3h15.8v9.7H349v-9.7Zm50 66.9a30 30 0 0 1-15.5-3.6 22 22 0 0 1-8.9-9.5c-1.9-4-2.8-8.3-2.8-13.1 0-4.8 1-9.2 2.8-13 1.9-4 4.9-7.2 9-9.5 4-2.4 9.1-3.5 15.3-3.5 6.3 0 11.4 1.1 15.5 3.5s7 5.6 9 9.5c1.8 4 2.7 8.3 2.7 13 0 4.7-.9 9.1-2.8 13-1.8 4-4.8 7.2-8.9 9.6-4 2.4-9.2 3.6-15.5 3.6Zm-12.6-26.1c0 5.3 1 9.1 3 11.4 1.9 2.2 5.1 3.3 9.5 3.3 4.6 0 7.8-1.1 9.8-3.3 2-2.3 3-6 3-11.4s-1-9.2-3-11.4c-2-2.2-5.2-3.4-9.8-3.4-4.4 0-7.6 1.2-9.6 3.4s-3 6-3 11.4Zm57.7 8.5a8.5 8.5 0 0 0 3.1 6c2 1.7 4.7 2.4 8.2 2.4 5.9 0 8.8-1.9 8.8-5.6a5 5 0 0 0-1.5-4c-1-.9-2.8-1.5-5.3-1.8l-11-1.4c-4.7-.6-8.2-2.1-10.6-4.5a13.3 13.3 0 0 1-3.7-9.8c0-5.3 2-9.3 6-12 4-2.7 9.5-4 16.3-4 6.8 0 12.2 1.3 16.3 4a15 15 0 0 1 6.8 12H464c-.2-2.1-1.2-3.8-2.8-5a11 11 0 0 0-6.8-2c-3 0-5.2.6-6.7 1.6a4.6 4.6 0 0 0-2.1 4c0 1.4.4 2.5 1.4 3.3.9.9 2.5 1.4 4.8 1.7l10.3 1.2c5.7.7 9.8 2.3 12.3 4.8a14 14 0 0 1 3.8 10.4c0 10.8-7.7 16.3-23 16.3-8.2 0-14.3-1.7-18.2-5-4-3.3-6-7.5-6.1-12.6h13.2Zm42.1-33h14.5v9.7c1.7-3.6 4-6.4 7-8.4 2.9-2 6.5-3 10.7-3 12.2 0 18.3 6.9 18.3 20.6v30.1h-14.6V72.8c0-3.8-.7-6.6-2.3-8.4-1.6-1.7-3.9-2.6-7-2.6-8 0-12 5.6-12 16.6v22.3h-14.6v-49Zm74 50.3c-5 0-9-1.3-11.9-3.9-3-2.6-4.5-6-4.5-10.4 0-4.2 1.2-7.5 3.6-10 2.4-2.4 6.6-4.1 12.6-5.2l11.5-2c2.3-.3 3.9-.9 4.8-1.6.9-.7 1.3-1.8 1.3-3.2a5 5 0 0 0-2-4.3c-1.2-1-3.4-1.4-6.5-1.4-6.4 0-9.7 2.5-10 7.6H545c.2-5.3 2.3-9.6 6.5-12.8 4.3-3.2 10-4.8 17.5-4.8 7.2 0 12.7 1.4 16.5 4.4 3.8 3 5.7 7 5.7 12.3V88c0 4.6.2 8.9.6 12.8h-12.6c-.5-3.8-.7-7.3-.7-10.5a16.3 16.3 0 0 1-6.4 8.6c-3 2.1-7 3.2-11.9 3.2Zm-2-15.8c0 1.9.6 3.3 1.9 4.3 1.3 1 3 1.6 5 1.6 3.9 0 7-1.3 9.2-4 2.2-2.6 3.3-6.2 3.3-10.8v-2.1c-1.1.8-2.3 1.4-3.5 1.8-1.2.5-2.7 1-4.5 1.3l-4.2 1c-2.6.7-4.4 1.5-5.6 2.6a5.6 5.6 0 0 0-1.6 4.3Zm74.6 16c-8 0-14-2.9-17.6-8.9v27h-14.5V51.6h14.5V59c3.6-5.9 9.5-8.8 17.6-8.8 7.6 0 13.2 2.4 17 7.3a30 30 0 0 1 5.6 18.8 30 30 0 0 1-5.7 18.7c-3.8 5-9.4 7.4-17 7.4Zm-17.6-26c0 5 1 8.7 3.1 11.1 2.1 2.4 5.4 3.6 10 3.6 4.5 0 7.7-1.2 9.6-3.5 2-2.3 3-6 3-11.2 0-5.2-1-9-3-11.3-1.9-2.3-5.1-3.5-9.6-3.5-4.6 0-7.9 1.2-10 3.6-2 2.4-3.1 6.1-3.1 11.2Z" />
          </svg>
        </Link>

        <FooterSocial />
      </div>
    </footer>
  )
}
