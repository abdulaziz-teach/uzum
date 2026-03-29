import React from "react";
import { Link } from "react-router-dom";

const blocks = [
  {
    title: "Muddatli to'lov",
    items: [
      {
        name: "Uzum Nasiya",
        desc: "Har qanday xarid uchun qulay va adolatli nasiya",
        img: "https://seller.uzum.uz/_nuxt/nasiya.N0ph2TWp.png",
      },
      {
        name: "Uzum Nasiya Biznes",
        desc: "Biznesingizda nasiya to'lov usuli",
        img: "https://seller.uzum.uz/_nuxt/nasiya-business.BtOXt0Q_.png",
      },
    ],
  },
  {
    title: "Bank",
    items: [
      {
        name: "Uzum Bank",
        desc: "Biznes uchun bank mahsulotlari",
        img: "https://seller.uzum.uz/_nuxt/bank.CH1KUh3k.png",
      },
      {
        name: "Uzum Bank Partners",
        desc: "Biznes uchun to'lovlarni boshqarish",
        img: "https://seller.uzum.uz/_nuxt/bank-partners.DH8LkGUa.png",
      },
    ],
  },
  {
    title: "Biznes",
    items: [
      {
        name: "Uzum Business",
        desc: "Biznesni boshqarish xizmati",
        img: "https://seller.uzum.uz/_nuxt/business.Dm3toxbu.png",
      },
    ],
  },
  {
    title: "Yetkazib berish",
    items: [
      {
        name: "Uzum Tezkor",
        desc: "Kafe, restoran va do'konlardan tez yetkazib berish",
        img: "https://seller.uzum.uz/_nuxt/tezkor.BMwDmjnf.png",
      },
    ],
  },
];

const SectionSellerBlack = () => {
  return (
    <section className="mt-16 bg-[#1F2026] py-16">
      <div className="mx-auto w-full max-w-[1450px] px-4 sm:px-6">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold text-white sm:text-4xl">
          Uzum - faqatgina marketpleys emas
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-300">
          Qulay hayot va samarali biznes uchun xizmatlarning to'liq ekotizimini yaratmoqdamiz.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {blocks.map((block) => (
            <div key={block.title} className="rounded-xl bg-[#36373C] p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-white">{block.title}</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {block.items.map((item) => (
                  <div key={item.name} className="rounded-lg bg-white/5 p-4">
                    <img className="h-16 w-16" src={item.img} alt={item.name} />
                    <Link to="/" className="mt-3 block font-medium text-white hover:text-violet-300">
                      {item.name}
                    </Link>
                    <p className="mt-1 text-sm text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSellerBlack;
