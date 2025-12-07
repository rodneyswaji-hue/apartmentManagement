import LoginForm from '../auth/LoginForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 justify-center items-center">
        <LoginForm onLogin={(user)=>console.log("Logged in:", user)} />
      </div>
      <Footer />
    </div>
  )
}
