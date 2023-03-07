'use client';
import { Button } from '@nextui-org/react';
import UserCard from './UserCard';

export default function Page({ params }) {
  return (
    <>
      <UserCard userID={params.id}> </UserCard>
    </>
  );
}
