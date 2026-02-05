import logoImg from '../assets/images/LogoT.png';

const HeroSection = ({ imageUrl, logoUrl = logoImg, title, subtitle, buttons, height = 'h-[95vh]', logoShift = '133px', centerContent = false, showLogo = true, alignLeft = false, logoOffsetY = '0px' }) => {
  
  return (
    <section
      className={`hero-section relative w-full ${height} overflow-hidden`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay to dull the image for text readability */}
      <div className="absolute inset-0 bg-black/25 z-10" />

        {/* Gradient Fade into background color (#28343D).
          This gradient is limited to the bottom of the hero so it doesn't cover too much of the image.
          Adjust `h-[35vh]` / `md:h-[30vh]` to increase/decrease how much of the image the gradient covers. */}
        <div className="absolute bottom-0 left-0 w-full h-[35vh] md:h-[30vh] bg-gradient-to-t from-[#28343D] to-transparent z-20" />

      {/* Content */}
        <div className={`absolute inset-0 z-30 flex items-center ${alignLeft ? 'justify-start' : 'justify-center'}`}>
          <div className={`px-6 max-w-5xl ${alignLeft ? 'text-left ml-[5%] md:ml-[10%] lg:ml-[15%]' : 'text-center'} ${centerContent ? 'hero-centered-content' : ''}`}>
            {showLogo && logoUrl && (
            <img
              src={logoUrl}
              alt="Logo"
              className={`hero-logo mb-6 w-56 md:w-96 lg:w-[420px] ${centerContent ? 'hero-logo-glow mx-auto' : ''} ${alignLeft ? '' : 'mx-auto'}`}
              style={{ 
                transform: centerContent ? `translateY(${logoOffsetY})` : `translateX(${logoShift})`,
                marginTop: centerContent ? logoOffsetY : '0'
              }}
            />
            )}

            {title && (
              <h1 className={`font-bold text-white mb-4 ${centerContent ? 'hero-title-centered' : 'text-[36px] md:text-6xl lg:text-7xl drop-shadow-2xl'}`}>
                {title}
              </h1>
            )}

            {subtitle && (
              <p className={`text-white/90 mb-6 ${centerContent ? 'hero-subtitle-centered' : 'text-lg md:text-2xl drop-shadow-lg'}`}>
                {subtitle}
              </p>
            )}

            {buttons && (
              <div className={`flex gap-4 ${alignLeft ? 'justify-start' : centerContent ? 'justify-center' : 'justify-center md:justify-start'}`}>
                {buttons}
              </div>
            )}
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
