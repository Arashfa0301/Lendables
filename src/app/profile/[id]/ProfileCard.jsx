'use client';
import { Avatar, Card } from '@nextui-org/react';
import { Text } from '@nextui-org/react';

import Typography from '@mui/material/Typography';
import { Spacer } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';
import pb from 'src/app/(lib)/pocketbase.js';
import { Button } from '@nextui-org/react';
import { css } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { Container, Row, Col } from '@nextui-org/react';
import { Delete, Camera } from 'react-iconly';
import { useForm } from 'react-hook-form';

export default function ProfileCard({ userRecord }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const validateForm = (data) => {};

  const onSubmit = (data) => {
    validateForm(data);

    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('name', data.fullname);
    formData.append('email', data.email);
    formData.append('telephone_number', data.phone);
    formData.append('password', data.newpw1);
    formData.append('passwordConfirm', data.newpw2);
    formData.append('oldPassword', data.oldpw);
    updateProfile(formData);
  };

  async function updateProfile(data) {
    console.log('Updating profile...');
    console.log('FormData: ', data);
    const record = await pb.collection('users').update(userRecord.id, data);
    console.log('Record: ', record);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Card.Header>
          <Grid.Container alignItems="center">
            <Grid xs={10} alignItems="center" gap={2}>
              <Text h3>Profile Information</Text>
            </Grid>
            <Grid xs={1}></Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Grid.Container direction="column">
            <Grid.Container direction="row">
              <Grid>
                <Avatar
                  css={{
                    marginRight: '$3',
                    size: '$40',
                  }}
                  src={`http://127.0.0.1:8090/api/files/users/${userRecord.id}/${userRecord.avatar}`}
                ></Avatar>
              </Grid>
              <Grid>
                <Grid.Container direction="column" gap={3} alignItems="center">
                  <Grid>
                    <Button icon={<Camera set="bold" primaryColor="white" />}>
                      Change Avatar
                    </Button>
                  </Grid>
                  <Grid>
                    <Button
                      icon={<Delete set="bold" primaryColor="white" />}
                      color="error"
                    >
                      Remove Avatar
                    </Button>
                  </Grid>
                </Grid.Container>
              </Grid>
            </Grid.Container>
            <Grid>
              <Input
                bordered
                required={true}
                type="text"
                label="Username"
                initialValue={userRecord.username}
                {...register('username', {
                  required: true,
                })}
              />
            </Grid>
            <Grid>
              <Input
                bordered
                required={true}
                type="text"
                label="Full Name"
                initialValue={userRecord.name}
                {...register('fullname', {
                  required: true,
                })}
              />
            </Grid>
            <Grid>
              <Input
                bordered
                required={true}
                type="email"
                label="Email"
                initialValue={userRecord.email}
                {...register('email', {
                  required: true,
                })}
              />
            </Grid>
            <Grid>
              <Input
                bordered
                required={true}
                type="tel"
                label="Phone"
                initialValue={userRecord.telephone_number}
                {...register('phone', {
                  required: true,
                })}
              />
            </Grid>
            <Grid>
              <Text h3>Change Password</Text>
            </Grid>
            <Grid>
              <Input.Password
                bordered
                type="password"
                label="Old Password"
                {...register('oldpw')}
              />
            </Grid>
            <Grid>
              <Input.Password
                bordered
                type="password"
                label="New Password"
                {...register('newpw1')}
              />
            </Grid>
            <Grid>
              <Input.Password
                bordered
                type="password"
                label="New Password (again)"
                {...register('newpw2')}
              />
            </Grid>
            <Spacer y={2} />
            <Grid>
              <Button type="submit">Save Changes</Button>
            </Grid>
          </Grid.Container>
        </Card.Body>
        <Card.Divider />
        <Card.Footer></Card.Footer>
      </Card>
    </form>
  );
}
