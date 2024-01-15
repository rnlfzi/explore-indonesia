import Slider from "./slider";

const Explore = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/ea33/92a8/9b0a3369e4ae7f605b3eaf970f9aff62?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLII-~jluCTDzZ3YMjdne5~ze9VMfeZk-W9H9vska9AalnziBvdjEsoihGhgJ0JgIAts455Hni3xsK68oCQynuuEqtyXROw7XkUhJF19I9zXHNV3ow7PuBSW2~xWO4EsHPD6M3MKSPqIhqbELKkKnsl9JXkiCfKtbil87Yx3ItpXrb5DariGZ~uXtO7P-rxG3qc8NybfoXnYOeIvQHrNK~cdAcCdXJLrIxIhJDCkexWMZQNiZ61CiIb5jPmpmYQPaJzxeguNapYXRsyslOVWdvRkbMiCzX~4iIY0sYM2-SHD~Pgx2~kIAj4GSvCN9123sd0YMUsDmA8ViID0VHaIcQ__')",
      }}
      className="bg-cover bg-no-repeat h-[1500px] w-full bg-center"
    >
      <div className="flex flex-col justify-between items-center w-full h-full">
        <div className="flex flex-col py-16 max-w-sm md:max-w-5xl text-center overflow-x-hidden">
          <h3 className=" text-4xl font-semibold">Explore Our Secrets</h3>
          <Slider />
        </div>
        <div className="bg-custom-navy/90 h-[600px] md:h-[500px] w-full flex flex-col items-center justify-center py-16 text-center gap-4 md:gap-8">
          <h3 className="text-2xl md:text-4xl text-white font-bold tracking-wide">
            By The Numbers
          </h3>
          <p className="text-sm text-white/50 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br /> elit. Fusce commodo magna et libero.Lorem ipsum <br /> dolor
            sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-2xl font-bold text-custom-red">100 +</h3>
              <p className="text-sm text-white/50">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit. Fusce <br />
                commodo magna et libero.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-2xl font-bold text-custom-red">43,000+</h3>
              <p className="text-sm text-white/50">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Fusce commodo.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-2xl font-bold text-custom-red">30+</h3>
              <p className="text-sm text-white/50">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit. Fusce <br />
                commodo magna et libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
