'use client';
import { maxWidth } from '@mui/system';
import { Card, Badge, Row, Text, Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import pb from '../(lib)/pocketbase';
import styles from '@/app/posts/Post.module.css';
import { useRouter } from 'next/navigation';

export default function Post({
  title,
  created,
  id,
  price,
  sellerName,
  telephone_number,
  description,
  image,
  category,
}) {
  const router = useRouter();

  return (
    <Card
      isPressable
      className={styles.card}
      onPress={() => {
        console.log('pressed');
        router.push(`posts/${id}`);
      }}
    >
      <div style={{ position: 'relative' }}>
        <Card.Image
          width={'100%'}
          height={250}
          objectFit="cover"
          src={
            image
              ? `http://127.0.0.1:8090/api/files/advertisements/${id}/${image}`
              : '/tool.jpeg'
          }
          alt="Default Image"
          quality={100}
        />
        <div className={styles.badgeContainer}>
          <Badge>{category}</Badge>
        </div>
      </div>
      <Card.Body css={{ p: 20 }}>
        <Row wrap="wrap" justify="space-between" align="center">
          <Text b>{title}</Text>
          <Text
            css={{
              color: '$accents7',
              fontWeight: '$semibold',
              fontSize: '$sm',
            }}
          >
            {price} kr / dag
          </Text>
        </Row>
        <Text weight="light" size="$sm">
          {description.length < 120
            ? description
            : description.slice(0, 120) + '...'}
        </Text>
      </Card.Body>
    </Card>
  );
}
