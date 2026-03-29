import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-5 text-black">
      <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <h4 className="text-base font-semibold mb-4">Biz haqimizda</h4>
          <Link to="/Location" className="block text-sm text-gray-500 mb-2 hover:text-black">
            Topshirish punktlari
          </Link>
          <Link to="/Vakansiya" className="block text-sm text-gray-500 hover:text-black">
            Vakansiyalar
          </Link>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4">Foydalanuvchilarga</h4>
          <Link to="https://uzum.uz/#contacts" className="block text-sm text-gray-500 mb-2 hover:text-black">
            Biz bilan bog'lanish
          </Link>
          <Link to="/SavolJavob" className="block text-sm text-gray-500 hover:text-black">
            Savol-Javob
          </Link>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4">Tadbirkorlarga</h4>
          <Link to="/Seller" className="block text-sm text-gray-500 mb-2 hover:text-black">
            Uzumda soting
          </Link>
          <Link
            to="https://seller.uzum.uz/seller/signin?_gl=1*1ikf534*_gcl_au*MzI1MDk2NTcxLjE3NzIxOTY1MTQuMTEyNzU2MzE0My4xNzcyMTk2ODIxLjE3NzIxOTY4MjA.*_ga*MTMyMTkwMzk3OC4xNzY0MTMxMDEw*_ga_7KCSSWWYYD*czE3NzIxOTY1MTQkbzckZzEkdDE3NzIxOTY5MTUkajYwJGwwJGgxNTMzNDU5NjYx*_ga_EZ8RKY9S93*czE3NzIxOTY1MTQkbzckZzEkdDE3NzIxOTY5MTUkajYwJGwwJGgw"
            className="block text-sm text-gray-500 mb-2 hover:text-black"
          >
            Sotuvchi kabinetiga kirish
          </Link>
          <Link to="https://promo.uzum.uz/uz/promo/pvz" className="block text-sm text-gray-500 hover:text-black">
            Topshirish punktini ochish
          </Link>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4">Ilovani yuklab olish</h4>

          <div className="flex flex-wrap gap-3 mb-5">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
          </div>

          <h4 className="text-base font-semibold mb-2">Uzum ijtimoiy tarmoqlarda</h4>

          <div className="flex gap-4 text-xl">
            <i className="fab fa-instagram cursor-pointer"></i>
            <i className="fab fa-telegram cursor-pointer"></i>
            <i className="fab fa-facebook cursor-pointer"></i>
            <i className="fab fa-youtube cursor-pointer"></i>
          </div>
        </div>
      </div>

      <div className="container border-t border-gray-200 mt-10 pt-4 flex flex-col lg:flex-row gap-4 lg:justify-between text-sm text-gray-500">
        <div className="flex gap-4 flex-wrap">
          <Link to="/maxfiylik" className="font-medium text-black">
            Maxfiylik kelishuvi
          </Link>
          <Link to="/foydalanuvchi-kelishuvi" className="font-medium text-black">
            Foydalanuvchi kelishuvi
          </Link>
          <Link to="/shaxsiy-malumotlar" className="font-medium text-black">
            Shaxsiy ma'lumotlarni qayta ishlash nizomi
          </Link>
        </div>

        <div>© 2026 XK MCHJ "UZUM MARKET". Barcha huquqlar himoyalangan</div>
      </div>
    </footer>
  );
};

export default Footer;
