import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 py-8">
      <div className="grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">
        {/* Left Side */}

        <div className="hidden flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white md:flex">
          <h1 className="text-5xl font-bold">NexDrive</h1>

          <p className="mt-4 leading-7 text-blue-100">
            Shop smarter with premium gadgets and accessories.
          </p>

          <div className="mt-10">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <p className="text-lg font-semibold">✨ Secure Authentication</p>
              <p className="mt-2 text-sm text-blue-100">
                Login or create your account to access exclusive products and
                offers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-6 md:p-8">
          {/* Toggle */}
          <div className="mb-6 flex rounded-full bg-gray-100 p-1">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`w-1/2 rounded-full py-2.5 font-medium transition ${
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
              className={`w-1/2 rounded-full py-2.5 font-medium transition ${
                !isLogin
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Sign Up
            </button>
          </div>

          <h2 className="mb-2 text-2xl font-bold">
            {isLogin ? "Welcome Back 👋" : "Create Account"}
          </h2>

          <p className="mb-6 text-gray-500">
            {isLogin
              ? "Login to continue shopping."
              : "Create your account and start shopping."}
          </p>

          <form className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <FiUser className="absolute top-3.5 left-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border py-2.5 pl-11 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            )}

            <div className="relative">
              <FiMail className="absolute top-3.5 left-4 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border py-2.5 pl-11 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="relative">
              <FiLock className="absolute top-3.5 left-4 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border py-2.5 pl-11 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {!isLogin && (
              <div className="relative">
                <FiLock className="absolute top-3.5 left-4 text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full rounded-xl border py-2.5 pl-11 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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
              className="w-full rounded-xl bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-400">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <button
              type="button"
              className="w-full rounded-xl border py-2.5 font-medium transition hover:bg-gray-50"
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
