export default function HeroImage({ imageUrl }) {
  return (
    <section className=" h- flex justify-center mt-12 bg-background">
      <div className="relative w-48 h-48 lg:w-60 lg:h-60 rounded-[6px] overflow-hidden border-[2px] border-white shadow-lg">
        <img
          src={imageUrl}
          alt="Hero"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
