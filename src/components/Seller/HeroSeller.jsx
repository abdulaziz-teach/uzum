import React from "react";

const HeroSeller = () => {
  return (
    <section className="bg-[#1F2026] text-white">
      <div className="mx-auto grid w-full max-w-[1450px] grid-cols-1 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            O'zbekiston bo'ylab Uzum Marketda soting
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-200 sm:text-base">
            Minglab sotuvchilar biz bilan ishlamoqda. Siz ham qo'shiling va mamlakat bo'ylab millionlab xaridorlarga
            mahsulotingizni taklif qiling.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-2xl font-bold">10 mln+</p>
              <p className="mt-1 text-sm text-gray-200">Ro'yxatdan o'tgan xaridorlar</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-2xl font-bold">x23</p>
              <p className="mt-1 text-sm text-gray-200">Yillik sotuv o'sishi</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-2xl font-bold">14 kun</p>
              <p className="mt-1 text-sm text-gray-200">Birinchi tushumgacha o'rtacha vaqt</p>
            </div>
          </div>

          <button className="mt-8 rounded-md bg-white px-5 py-2 font-medium text-black transition hover:bg-gray-200">
            Sotuvchi bo'lish
          </button>
        </div>

        <div>
          <img
            className="h-[280px] w-full rounded-xl object-cover sm:h-[360px] lg:h-[520px]"
            src="/image copy.png"
            alt="Seller hero"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSeller;
