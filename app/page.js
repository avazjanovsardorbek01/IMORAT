"use client";
import Image from "next/image";
import "./page.css";
import {
  HeroOne,
  SaleOne,
  SaleTwo,
  SaleThree,
  SaleFour,
  RentOne,
  RentTwo,
  HeroFour,
  SaleOneLittle,
  SaleTwoLittle,
  SaleThreeLittle,
  RentOneLittle,
} from "@/png";
import { Filter, Bedroom, Bathroom, Garage, Area } from "@/svg";
import {
  HeroThree,
  NewYork,
  Boston,
  Chicago,
  Washington,
  Miami,
  Toshkent,
} from "@/png";
import FormComponent from "@/components/tgg";
import AntCarousel from "@/components/AntCarousel";

const properties = [
  {
    image: SaleOne,
    title: "Дом на улице Дивижн",
    address: "506 Дивижн Роуд, Пемброк Пайнс, Флорида 33028",
    price: "$250000",
    details: { Bedrooms: 3, Bathrooms: 2, Area: 1200, Garages: 3 },
  },
  {
    image: SaleTwo,
    title: "Дом на Северной улице",
    address: "19 Северная улица, Пискатавей, Нью-Джерси 08854",
    price: "$222000",
    details: { Bedrooms: 2, Bathrooms: 3, Area: 1200, Garages: 1 },
  },
  {
    image: RentOne,
    title: "Дом в Блумфилде",
    address: "29 У. Поуни Стрит, Блумфилд, Нью-Джерси 07003",
    price: "$250000",
    details: { Bedrooms: 4, Bathrooms: 2, Area: 850, Garages: 2 },
  },
  {
    image: SaleThree,
    title: "Вилла на Роквилле Авеню",
    address: "8460 Роквилль Авеню, Гринвилл, Северная Каролина 27834",
    price: "$180000",
    details: { Bedrooms: 5, Bathrooms: 2, Area: 320, Garages: 2 },
  },
  {
    image: RentTwo,
    title: "Вилла в Скотч Плейнс",
    address: "820 Огайо Роуд, Скотч Плейнс, Нью-Джерси 07076",
    price: "$160000",
    details: { Bedrooms: 2, Bathrooms: 2, Area: 1200, Garages: 2 },
  },
  {
    image: SaleFour,
    title: "Дом на Лис Крик",
    address: "7916 Лис Крик Стрит, Дейтон, Огайо 45420",
    price: "$210000",
    details: { Bedrooms: 3, Bathrooms: 1, Area: 480, Garages: 1 },
  },
];

const PropertyCard = ({ property }) => (
  <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
    <Image
      src={property.image}
      alt={property.title}
      className="w-full h-auto object-cover" // Make sure the image is responsive
    />

    <div className="bg-[#fff] p-[24px] sm:p-[16px] md:p-[20px] lg:p-[24px]">
      <h3 className="text-[20px] sm:text-[16px] md:text-[18px] font-[600]">
        {property.title}
      </h3>
      <p className="text-[#7A7474] pt-[10px] sm:text-[13px] md:text-[14px]">
        {property.address}
      </p>

      <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600] sm:text-[18px] md:text-[20px] lg:text-[22px]">
        {property.price}
      </h2>

      <div className="flex pt-[10px] items-center gap-[37px] flex-wrap sm:gap-[20px] md:gap-[30px]">
        {Object.entries(property.details).map(([key, value]) => (
          <div key={key} className="flex gap-[12px] sm:gap-[8px] flex-col">
            <div className="flex items-center sm:gap-[4px] gap-[8px]">
              <Image
                className="sm:w-[20px] md:w-[24px]"
                src={getIcon(key)}
                alt={key}
              />
              <h3 className="text-[#100E2C] font-[500] text-[16px] sm:text-[12px] md:text-[14px]">
                {value}
              </h3>
            </div>
            <h2 className="text-[#100E2C] font-[500] text-[14px] sm:text-[12px] md:text-[14px]">
              {key}
            </h2>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const getIcon = (key) => {
  const icons = {
    Bedrooms: Bedroom,
    Bathrooms: Bathroom,
    Area: Area,
    Garages: Garage,
  };
  return icons[key];
};

export default function Home() {
  return (
    <>
      {/* SECTION-1 STARTED */}
      <section
        id="section-1"
        className="pb-[120px] rounded-lg font-[Poppins] bg-gradient-to-b from-gray-50 to-gray-100"
      >
        <div className="container rounded-lg relative">
          <AntCarousel />
          <div className="p-[40px] sm:p-[20px] shadow-xl rounded-[12px] w-full max-w-[1076px] bg-[#fff] mx-auto">
            <div className="flex flex-wrap items-center justify-between sm:justify-center gap-[12px]">
              <select
                className="p-[15px] w-full sm:w-[200px] lg:w-[254px] bg-[#F6F6F6] text-gray-700 cursor-pointer h-[50px] outline-none rounded-[5px] font-medium shadow-md"
                name="category"
              >
                <option value="category 1">Категория</option>
                <option value="category 2">Категория 1</option>
                <option value="category 3">Категория 2</option>
              </select>

              <select
                className="p-[15px] w-full sm:w-[200px] lg:w-[254px] bg-[#F6F6F6] text-gray-700 cursor-pointer h-[50px] outline-none rounded-[5px] font-medium shadow-md"
                name="property"
              >
                <option value="Property Type">Тип недвижимости</option>
                <option value="Property Type 2">Тип недвижимости 1</option>
                <option value="Property Type 3">Тип недвижимости 2</option>
                <option value="Property Type 4">Тип недвижимости 3</option>
              </select>

              <select
                className="p-[15px] w-full sm:w-[200px] lg:w-[254px] bg-[#F6F6F6] text-gray-700 h-[50px] cursor-pointer outline-none rounded-[5px] font-medium shadow-md"
                name="location"
              >
                <option value="location">Местоположение</option>
                <option value="tashkent">Ташкент</option>
                <option value="samarkand">Самарканд</option>
                <option value="navoiy">Навои</option>
                <option value="bukhara">Бухара</option>
              </select>

              <Image
                src={Filter}
                alt="filter"
                className="cursor-pointer sm:mt-[10px] lg:mt-0"
              />

              <button className="flex text-[#fff] h-[50px] px-[31px] py-[17px] rounded-[6px] hover:bg-[#004ae1] active:bg-[#003fbb] bg-gradient-to-r from-[#0057FF] to-[#003FBB] shadow-lg duration-150 transition-all items-center gap-[12px]">
                <i className="bx bx-search text-[#fff] text-[25px]"></i> Поиск
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-1 ENDED */}
      {/* SECTION-2 STARTED */}
      <section id="section-2" className="pb-[60px]">
        <div className="container">
          <h1 className="text-[#100E2C] sm:text-[23px] text-center font-[700] text-[50px] leading-tight font-[Poppins]">
            Выберите свой идеальный объект
          </h1>
          <p className="text-center pt-[5px] sm:text-[12px] text-[18px] pb-[40px] text-gray-600 font-[Poppins] leading-relaxed">
            Мы предлагаем разнообразные объекты недвижимости, которые могут
            удовлетворить любые ваши потребности.
            <br />
            Ознакомьтесь с нашими предложениями и выберите лучший вариант для
            себя.
          </p>

          <div className="flex justify-center items-center w-full">
            <div className="grid p-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-2 ENDED */}
      {/* SECTION-3 STARTED */}
      <section className="py-[100px] sm:py-[50px] bg-[#100E2C]" id="section-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-[134px] gap-[40px]">
            <Image
              src={HeroThree}
              alt="HeroThree"
              className="w-full max-w-[520px] h-auto lg:w-[520px] lg:h-[350px]"
            />
            <div className="text-center lg:text-left lg:w-[498px] w-full">
              <h2 className="font-[Poppins] font-bold text-[28px] md:text-[32px] lg:text-[35px] text-[#FFFFFF] leading-[1.2] tracking-wide pb-[20px]">
                Превращаем план в реальность, чтобы обеспечить ваше
                удовлетворение!
              </h2>
              <p className="font-[Poppins] text-[14px] md:text-[16px] lg:text-[18px] text-[#FFFFFF] leading-relaxed pb-[30px]">
                Мы стремимся к совершенству, улучшая каждый аспект для вашего
                комфорта и удовлетворения. Каждый шаг мы сопровождаем тщательным
                вниманием к деталям, обеспечивая надежность и высокое качество.
              </p>
              <button className="rounded-[6px] bg-[#0057FF] hover:bg-[#0055ffd7] transition-all duration-300 active:bg-[#0057FF] w-[180px] md:w-[200px] h-[45px] md:h-[50px] text-[#fff]">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-3 ENDED */}
      {/* SECTION-4 STARTED */}
      <section
        className="pt-[100px] sm:pt-[30px] sm:pb-[25px] pb-[60px] bg-gradient-to-b from-gray-100 to-white"
        id="section-4"
      >
        <div className="container flex flex-col lg:flex-row items-center justify-between px-[20px] sm:px-[10px] gap-[50px]">
          {/* Текстовый блок */}
          <div className="w-full lg:w-[416px] text-center lg:text-left">
            <h2 className="text-[#100E2C] text-[42px] font-bold leading-tight sm:text-[28px] sm:leading-snug pb-[15px]">
              Что говорят наши клиенты
              <br /> о нас
            </h2>

            <p className="text-[18px] sm:text-[16px] leading-relaxed text-gray-700">
              Мы предлагаем отличные услуги, которые удовлетворяют все ваши
              потребности. Каждый проект мы сопровождаем вниманием к деталям,
              чтобы добиться наилучшего результата. Наши клиенты остаются
              довольны, потому что мы предлагаем только лучшие решения!
            </p>

            <div className="mt-[30px]">
              <h4 className="text-[22px] sm:text-[18px] font-semibold text-gray-800">
                Александр Иванов
              </h4>
              <p className="text-[16px] sm:text-[14px] text-gray-500">Клиент</p>
            </div>
          </div>

          {/* Изображение */}
          <div className="w-full lg:w-[520px] h-auto flex items-center justify-center">
            <Image
              src={HeroFour}
              alt="HeroFour"
              className="rounded-lg shadow-lg w-full lg:w-[520px] h-[350px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION-4 ENDED */}
      {/* SECTION-5 STARTED */}
      <section className="py-[60px] sm:py-[25px] sm:px-[20px]" id="section-5">
        <div className="container">
          <h2 className="text-center text-[#100E2C] text-[50px] sm:text-[25px] font-[700] pb-[10px]">
            Коммерческая недвижимость
          </h2>
          <p className="text-center text-[20px] pb-[40px]">
            У нас есть все необходимое для вашего комфорта и успешного бизнеса.
            Мы предоставляем лучшие условия для вашего роста.
          </p>

          <div className="flex justify-center items-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {/* Карточка 1 */}
              <div className="card">
                <Image src={SaleOneLittle} alt="Sale One Little" />
                <div className="text p-[20px] rounded-b-[12px] bg-white shadow-xl overflow-hidden">
                  <h2 className="text-[20px] font-[600] pb-[10px]">
                    Pembroke Pines office
                  </h2>
                  <h3 className="pb-[20px] text-[#100E2C] text-[20px] font-[600] border-b-[#7A7474] border-b-[1px]">
                    $150000
                  </h3>
                  <div className="pt-[10px] pb-[14px] gap-[30px] flex items-center">
                    {/* Параметры недвижимости */}
                  </div>
                </div>
              </div>

              {/* Карточка 2 */}
              <div className="card">
                <Image src={RentOneLittle} alt="Rent One Little" />
                <div className="text p-[20px] rounded-b-[12px] bg-white shadow-xl overflow-hidden">
                  <h2 className="text-[20px] font-[600] pb-[10px]">
                    Sulphur office
                  </h2>
                  <h3 className="pb-[20px] text-[#100E2C] text-[20px] font-[600] border-b-[#7A7474] border-b-[1px]">
                    $2500/mo
                  </h3>
                  <div className="pt-[10px] pb-[14px] gap-[30px] flex items-center">
                    {/* Параметры недвижимости */}
                  </div>
                </div>
              </div>

              {/* Карточка 3 */}
              <div className="card">
                <Image src={RentOneLittle} alt="Rent One Little" />
                <div className="text p-[20px] rounded-b-[12px] bg-white shadow-xl overflow-hidden">
                  <h2 className="text-[20px] font-[600] pb-[10px]">
                    Coral Gables office
                  </h2>
                  <h3 className="pb-[20px] text-[#100E2C] text-[20px] font-[600] border-b-[#7A7474] border-b-[1px]">
                    $1800/mo
                  </h3>
                  <div className="pt-[10px] pb-[14px] gap-[30px] flex items-center">
                    {/* Параметры недвижимости */}
                  </div>
                </div>
              </div>

              {/* Карточка 4 */}
              <div className="card">
                <Image src={SaleOneLittle} alt="Sale One Little" />
                <div className="text p-[20px] rounded-b-[12px] bg-white shadow-xl overflow-hidden">
                  <h2 className="text-[20px] font-[600] pb-[10px]">
                    Sunrise office
                  </h2>
                  <h3 className="pb-[20px] text-[#100E2C] text-[20px] font-[600] border-b-[#7A7474] border-b-[1px]">
                    $145000
                  </h3>
                  <div className="pt-[10px] pb-[14px] gap-[30px] flex items-center">
                    {/* Параметры недвижимости */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-5 ENDED */}
      {/* SECTION-6 STARTED */}
      <section className="py-[60px] sm:py-[30px] p-[20px]" id="section-6">
        <div className="container flex sm:flex-col sm:items-start sm:justify-center sm:gap-[40px] gap-[136px] items-center sm:px-[20px] px-[110px] pr-[136px]">
          {/* Контейнер с формой */}
          <div className="registration sm:w-[350px] sm:h-[570px] w-[416px] h-[610px] bg-[#100E2C] rounded-[12px] sm:p-[20px] text-[#fff] p-[40px] mx-auto">
            <h2 className="text-[28px] font-[700] pb-[10px]">
              Свяжитесь с нами
            </h2>
            <p className="pb-[20px]">
              Мы всегда рады ответить на ваши вопросы и помочь вам с любыми
              запросами.
            </p>
            <FormComponent />
          </div>

          {/* Блок с текстом, который будет видим только на десктопе */}
          <div className="text text-[#fff] hidden lg:block">
            <h2 className="text-[40px] sm:text-[20px] font-[700] pb-[30px]">
              Превращаем план в реальность,
              <br />
              чтобы обеспечить ваше удовлетворение!
            </h2>
            <p>
              Мы тщательно работаем, чтобы удовлетворить ваши потребности и
              ожидания.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION-6 ENDED */}
      {/* SECTION-7 STARTED */}
      <section className="py-[60px] sm:py-[20px] sm:px-[20px]" id="section-7">
        <div className="container">
          <h1 className="text-[#100E2C] text-center sm:text-[25px] text-[50px] pb-[14px] font-[700]">
            Исторические города Узбекистана
          </h1>

          <p className="text-center text-[20px] pb-[40px] sm:text-[14px] sm:pb-[20px]">
            Самые древние и знаменитые города Узбекистана, которые имеют
            уникальную историю, культуру и архитектуру.
          </p>

          <div className="flex flex-wrap justify-center gap-[24px]">
            {/* Самарканд */}
            <div className="flex flex-col items-center transition-all duration-500 hover:scale-105 w-full sm:w-[48%] md:w-[30%] lg:w-[18%]">
              <div className="relative overflow-hidden rounded-[20px] shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
                <Image
                  src={NewYork} // Изображение для Самарканда
                  alt="Самарканд"
                  width={400}
                  height={300}
                  className="object-cover w-[100%] h-[300px] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                />
                <p className="absolute bottom-4 left-4 text-white text-xl font-semibold text-shadow-md bg-black bg-opacity-40 px-4 py-2 rounded-lg">
                  Самарканд
                </p>
              </div>
            </div>

            {/* Бухара */}
            <div className="flex flex-col items-center transition-all duration-500 hover:scale-105 w-full sm:w-[48%] md:w-[30%] lg:w-[18%]">
              <div className="relative overflow-hidden rounded-[20px] shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
                <Image
                  src={Chicago} // Изображение для Бухары
                  alt="Бухара"
                  width={400}
                  height={300}
                  className="object-cover w-[100%] h-[300px] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                />
                <p className="absolute bottom-4 left-4 text-white text-xl font-semibold text-shadow-md bg-black bg-opacity-40 px-4 py-2 rounded-lg">
                  Бухара
                </p>
              </div>
            </div>

            {/* Ташкент */}
            <div className="flex flex-col items-center transition-all duration-500 hover:scale-105 w-full sm:w-[48%] md:w-[30%] lg:w-[18%]">
              <div className="relative overflow-hidden rounded-[20px] shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
                <Image
                  src={Boston} // Изображение для Ташкента
                  alt="Ташкент"
                  width={400}
                  height={300}
                  className="object-cover w-[100%] h-[300px] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                />
                <p className="absolute bottom-4 left-4 text-white text-xl font-semibold text-shadow-md bg-black bg-opacity-40 px-4 py-2 rounded-lg">
                  Ташкент
                </p>
              </div>
            </div>

            {/* Хорезм */}
            <div className="flex flex-col items-center transition-all duration-500 hover:scale-105 w-full sm:w-[48%] md:w-[30%] lg:w-[18%]">
              <div className="relative overflow-hidden rounded-[20px] shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
                <Image
                  src={Washington} // Изображение для Хорезма
                  alt="Хорезм"
                  width={400}
                  height={300}
                  className="object-cover w-[100%] h-[300px] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                />
                <p className="absolute bottom-4 left-4 text-white text-xl font-semibold text-shadow-md bg-black bg-opacity-40 px-4 py-2 rounded-lg">
                  Хорезм
                </p>
              </div>
            </div>

            {/* Ташкент (особая фотка) */}
            <div className="flex flex-col items-center transition-all duration-500 hover:scale-105 w-full sm:w-[48%] md:w-[30%] lg:w-[18%]">
              <div className="relative overflow-hidden rounded-[20px] shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl">
                <Image
                  src={Miami} // Изображение для Ташкента
                  alt="Ташкент"
                  width={400}
                  height={200}
                  className="object-cover w-[100%] h-[300px] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                />
                <p className="absolute bottom-4 left-4 text-white text-xl font-semibold text-shadow-md bg-black bg-opacity-40 px-4 py-2 rounded-lg">
                  Ташкент
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-7 ENDED */}
    </>
  );
}
