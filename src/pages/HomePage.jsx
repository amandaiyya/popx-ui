import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="app-container px-5 py-8 flex flex-col justify-end gap-8 shadow-lg">
      <div className="space-y-2 text-text">
        <p className="text-3xl font-semibold">Welcome to PopX</p>
        <p className="text-xl opacity-60 max-w-[25ch]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="space-y-3">
        <Button 
          isPrimary={true} 
          onClick={() => navigate('/signup')}
        >Create Account
        </Button>

        <Button
          isPrimary={false}
          onClick={() => navigate('/login')}
          className="font-semibold"
        >Already Registered? Login
        </Button>
      </div>
    </div>
  )
}

export default HomePage;
