'use client';

import React from 'react';

import {
  Button,
  Card,
  Container,
  Grid,
  Input,
  Spacer,
  Text,
} from '@nextui-org/react';

import { Dropdown } from '@nextui-org/react';

//Import pocketbase
import pb from '@lib/pocketbase';

import { useForm } from 'react-hook-form';

//My components
import StandardImageList from './StandardImageList';

//Login to pocketbase
const pbLogin = async () => {
  await pb
    .collection('users')
    .authWithPassword('magnus.stromseng@gmail.com', 'asdasdasd');
  console.log(pb.authStore.isValid);
  console.log(pb.authStore.token);
  console.log(pb.authStore.model.id);
};

function getFirstItemOfSet(set) {
  for (let item of set) {
    if (item) {
      return item;
    }
  }
  return undefined;
}

export default function PostForm() {
  const [selectedCategory, setSelectedCategory] = React.useState('Category');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //Create record from form data and selected files
  const pbCreateAd = async (data, selectedCategory) => {
    const formData = new FormData();
    //Append form data to formData
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('seller', pb.authStore.model.id);
    let category = getFirstItemOfSet(selectedCategory);
    formData.append('category', category);
    formData.append('address', data.address);
    formData.append('zipcode', data.zipcode);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    //For each file, append to formData
    for (let i = 0; i < data.pictures.length; i++) {
      formData.append('pictures', data.pictures[i]);
    }
    console.log('Form Data before sending to pb:', formData);
    //Try to create record in pocketbase
    const result = await pb.collection('advertisements').create(formData);
    return result;
  };

  //Handle form submit
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    console.log('Form Data:', {
      Title: data.title,
      Category: { selectedCategory },
      Description: data.description,
      Price: data.price,
      Address: data.address,
      Zipcode: data.zipcode,
    });
    pbLogin();
    pbCreateAd(data, selectedCategory)
      .then((result) => {
        // success...
        console.log('Result:', result);
      })
      .catch((error) => {
        // error...
        console.log('Error:', error);
        console.log('Data:', error.data);
        let errorMessages = new Set();
        for (const [key, value] of Object.entries(error.data.data)) {
          console.log(key, value.message);
          errorMessages.add(key + ':' + value.message + ' ');
        }
      });
  };

  return (
    <>
      <Container xs>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <Card.Body>
              <Grid.Container gap={2} justify="center">
                <Text
                  h2
                  css={{
                    as: 'center',
                  }}
                >
                  {' '}
                  Create Post
                </Text>
                <Grid xs={12}>
                  <Input
                    {...register('title')}
                    clearable
                    bordered
                    fullWidth
                    size="lg"
                    label="Title"
                    required
                  ></Input>
                </Grid>
                <Grid xs={12} type="flex" direction="column">
                  <Text
                    css={{
                      marginBottom: '0.375rem',
                    }}
                  >
                    Category
                  </Text>
                  <Dropdown>
                    <Dropdown.Button
                      flat
                      css={{
                        width: '100%',
                      }}
                    >
                      {selectedCategory}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      aria-label="Single selection actions"
                      selectionMode="single"
                      disallowEmptySelection
                      selectedKeys={selectedCategory}
                      onSelectionChange={setSelectedCategory}
                    >
                      <Dropdown.Item key="Electronics">
                        Electronics
                      </Dropdown.Item>
                      <Dropdown.Item key="Clothing">Clothing</Dropdown.Item>
                      <Dropdown.Item key="Other">Other</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid>
                <Grid xs={12}>
                  <Input
                    {...register('description')}
                    clearable
                    bordered
                    fullWidth
                    size="lg"
                    label="Description"
                  ></Input>
                </Grid>
                <Grid xs={12}>
                  <Input
                    {...register('price')}
                    clearable
                    bordered
                    fullWidth
                    size="lg"
                    label="Price"
                    placeholder="Kr."
                  ></Input>
                </Grid>
                <Grid xs={12}>
                  <Input
                    type="file"
                    label="Upload images"
                    {...register('pictures')}
                  ></Input>
                </Grid>
                <Grid xs={12}>
                  <Input
                    {...register('address')}
                    clearable
                    bordered
                    fullWidth
                    size="lg"
                    label="Street Address"
                  ></Input>
                </Grid>
                <Grid xs={12}>
                  <Input
                    {...register('phone')}
                    clearable
                    bordered
                    fullWidth
                    size="lg"
                    label="Phone Number"
                  ></Input>
                </Grid>

                <Grid xs={12}>
                  <Input
                    {...register('zipcode')}
                    clearable
                    bordered
                    fullWidth
                    size="lg"
                    label="Zipcode"
                  ></Input>
                </Grid>
                <Grid xs={12}>
                  <Input
                    {...register('email')}
                    clearable
                    bordered
                    fullWidth
                    size="lg"
                    label="Email"
                  ></Input>
                </Grid>
                <Grid xs={12}>
                  <Button
                    type="submit"
                    css={{
                      width: '100%',
                    }}
                  >
                    Create Post
                  </Button>
                </Grid>
              </Grid.Container>
            </Card.Body>
          </Card>
        </form>
      </Container>
    </>
  );
}
