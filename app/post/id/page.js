export default function Post({ params }) {
  const { id } = params; // URL'dan ID ni olish
  return (
    <div>
      <h1>Post ID: {id}</h1>
    </div>
  );
}

// Har bir yo‘l uchun dinamik ma’lumotlarni olish
export async function generateStaticParams() {
  // Bu misolda faqat 2 ta post uchun statik yo‘llar belgilanadi
  return [{ id: "1" }, { id: "2" }];
}
