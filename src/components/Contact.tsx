import { assets } from "../assets/assets";
import { AppContainerType } from "../types/AppTypes";

export const RequestAQuote = ({ containerStyle }: AppContainerType) => {
  return (
    <section className="py-7" id="getQuote">
      <div className={`${containerStyle}`}>
        <div className="w-fit">
          <h2 className="text-primary text-2xl md:text-[1.8em] font-extrabold py-1 px-2">
            Contact Us
          </h2>
          <p className="py-1 px-3 bg-primary text-primary-dull rounded-md">
            Have a Question For Us? Get in touch now.
          </p>
        </div>

        <div className="contactContent anime1">
          <p className="text-black font-normal font-tetiary my-5">
            Have a Question For Us? get in touch with us with the available
            forms below or you can Request a Quote from us Now. We would
            definitely get back to you as soon as possible. We hope to get in
            touch with you soon. Thank you
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="">
              <img className="rounded-md" src={assets.bannerImg1} alt="" />
            </div>

            <div className="">
              <h2 className="text-2xl font-bold my-2">Request a Quote Now</h2>
              <p>
                Fill in the quote form below and we will get back to you with a
                quote as soon as possible.
              </p>
              <form className="flex flex-col gap-4 mt-5">
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter Your Name"
                  className="bg-transparent border-2 border-zinc-500 rounded-md p-2 font-light focus:outline-none focus:font-normal"
                />
                <input
                  type="tel"
                  name="tel"
                  id=""
                  placeholder="Enter Your Phone Number"
                  className="bg-transparent border-2 border-zinc-500 rounded-md p-2 font-light focus:outline-none focus:font-normal"
                />
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Your Email"
                  className="bg-transparent border-2 border-zinc-500 rounded-md p-2 font-light focus:outline-none focus:font-normal"
                />

                <button
                  className="bg-primary p-3 w-fit rounded-md hover:bg-primary-dull hover:text-white transition-all duration-300"
                  type="submit"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GetInTouch = ({ containerStyle }: AppContainerType) => {
  return (
    <section className={`${containerStyle} py-7`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="">
          <h2 className="text-2xl font-bold my-2">Get In Touch Now</h2>
          <p className="font-normal font-tetiary my-5">
            Fill in the form below for any further enquiries and we will get
            back to you as soon as possible. Thank you.
          </p>
          <form className="flex flex-col gap-4 mt-5">
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter Your Name"
              className="bg-transparent border-2 border-zinc-500 rounded-md p-2 font-light focus:outline-none focus:font-normal"
            />
            <input
              type="tel"
              name="tel"
              id=""
              placeholder="Enter Your Phone Number"
              className="bg-transparent border-2 border-zinc-500 rounded-md p-2 font-light focus:outline-none focus:font-normal"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              className="bg-transparent border-2 border-zinc-500 rounded-md p-2 font-light focus:outline-none focus:font-normal"
            />
            <textarea
              name=""
              id=""
              placeholder="Your description goes here"
              rows={10}
              className="bg-transparent border-2 border-zinc-500 rounded-md p-2 font-light focus:outline-none focus:font-normal"
            ></textarea>

            <button
              className="bg-secondary p-3 w-fit rounded-md hover:bg-secondary hover:text-white transition-all duration-300"
              type="submit"
            >
              Request Quote
            </button>
          </form>
        </div>

        <div className="">
          <img
            className="rounded-md hidden lg:block"
            src={assets.bannerImg4}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
