import logoImg from '../assets/images/LogoT.png';

const HeroSection = ({ imageUrl, logoUrl = logoImg, title, subtitle, buttons, height = 'h-[95vh]', logoShift = '133px' }) => {
  
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

      {/* Centered Content (positioned a bit higher so text has space below) */}
      {/* Debugging lines removed — use the browser console to debug positioning */}
        {/* Centered Content: center relative to the viewport so the logo visually matches the design.
            We use an absolute, full-size flexbox to center horizontally and center slightly above vertical
            center with a negative translate. The inner `max-w-5xl` constrains text width so it matches
            your content layout while keeping the logo centered over the image. */}
        <div className="absolute inset-0 z-30">
          <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-12 text-center px-6 max-w-5xl">
            {logoUrl && (
            <img
              src={logoUrl}
              alt="Logo"
              className="hero-logo mx-auto mb-6 w-56 md:w-96 lg:w-[420px] drop-shadow-2xl"
              style={{ transform: `translateX(${logoShift})` }}
            />
            )}

            {title && (
              <h1 className="text-[36px] md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-4">
                {title}
              </h1>
            )}

            {subtitle && (
              <p className="text-lg md:text-2xl text-white/90 drop-shadow-lg mb-6">
                {subtitle}
              </p>
            )}

            {buttons && (
              <div className="flex justify-center gap-4">
                {buttons}
              </div>
            )}
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
