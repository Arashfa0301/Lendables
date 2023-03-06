'use client';
import { Grid, Card, Text, Avatar } from '@nextui-org/react';
import pb from '../../(lib)/pocketbase';

export default function UserCard({ userID }) {
  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12}>
          <Card>
            <Card.Header>
              <Avatar css={{ marginRight: 5, size: '$17' }}></Avatar>
              <Text h2> {}</Text>
            </Card.Header>
            <Card.Divider></Card.Divider>
            <Card.Body>
              <Text>Username: </Text>
              <Text>Email: </Text>
              <Text>Telephone Number: </Text>
            </Card.Body>
            <Card.Divider></Card.Divider>
            <Card.Footer>Actions</Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
}
