'use client';
import { Card } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Spacer } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';
import pb from 'src/app/(lib)/pocketbase.js';

export default function UserCard({ userID }) {
  return (
    <>
      <Card>
        <Card.Header>
          <Grid.Container alignItems="center">
            <Grid xs={10}>
              <Text h3>Name</Text>
            </Grid>
            <Grid xs={1}>
              <Rating name="read-only" value={3} readOnly />
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text h3>POSTS</Text>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </>
  );
}
