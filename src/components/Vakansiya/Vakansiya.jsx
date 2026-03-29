import React from "react";
import { Link } from "react-router-dom";

const Vakansiya = () => {
  return (
    <div className="border-2 w-full max-w-4xl mx-auto mt-10 p-5 sm:p-8 lg:p-10 rounded-lg shadow-md">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-6">VAKANSIYALAR</h2>

      <p className="text-base sm:text-lg text-gray-800 mb-6 text-center">
        Uzum Market jamoasining safiga qo'shilmoqchimisiz? Nima uchun bizga mos kelishingiz haqida so'zlab
        bering va o'z rezyumengizni yuboring.
      </p>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button className="w-full sm:w-auto bg-[#7209B7] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#560BAD] transition">
          UZUM MARKETDA ISHLASHNI ISTAYMAN
        </button>
        <button className="w-full sm:w-auto bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-md">
          <Link to="https://t.me/Uzum_jbot">Telegram bot - @Uzum_jbot</Link>
        </button>
      </div>

      <div className="text-left text-gray-900 leading-relaxed">
        <p className="mb-2">O'zingizga mos kasbni topadigan ish profillari:</p>
        <ul className="list-disc ml-6 sm:ml-8 mb-4">
          <li>Buxgalteriya va moliya</li>
          <li>Uzum Market yetkazib berish xizmati</li>
          <li>Ma'muriy xodim</li>
          <li>Ombor logistikasi</li>
          <li>Aloqa markazi</li>
          <li>Xodimlar boshqaruvi</li>
        </ul>

        <p className="mb-2">
          Agar hali sizning orzuyingizdagi vakansiya bizda ochilmagan bo'lsa, o'zingizga qulay usulda rezyumeni
          zaxiraga yuboring:
        </p>

        <p className="text-gray-900">
          Telegram: <a href="https://t.me/HR_UZUM" className="text-blue-600 hover:underline">@HR_UZUM</a>
          <br />
          Email: <a href="mailto:hr-market@uzum.com" className="text-blue-600 hover:underline">hr-market@uzum.com</a>
        </p>
      </div>
    </div>
  );
};

export default Vakansiya;
