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

export default function ProfileCard({ userRecord }) {
  return (
    <>
      <Card>
        <Card.Header>
          <Grid.Container alignItems="center">
            <Grid xs={10} alignItems="center" gap={2}>
              <Avatar
                css={{
                  marginRight: '$3',
                }}
                src={`http://127.0.0.1:8090/api/files/users/${userRecord.id}/${userRecord.avatar}`}
              ></Avatar>
              <Text h3>{userRecord.name}</Text>
            </Grid>
            <Grid xs={1}></Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Spacer y={1} />
          <Grid.Container direction="column">
            <Grid>
              <Input
                bordered
                labelPlaceholder="Username"
                initialValue={userRecord.username}
              />
            </Grid>
            <Spacer y={2} />
            <Grid>
              <Input
                bordered
                labelPlaceholder="Email"
                initialValue={userRecord.email}
              />
            </Grid>
            <Spacer y={2} />
            <Grid>
              <Input
                bordered
                labelPlaceholder="Phone"
                initialValue={userRecord.telephone_number}
              />
            </Grid>
            <Spacer y={2} />
            <Grid>
              <Input bordered labelPlaceholder="Old Password" />
            </Grid>
            <Spacer y={2} />
            <Grid>
              <Input bordered labelPlaceholder="New Password" />
            </Grid>
            <Spacer y={2} />
            <Grid>
              <Input bordered labelPlaceholder="New Password (again)" />
            </Grid>
          </Grid.Container>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Button>Save Changes</Button>
          <Button>Change Password</Button>
        </Card.Footer>
      </Card>
    </>
  );
}
