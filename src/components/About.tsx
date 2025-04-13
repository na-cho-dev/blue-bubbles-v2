import { assets } from "../assets/assets";
import { AppContainerType } from "../types/AppTypes";

const About = ({ containerStyle }: AppContainerType) => {
  return (
    <section className="py-7" id="about">
      <div className={`${containerStyle}`}>
        <div className="w-fit rounded-md">
          <h2 className="text-primary text-2xl md:text-[1.8em] font-extrabold py-1 px-2">
            About Us
          </h2>
          <p className="py-1 px-3 bg-primary text-white rounded-md">
            Who are we? Want to know more about us, be our guest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 my-10 gap-5">
          <div className="flex flex-col gap-3">
            <p className="font-tetiary font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              tempora voluptate nihil, voluptatem, explicabo laboriosam ratione
              natus officiis vel dicta enim eveniet, cum est quia consectetur
              neque! Modi aperiam ipsum possimus, tenetur animi consectetur
              distinctio at nobis voluptas dolores veritatis? Ut consequatur
              harum molestias in sequi soluta repellendus, quas natus.
            </p>

            <div className="">
              <p className="text-primary text-xl md:text-2xl font-extrabold">
                Our Goal
              </p>
              <p className="font-tetiary font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum, quos? Magni dicta repudiandae omnis nostrum modi ullam
                totam, earum iste atque suscipit exercitationem ratione optio
                ea, minus nam dolore eveniet velit, fugiat porro maxime?
                Doloremque ab debitis, explicabo.
              </p>
            </div>
          </div>
          <div className="">
            <img className="rounded-md" src={assets.cleaningImg3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
