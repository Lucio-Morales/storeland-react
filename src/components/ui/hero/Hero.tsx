import heroBg from '../../../assets/image/heroexample.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="absolute inset-0 bg-black opacity-70 z-10" />

      <div className="relative z-20 max-w-3xl px-4">
        <h1
          className="text-5xl md:text-6xl font-anton mb-6 text-center uppercase tracking-widest leading-tight text-[#F2F2F2]"
          style={{ textShadow: '4px 4px 12px rgba(0, 0, 0, 0.95)' }}
        >
          Bienvenido a <span className="text-[#f06717]">Gym</span>Store
        </h1>
        <p
          className="text-xl md:text-3xl font-inter font-medium text-center uppercase tracking-wide leading-snug text-[#F2F2F2]"
          style={{ textShadow: '3px 3px 10px rgba(0, 0, 0, 0.9)' }}
        >
          Todo lo que necesitas para llevar tus{' '}
          <span className="text-[#f06717] font-semibold">entrenamientos</span>{' '}
          al siguiente nivel.
        </p>
        <br />
        <p
          className="text-xl md:text-3xl font-inter font-medium text-center uppercase tracking-wide leading-snug text-[#F2F2F2]"
          style={{ textShadow: '4px 4px 12px rgba(0, 0, 0, 0.9)' }}
        >
          Porque invertir en tu{' '}
          <span className="text-[#f06717] font-semibold">salud</span> es la
          mejor inversión que podés hacer.
        </p>
      </div>
    </section>
  );
};

export default Hero;
