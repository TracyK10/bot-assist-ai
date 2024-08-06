import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-radial from-blue-400 to-purple-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <LoginForm />
      </div>
    </div>
  );
}