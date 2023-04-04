import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout pageTitle='Home Page'>
      <Image src="/DoCMS.png" width={200} height={200} alt='profile' />
      <h1 className={styles['title-homepage']}>Welcome to LMS JTK</h1>
    </Layout>
  );
}
