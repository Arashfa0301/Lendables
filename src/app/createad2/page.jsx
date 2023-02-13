'use client';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import AdForm from './AdForm';

export default function page() {
  return (
    <NextUIProvider>
      <AdForm></AdForm>
    </NextUIProvider>
  );
}
