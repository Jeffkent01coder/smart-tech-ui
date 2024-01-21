import React from "react";

function ContactForm() {
  return (
    <div class="p-8 mt-8 max-w-lg mx-auto">
      <h1 class="text-4xl text-pink-500 sm:text-4xl font-bold mb-4">
        Contact Form
      </h1>
      <form>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="name" class="leading-7 py-4 text-lg text-gray-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required=""
              class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
            />
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="email" class="leading-7 py-4 text-lg text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required=""
              class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 py-4 text-lg text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required=""
              class=" w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <div>
            <button
              type="submit"
              class="flex text-white bg-pink-500 border-0 py-3 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
