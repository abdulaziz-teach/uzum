import React, { useState } from "react";

const faqData = [
  {
    question: "Ro'yxatdan o'tish uchun qanday hujjatlar kerak?",
    answer:
      "YTT uchun guvohnoma va pasport, yuridik shaxslar uchun ro'yxatdan o'tganlik hujjatlari hamda direktor buyrug'i kerak bo'ladi.",
  },
  {
    question: "Uzum Marketda komissiya qancha?",
    answer: "Komissiya tovar toifasi va o'lchamiga qarab farq qiladi.",
  },
  {
    question: "Tovarlarni omborga topshirish kerakmi?",
    answer: "Ishlash sxemasiga bog'liq: FBO bo'lsa marketpleys ombori, FBS bo'lsa sotuvchi ombori ishlatiladi.",
  },
  {
    question: "Komissioner sifatida qanday qo'shilaman?",
    answer: "Soliq kabinetida Uzum Market ma'lumotlari bilan komissioner sifatida qo'shish bo'limini to'ldirasiz.",
  },
  {
    question: "18+ tovarlarni sotish mumkinmi?",
    answer: "Uzum Marketda 18+ tovarlarni sotish taqiqlangan.",
  },
];

const SectionSeller = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto mt-16 w-full max-w-5xl px-4 sm:px-6">
      {faqData.map((item, index) => (
        <div key={item.question} className="border-b border-gray-300 py-5">
          <button onClick={() => toggleItem(index)} className="flex w-full items-center justify-between gap-4 text-left">
            <span className="text-lg font-semibold text-gray-900 sm:text-2xl">{item.question}</span>
            <span className={`text-2xl transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
              ?
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "mt-3 max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm text-gray-600 sm:text-lg">{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SectionSeller;
