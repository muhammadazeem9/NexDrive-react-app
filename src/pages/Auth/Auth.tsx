// import { useState } from "react";
// import { FiMail, FiLock, FiUser } from "react-icons/fi";

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState<boolean>(true);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 py-8">
//       <div className="grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">
//         {/* Left Side */}

//         <div className="hidden flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white md:flex">
//           <h1 className="text-5xl font-bold">NexDrive</h1>

//           <p className="mt-4 leading-7 text-blue-100">
//             Shop smarter with premium gadgets and accessories.
//           </p>

//           <div className="mt-10">
//             <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
//               <p className="text-lg font-semibold">✨ Secure Authentication</p>
//               <p className="mt-2 text-sm text-blue-100">
//                 Login or create your account to access exclusive products and
//                 offers.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="p-6 md:p-8">
//           {/* Toggle */}
//           <div className="mb-6 flex rounded-full bg-gray-100 p-1">
//             <button
//               type="button"
//               onClick={() => setIsLogin(true)}
//               className={`w-1/2 rounded-full py-2.5 font-medium transition ${
//                 isLogin
//                   ? "bg-blue-600 text-white shadow"
//                   : "text-gray-600 hover:text-blue-600"
//               }`}
//             >
//               Login
//             </button>

//             <button
//               type="button"
//               onClick={() => setIsLogin(false)}
//               className={`w-1/2 rounded-full py-2.5 font-medium transition ${
//                 !isLogin
//                   ? "bg-blue-600 text-white shadow"
//                   : "text-gray-600 hover:text-blue-600"
//               }`}
//             >
//               Sign Up
//             </button>
//           </div>

//           <h2 className="mb-2 text-2xl font-bold">
//             {isLogin ? "Welcome Back 👋" : "Create Account"}
//           </h2>

//           <p className="mb-6 text-gray-500">
//             {isLogin
//               ? "Login to continue shopping."
//               : "Create your account and start shopping."}
//           </p>

//           <form className="space-y-4">
//             {!isLogin && (
//               <div className="relative">
//                 <FiUser className="absolute top-3.5 left-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full rounded-xl border py-2.5 pl-11 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                 />
//               </div>
//             )}

//             <div className="relative">
//               <FiMail className="absolute top-3.5 left-4 text-gray-400" />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full rounded-xl border py-2.5 pl-11 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//               />
//             </div>

//             <div className="relative">
//               <FiLock className="absolute top-3.5 left-4 text-gray-400" />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full rounded-xl border py-2.5 pl-11 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//               />
//             </div>

//             {!isLogin && (
//               <div className="relative">
//                 <FiLock className="absolute top-3.5 left-4 text-gray-400" />
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   className="w-full rounded-xl border py-2.5 pl-11 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                 />
//               </div>
//             )}

//             {isLogin && (
//               <div className="text-right">
//                 <button
//                   type="button"
//                   className="text-sm text-blue-600 hover:underline"
//                 >
//                   Forgot Password?
//                 </button>
//               </div>
//             )}

//             <button
//               type="submit"
//               className="w-full rounded-xl bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700"
//             >
//               {isLogin ? "Login" : "Create Account"}
//             </button>

//             <div className="flex items-center gap-3">
//               <div className="h-px flex-1 bg-gray-200" />
//               <span className="text-sm text-gray-400">OR</span>
//               <div className="h-px flex-1 bg-gray-200" />
//             </div>

//             <button
//               type="button"
//               className="w-full rounded-xl border py-2.5 font-medium transition hover:bg-gray-50"
//             >
//               Continue with Google
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-4 py-8">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

      {/* Main Card */}
      <div className="relative grid w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-2xl md:grid-cols-2">
        {/* Left Side */}
        <div className="relative hidden flex-col justify-between overflow-hidden p-10 text-white md:flex">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" />

          <div className="relative z-10">
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold shadow-lg shadow-blue-600/30">
                N
              </div>

              <span className="text-xl font-bold tracking-tight">NexDrive</span>
            </div>

            <h1 className="max-w-sm text-4xl leading-tight font-bold">
              Drive your shopping experience to the{" "}
              <span className="text-blue-500">next level.</span>
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
              Discover premium gadgets, accessories and technology built for
              your everyday life.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#0b1020]/90 p-6 sm:p-8 md:p-10">
          {/* Toggle */}
          <div className="mb-8 flex rounded-xl border border-white/10 bg-black/20 p-1">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`w-1/2 rounded-lg py-2.5 text-sm font-medium transition-all ${
                isLogin
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-gray-500 hover:text-gray-300"
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
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Heading */}
          <div className="mb-7">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {isLogin ? "Welcome back" : "Create your account"}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {isLogin
                ? "Enter your details to continue to NexDrive."
                : "Join NexDrive and start exploring premium products."}
            </p>
          </div>

          <form className="space-y-4">
            {/* Name */}
            {!isLogin && (
              <div className="group relative">
                <FiUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600 transition group-focus-within:text-blue-500" />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pr-4 pl-11 text-sm text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            )}

            {/* Email */}
            <div className="group relative">
              <FiMail className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600 transition group-focus-within:text-blue-500" />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pr-4 pl-11 text-sm text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Password */}
            <div className="group relative">
              <FiLock className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600 transition group-focus-within:text-blue-500" />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pr-4 pl-11 text-sm text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Confirm Password */}
            {!isLogin && (
              <div className="group relative">
                <FiLock className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-600 transition group-focus-within:text-blue-500" />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pr-4 pl-11 text-sm text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            )}

            {/* Forgot Password */}
            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-xs font-medium text-blue-500 transition hover:text-blue-400 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-600/30 active:scale-[0.98]"
            >
              {isLogin ? "Login to NexDrive" : "Create Account"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 py-2">
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-[11px] font-medium text-gray-600">
                OR CONTINUE WITH
              </span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm font-medium text-gray-300 transition hover:bg-white/[0.07] hover:text-white"
            >
              <span className="text-base font-bold">G</span>
              Continue with Google
            </button>
          </form>

          {/* Bottom */}
          <p className="mt-7 text-center text-xs text-gray-600">
            By continuing, you agree to our{" "}
            <span className="cursor-pointer text-gray-400 hover:text-white">
              Terms
            </span>{" "}
            and{" "}
            <span className="cursor-pointer text-gray-400 hover:text-white">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
