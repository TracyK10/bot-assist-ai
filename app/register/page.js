import RegisterForm from '@/components/RegisterForm';
import { Container, Box, Typography } from "@mui/material";
import styles from '@/styles/register.module.css';

export default function RegisterPage() {
  return (
    <Container className={styles.registerContainer}>
      <Box className={styles.registerCard}>
        <Typography variant="h4" className={styles.registerTitle}>
          Register
        </Typography>
        <RegisterForm />
      </Box>
    </Container>
  )
}