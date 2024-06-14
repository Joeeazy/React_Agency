import React from "react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/images/services/icon1.png",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/images/services/icon2.png",
    },
    {
      id: 3,
      title: "Membership Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/images/services/icon3.png",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-black font-semibold mb-2">Our Services</h2>
        <p className="text-black mb-4">
          We have been working with some Fortune 500+ clients{" "}
        </p>

        {/* company logos */}
        <div className="my-12 flex flex-wrap items-center justify-between">
          <img src="/images/icons/company1.png" alt="company1" />
          <img src="/images/icons/company2.png" alt="company2" />
          <img src="/images/icons/company3.png" alt="company3" />
          <img src="/images/icons/company4.png" alt="company4" />
          <img src="/images/icons/company5.png" alt="company5" />
          <img src="/images/icons/company6.png" alt="company6" />
          <img src="/images/icons/company7.png" alt="company7" />
        </div>

        {/* services card */}
        <div className="mt-20 md:w-1/2 mx-auto text-center" id="service">
          <h2 className="text-4xl text-black font-semibold mb-3">
            Manage your entire community <br />
            in a single system
          </h2>
          <p className="text-black">Who is nexcent suitable for? </p>
        </div>

        {/* card */}
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                  <img src={service.image} alt="icons" />
                </div>
                <h4 className="text-2xl font-bold text-black mb-2 px-2">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralDGrey">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
