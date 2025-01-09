"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Facebook from "@/public/assets/images/svg/facebook.svg";
import Twitter from "@/public/assets/images/svg/twitter.svg";
import Instagram from "@/public/assets/images/svg/insta.svg";
import Telegram from "@/public/assets/images/svg/telegram.svg";

const Index = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Динамическая загрузка boxicons только на клиенте
      require("boxicons");
    }
  }, []);

  return (
    <>
      {/* FOOTER SECTION STARTED */}
      <footer className="bg-[#100E2C] text-[#fff]">
        <div className="container">
          <div className="py-[60px] sm:py-[40px] border-b-[1px] border-b-[#ffffffb8]">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[60px]">
              <li className="flex flex-col gap-[24px]">
                <a className="pb-[8px] text-[20px] font-[600]" href="">
                  Часы работы
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  Пн-Пт 08:00 - 20:00
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  Сб-Вс 08:00 - 20:00
                </a>
              </li>

              <li className="flex flex-col gap-[24px]">
                <a className="pb-[8px] text-[20px] font-[600]" href="">
                  Найдите нас
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  Массив Кашгар,12 <br /> Юнусабадский район, Ташкент
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  (97) 777-65-22
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  moinefou@hotmail.com
                </a>
              </li>

              <li className="flex flex-col gap-[24px]">
                <a className="pb-[8px] text-[20px] font-[600]" href="">
                  Недвижимость
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  Апартаменты
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  Виллы
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  Дома
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  Коммерческая недвижимость
                </a>
              </li>

              <li className="flex flex-col gap-[24px]">
                <a className="pb-[8px] text-[20px] font-[600]" href="">
                  Ссылки
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  Главная
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  Недвижимость
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  О нас
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  Контакты
                </a>
              </li>

              <li className="flex flex-col gap-[24px]">
                <a className="pb-[8px] text-[20px] font-[600]" href="">
                  Новости
                </a>
                <a
                  className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all"
                  href=""
                >
                  Подпишитесь на нашу рассылку
                </a>
                <div className="bg-[#fff] flex items-center justify-between w-[280px] rounded-[12px] p-[6px]">
                  <input
                    type="text"
                    className="outline-none w-[150px] text-[#666]"
                    placeholder="Ваш email"
                  />
                  <button className="py-[8px] px-[12px] bg-[#0057FF] hover:bg-[#0055ffd9] duration-200 transition-all active:bg-[#0057FF] rounded-[8px]">
                    Подписаться
                  </button>
                </div>
              </li>
            </ul>
          </div>

          {/* FOOTER CONTENT FOR MOBILE DEVICES */}
          <div className="py-[20px] sm:flex items-center sm:gap-[10px] sm:justify-start justify-between">
            <div className="flex items-center sm:gap-[5px] gap-[12px]">
              <Image className="cursor-pointer" src={Facebook} alt="facebook" />
              <Image className="cursor-pointer" src={Twitter} alt="twitter" />
              <Image
                className="cursor-pointer"
                src={Instagram}
                alt="instagram"
              />
              <Image className="cursor-pointer" src={Telegram} alt="telegram" />
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER SECTION ENDED */}
    </>
  );
};

export default Index;
