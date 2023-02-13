'use client';

import React from 'react';

import {
  Card,
  Container,
  Input,
  NextUIProvider,
  Text,
  Button,
  Spacer,
} from '@nextui-org/react';

import { Dropdown } from '@nextui-org/react';

export default function AdForm() {
  const [selected, setSelected] = React.useState(new Set(['text']));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  );
  return (
    <Container
      display="flex"
      alignItems="center"
      justify="center"
      css={{ minHeight: '100vh' }}
    >
      <Card css={{ mw: '420px', p: '20px' }}>
        <Text
          h2
          css={{
            as: 'center',
          }}
        >
          {' '}
          Create Post
        </Text>
        <Input
          clearable
          bordered
          fullWidth
          size="lg"
          label="Title"
          required
        ></Input>
        <Dropdown>
          <Dropdown.Button flat>Category</Dropdown.Button>
          <Dropdown.Menu
            aria-label="Single selection actions"
            selectionMode="single"
            disallowEmptySelection
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            <Dropdown.Item key="electronics">Electronics</Dropdown.Item>
            <Dropdown.Item key="clothing">Clothing</Dropdown.Item>
            <Dropdown.Item key="other">Other</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Input
          clearable
          bordered
          fullWidth
          size="lg"
          label="Description"
          required
        ></Input>
        <Input
          clearable
          bordered
          fullWidth
          size="lg"
          label="Price"
          placeholder="Kr."
          required
        ></Input>
        <Input
          clearable
          bordered
          fullWidth
          size="lg"
          label="Street Address"
        ></Input>
        <Input clearable bordered fullWidth size="lg" label="Zipcode"></Input>
        <Input
          clearable
          bordered
          fullWidth
          size="lg"
          label="Phone Number"
        ></Input>
        <Input clearable bordered fullWidth size="lg" label="Email"></Input>
        <Spacer y={1} />
        <Button>Create Post</Button>
      </Card>
    </Container>
  );
}
