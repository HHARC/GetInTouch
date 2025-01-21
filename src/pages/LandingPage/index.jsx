import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    localStorage.setItem("username", value);
  };

  const handleSubmit = () => {
    if (username !== "") {
      localStorage.setItem("clientID", Date.now());
      navigate("/Chat");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-blue-900 via-blue-600 to-blue-400 overflow-hidden flex justify-center items-center">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="absolute w-24 h-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-50 rounded-full blur-xl hover:blur-none hover:opacity-100 transition-all duration-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Login Card */}
      <div className="relative z-10 p-8 bg-white/30 backdrop-blur-md rounded-lg shadow-xl border border-white/10">
        <label
          htmlFor="username"
          className="block text-white font-bold text-lg"
        >
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="w-[350px] p-2 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="block w-full mt-4 p-3 text-white bg-blue-500 hover:bg-blue-700 rounded-md transition-all duration-150"
        >
          Submit
        </button>
      </div>

      {/* Custom Styles */}
      <style>
        {`
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-20px);
                        }
                    }
                `}
      </style>
    </div>
  );
};

export default LandingPage;
