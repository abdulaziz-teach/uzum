const FooterTwo = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col gap-2">
          <h4 className="text-base font-semibold text-gray-900">Biz haqimizda</h4>
          <a href="#" className="text-sm text-gray-500 hover:text-black">Topshirish punktlari</a>
          <a href="#" className="text-sm text-gray-500 hover:text-black">Vakansiyalar</a>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-base font-semibold text-gray-900">Foydalanuvchilarga</h4>
          <a href="#" className="text-sm text-gray-500 hover:text-black">Biz bilan bog'lanish</a>
          <a href="#" className="text-sm text-gray-500 hover:text-black">Savol-Javob</a>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-base font-semibold text-gray-900">Tadbirkorlarga</h4>
          <a href="#" className="text-sm text-gray-500 hover:text-black">Uzumda soting</a>
          <a href="#" className="text-sm text-gray-500 hover:text-black">Sotuvchi kabinetiga kirish</a>
          <a href="#" className="text-sm text-gray-500 hover:text-black">Topshirish punkti ochish</a>
        </div>

        <div className="rounded-2xl bg-white p-4">
          <h4 className="text-sm font-semibold">Ilovada xarid qilish qulayroq</h4>
          <p className="mt-2 text-xs text-gray-500">App Store yoki Google Play orqali ilovani bepul yuklab oling.</p>
        </div>
      </div>

      <div className="container mt-8 flex flex-col gap-4 border-t border-gray-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-900">Uzum ijtimoiy tarmoqlarda</p>
        <div className="flex gap-4">
          <span className="text-red-500">Instagram</span>
          <span className="text-blue-600">Telegram</span>
          <span className="text-blue-600">Facebook</span>
          <span className="text-red-600">YouTube</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
