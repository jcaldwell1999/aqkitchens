const HeroSection = ({imageUrl, title, subtitle}) => {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center text-white overflow-hidden">

            {/* Background Image */}
            <img
                src={imageUrl}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/*Gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#28343D] z-10"/>

            {/* Text Content */}
            <div className="relative z-20 text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{title}</h1>
                {subtitle && (
                    <p className="mt-4 text-lg md:text-2xl text-gray-800 drop-shadow-md">{subtitle}</p>
                )}
            </div>
            

        </section>
    );
};

export default HeroSection;