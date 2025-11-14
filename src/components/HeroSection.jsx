const HeroSection = ({imageUrl, title, subtitle}) => {
    return (
        <section className="relative w-full min-h-[60vh] flex items-center justify-center text-white">

            {/* Background Image */}
            <img
                src={imageUrl}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/*Gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10"/>

            {/* Text Content */}
            <div className="relative z-20 text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
                {subtitle && (
                    <p className="mt-4 text-lg md:text-2xl text-gray-800">{subtitle}</p>
                )}
            </div>
            

        </section>
    )};