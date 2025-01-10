"use client";

import Image from "next/image";
import {
  AboutHero,
  Expert,
  PersonOne,
  PersonTwo,
  PersonThree,
  PersonFour,
  Real,
  HeyOne,
  HeyTwo,
  HeyThree,
} from "@/png";
import {
  HomeHeart,
  Apartment,
  Homes,
  Zavod,
  HomeGroup,
  HomeGroup2,
  BankGroup,
  IconOne,
  IconTwo,
  IconThree,
  IconFour,
  IconFive,
} from "@/svg";

export default function Home() {
  return (
    <>
      {/* SECTION-1 STARTED */}
      <section
        id="section-1"
        className="pb-[120px] sm:pb-[60px] md:pb-[80px] lg:pb-[100px] xl:pb-[120px] px-[20px] sm:px-[10px] md:px-[30px] lg:px-[40px] xl:px-[50px]"
      >
        <div className="container">
          <div>
            {/* Главное изображение */}
            <Image
              src={AboutHero}
              alt="AboutHero"
              className="w-full h-auto sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]"
            />

            {/* Карточки статистики */}
            <div className="shadow-lg rounded-b-[12px] p-[20px] sm:p-[10px] md:p-[15px] lg:p-[20px] xl:p-[30px]">
              <div className="flex flex-wrap justify-center sm:flex-col sm:gap-[20px] md:gap-[30px] lg:gap-[50px] xl:gap-0 xl:grid xl:grid-cols-4">
                {/* Карточка 1 */}
                <div className="p-[40px] sm:p-[10px] md:p-[20px] lg:p-[30px] xl:p-[40px] flex flex-col gap-[14px] sm:gap-[10px] md:gap-[12px] lg:gap-[16px] xl:gap-[20px] items-center">
                  <Image
                    className="sm:w-[20px] md:w-[30px] lg:w-[35px] xl:w-[40px]"
                    src={HomeHeart}
                    alt="home heart"
                  />
                  <h1 className="text-[50px] sm:text-[24px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-[#100E2C] font-[700] font-sans tracking-wide">
                    1250
                  </h1>
                  <h3 className="text-[24px] sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[24px] text-[#100E2C] font-[500] font-serif tracking-tight text-center">
                    Проданных объектов
                  </h3>
                </div>

                {/* Карточка 2 */}
                <div className="p-[40px] sm:p-[10px] md:p-[20px] lg:p-[30px] xl:p-[40px] flex flex-col gap-[14px] sm:gap-[10px] md:gap-[12px] lg:gap-[16px] xl:gap-[20px] items-center">
                  <Image
                    className="sm:w-[20px] md:w-[30px] lg:w-[35px] xl:w-[40px]"
                    src={Apartment}
                    alt="Apartment"
                  />
                  <h1 className="text-[50px] sm:text-[24px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-[#100E2C] font-[700] font-sans tracking-wide">
                    320
                  </h1>
                  <h3 className="text-[24px] sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[24px] text-[#100E2C] font-[500] font-serif tracking-tight text-center">
                    Проданных апартаментов
                  </h3>
                </div>

                {/* Карточка 3 */}
                <div className="p-[40px] sm:p-[10px] md:p-[20px] lg:p-[30px] xl:p-[40px] flex flex-col gap-[14px] sm:gap-[10px] md:gap-[12px] lg:gap-[16px] xl:gap-[20px] items-center">
                  <Image
                    className="sm:w-[20px] md:w-[30px] lg:w-[35px] xl:w-[40px]"
                    src={Homes}
                    alt="homes"
                  />
                  <h1 className="text-[50px] sm:text-[24px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-[#100E2C] font-[700] font-sans tracking-wide">
                    125
                  </h1>
                  <h3 className="text-[24px] sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[24px] text-[#100E2C] font-[500] font-serif tracking-tight text-center">
                    Проданных домов
                  </h3>
                </div>

                {/* Карточка 4 */}
                <div className="p-[40px] sm:p-[10px] md:p-[20px] lg:p-[30px] xl:p-[40px] flex flex-col gap-[14px] sm:gap-[10px] md:gap-[12px] lg:gap-[16px] xl:gap-[20px] items-center">
                  <Image
                    className="sm:w-[20px] md:w-[30px] lg:w-[35px] xl:w-[40px]"
                    src={Zavod}
                    alt="Zavod"
                  />
                  <h1 className="text-[50px] sm:text-[24px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-[#100E2C] font-[700] font-sans tracking-wide">
                    120
                  </h1>
                  <h3 className="text-[24px] sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[24px] text-[#100E2C] font-[500] font-serif tracking-tight text-center">
                    Проданных вилл
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-1 ENDED */}

      {/* SECTION-2 STARTED */}
      <section
        id="section-2"
        className="sm:pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[120px]"
      >
        <div className="container sm:px-[20px] md:px-[40px] lg:px-[50px] xl:px-[60px]">
          <div className="flex sm:flex-col md:flex-row  sm:gap-[30px] md:gap-[70px] lg:gap-[90px] xl:gap-[120px] items-center">
            {/* Изображение */}
            <Image
              src={Expert}
              className="sm:w-[280px] md:w-[400px] lg:w-[450px] xl:w-[500px] rounded-lg shadow-xl"
              alt="Expert"
            />

            {/* Текстовый блок */}
            <div className="sm:w-[100%] text-center md:w-[50%] p-5 lg:w-[526px]">
              <h2 className="text-[#100E2C] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] sm:pb-[20px] md:pb-[30px] lg:pb-[35px] xl:pb-[40px] font-bold leading-[1.4]">
                Экспертные советы для всех ваших потребностей в недвижимости
              </h2>
              <p className="sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#5A5A5A] leading-[1.8]">
                Преимущество заключается в том, что мы предоставляем вам
                квалифицированную информацию по вопросам недвижимости и по
                вопросам, которые могут возникнуть в процессе сделки.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-2 ENDED */}

      {/* SECTION-3 STARTED */}
      <section id="section-3" className="mb-[60px] sm:mb-[20px] sm:px-[20px]">
        <div className="container sm:pl-[0px] pl-[110px]">
          {/* Заголовок */}
          <h2 className="text-[#100E2C] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[40px] text-center pb-[24px] sm:pb-[12px] font-[700]">
            Успех наших клиентов — наш успех.
          </h2>

          {/* Описание */}
          <p className="text-center pb-[40px] sm:pb-[20px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
            Наша цель — обеспечить вам лучший сервис, предоставляя экспертные
            рекомендации по недвижимости. Мы стремимся к тому, чтобы ваши
            инвестиции были максимально выгодными.
          </p>

          {/* Карточки */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {/* Карточка 1 */}
            <div className="p-[40px] sm:p-[20px] items-center text-[#fff] flex flex-col gap-[32px] rounded-[12px] bg-[#100E2C]">
              <Image src={HomeGroup} alt="home group" />
              <h3 className="text-[24px] sm:text-[20px] font-[700] text-center">
                Купить недвижимость
              </h3>
              <p className="text-center sm:text-[14px] md:text-[16px]">
                Мы поможем вам найти лучшие варианты на рынке недвижимости.
                Ознакомьтесь с актуальными предложениями.
              </p>
              <button className="text-[20px] sm:text-[16px] font-[500] bg-[#0057FF] rounded-[6px] w-full sm:w-[100%] md:w-[200px] h-[50px] hover:bg-[#0055ffdb] transition-all duration-200 active:bg-[#0057FF]">
                Найти недвижимость
              </button>
            </div>

            {/* Карточка 2 */}
            <div className="p-[40px] sm:p-[20px] items-center text-[#fff] flex flex-col gap-[32px] rounded-[12px] bg-[#100E2C]">
              <Image src={BankGroup} alt="Bank group" />
              <h3 className="text-[24px] sm:text-[20px] font-[700] text-center">
                Продать недвижимость
              </h3>
              <p className="text-center sm:text-[14px] md:text-[16px]">
                Если вы хотите продать свою недвижимость, мы готовы предложить
                вам лучшие условия для этого.
              </p>
              <button className="text-[20px] sm:text-[16px] font-[500] bg-[#0057FF] rounded-[6px] w-full sm:w-[100%] md:w-[200px] h-[50px] hover:bg-[#0055ffdb] transition-all duration-200 active:bg-[#0057FF]">
                Узнать больше
              </button>
            </div>

            {/* Карточка 3 */}
            <div className="p-[40px] sm:p-[20px] items-center text-[#fff] flex flex-col gap-[32px] rounded-[12px] bg-[#100E2C]">
              <Image src={HomeGroup2} alt="home group 2" />
              <h3 className="text-[24px] sm:text-[20px] font-[700] text-center">
                Купить недвижимость
              </h3>
              <p className="text-center sm:text-[14px] md:text-[16px]">
                Мы предлагаем широкий выбор недвижимости для покупки и аренды с
                разнообразными опциями для разных нужд.
              </p>
              <button className="text-[20px] sm:text-[16px] font-[500] bg-[#0057FF] rounded-[6px] w-full sm:w-[100%] md:w-[200px] h-[50px] hover:bg-[#0055ffdb] transition-all duration-200 active:bg-[#0057FF]">
                Найти в аренду
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-3 ENDED */}

      {/* SECTION-4 STARTED */}
      <section
        id="section-4-2"
        className="mb-[60px] sm:px-[20px] sm:pb-[110px] sm:pt-[110px] sm:mb-[20px] sm:h-max h-[480px]"
      >
        <div className="container sm:pl-[0px] pl-[110px]">
          <h2 className="pt-[205px] sm:pt-[0px] text-[50px] sm:text-[22px] sm:pb-[20px] text-[#fff] font-[700] pb-[4px]">
            Откройте для себя вашу уникальную недвижимость
          </h2>

          <p className="text-[#fff] sm:text-[14px]">
            Мы предлагаем разнообразные варианты недвижимости, которые идеально
            соответствуют вашим потребностям.
          </p>
        </div>
      </section>

      {/* SECTION-4 ENDED */}

      {/* SECTION-5 STARTED */}
      <section id="section-5" className="mb-[60px] sm:px-[20px] sm:mb-[30px]">
        <div className="container">
          <h1 className="pb-[4px] sm:text-[30px] text-center text-[#100E2C] text-[50px] font-[700]">
            Наши профессиональные агенты
          </h1>

          <p className="text-center sm:text-[12px] sm:pb-[20px] pb-[40px]">
            Мы предоставляем опытных специалистов, которые помогут вам найти
            идеальную недвижимость.
          </p>

          <div className="grid gap-[24px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 place-items-center">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex sm:w-full sm:max-w-[400px] sm:h-[150px] w-[636px] h-[256px] p-[15px] gap-[20px] rounded-[12px] shadow-lg"
              >
                <Image
                  className="sm:w-[100px]"
                  src={PersonOne}
                  alt="person-1"
                />
                <div className="flex flex-col">
                  <h3 className="text-[24px] sm:text-[16px] font-[600] pb-[5px]">
                    Террелл Норман
                  </h3>
                  <p className="pb-[5px] sm:text-[8px] text-[14px] font-[500] text-[#100E2C]">
                    Агент по недвижимости
                  </p>
                  <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between">
                    <h3 className="text-[14px] sm:text-[8px] font-[600]">
                      Офис
                    </h3>
                    <p className="text-[14px] sm:text-[8px] font-[600] text-[#7A7474]">
                      (358) 707-4989
                    </p>
                  </div>
                  <div className="flex py-[8px] border-b-[1px] border-b-[#7A747433] justify-between">
                    <h3 className="text-[14px] sm:text-[8px] font-[600]">
                      Мобильный
                    </h3>
                    <p className="text-[14px] sm:text-[8px] font-[600] text-[#7A7474]">
                      (822) 622-2842
                    </p>
                  </div>
                  <div className="flex py-[8px] border-b-[1px] sm:border-none border-b-[#7A747433] justify-between">
                    <h3 className="text-[14px] sm:text-[8px] font-[600]">
                      Email
                    </h3>
                    <p className="text-[14px] sm:text-[8px] font-[600] text-[#7A7474]">
                      shrapnull@yahoo.ca
                    </p>
                  </div>
                  <div className="flex sm:hidden items-center gap-[16px] pt-[24px]">
                    <Image src={IconOne} alt="IconOne" />
                    <Image src={IconTwo} alt="IconTwo" />
                    <Image src={IconThree} alt="IconThree" />
                    <Image src={IconFour} alt="IconFour" />
                    <Image src={IconFive} alt="IconFive" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION-5 ENDED */}

      {/* SECTION-6 STARTED */}
      <section id="section-6-2" className="py-[60px] sm:py-[30px] px-[20px]">
        <div className="container pl-[110px] sm:pl-[0px]">
          <div className="flex flex-col lg:flex-row items-center gap-[40px] sm:gap-[30px] md:gap-[50px] lg:gap-[100px]">
            {/* Текстовая часть */}
            <div className="flex flex-col gap-[30px] items-start w-full lg:w-[50%]">
              <h2 className="text-[40px] sm:text-[20px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-[700]">
                Недвижимость, персонализированная для вас
              </h2>

              <p className="text-[16px] sm:text-[14px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
                Мы предлагаем вам лучшие варианты недвижимости, которые подойдут
                именно вам. Наша цель — помочь вам найти идеальное жилье с
                учетом всех ваших пожеланий и потребностей. Обширный выбор,
                удобные условия и индивидуальный подход к каждому клиенту
                гарантируют, что вы останетесь довольны своим выбором.
              </p>

              <button className="text-[20px] sm:text-[14px]  md:text-[16px]  p-2 mx-auto lg:text-[18px]  xl:text-[20px] font-[500] text-[#fff] bg-[#0057FF] hover:bg-[#0055ffdf] duration-200 transition-all active:bg-[#0057FF] rounded-[6px] sm:w-[140px] sm:h-[35px] md:w-[160px] md:h-[40px] lg:w-[180px] lg:h-[45px] xl:w-[200px] xl:h-[50px]">
                Узнать больше
              </button>
            </div>

            {/* Изображение */}
            <div className="w-full sm:w-[300px] md:w-[400px] lg:w-[50%] flex justify-center">
              <Image
                src={Real}
                alt="realback"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-6 ENDED */}

      {/* SECTION-7 STARTED */}
      <section id="section-7" className="py-[60px] sm:py-[30px] sm:px-[20px]">
        <div className="container mx-auto text-center">
          <h2 className="text-[#100E2C] text-[50px] sm:text-[25px] font-[700] pb-[14px]">
            Новости блога
          </h2>

          <p className="pb-[40px] sm:pb-[20px]">
            Мы следим за самыми актуальными трендами в недвижимости и дизайне,
            чтобы помочь вам быть в курсе последних событий.
          </p>

          <div className="flex flex-wrap justify-center gap-[20px]">
            <div className="flex flex-col w-[416px] sm:w-full lg:w-[416px]">
              <Image src={HeyOne} alt="HeyOne" className="w-full" />
              <p className="text-[#7A7474] pt-[8px] text-[16px] font-[500]">
                23.12.2023
              </p>
              <h2 className="text-[24px] font-[600] pb-[16px]">
                Продажа домов начинает расти
              </h2>
              <p className="text-[#7A7474]">
                Недвижимость снова становится привлекательной для инвесторов. В
                последние месяцы наблюдается рост цен и спроса на жилые дома.
              </p>
            </div>

            <div className="flex flex-col w-[416px] sm:w-full lg:w-[416px]">
              <Image src={HeyTwo} alt="HeyTwo" className="w-full" />
              <p className="text-[#7A7474] pt-[8px] text-[16px] font-[500]">
                23.12.2023
              </p>
              <h2 className="text-[24px] font-[600] pb-[16px]">
                Тренды недвижимости и дизайна
              </h2>
              <p className="text-[#7A7474]">
                Современные дизайнерские решения в недвижимости открывают новые
                возможности для создания стильных и удобных пространств.
              </p>
            </div>

            <div className="flex flex-col w-[416px] sm:w-full lg:w-[416px]">
              <Image src={HeyThree} alt="HeyThree" className="w-full" />
              <p className="text-[#7A7474] pt-[8px] text-[16px] font-[500]">
                23.12.2023
              </p>
              <h2 className="text-[24px] font-[600] pb-[16px]">
                Ипотечные ставки опустились
              </h2>
              <p className="text-[#7A7474]">
                Снижение ставок по ипотечным кредитам делает покупку жилья более
                доступной для многих семей. Это дает шанс большему количеству
                людей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-7 ENDED */}
    </>
  );
}
