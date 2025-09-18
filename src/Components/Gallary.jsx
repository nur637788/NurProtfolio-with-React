import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    img: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/536028003_1262182135646523_1440398984691605114_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeE-y9sM9fKNZ3Qa-F1F6dunbPcslMi5oO1s9yyUyLmg7Tn3wHX2GH9TcN6UCIA98Ip74rgeH9nKq5pJKPCwEWl8&_nc_ohc=fKZp-ntiXbEQ7kNvwGPx4mt&_nc_oc=AdkSI96Ube5_BZVA_MS_9rwC1cyVsWmqeMj-SZ2eb6qgzKyRku0S8U4QiEJpsObiJqU&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=e4tqmAGujTkBoUNMHdzDTA&oh=00_AfYfSh6PQ5GcjR6vochuxt6axDLm-Arh1qGeVZA0j71X2Q&oe=68D20FF6",
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg",
  },
  {
    id: 3,
    img: "/public/cover img1.jpg",
  },
  {
    id: 4,
    img: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/481699224_1136694991528572_9118528866429258661_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGkl3jw39j1Aw34OhYN8aOOQy5NyCniKCVDLk3IKeIoJUlks0TGpZu-0uI-7xQYzTbX6jKxSf_SM37eXY5GJy5C&_nc_ohc=MCNzMXlBTjUQ7kNvwFGn4_1&_nc_oc=AdmvITOuv5uhdoPg-d4Xx_T0EXXU_NaHq2UsC0H1Ndw712zTjWsD8rRwPCKUkEj8Ct8&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=RC7jcOEVX08ohlrCDCCdiA&oh=00_AfZFPjnnhT_VV5uNWkAIRcvVSI08msJNY3sawhaxzs42ug&oe=68D1F151",
  },
  {
    id: 5,
    img: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/481777514_1136694901528581_5235253127826722087_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE283ANKoYtqoPv8STsg3GeCneFPNJWO9oKd4U80lY72uzpTPhCcpWKg03w7JxsAYPP6X_gRTLb1OGv-zg1SJBx&_nc_ohc=wBWjsxlFGSMQ7kNvwHeopWu&_nc_oc=AdmiF1IPeq0yB02mFUm8AqQfnBdzUlyEVvNbabX6MAG4uRnbG3qoLELo2FkX815TY-k&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=KgAApS9yJAFA3igTHXkz_g&oh=00_AfbE4A0nuI5NZ8Nk7p8PmIZJ4Rc_OTl8VM9M9_oSjwCR4w&oe=68D2211E",
  },
  {
    id: 6,
    img: "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=",
  },
  {
    id: 7,
    img: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/513534903_1223593029505434_1086201291302895124_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEH7J_58gqVFO8NQQB6GhQi0RSG-6x7lmPRFIb7rHuWYxVxCXrDPB4Y4HQMrBVFpk36NP1HQey-cVB55JIk9mTR&_nc_ohc=HdbHU9FA0CMQ7kNvwEh4D8Q&_nc_oc=AdkLK8xtJxWzXHeYdyy5BWjTC_JQ8ADgg9gLANBywL-dzk99hsJ93Z81QoJ81fj4TTE&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=VqZwVAD6guHiLEK8UqjT7A&oh=00_AfbyvETjmGuaj2Fg2W8qi24UJKeQUnesf1LdDC7miRWK1Q&oe=68D2294A",
  },
  
   {
    id: 8,
    img: "https://static.vecteezy.com/system/resources/previews/049/855/296/non_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
  },
  {
    id: 9,
    img: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/514332843_1223603519504385_8469045472923250809_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeECOpUli6P41xPeTd4vOy5Krb1QsjMj6hKtvVCyMyPqEnCn7TJgZELZ8qJAnaiyIYO4rUpTloWj4FR5yUz8TjU-&_nc_ohc=C0D9IoS-2koQ7kNvwHbA3SG&_nc_oc=AdkLQ6UxFzzcwVl8C8BvR8Gm5aT6_ZoWGQIuRKCrOE3OTjth1QfzD9diTF2eMNeuhv8&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=UOAe7wixMLArPTOQYU1xIg&oh=00_AfZapnQgCKO4r1DTDRs7pta87yd3WpAEhGAZ1xBuhzUlcg&oe=68D20DE2",
  },
   {
    id: 10,
    img: "https://static.vecteezy.com/system/resources/thumbnails/049/855/391/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-free-photo.jpg",
  }, {
    id: 11,
    img: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/481814940_1136103334921071_5775369342398811294_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHH5wAQ6g4Qvlvn10J4Jh8-18OFnY0qR2nXw4WdjSpHaTOhnq5KX_z2woM0hLBCR5VwvsqpU4LXVJfcUWwI0OV2&_nc_ohc=5soqleg6yVAQ7kNvwHDLK38&_nc_oc=AdmsE9kNThdahozfDuXCk6_ejKf3HvxXgwBw6m5v4hn_OlAkd1M8lhpiV-11F6XjJts&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=JZo-8T0IudW5KJ4JjK3fUw&oh=00_Afbw5K1oRrEawf2C5pYzbglQW-Hpj-OdAHceX-2RPsKBEQ&oe=68D1F451",
  },
  {
    id: 12,
    img: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/515438157_1252670626597674_2579473904560649981_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGJKFN4iCmePDxrQmQV9TVutBd3PAsCXjq0F3c8CwJeOk2zfTn8x_jAdrPD8pN3dIgybUXmEEoFIW4uCHy0jaVM&_nc_ohc=CNXE_IKwIVYQ7kNvwHzK81o&_nc_oc=AdkCmcvzcGBTP2aevj6EWKdc8ify6bSJPRbXMTqLljzPLLnGfVkvg8z-tNRw00d40wY&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=2H1WZpk2QB8qVTRFHNzyjQ&oh=00_AfaR6LBXMTiuCPh4hQ9SXwDiBOvhNP9WYqO0gd4J1sZYvg&oe=68D1EEFF",
  },
   {
    id: 13,
    img: "https://scontent.fdac5-2.fna.fbcdn.net/v/t51.75761-15/491429747_17995004312788337_6588179558447760844_n.jpg?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF9jBqfbv5ZIlX-BRlnVEWEVKaw-zx1YBpUprD7PHVgGr3dxvGSvW2rly7bpqt4UEg7n1DFb3QVr0trYLmXrnFI&_nc_ohc=B5eg9jhlJGgQ7kNvwEGEmAR&_nc_oc=AdnKude7ARGxymF1E5C5rbgPg69ZVmJSZqMLSZaj14I2dgdQPd3GClCv3tmu8JLHxIs&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=s03E1fG0lprhwJG-eKJRRA&oh=00_AfYl6Wa5GZE6mH8o-O3W55hjrtUSIlQqxxVjjPgpXFjVWg&oe=68D227A6",
  }, {
    id: 14,
    img: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/481474168_1134750685056336_3629532782465452243_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEYn_Xf3DW5wCojYcUEGBXxa6RJna3sHWxrpEmdrewdbGXErXS3gOG7_XzeVJUmkBps6X2J8e2rkVlzc4qTA8mJ&_nc_ohc=cRMBSuNfa_kQ7kNvwFlAr8a&_nc_oc=AdlJTBB0hBY6uTJz4F-Sy_3cHzbREk_Z39O4uN3lT-FNKMuZbAj7NKiClilT4IJAAlE&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=8qnTtCoCzJODzKJ1tLj0uw&oh=00_Afbd0g4Qfnn__8dL2ZdBksoaemVX8ICpeJSQkjwNfsla6A&oe=68D21EEE",
  },
  {
    id: 15,
    img: "https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/540930645_1271773248020745_3955730965070077154_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG_xypfjFa0gsyzUv40rYAccvIb0a8FreFy8hvRrwWt4eBHVl73Iu9oaTXnCcLIzayyuIrD4LvElrQoRbgdckk0&_nc_ohc=VZAu303PfmgQ7kNvwFac3lN&_nc_oc=AdkN0mnxMKLSNwgVhKEzjj0-du1QpJaOe83Wx9SCPDc5OG-SYANs3uvtH4r1EqAgfGI&_nc_zt=23&_nc_ht=scontent.fdac5-2.fna&_nc_gid=jYSuoTfPD8FqzpZC-tU_zw&oh=00_AfZPwD0d5Fp6tbe_cifWuDeOKBAfearhz5AuYb_c21Ma1g&oe=68D2044D",
  },
   {
    id: 16,
    img: "https://media.istockphoto.com/id/1278865106/photo/fall-colorful-foliage.jpg?s=612x612&w=0&k=20&c=6PMpJuVe61q0scpmVO6Ox3sGYj-ZHTPIi5GoyYr8FiA=",
  },
   {
    id: 17,
    img: "https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/514267039_1223592056172198_2803308180282300464_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF0j6kGMhMGuTqFL5f1524rTkVg0F9LGsdORWDQX0sax-9YtJRC95KaeUCyyC50ISU1NXTGGKRCUW86NfkDUWsV&_nc_ohc=pk9Qd4_oNCUQ7kNvwH0NRE9&_nc_oc=AdncX35bKcdfIR53IGtWL5Ye4JxLGVycvbPjjt3l2FDDPrxnHTtYxaF75a2UJnSi538&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&_nc_gid=GwoOWTe8ETQ1FYZBzXa1xw&oh=00_AfY0cvHg7Adwq0klgaPbkdu6y2EII60mdHw7FpQVnx4vWg&oe=68D222EC",
  },
];

const Gallary = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (

    <div className="mb-20 mt-10 text-center font-bold text-2xl">
      <h2>Gallary</h2>
    <div className="my-5 md:mx-50 relative w-cover h-70 md:h-[400px] overflow-hidden rounded-2xl border-2">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-76 md:h-[500px] object-cover"
          />
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Gallary;
