'use client';

import { Card, Container, Input, Text } from '@nextui-org/react';

// Tittel
// Category
// Description
// Price
// IMG Upload
// Street Adress
// Zipcode
// Phone
// Email

export default function AdForm() {
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
          color="primary"
          size="lg"
          placeholder="Title"
          label="Title"
        ></Input>
        <Input
          label="Category"
          labelPlaceholder="Title"
          clearable
          required
        ></Input>
        <Input
          label="Description"
          labelPlaceholder="Description"
          clearable
          required
        ></Input>
        <Input
          label="Price"
          labelPlaceholder="Price"
          clearable
          required
        ></Input>
        <Input
          label="Street Address"
          labelPlaceholder="Street Address"
          clearable
          required
        ></Input>
        <Input
          label="Zipcode"
          labelPlaceholder="Zipcode"
          clearable
          required
        ></Input>
        <Input
          label="Phone"
          labelPlaceholder="Phone"
          clearable
          required
        ></Input>
        <Input
          label="Email"
          labelPlaceholder="Email"
          clearable
          required
        ></Input>
      </Card>
    </Container>
  );
}
