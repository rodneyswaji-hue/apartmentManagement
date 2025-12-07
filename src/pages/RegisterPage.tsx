import RegisterForm from '../auth/RegisterForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 justify-center items-center">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  )
}
