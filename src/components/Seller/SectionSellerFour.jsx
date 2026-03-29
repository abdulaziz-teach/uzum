import React from "react";

const SectionSellerFour = () => {
  const testimonials = [
    {
      name: "Andrey Malaxov",
      role: "Selfie brendining tijorat direktori",
      text: "Marketpleys aksiyalarida muntazam qatnashamiz va sotuvlar o'sishini doim kuzatamiz.",
      avatar: "https://seller.uzum.uz/_nuxt/avatar_andrey.DtNA_lgO.jpg",
    },
    {
      name: "Artur Kim",
      role: "Texnomart elektron tijorat yo'nalishi",
      text: "Uzum Sellers ilovasi orqali jo'natmalarni rejalash va statistika bilan ishlash juda qulay.",
      avatar: "https://seller.uzum.uz/_nuxt/avatar_artur.DuWOyTH5.jpg",
    },
    {
      name: "Ozod Hasanov",
      role: "LP Kid's do'koni sherik egasi",
      text: "Uzum Academy'dagi bilimlar biznesni tezroq yo'lga qo'yishga yordam berdi.",
      avatar: "https://seller.uzum.uz/_nuxt/avatar_ozod.CKdzBumu.jpg",
    },
    {
      name: "Shaxzod Xo'jaev",
      role: "Terra Pro e-commerce boshlig'i",
      text: "Yangi mijozlarni jalb qilish uchun aksiyalar va maxsus takliflar eng samarali yo'l bo'ldi.",
      avatar: "https://seller.uzum.uz/_nuxt/avatar_shah.BTzO2iYC.jpg",
    },
  ];

  return (
    <section className="bg-[#EDEFF2] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-[#7F4DFF] sm:text-4xl">Hamkorlar</h2>
        <h3 className="mt-4 mb-10 text-center text-2xl font-bold sm:text-3xl">Biz haqimizda sotuvchilar nima deydi</h3>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center gap-4 sm:gap-6">
                <img src={item.avatar} alt={item.name} className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20" />
                <div>
                  <h4 className="text-lg font-semibold sm:text-xl">{item.name}</h4>
                  <p className="mt-1 text-sm text-gray-500 sm:text-base">{item.role}</p>
                </div>
              </div>
              <p className="text-base leading-7 text-gray-800 sm:text-lg">{item.text}</p>
            </div>
          ))}

          <div className="rounded-3xl bg-white p-6 shadow-sm md:col-span-2 sm:p-8">
            <h4 className="text-xl font-semibold sm:text-2xl">Sizning hikoyangiz shu yerda boshlanadi</h4>
            <p className="mt-3 text-base text-gray-700 sm:text-lg">Ertaga eng zo'r bo'lish uchun bugun Uzum Marketga qo'shiling.</p>
            <button className="mt-6 w-full rounded-full bg-gradient-to-r from-purple-600 to-purple-800 py-4 text-lg font-semibold text-white transition hover:opacity-90">
              Sotuvchi bo'lish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSellerFour;
