import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../i18n/languageContext";

export default function HeaderTwo() {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <img
          onClick={() => navigate("/")}
          className="h-auto w-[170px] cursor-pointer sm:w-[225px]"
          src="/4.png"
          alt="Logo"
        />

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end lg:w-auto lg:gap-5">
          <button className="flex h-[50px] w-full items-center justify-center gap-3 rounded-xl border border-gray-300 transition hover:bg-gray-100 sm:w-[220px]">
            <img className="w-8" src="/i.jpg" alt="Icon" />
            {t("askQuestion")}
          </button>

          <div className="relative w-full sm:w-[220px]">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="h-[50px] w-full rounded-xl border border-gray-300 bg-white px-4 text-left transition hover:bg-gray-100"
            >
              {language === "ru" ? t("russian") : t("uzbek")}
            </button>

            {open && (
              <div className="absolute right-0 top-[56px] z-50 w-full min-w-[220px] rounded-lg border bg-white shadow-md">
                <div className="px-4 py-3 text-sm font-medium text-gray-500">{t("chooseLanguage")}</div>
                <button
                  onClick={() => {
                    setLanguage("uz");
                    setOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  {t("uzbek")}
                </button>
                <button
                  onClick={() => {
                    setLanguage("ru");
                    setOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  {t("russian")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
