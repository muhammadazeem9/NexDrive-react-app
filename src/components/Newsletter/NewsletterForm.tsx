import { newsletter } from "./newsletterData";
import { MdEmail } from "react-icons/md";

const NewsletterForm = () => {
  return (
    <form className="mt-8 flex flex-col gap-4 sm:flex-row">
      <div className="relative flex-1">
        <MdEmail className="absolute top-1/2 left-4 -translate-y-1/2 text-xl text-gray-400" />

        <input
          type="email"
          placeholder={newsletter.placeholder}
          className="w-full rounded-lg bg-white py-4 pr-5 pl-12 text-gray-700 outline-none"
        />
      </div>

      <button className="rounded-lg bg-blue-600 px-8 text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700">
        {newsletter.buttonText}
      </button>
    </form>
  );
};

export default NewsletterForm;
