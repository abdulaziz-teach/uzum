import React from "react";

const SectionSellerThree = () => {
  return (
    <section className="bg-[#f3f4f6] py-14">
      <div className="container px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Istalgan joydan ishlang
            </h1>
            <p className="max-w-lg text-base text-gray-600 sm:text-lg">
              Biznesingizni masofadan boshqaring: sotuvchilar uchun qulay web-kabinet yoki mobil ilova orqali.
            </p>
            <button className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-90 sm:px-8 sm:py-4">
              Sotuvchi bo'lish
            </button>
          </div>

          <div className="relative flex justify-center">
            <img
              src="https://seller.uzum.uz/_nuxt/laptop.CFRYQ9RJ.jpg"
              alt="Dashboard"
              className="w-full max-w-[620px] rounded-2xl shadow-2xl"
            />
            <img
              src="https://seller.uzum.uz/_nuxt/iphone-uz.BUK7saXJ.png"
              alt="Phone"
              className="absolute -bottom-4 left-0 w-[130px] drop-shadow-2xl sm:w-[180px] lg:-left-8 lg:w-[240px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSellerThree;
