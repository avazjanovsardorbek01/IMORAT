"use client";

import Image from "next/image";
import {
  FeaturedFive,
  FeaturedFour,
  FeaturedOne,
  FeaturedThree,
  FeaturedTwo,
  HouseOne,
  HouseTwo,
  Plan,
  SaleOne,
  Video,
  SaleTwo,
  SaleThree,
} from "@/png";
import "boxicons";
import {
  AvaGet,
  Bathrooms,
  Bedrooms,
  Construction,
  Culture,
  Education,
  Elevator,
  Floor,
  Food,
  Health,
  Parking,
  TotalArea,
  Tv,
  WiFi,
  Bedroom,
  Bathroom,
  Area,
  Garage,
} from "@/svg";
import FormComponent from "@/components/tgg";

export default function Home() {
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
      image: SaleThree,
      title: "Rockville Ave villa",
      address: "8460 Rockville Ave. Greenville, NC 27834",
      price: "$180000",
      details: { Bedrooms: 5, Bathrooms: 2, Area: 320, Garages: 2 },
    },
  ];

  const PropertyCard = ({ property }) => (
    <div className="card overflow-hidden rounded-b-[12px] bg-white shadow-lg">
      <Image src={property.image} alt={property.title} />

      <div className="bg-[#fff] p-[24px] sm:p-[16px]">
        <h3 className="text-[20px] sm:text-[16px] font-[600]">
          {property.title}
        </h3>
        <p className="text-[#7A7474] pt-[10px] sm:text-[13px]">
          {property.address}
        </p>

        <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600] sm:text-[18px]">
          {property.price}
        </h2>

        <div className="flex pt-[10px] items-center gap-[37px]">
          {Object.entries(property.details).map(([key, value]) => (
            <div key={key} className="flex gap-[12px] sm:gap-[8px] flex-col">
              <div className="flex items-center sm:gap-[4px] gap-[8px]">
                <Image className="sm:w-[20px]" src={getIcon(key)} alt={key} />
                <h3 className="text-[#100E2C] font-[500] text-[16px] sm:text-[12px]">
                  {value}
                </h3>
              </div>
              <h2 className="text-[#100E2C] font-[500] text-[14px] sm:text-[12px]">
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
  return (
    <>
      <FormComponent />
      SECTION-1 STARTED
      <section id="section-1" className="mb-[60px] sm:mb-[30px] sm:px-[20px]">
        <div className="container">
          <button className="py-[10px] mb-[16px] sm:mb-[10px] px-[32px] sm:px-[14px] sm:w-[100px] w-[137px] rounded-[6px] cursor-pointer hover:bg-[#8eda53df] active:bg-[#8EDA53] duration-150 transition-all bg-[#8EDA53] sm:text-[14px] text-[20px] text-[#fff]">
            For sale
          </button>

          <div className="flex sm:mb-[20px] items-center mb-[40px] justify-between">
            <div className="flex flex-col gap-[2px]">
              <h2 className="text-[50px] sm:text-[16px] text-[#100E2C] font-[600]">
                Amazing modern apartment
              </h2>
              <p className="text-[20px] sm:text-[12px] text-[#0000008a]">
                43 W. Wellington Road Fairhope, AL 36532
              </p>
            </div>

            <div className="flex flex-col gap-[2px]">
              <h2 className="text-[50px] sm:text-[16px] font-[600]">
                $120.000
              </h2>
              <p className="text-[20px] sm:text-[12px] text-[#0000008a]">
                $1200/sq.ft
              </p>
            </div>
          </div>

          <div className="flex sm:flex-col items-center gap-[24px]">
            <Image className="cursor-pointer" src={HouseOne} alt="house-1" />

            <div className="flex gap-[24px] flex-col">
              <Image className="cursor-pointer" src={HouseTwo} alt="house-2" />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.210497847105!2d69.26982307624603!3d41.369511171302264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d002d934c69%3A0xacd1c867c828dce5!2sYunusobod%20Residence!5e0!3m2!1sen!2s!4v1734938673512!5m2!1sen!2s"
                className="rounded-[12px] w-[416px] h-[260px] sm:w-[350px] filter grayscale"
                style={{}}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-1 ENDED */}
      {/* SECTION-2 STARTED */}
      <section id="section-2" className="mb-[40px] sm:pb-[20px] sm:px-[20px]">
        <div className="container">
          <div className="flex sm:flex-col sm:gap-[30px] items-start justify-between">
            <div className="text sm:w-[350px] w-[856px]">
              <h3 className="text-[28px] font-[600] sm:text-[20px] text-[#100E2C] pb-[14px]">
                Description
              </h3>

              <p className="pb-[40px] sm:text-[14px] sm:pb-[20px]">
                Lorem ipsum dolor sit amet consectetur. Morbi quis habitant
                donec aliquet interdum. Massa bibendum tellus sed ultricies.
                Fermentum pharetra in lorem eget. Et imperdiet sed ultrices
                pulvinar ultrices enim. Duis fames neque pulvinar in feugiat
                gravida in. Diam adipiscing sed viverra mauris in lacus. Turpis
                dignissim tincidunt dui urna suspendisse elit consequat purus
                enim. Morbi mauris nunc sit aliquet. Nec aliquam consequat nulla
                accumsan enim ac ullamcorper.<br></br>
                <br></br>
                Ut pellentesque lectus auctor aenean urna. Lectus vestibulum sit
                et cursus volutpat dui commodo erat est. Elit leo consectetur
                amet mattis eget nec. Elit commodo aliquam est at vitae
                porttitor porta commodo. Senectus rhoncus orci quis risus eget
                massa. Id urna volutpat vulputate neque porttitor nec sit tempor
                porta. Pharetra netus enim vel nibh. Enim pharetra purus neque
                in blandit quis turpis nullam integer.
              </p>

              <h3 className="text-[28px] font-[600] text-[#100E2C] sm:text-[20px] pb-[15px]">
                Property details
              </h3>

              <div className="flex sm:flex-col items-start justify-between">
                <div className="one sm:w-[350px] w-[416px]">
                  <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <Image src={TotalArea} alt="total area" />

                      <h2 className="text-[#7A7474] text-[20px] font-[500]">
                        Total area
                      </h2>
                    </div>

                    <h2 className="text-[20px] font-[500]">100 sq.ft</h2>
                  </div>

                  <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <Image src={Bedrooms} alt="Bedrooms" />

                      <h2 className="text-[#7A7474] text-[20px] font-[500]">
                        Bedrooms
                      </h2>
                    </div>

                    <h2 className="text-[20px] font-[500]">2</h2>
                  </div>

                  <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <Image src={Bathrooms} alt="Bathrooms" />

                      <h2 className="text-[#7A7474] text-[20px] font-[500]">
                        Bathrooms
                      </h2>
                    </div>

                    <h2 className="text-[20px] font-[500]">2</h2>
                  </div>

                  <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <Image src={Floor} alt="Floor" />

                      <h2 className="text-[#7A7474] text-[20px] font-[500]">
                        Floor
                      </h2>
                    </div>

                    <h2 className="text-[20px] font-[500]">3rd</h2>
                  </div>

                  <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <Image src={Construction} alt="Construction" />

                      <h2 className="text-[#7A7474] text-[20px] font-[500]">
                        Construction
                      </h2>
                    </div>

                    <h2 className="text-[20px] font-[500]">2020</h2>
                  </div>
                </div>

                <div className="two sm:w-[350px] w-[416px]">
                  <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between ">
                    <div className="flex items-center gap-[9px]">
                      <Image src={Elevator} alt="Elevator" />

                      <h2 className="text-[#7A7474] text-[20px] font-[500]">
                        Elevator
                      </h2>
                    </div>

                    <h2 className="text-[20px] font-[500]">2</h2>
                  </div>

                  <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <Image src={Parking} alt="Parking" />

                      <h2 className="text-[#7A7474] text-[20px] font-[500]">
                        Parking
                      </h2>
                    </div>

                    <h2 className="text-[20px] font-[500]">Yes</h2>
                  </div>

                  <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <Image src={WiFi} alt="WiFi" />

                      <h2 className="text-[#7A7474] text-[20px] font-[500]">
                        Wi-FI
                      </h2>
                    </div>

                    <h2 className="text-[20px] font-[500]">Yes</h2>
                  </div>

                  <div className="flex border-b-[1px] border-b-[#7A7474] py-[8px]  items-center justify-between">
                    <div className="flex items-center gap-[9px]">
                      <Image src={Tv} alt="WiFi" />

                      <h2 className="text-[#7A7474] text-[20px] font-[500]">
                        Cable TV
                      </h2>
                    </div>

                    <h2 className="text-[20px] font-[500]">Yes</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="registration sm:w-[350px] w-[416px] h-[640px] bg-[#100E2C] sm:p-[20px] rounded-[12px] text-[#fff] p-[40px]">
              <h2 className="text-[28px] font-[700] pb-[10px] sm:pb-[25px]">
                Contact agent
              </h2>

              <div className="flex mb-[20px] items-center gap-[12px]">
                <Image src={AvaGet} className="w-[60px]" alt="avaget" />

                <div className="flex flex-col gap-[2px]">
                  <h2 className="text-[16px] font-[500]">Emilia Buck</h2>
                  <p className="text-[14px] text-[#ffffffbe]">(437) 402-2459</p>
                  <p className="text-[14px] text-[#ffffffbe]">
                    rsmartin@optonline.net
                  </p>
                </div>
              </div>
              <FormComponent />
              {/* <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[20px] items-start"
                action=""
                method="POST"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-[16px] bg-white rounded-[6px] sm:h-[50px] sm:w-[310px] w-[336px] outline-none text-[#666]"
                />

                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-[16px] bg-white sm:h-[50px] sm:w-[310px] rounded-[6px] w-[336px] outline-none text-[#666]"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-[16px] bg-white sm:h-[50px] sm:w-[310px] rounded-[6px] w-[336px] outline-none text-[#666]"
                />

                <textarea
                  name="comment"
                  placeholder="Your comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className="py-[8px] px-[16px] sm:h-[108px] sm:w-[310px] rounded-[6px] w-[336px] h-[108px] outline-none text-[#666]"
                />

                <button
                  type="submit"
                  className="w-[200px] mt-[15px] h-[50px] bg-[#0057FF] active:bg-[#0057FF] transition-all duration-200 hover:bg-[#0055ffd5] rounded-[6px]"
                >
                  Send message
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-2 ENDED */}
      {/* SECTION-3 STARTED */}
      <section id="section-3" className="mb-[60px] sm:mb-[30px] sm:px-[20px]">
        <div className="container">
          <div className="flex sm:flex-col sm:gap-[30px] items-center justify-between">
            <div className="text">
              <h2 className="text-[28px] font-[600] text-[#100E2C] mb-[24px]">
                What’s nearby
              </h2>
              <div className="flex sm:w-[350px] w-[856px] mb-[15px] py-[16px] border-b-[1px] border-b-[#7A7474] items-center gap-[10px]">
                <Image src={Education} alt="education" />
                <h2 className="text-[24px] font-[600]">Education</h2>
              </div>

              <div className="flex flex-col gap-[10px] sm:w-[350px] w-[856px]">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#7A7474] font-[500]">Allen Academy</h2>

                  <p className="text-[20px] font-[500]">0.089mile</p>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7A7474] font-[500]">
                    St. Joseph School
                  </h2>

                  <p className="text-[20px] font-[500]">0.028mile</p>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7A7474] font-[500]">
                    George Washington School
                  </h2>

                  <p className="text-[20px] font-[500]">0.059 mile</p>
                </div>
              </div>

              <div className="flex mt-[10px] sm:w-[350px] w-[856px] mb-[15px] py-[16px] border-b-[1px] border-b-[#7A7474] items-center gap-[10px]">
                <Image src={Health} alt="Health" />
                <h2 className="text-[24px] font-[600]">Health & Medicine </h2>
              </div>

              <div className="flex flex-col sm:w-[350px] gap-[10px] w-[856px]">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#7A7474] font-[500]">Allen Academy</h2>

                  <p className="text-[20px] font-[500]">0.089mile</p>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7A7474] font-[500]">
                    St. Joseph School
                  </h2>

                  <p className="text-[20px] font-[500]">0.028mile</p>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7A7474] font-[500]">
                    George Washington School
                  </h2>

                  <p className="text-[20px] font-[500]">0.059 mile</p>
                </div>
              </div>

              <div className="flex mt-[10px] sm:w-[350px] w-[856px] mb-[15px] py-[16px] border-b-[1px] border-b-[#7A7474] items-center gap-[10px]">
                <Image src={Food} alt="Food" />
                <h2 className="text-[24px] font-[600]">Food</h2>
              </div>

              <div className="flex flex-col sm:w-[350px] gap-[10px] w-[856px]">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#7A7474] font-[500]">Allen Academy</h2>

                  <p className="text-[20px] font-[500]">0.089mile</p>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7A7474] font-[500]">
                    St. Joseph School
                  </h2>

                  <p className="text-[20px] font-[500]">0.028mile</p>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7A7474] font-[500]">
                    George Washington School
                  </h2>

                  <p className="text-[20px] font-[500]">0.059 mile</p>
                </div>
              </div>

              <div className="flex mt-[10px] sm:w-[350px] w-[856px] mb-[15px] py-[16px] border-b-[1px] border-b-[#7A7474] items-center gap-[10px]">
                <Image src={Culture} alt="culture" />
                <h2 className="text-[24px] font-[600]">Culture</h2>
              </div>

              <div className="flex flex-col sm:w-[350px] gap-[10px] w-[856px]">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#7A7474] font-[500]">Allen Academy</h2>

                  <p className="text-[20px] font-[500]">0.089mile</p>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7A7474] font-[500]">
                    St. Joseph School
                  </h2>

                  <p className="text-[20px] font-[500]">0.028mile</p>
                </div>

                <div className="flex items-center justify-between">
                  <h2 className="text-[#7A7474] font-[500]">
                    George Washington School
                  </h2>

                  <p className="text-[20px] font-[500]">0.059 mile</p>
                </div>
              </div>
            </div>

            <div className="featured sm:p-[30px] rounded-[12px] shadow-lg h-[771px] w-[416px] p-[20px]">
              <h2 className="text-[28px] font-[700] pb-[5px]">
                Featured listings
              </h2>
              <p className="text-[14px] text-[#000000d8] pb-[20px]">
                Leo morbi faucibus mattis pharetra tellus velit{" "}
              </p>

              <div className="flex flex-col gap-[24px]">
                <div className="flex cursor-pointer items-center gap-[8px]">
                  <Image src={FeaturedOne} alt="FeatureOne" />

                  <div>
                    <h2 className="text-[16px] font-[600]">
                      Division Road house
                    </h2>

                    <p className="text-[12px] pt-[10px] pb-[12px] text-[#000000d8]">
                      Division Road Pembroke Pines
                    </p>

                    <h1 className="text-[16px] text-[#100E2C] font-[600]">
                      $250000
                    </h1>
                  </div>
                </div>

                <div className="flex cursor-pointer items-center gap-[8px]">
                  <Image src={FeaturedTwo} alt="FeatureTwo" />

                  <div>
                    <h2 className="text-[16px] font-[600]">
                      North Road house{" "}
                    </h2>

                    <p className="text-[12px] pt-[10px] pb-[12px] text-[#000000d8]">
                      North Road Piscataway
                    </p>

                    <h1 className="text-[16px] text-[#100E2C] font-[600]">
                      $222000
                    </h1>
                  </div>
                </div>

                <div className="flex cursor-pointer items-center gap-[8px]">
                  <Image src={FeaturedThree} alt="FeaturedThree" />

                  <div>
                    <h2 className="text-[16px] font-[600]">
                      Rockville Ave villa
                    </h2>

                    <p className="text-[12px] pt-[10px] pb-[12px] text-[#000000d8]">
                      Smoky Hollow St. Sulphur, LA 70663
                    </p>

                    <h1 className="text-[16px] text-[#100E2C] font-[600]">
                      $180000
                    </h1>
                  </div>
                </div>

                <div className="flex cursor-pointer items-center gap-[8px]">
                  <Image src={FeaturedFour} alt="FeaturedFour" />

                  <div>
                    <h2 className="text-[16px] font-[600]">Lees Creek house</h2>

                    <p className="text-[12px] pt-[10px] pb-[12px] text-[#000000d8]">
                      Lees Creek St. Dayton
                    </p>

                    <h1 className="text-[16px] text-[#100E2C] font-[600]">
                      $210000
                    </h1>
                  </div>
                </div>

                <div className="flex cursor-pointer items-center gap-[8px]">
                  <Image src={FeaturedFive} alt="FeaturedFive" />

                  <div>
                    <h2 className="text-[16px] font-[600]">
                      Scotch Plains villa
                    </h2>

                    <p className="text-[12px] pt-[10px] pb-[12px] text-[#000000d8]">
                      Ohio Road Scotch Plains
                    </p>

                    <h1 className="text-[16px] text-[#100E2C] font-[600]">
                      $160000
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-3 ENDED */}
      {/* SECTION-4 STARTED */}
      <section id="section-4" className="mb-[60px] sm:mb-[30px] sm:px-[20px]">
        <div className="container">
          <div className="flex items-start justify-between">
            <Image src={Plan} alt="plan" />
            <div className="w-[416px] sm:hidden  h-[616px] shadow-lg p-[20px] rounded-[12px]">
              <h2 className="text-[28px] font-[700] pb-[2px]">
                Related property
              </h2>
              <p className="text-[14px] font-[400] pb-[20px] text-[#000000d3]">
                Leo morbi faucibus mattis pharetra tellus velit{" "}
              </p>

              <div className="card w-[376px] overflow-hidden rounded-b-[12px] bg-white">
                <Image src={SaleOne} alt="SaleOne" />

                <div className="bg-[#fff] py-[24px]">
                  <h3 className="text-[20px] font-[600]">
                    Luxury house in Las Vegas
                  </h3>
                  <p className="text-[#7A7474] pt-[10px]">
                    7914 Lees Creek St. Dayton, LV 45420
                  </p>

                  <h2 className="pb-[15px] border-b-[1px] border-b-[#7A74741A] text-[#000] pt-[15px] text-[22px] font-[600]">
                    $250000
                  </h2>

                  <div className="flex pt-[10px] items-center gap-[37px]">
                    <div className="flex gap-[12px] flex-col">
                      <div className="flex items-center gap-[8px]">
                        <Image src={Bedroom} alt="bedroom" />
                        <h3 className="text-[#100E2C] font-[500] text-[16px]">
                          3
                        </h3>
                      </div>
                      <h2 className="text-[#100E2C] font-[500] text-[14px]">
                        Bedrooms
                      </h2>
                    </div>

                    <div className="flex gap-[12px] flex-col">
                      <div className="flex items-center gap-[8px]">
                        <Image src={Bathroom} alt="bathroom" />
                        <h3 className="text-[#100E2C] font-[500] text-[16px]">
                          2
                        </h3>
                      </div>
                      <h2 className="text-[#100E2C] font-[500] text-[14px]">
                        Bathrooms
                      </h2>
                    </div>

                    <div className="flex gap-[12px] flex-col">
                      <div className="flex items-center gap-[8px]">
                        <Image src={Area} alt="area" />
                        <h3 className="text-[#100E2C] font-[500] text-[16px]">
                          1200
                        </h3>
                      </div>
                      <h2 className="text-[#100E2C] font-[500] text-[14px]">
                        Total area
                      </h2>
                    </div>

                    <div className="flex gap-[12px] flex-col">
                      <div className="flex items-center gap-[8px]">
                        <Image src={Garage} alt="garage" />
                        <h3 className="text-[#100E2C] font-[500] text-[16px]">
                          3
                        </h3>
                      </div>
                      <h2 className="text-[#100E2C] font-[500] text-[14px]">
                        Garages
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-4 ENDED */}
      {/* SECTION-5 STARTED */}
      <section id="section-5" className="mb-[60px] sm:mb-[30px] sm:px-[20px]">
        <div className="container">
          <h2 className="text-[28px] font-[600] text-[#100E2C] sm:text-[16px] pb-[20px]">
            Video
          </h2>

          <Image src={Video} alt="Video" />
        </div>
      </section>
      {/* SECTION-5 ENDED */}
      {/* SECTION-6 STARTED */}
      <section id="section-6-2" className="mb-[60px] sm:mb-[30px] sm:px-[20px]">
        <div className="container">
          <h2 className="text-[#100E2C] sm:text-[20px] pb-[5px] text-[50px] font-[700]">
            Related listings
          </h2>
          <p className="text-[16px] font-[400] pb-[40px] sm:text-[14px]">
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis
            rhoncus
          </p>

          <div className="flex sm:justify-center flex-wrap items-center gap-[24px]">
            <div className="wrapper sm:px-[20px] sm:gap-[12px] gap-[24px]">
              <div className="flex flex-wrap items-center gap-[24px]">
                {properties.map((property, index) => (
                  <PropertyCard key={index} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-6 ENDED */}
    </>
  );
}
