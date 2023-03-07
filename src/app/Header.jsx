/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
'use client';

import { useState, useEffect } from 'react';
import pb from './(lib)/pocketbase';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Dropdown } from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [username, setUsername] = useState();
  const [loggedIn, setLoggedIn] = useState(false); // logged out by default
  const router = useRouter();

  useEffect(() => {
    setUsername(pb.authStore.model?.username);
  }, []);

  useEffect(() => {
    setLoggedIn(pb.authStore.isValid); // calculating logged in state within effect
  }, []);

  const removeListener = pb.authStore.onChange((token, model) => {
    setUsername(model?.username);
  });

  function routeToPage(key) {
    if (key === 'profile') {
      router.push(`/profile/${pb.authStore.model.id}`);
    } else if (key === 'myPosts') {
      router.push(`/user/${pb.authStore.model.id}`);
    } else if (key === 'logout') {
      pb.authStore.clear();
      setLoggedIn(false);
      router.push('/');
    }
  }

  function LinkLogin(username) {
    return (
      <Link href="/login">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,1,0"
        />
        <span className={`${styles.icon} material-symbols-outlined`}>
          account_circle
        </span>
        {username ?? 'Log in'}
      </Link>
    );
  }

  function LinkUser(username) {
    return (
      <>
        <Dropdown>
          <Dropdown.Trigger>
            <Grid.Container alignItems="center" gap={1}>
              <Grid>
                <Avatar></Avatar>
              </Grid>
              <Grid>
                <p>{username ?? 'Log in'}</p>
              </Grid>
            </Grid.Container>
          </Dropdown.Trigger>
          <Dropdown.Menu
            onAction={routeToPage}
            onSelectionChange={routeToPage}
            aria-label="User actions"
          >
            <Dropdown.Item key="profile" aria-label="Profile">
              <Link href={`/user/${pb.authStore.model.id}`}>Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item key="myPosts" aria-label="My Posts">
              My Posts
            </Dropdown.Item>
            <Dropdown.Item withDivider key="logout" color="error">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }

  return (
    <nav className={styles.navBar}>
      <Link href="/">
        <Image
          src="/Lendables_light.png"
          height={52}
          width={180}
          alt={'logo'}
          priority={true}
        />
      </Link>
      <ul>
        <li>
          <Link href="/posts">
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0"
            />
            <span className={`${styles.icon} material-symbols-outlined`}>
              search
            </span>
            Søk
          </Link>
        </li>
        <li>
          <Link href="/createad">
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0"
            />
            <span className={`${styles.icon} material-symbols-outlined`}>
              add_circle
            </span>
            Ny annonse
          </Link>
        </li>
        <li>{loggedIn ? LinkUser(username) : LinkLogin(username)}</li>
      </ul>
    </nav>
  );
}
