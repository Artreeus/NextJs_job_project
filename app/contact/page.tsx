import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <div className="bg-black text-white">
      <div className="container py-20 space-y-16">
        {/* Heading Section */}
        <div className="space-y-4 ">
          <h1 className="text-5xl md:text-6xl font-bold">Contact Me</h1>
          <p className="text-zinc-400 text-lg">For Any Project Knock Us</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900" />

        {/* Contact Form and Text Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text Section */}
          <div className="space-y-12 ">
            <h2 className="text-7xl font-bold ">Get in <br /> Touch With <br/> Us</h2>
           
          </div>
          {/* Form Section */}
          <div className="space-y-8">
            <form className="space-y-8">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium uppercase">NAME</label>
                <Input id="name" placeholder="Your name" className="bg-zinc-900 border-zinc-800 h-14 text-white" />
              </div>
              {/* Subject Field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium uppercase">SUBJECT</label>
                <Input id="subject" placeholder="Subject" className="bg-zinc-900 border-zinc-800 h-14 text-white" />
              </div>
              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium uppercase">MESSAGE</label>
                <Textarea id="message" placeholder="Your message" className="bg-zinc-900 border-zinc-800 min-h-[150px] text-white" />
              </div>
              {/* Submit Button */}
              <Button className="bg-orange-500 hover:bg-orange-600 w-full h-14 text-lg uppercase tracking-widest">SEND</Button>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mt-16">
          <Image
            src="/section.png"
            alt="Laptop in dark environment"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
