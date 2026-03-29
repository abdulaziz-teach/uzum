import React from "react";

const SectionSellerFive = () => {
  const steps = [
    {
      title: "Biznesingizni ro'yxatdan o'tkazing",
      text: "MChJ, YTT oching yoki o'z-o'zini band qiluvchi sifatida ro'yxatdan o'ting.",
    },
    {
      title: "Hisob raqami oching",
      text: "Mavjud hisob raqamingizdan foydalaning yoki istalgan bankda yangisini oching.",
    },
    {
      title: "Ro'yxatdan o'ting",
      text: "Akkount oching, formani to'ldiring va Uzum Marketda sotuvni boshlang.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold text-black sm:text-4xl">
        Men Uzumda sotmoqchiman. Nimadan boshlash kerak?
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {steps.slice(0, 2).map((step, idx) => (
          <div key={step.title} className="flex gap-4 rounded-2xl bg-gray-200 p-6 sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-purple-600">
              {idx + 1}
            </div>
            <p className="text-base text-gray-800 sm:text-lg">
              <span className="mb-2 block font-bold">{step.title}</span>
              {step.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl bg-gray-200 p-6 sm:p-8">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-purple-600">
            3
          </div>
          <p className="text-base text-gray-800 sm:text-lg">
            <span className="mb-2 block font-bold">{steps[2].title}</span>
            {steps[2].text}
          </p>
        </div>
      </div>

      <button className="mt-8 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-700">
        Ro'yxatdan o'tish
      </button>
    </section>
  );
};

export default SectionSellerFive;
