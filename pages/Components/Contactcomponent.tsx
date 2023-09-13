import Image from "next/image";
import React from "react";
import { contact } from "../api/contact";

export default function Contact() {
  return (
    <div className="bg-purple-700 h-full md:h-screen md:flex md:flex-col">
      <div className="md:mt-5 md:pt-0 pt-4">
        <h1 className="text-2xl text-center font-bold text-white">
          Contact US
        </h1>
      </div>

      <div className="md:h-2/5 md:py-16 md:mx-96 md:my-0 mx-6 my-4">
        <dl className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {contact.map((contact) => (
            <div key={contact.name} className="relative">
              {/* <dt> */}
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md ">
                <Image src={contact.icon} alt={"logo"} width={35} height={35} />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-white">
                {contact.name}
              </p>
              {/* </dt> */}
              <div className="mt-2 ml-16 text-base text-white">
                <a
                  href={`https://wa.me/9845094586:${contact.chat}`}
                  className="text-sm"
                >
                  {contact.chat}
                </a>
                <a href={`tel:${contact.ph1}`} className="text-sm">
                  <div> {contact.ph1}</div>
                </a>
                <a href={`tel:${contact.ph2}`} className="text-sm">
                  {contact.ph2}
                </a>
                <a href={`mailto:${contact.mail}`} className="text-sm">
                  {contact.mail}
                </a>
                <div className="text-sm tracking-wider">{contact.address}</div>
              </div>
            </div>
          ))}
        </dl>
      </div>
      <div className="md:h-2/5">
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.6194854607543!2d75.14295421484928!3d15.342900589333107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIwJzM0LjQiTiA3NcKwMDgnNDIuNSJF!5e0!3m2!1sen!2sin!4v1583151791801!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameBorder="0"
          className="md:h-80 h-60"
        ></iframe>
        <p className="text-center text-xs text-white md:mt-8 mt-4 md:py-0 py-6">
          © 1994 - 2020 Excellent Engineering Enterprises
        </p>
      </div>
    </div>
  );
}
