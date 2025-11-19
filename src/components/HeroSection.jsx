import logoImg from '../assets/images/LogoT.png';

const HeroSection = ({ imageUrl, logoUrl = logoImg, title, subtitle, buttons, height = 'h-screen' }) => {
  return (
    <section
      className={`fixed top-0 left-0 w-full ${height} flex items-center justify-center text-white overflow-hidden z-0`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay to dull the image for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Gradient Fade into background color (#28343D) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#28343D] z-20" />

      {/* Centered Content */}
      <div className="relative z-30 text-center px-6 max-w-5xl">
        {logoUrl && (
          <img 
            src={logoUrl} 
            alt="Logo" 
            className="mx-auto mb-4 w-24 md:w-36 lg:w-48 drop-shadow-2xl" // Drop shadow applies to the entire image, including transparent parts
          />
        )}

        {title && (
          <h1 className="text-4xl font-bold text-white drop-shadow-2xl mb-4">
            {title}
          </h1>
        )}

        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 drop-shadow-lg mb-6">
            {subtitle}
          </p>
        )}

        {buttons && (
          <div className="flex justify-center gap-4">
            {buttons}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
