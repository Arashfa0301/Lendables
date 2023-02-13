'use client';
import { NextUIProvider } from '@nextui-org/react';

export default function MyThemeProvider({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
