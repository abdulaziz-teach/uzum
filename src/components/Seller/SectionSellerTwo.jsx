import React from "react";

const SectionSellerTwo = () => {
  return (
    <section className="mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-12">
      <div>
        <img
          src="https://seller.uzum.uz/_nuxt/second.B3RCPCpy.png"
          alt="Uzum Academy"
          className="h-[280px] w-full rounded-2xl object-cover sm:h-[380px] lg:h-[500px]"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Nimadan boshlash va biznesni qanday samaraliroq qilish kerak
        </h2>
        <p className="mt-5 text-base text-gray-700 sm:text-lg">
          Uzum Academy yordam beradi. Tajribali mutaxassislar, real case'lar va amaliy tavsiyalar orqali biznesingizni
          tezroq rivojlantirishingiz mumkin.
        </p>
        <button className="mt-8 rounded-lg bg-black px-6 py-3 text-base font-medium text-white transition hover:bg-gray-800 sm:px-8 sm:py-4 sm:text-lg">
          Batafsil ma'lumot olish
        </button>
      </div>
    </section>
  );
};

export default SectionSellerTwo;
