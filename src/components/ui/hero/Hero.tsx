// import heroBg from '../../../assets/image/heroexample.jpg';

// const Hero = () => {
//   return (
//     <section
//       className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
//       style={{ backgroundImage: `url(${heroBg})` }}
//     >
//       <div className="text-center max-w-3xl border-2">
//         <h1 className="text-3xl md:text-lg font-bold mb-4">
//           Bienvenido a GymStore
//         </h1>
//         <p className="text-md md:text-lg font-medium">
//           ¿Queres llevar tus entrenamientos al siguiente nivel? Invertir en
//           salud es la mejor inversion que podes hacer.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import heroBg from '../../../assets/image/heroexample.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center text-white overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      {/* Contenido */}
      <div className="relative z-20 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Bienvenido a GymStore
        </h1>
        <p className="text-md md:text-lg font-medium drop-shadow-md">
          ¿Querés llevar tus entrenamientos al siguiente nivel? Invertir en
          salud es la mejor inversión que podés hacer.
        </p>
      </div>
    </section>
  );
};

export default Hero;
