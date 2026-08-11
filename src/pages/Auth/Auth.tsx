import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side */}

        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8">
          <h1 className="text-5xl font-bold">NexDrive</h1>

          <p className="mt-4 text-blue-100 leading-7">
            Shop smarter with premium gadgets and accessories.
          </p>

          <div className="mt-10">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-lg font-semibold">✨ Secure Authentication</p>
              <p className="text-sm text-blue-100 mt-2">
                Login or create your account to access exclusive products and
                offers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-6 md:p-8">
          {/* Toggle */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-6">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-2.5 rounded-full font-medium transition ${
                isLogin
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-2.5 rounded-full font-medium transition ${
                !isLogin
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Sign Up
            </button>
          </div>

          <h2 className="text-2xl font-bold mb-2">
            {isLogin ? "Welcome Back 👋" : "Create Account"}
          </h2>

          <p className="text-gray-500 mb-6">
            {isLogin
              ? "Login to continue shopping."
              : "Create your account and start shopping."}
          </p>

          <form className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <FiUser className="absolute left-4 top-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-11 py-2.5 border rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            )}

            <div className="relative">
              <FiMail className="absolute left-4 top-3.5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-11 py-2.5 border rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-4 top-3.5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-11 py-2.5 border rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {!isLogin && (
              <div className="relative">
                <FiLock className="absolute left-4 top-3.5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full pl-11 py-2.5 border rounded-xl outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            )}

            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <button
              type="button"
              className="w-full py-2.5 border rounded-xl hover:bg-gray-50 transition font-medium"
            >
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
