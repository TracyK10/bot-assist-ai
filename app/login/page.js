import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Login</h1>
      <LoginForm />
    </div>
  );
}