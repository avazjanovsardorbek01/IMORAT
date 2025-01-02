import React, { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sana = new Date().toLocaleString();
    const { name, phone, email, comment } = formData;

    const myText = `Зарегистрированная заявка:%0A %0A - Имя: <b>${name}</b> %0A - Телефон: <b>${phone}</b> %0A- Откуда: <b>${email}</b> %0A- Куда: <b>${comment}</b> %0A- Время: <b>${sana}</b>`;

    const token = "7861557366:AAEdPhkfOFNhtPbkjiu9vfcrWB1H10e33eY";
    const chatid = -4727687636;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&text=${myText}&parse_mode=html`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        Toastify({
          text: "Ваши данные успешно отправлены!",
          duration: 3000,
          backgroundColor: "green",
          close: true,
        }).showToast();
      } else {
        throw new Error("Ошибка при отправке данных.");
      }
    } catch (error) {
      Toastify({
        text: "Ошибка при отправке данных.",
        duration: 3000,
        backgroundColor: "red",
        close: true,
      }).showToast();
    }
  };

  return (
    <form
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
    </form>
  );
};

export default FormComponent;
