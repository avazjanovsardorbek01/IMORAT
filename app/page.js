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
import { HeroThree, NewYork, Boston, Chicago, Washington, Miami } from "@/png";
import "boxicons";
import FormComponent from "@/components/tgg";
import AntCarousel from "@/components/AntCarousel";

const properties = [
  {
    image: SaleOne,
    title: "Division Road house",
    address: "506 Division Road Pembroke Pines, FL 33028",
    price: "$250000",
    details: { Bedrooms: 3, Bathrooms: 2, Area: 1200, Garages: 3 },
  },
  {
    image: SaleTwo,
    title: "North Road house",
    address: "19 North Road Piscataway, NJ 08854",
    price: "$222000",
    details: { Bedrooms: 2, Bathrooms: 3, Area: 1200, Garages: 1 },
  },
  {
    image: RentOne,
    title: "Bloomfield house",
    address: "29 W. Pawnee St.Bloomfield, NJ 07003",
    price: "$250000",
    details: { Bedrooms: 4, Bathrooms: 2, Area: 850, Garages: 2 },
  },
  {
    image: SaleThree,
    title: "Rockville Ave villa",
    address: "8460 Rockville Ave. Greenville, NC 27834",
    price: "$180000",
    details: { Bedrooms: 5, Bathrooms: 2, Area: 320, Garages: 2 },
  },
  {
    image: RentTwo,
    title: "Scotch Plains villa",
    address: "820 Ohio Road Scotch Plains, NJ 07076",
    price: "$160000",
    details: { Bedrooms: 2, Bathrooms: 2, Area: 1200, Garages: 2 },
  },
  {
    image: SaleFour,
    title: "Lees Creek house",
    address: "7916 Lees Creek St. Dayton, OH 45420",
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
      <section id="section-1" className="pb-[120px] rounded-lg">
        <div className="container rounded-lg relative">
          <AntCarousel />
          <div className="p-[40px] sm:p-[20px] shadow-xl rounded-[12px] w-full max-w-[1076px] bg-[#fff] mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-[12px]">
              <select
                className="p-[15px] w-[254px] sm:w-[200px] lg:w-[254px] bg-[#F6F6F6] cursor-pointer h-[50px] outline-none rounded-[5px]"
                name="category"
              >
                <option value="category 1">Category</option>
                <option value="category 2">Category 1</option>
                <option value="category 3">Category 2</option>
              </select>

              <select
                className="p-[15px] w-[254px] sm:w-[200px] lg:w-[254px] bg-[#F6F6F6] cursor-pointer h-[50px] outline-none rounded-[5px]"
                name="property"
              >
                <option value="Property Type">Property Type</option>
                <option value="Property Type 2">Property Type 1</option>
                <option value="Property Type 3">Property Type 2</option>
                <option value="Property Type 4">Property Type 3</option>
              </select>

              <select
                className="p-[15px] w-[254px] sm:w-[200px] lg:w-[254px] bg-[#F6F6F6] h-[50px] cursor-pointer outline-none rounded-[5px]"
                name="location"
              >
                <option value="location">Location</option>
                <option value="tashkent">Tashkent</option>
                <option value="samarkand">Samarkand</option>
                <option value="navoiy">Navoiy</option>
                <option value="bukhara">Bukhara</option>
              </select>

              <Image src={Filter} alt="filter" className="cursor-pointer" />

              <button className="flex text-[#Fff] h-[50px] px-[31px] py-[17px] rounded-[6px] hover:bg-[#0055ffe1] active:bg-[#0057FF] duration-150 transition-all bg-[#0057FF] items-center gap-[12px]">
                <i className="bx bx-search text-[#fff] text-[25px]"></i> SEARCH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-1 ENDED */}

      {/* SECTION-2 STARTED */}
      <section id="section-2" className="pb-[60px]">
        <div className="container">
          <h1 className="text-[#100E2C] sm:text-[23px] text-center font-[700] text-[50px]">
            Выберите свой идеальный объект
          </h1>
          <p className="text-center pt-[5px] sm:text-[10px] pb-[40px]">
            Мы предлагаем разнообразные объекты недвижимости, которые могут
            удовлетворить любые ваши потребности.
            <br />
            Ознакомьтесь с нашими предложениями и выберите лучший вариант для
            себя.
          </p>

          <div className="flex justify-center items-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
        <div className="container">
          <div className="flex sm:flex-col sm:px-[20px] pl-[110px] sm:gap-[40px] pr-[140px] gap-[134px] items-center justify-between">
            <Image src={HeroThree} alt="HeroThree" />

            <div className="w-[498px] sm:w-[350px]">
              <h2 className="font-[700] text-[39px] pb-[40px] sm:text-[25px] text-[#fff]">
                Putting a plan to action,<br></br> to assure your satisfaction!
              </h2>

              <p className="pb-[40px] text-[#fff]">
                Ultrices quis at enim in tristique in id diam suspendisse. Sed
                fermentum velit id et donec dui. Sed nulla neque at phasellus in
                adipiscing dictum.{" "}
              </p>

              <button className="rounded-[6px] bg-[#0057FF] hover:bg-[#0055ffd7] transition-all duration-300 active:bg-[#0057FF] w-[200px] h-[50px] text-[#fff]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-3 ENDED */}

      {/* SECTION-4 STARTED */}
      <section
        className="pt-[100px] sm:pt-[30px] sm:pb-[25px] pb-[60px]"
        id="section-4"
      >
        <div className="container pl-[110px] sm:p-[20px] sm:gap-[50px] gap-[134px] sm:flex-col flex items-center pr-[292px]">
          <div className="w-[416px] sm:w-[350px] text-center">
            <h2 className="text-[#100E2C] text-[40px] pb-[10px] font-[700] sm:text-[25px] line-through-[50px]">
              What our clietns say<br></br>
              about us
            </h2>

            <p className="text-[20px] sm:text-[16px]">
              Arcu laoreet malesuada nunc eget. Fermentum ut dui etiam aliquam
              habitant elit euismod erat praesent. Tincidunt semper interdum
              fames cras{" "}
            </p>

            <h4 className="pt-[20px] text-[20px] sm:text-[16px] font-[600]">
              Miya Monroe
            </h4>
            <p className="pt-[2px] text-[#7A7474] sm:text-[14px]">Buyer</p>
          </div>

          <Image src={HeroFour} alt="HeroFour" />
        </div>
      </section>
      {/* SECTION-4 ENDED */}

      {/* SECTION-5 STARTED */}
      <section className="py-[60px] sm:py-[25px] sm:px-[20px]" id="section-5">
        <div className="container">
          <h2 className="text-center text-[#100E2C] text-[50px] sm:text-[25px] font-[700] pb-[10px]">
            Commercial property
          </h2>
          <p className="text-center pb-[40px]">
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis
            rhoncus
          </p>

          <div className="flex flex-wrap sm:justify-center gap-[24px] items-center">
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
                  <div className="flex items-center gap-[9px]">
                    <Image src={Bedroom} alt="bedroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Bathroom} alt="bathroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Area} alt="area" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Garage} alt="garage" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>
                </div>
              </div>
            </div>

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
                  <div className="flex items-center gap-[9px]">
                    <Image src={Bedroom} alt="bedroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Bathroom} alt="bathroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Area} alt="area" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Garage} alt="garage" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <Image src={SaleTwoLittle} alt="Sale Two Little" />

              <div className="text p-[20px] rounded-b-[12px] bg-white shadow-xl overflow-hidden">
                <h2 className="text-[20px] font-[600] pb-[10px]">
                  Hamden depot
                </h2>

                <h3 className="pb-[20px] text-[#100E2C] text-[20px] font-[600] border-b-[#7A7474] border-b-[1px]">
                  $120000
                </h3>

                <div className="pt-[10px] pb-[14px] gap-[30px] flex items-center">
                  <div className="flex items-center gap-[9px]">
                    <Image src={Bedroom} alt="bedroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Bathroom} alt="bathroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Area} alt="area" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Garage} alt="garage" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <Image src={SaleThreeLittle} alt="Sale Three Little" />

              <div className="text p-[20px] rounded-b-[12px] bg-white shadow-xl overflow-hidden">
                <h2 className="text-[20px] font-[600] pb-[10px]">
                  Fairground office
                </h2>

                <h3 className="pb-[20px] text-[#100E2C] text-[20px] font-[600] border-b-[#7A7474] border-b-[1px]">
                  $200000
                </h3>

                <div className="pt-[10px] pb-[14px] gap-[30px] flex items-center">
                  <div className="flex items-center gap-[9px]">
                    <Image src={Bedroom} alt="bedroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Bathroom} alt="bathroom" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Area} alt="area" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
                  </div>

                  <div className="flex items-center gap-[9px]">
                    <Image src={Garage} alt="garage" />
                    <h2 className="text-[16px] font-[500] text-[#100E2C]">2</h2>
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
        <div className="container pl-[110px] sm:pl-[0px] pr-[136px] sm:items-start sm:flex-col sm:justify-center sm:gap-[40px] flex items-center gap-[136px]">
          <div className="registration sm:w-[350px] sm:h-[570px] w-[416px] h-[610px] bg-[#100E2C] rounded-[12px] sm:p-[] text-[#fff] p-[40px]">
            <h2 className="text-[28px] font-[700] pb-[10px]">Get in touch</h2>

            <p className="pb-[20px]">
              Leo morbi faucibus mattis pharetra tellus velit ultricies duis
              rhoncus
            </p>
            <FormComponent />
            {/* <form
              className="flex flex-col gap-[20px] items-start"
              action=""
              method="POST"
            >
              <input
                type="text"
                id=""
                name="name"
                placeholder="Your name"
                className="p-[16px] bg-white rounded-[6px] sm:w-[280px] sm:p-[12px] w-[336px] outline-none text-[#666]"
              />

              <input
                type="email"
                id=""
                name="mail"
                placeholder="Your mail"
                className="p-[16px] bg-white rounded-[6px] sm:w-[280px] sm:p-[12px] w-[336px] outline-none text-[#666]"
              />

              <input
                type="number"
                id=""
                name="phone"
                placeholder="Your phone"
                className="p-[16px] bg-white rounded-[6px] sm:w-[280px] sm:p-[12px] w-[336px] outline-none text-[#666]"
              />

              <textarea
                id="id"
                name="name"
                placeholder="Your message"
                className="py-[8px] px-[16px] rounded-[6px] sm:w-[280px] sm:p-[12px] w-[336px] h-[108px] outline-none text-[#666]"
              />

              <button
                type="submit"
                className="w-[200px] sm:w-[180px] sm:h-[40px] h-[50px] bg-[#0057FF] active:bg-[#0057FF] transition-all duration-200 hover:bg-[#0055ffd5] rounded-[6px]"
              >
                Send message
              </button>
            </form> */}
          </div>

          <div className="text sm:hidden text-[#Fff]">
            <h2 className="text-[40px] sm:text-[20px] font-[700] pb-[30px]">
              Putting a plan to action,<br></br>
              to assure your satisfaction!{" "}
            </h2>

            <p>
              Arcu laoreet malesuada nunc eget. Fermentum ut dui etiam aliquam
              habitant elit
            </p>
          </div>
        </div>
      </section>
      {/* SECTION-6 ENDED */}

      {/* SECTION-7 STARTED */}
      <section className="py-[60px] sm:py-[20px] sm:px-[20px]" id="section-7">
        <div className="container">
          <h1 className="text-[#100E2C] sm:text-[25px] sm:pb-[5px] text-center text-[50px] pb-[14px] font-[700]">
            What city will you live in?
          </h1>

          <p className="text-center pb-[40px] sm:text-[14px] sm:pb-[20px]">
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis
            rhoncus.<br></br> Porttitor fermentum eu urna eget
          </p>

          <div className="flex items-start gap-[24px]">
            <div className="flex flex-col">
              <div className="flex items-start sm:gap-[4px] gap-[24px] pb-[24px]">
                <Image src={NewYork} alt="Newyork" />
              </div>

              <div className="flex items-center sm:gap-[4px] gap-[24px]">
                <Image src={Washington} alt="Washington" />
              </div>
            </div>

            <Image className="w-[300px]" src={Chicago} alt="chicago" />
          </div>
        </div>
      </section>
      {/* SECTION-7 ENDED */}
    </>
  );
}
