import { useState } from "react";
import type { FormEvent } from "react";
import {
  FiEyeOff,
  FiEye,
  FiLock,
  FiMail,
  FiUser,
  FiPhone,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// backend api
import { registerUser, loginUser } from "../../api/auth.api";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+92");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Get authentication state/actions
  const { setUser } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      // =========================
      // LOGIN
      // =========================
      if (isLogin) {
        const data = await loginUser({
          email,
          password,
        });

        // Update global authentication state
        setUser(data.user);

        // ========================= // ADMIN REDIRECT // =========================
        if (data.user.role === "admin") {
          navigate("/dashboard");
          return;
        }

        // Check if user was trying to book a specific vehicle
        const bookingVehicleId = sessionStorage.getItem("bookingVehicleId");

        if (bookingVehicleId) {
          sessionStorage.removeItem("bookingVehicleId");

          navigate(`/booking/${bookingVehicleId}`);
        } else {
          navigate("/");
        }

        return;
      }

      // =========================
      // REGISTER
      // =========================

      const data = await registerUser({
        name,
        email,
        phone,
        password,
        confirmPassword,
      });

      // Registration also logs the user in
      setUser(data.user);

      // Check if user was trying to book a specific vehicle
      const bookingVehicleId = sessionStorage.getItem("bookingVehicleId");

      if (bookingVehicleId) {
        sessionStorage.removeItem("bookingVehicleId");

        navigate(`/booking/${bookingVehicleId}`);
      } else {
        navigate("/");
      }

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 px-4 py-10 text-gray-900 dark:bg-[#050816] dark:text-white">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] dark:bg-blue-600/20" />

      <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px] dark:bg-indigo-600/20" />

      {/* Main Card */}
      <div className="relative grid w-full max-w-4xl overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-2xl md:grid-cols-2 dark:border-white/10 dark:bg-white/[0.04] dark:backdrop-blur-2xl">
        {/* ================= LEFT SIDE ================= */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-[#07111f] p-10 text-white md:flex">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" />

          <div className="relative z-10">
            {/* Logo */}
            <Link to="/" className="mb-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold shadow-lg shadow-blue-600/30">
                N
              </div>

              <span className="text-xl font-bold tracking-tight">NexDrive</span>
            </Link>

            {/* Heading */}
            <h1 className="max-w-sm text-4xl leading-tight font-bold">
              Drive your shopping experience to the{" "}
              <span className="text-blue-400">next level.</span>
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
              Discover premium vehicles, automotive parts, accessories, and
              performance products built for enthusiasts.
            </p>
          </div>

          {/* Bottom */}
          <div className="relative z-10">
            <div className="h-px w-full bg-white/10" />

            <p className="mt-5 text-xs text-gray-500">
              Premium automotive products. Built for performance.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="bg-white p-6 sm:p-8 md:p-10 dark:bg-[#0b1020]/95">
          {/* Mobile Logo */}
          <Link
            to="/"
            className="mb-7 flex items-center justify-center gap-2 md:hidden"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
              N
            </div>

            <span className="text-lg font-bold">NexDrive</span>
          </Link>

          {/* Login / Signup Toggle */}
          <div className="mb-8 flex rounded-xl border border-gray-200 bg-gray-100 p-1 dark:border-white/10 dark:bg-black/20">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`w-1/2 rounded-lg py-2.5 text-sm font-medium transition-all ${
                isLogin
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`w-1/2 rounded-lg py-2.5 text-sm font-medium transition-all ${
                !isLogin
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Heading */}
          <div className="mb-7">
            <p className="text-sm font-medium tracking-wider text-blue-600 uppercase dark:text-blue-500">
              {isLogin ? "Welcome Back" : "Get Started"}
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight">
              {isLogin ? "Login to NexDrive" : "Create your account"}
            </h2>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
              {isLogin
                ? "Enter your details to continue."
                : "Join NexDrive and explore our premium collection."}
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            {!isLogin && (
              <div className="group relative">
                <FiUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 transition group-focus-within:text-blue-500 dark:text-gray-600" />

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-11 text-sm text-gray-900 transition outline-none placeholder:text-gray-400 focus:border-blue-500/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-gray-600 dark:focus:bg-white/[0.06]"
                />
              </div>
            )}

            {/* Email */}
            <div className="group relative">
              <FiMail className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 transition group-focus-within:text-blue-500 dark:text-gray-600" />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-11 text-sm text-gray-900 transition outline-none placeholder:text-gray-400 focus:border-blue-500/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-gray-600 dark:focus:bg-white/[0.06]"
              />
            </div>

            {/* phone */}
            {!isLogin && (
              <div className="group relative">
                <FiPhone className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 transition group-focus-within:text-blue-500 dark:text-gray-600" />

                <input
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-4 pl-11 text-sm text-gray-900 transition outline-none placeholder:text-gray-400 focus:border-blue-500/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-gray-600 dark:focus:bg-white/[0.06]"
                />
              </div>
            )}

            {/* Password */}
            <div className="group relative">
              <FiLock className="absolute top-1/2 left-4 z-10 -translate-y-1/2 text-gray-400 transition group-focus-within:text-blue-500 dark:text-gray-600" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-11 pl-11 text-sm text-gray-900 transition outline-none placeholder:text-gray-400 focus:border-blue-500/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-gray-600 dark:focus:bg-white/[0.06]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 transition hover:text-blue-500 dark:text-gray-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>

            {/* Confirm Password */}
            {!isLogin && (
              <div className="group relative">
                <FiLock className="absolute top-1/2 left-4 z-10 -translate-y-1/2 text-gray-400 transition group-focus-within:text-blue-500 dark:text-gray-600" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-11 pl-11 text-sm text-gray-900 transition outline-none placeholder:text-gray-400 focus:border-blue-500/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-gray-600 dark:focus:bg-white/[0.06]"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 transition hover:text-blue-500 dark:text-gray-600"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? (
                    <FiEyeOff size={18} />
                  ) : (
                    <FiEye size={18} />
                  )}
                </button>
              </div>
            )}

            {/* Forgot Password */}
            {isLogin && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-xs font-medium text-blue-600 transition hover:text-blue-500 hover:underline dark:text-blue-500"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-600/30 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Please wait"
                : isLogin
                  ? "Login to NexDrive"
                  : "Create Account"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 py-2">
              <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />

              <span className="text-[11px] font-medium text-gray-400 dark:text-gray-600">
                OR CONTINUE WITH
              </span>

              <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-50 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300 dark:hover:bg-white/[0.07] dark:hover:text-white"
            >
              <span className="text-base font-bold text-red-500">G</span>
              Continue with Google
            </button>
          </form>

          {/* Terms */}
          <p className="mt-7 text-center text-xs leading-5 text-gray-400 dark:text-gray-600">
            By continuing, you agree to our{" "}
            <button
              type="button"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Terms
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Privacy Policy
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Auth;
