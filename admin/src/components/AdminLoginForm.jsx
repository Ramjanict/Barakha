import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AdminLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password });
  };

  return (
    <div className="flex w-full min-h-screen">
      {/* Left side - Blue background with shapes */}
      <div className="hidden md:flex md:w-1/2 bg-[#003366] text-white relative overflow-hidden">
        <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2 w-24 h-24 rounded-full bg-[#034e99]"></div>
        <div className="absolute top-[25%] right-[20%] transform rotate-45 w-16 h-16 bg-[#034e99]"></div>
        <div className="absolute top-[45%] right-[15%] transform w-0 h-0 border-l-[50px] border-l-transparent border-t-[80px] border-t-[#034e99] border-r-[50px] border-r-transparent"></div>
        <div className="absolute bottom-[15%] left-[15%] transform w-32 h-32 rounded-full bg-[#034e99]"></div>
        <div className="absolute bottom-[5%] right-[10%] transform rotate-45 w-40 h-40 bg-[#034e99]"></div>

        <div className="z-10 flex flex-col justify-center px-12 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome Back!</h1>
          <p className="text-lg">
            To keep connected with us plase login
            <br />
            with your personal info
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-[#f7fcff]">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold mb-10 text-center text-[#d4af37]">
            Admin LogIn
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your phone number"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 border rounded-md"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full p-6 bg-[#003366] hover:bg-[#034e99] text-white font-medium rounded-md transition-colors"
            >
              Log In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLoginForm;
