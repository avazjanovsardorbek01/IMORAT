"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HeyFour, HeyFive, HeySix } from "@/png";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  // Этот useEffect гарантирует, что код будет выполнен только на клиенте
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Не рендерить компонент на сервере
  }

  return (
    <>
      {/* SECTION-1 STARTED */}
      <section className="container">
        <div id="section-1-2" className="h-[830px] sm:h-auto">
          <div className="flex sm:flex-col items-start sm:gap-[35px] sm:p-[20px] gap-[90px] p-[110px]">
            {/* Контейнер для формы */}
            <div className="registration sm:w-full md:w-[350px] lg:w-[416px] xl:w-[416px] sm:h-max lg:h-[610px] bg-[#100E2C] rounded-[12px] sm:p-[20px] text-[#fff] p-[40px]">
              <h2 className="text-[28px] font-[700] pb-[10px] sm:text-[22px]">
                Свяжитесь с нами
              </h2>
              <p className="pb-[20px] sm:text-[14px]">
                Мы всегда рады услышать от вас! Заполните форму, чтобы задать
                вопрос или поделиться мнением.
              </p>

              <form
                className="flex flex-col gap-[20px] items-start"
                action=""
                method="POST"
              >
                <input
                  type="text"
                  id=""
                  name="name"
                  placeholder="Ваше имя"
                  className="p-[16px] bg-white rounded-[6px] sm:w-full md:w-[280px] lg:w-[336px] outline-none text-[#666]"
                />
                <input
                  type="email"
                  id=""
                  name="mail"
                  placeholder="Ваш email"
                  className="p-[16px] bg-white rounded-[6px] sm:w-full md:w-[280px] lg:w-[336px] outline-none text-[#666]"
                />
                <input
                  type="number"
                  id=""
                  name="phone"
                  placeholder="Ваш телефон"
                  className="p-[16px] bg-white rounded-[6px] sm:w-full md:w-[280px] lg:w-[336px] outline-none text-[#666]"
                />
                <textarea
                  id="id"
                  name="name"
                  placeholder="Ваше сообщение"
                  className="py-[8px] px-[16px] rounded-[6px] sm:w-full md:w-[280px] lg:w-[336px] h-[108px] outline-none text-[#666]"
                />
                <button
                  type="submit"
                  className="w-[200px] sm:w-[180px] sm:h-[40px] h-[50px] bg-[#0057FF] active:bg-[#0057FF] transition-all duration-200 hover:bg-[#0055ffd5] rounded-[6px]"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>

            {/* Контейнер для контактной информации */}
            <div className="text pt-[8.5px] flex flex-col gap-[24px] sm:text-center md:flex-col sm:text-center">
              <h2 className="text-[40px] sm:text-[25px] mx-auto sm:w-[350px] font-[700] w-[210px] leading-[40px] sm:text-center">
                Не стесняйтесь связаться с нами
              </h2>
              <p className="pb-[8px] sm:text-[14px]">
                Наши двери всегда открыты для вас, если у вас есть вопросы или
                предложения.
              </p>

              <div className="flex items-start gap-[11px] sm:text-center">
                <i className="bx bx-map sm:text-[16px] text-[24px]"></i>
                <h2 className="text-[20px] sm:text-[16px] relative bottom-[6px] text-[#100E2C] w-[260px] font-[600] sm:w-full">
                  8911 Tanglewood Ave. Capitol Heights, MD 20743
                </h2>
              </div>

              <div className="flex items-start gap-[11px] sm:text-center">
                <i className="bx bx-phone sm:text-[16px] text-[24px]"></i>
                <h2 className="text-[20px] sm:text-[16px] relative bottom-[4px] text-[#100E2C] w-[260px] font-[600] sm:w-full">
                  (566) 237-4687
                </h2>
              </div>

              <div className="flex items-start gap-[11px] sm:text-center">
                <i className="bx bx-phone sm:text-[16px] text-[24px]"></i>
                <h2 className="text-[20px] sm:text-[16px] relative bottom-[4px] text-[#100E2C] w-[260px] font-[600] sm:w-full">
                  (239) 319-8083
                </h2>
              </div>

              <div className="flex items-start gap-[11px] sm:text-center">
                <i className="bx bx-envelope sm:text-[16px] text-[24px]"></i>
                <h2 className="text-[20px] sm:text-[16px] relative bottom-[4px] text-[#100E2C] w-[260px] font-[600] sm:w-full">
                  moinefou@hotmail.com
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-1 ENDED */}

      {/* SECTION-2 STARTED */}
      <section id="section-2" className="py-[60px] sm:py-[30px] sm:px-[20px]">
        <div className="container">
          <h2 className="text-center text-[#100E2C] sm:text-[30px] text-[40px] font-[700] pb-[10px]">
            Наши офисы
          </h2>

          <p className="pb-[40px] sm:pb-[20px] text-center">
            Мы открыты для общения в наших офисах. Вы можете прийти, задать
            вопросы и познакомиться с нашей командой.
          </p>

          <div className="flex flex-wrap justify-center gap-[20px]">
            <div className="flex flex-col w-[416px]">
              <Image src={HeyFour} alt="HeyFour" />
              <h2 className="text-[24px] font-[600] pb-[12px] pt-[12px]">
                Smoky Hollow
              </h2>
              <p className="text-[#7A7474] pb-[12px] text-[16px] font-[400]">
                9514 Smoky Hollow St. Sulphur, LA 70663
              </p>
              <h2 className="text-[16px] font-[500] pb-[12px]">
                Телефон: (736) 267-8659
              </h2>
              <h2 className="text-[16px] font-[500] pb-[12px]">
                Email: rsmartin@gmail.com
              </h2>
            </div>

            <div className="flex flex-col w-[416px]">
              <Image src={HeyFive} alt="HeyFive" />
              <h2 className="text-[24px] font-[600] pb-[12px] pt-[12px]">
                North Road
              </h2>
              <p className="text-[#7A7474] pb-[12px] text-[16px] font-[400]">
                19 North Road Piscataway, NJ 08854
              </p>
              <h2 className="text-[16px] font-[500] pb-[12px]">
                Телефон: (736) 267-8659
              </h2>
              <h2 className="text-[16px] font-[500] pb-[12px]">
                Email: rsmartin@gmail.com
              </h2>
            </div>

            <div className="flex flex-col w-[416px]">
              <Image src={HeySix} alt="HeySix" />
              <h2 className="text-[24px] font-[600] pb-[12px] pt-[12px]">
                Rockville Ave
              </h2>
              <p className="text-[#7A7474] pb-[12px] text-[16px] font-[400]">
                8460 Rockville Ave. Greenville, NC 27834
              </p>
              <h2 className="text-[16px] font-[500] pb-[12px]">
                Телефон: (736) 267-8659
              </h2>
              <h2 className="text-[16px] font-[500] pb-[12px]">
                Email: rsmartin@gmail.com
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-2 ENDED */}
    </>
  );
}
