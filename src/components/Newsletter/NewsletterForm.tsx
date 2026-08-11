import { newsletter } from "./newsletterData";
import { MdEmail } from "react-icons/md";

const NewsletterForm = () => {
  return (
    <form className="flex flex-col sm:flex-row gap-4 mt-8">
      <div className="relative flex-1">
        <MdEmail
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            text-xl
          "
        />

        <input
          type="email"
          placeholder={newsletter.placeholder}
          className="
            w-full
            pl-12
            pr-5
            py-4
            rounded-lg
            outline-none
            bg-white
            text-gray-700
          "
        />
      </div>

      <button
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-8
          rounded-lg
          hover:scale-105
transition-transform
duration-300
        "
      >
        {newsletter.buttonText}
      </button>
    </form>
  );
};

export default NewsletterForm;
