import Image from "next/image";
import CTA from "../cta";

const Articles = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/2cc1/6860/e6cfb9777f0e774769679ab249aec7a7?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z1XSscJsgrX937WTpUGeDDWhMNJPl5xAmi-rm~ekUqpckonKjUku3nq3OEPpByqoee8kG1ArkeebuwihHkWGmBZ-G7OWYds9LqvGZXyh5VNOun8slD~thqgjIgJ35CoUuWzfyu-h6sdKD5V4s9pR57-W5mBnvSK0o9oQSQnkjMec4aGXQPXy-VF8VI02hx-Fu99u9PfgUJfmkOyAL9tT-9JjynW9tNLfmgJD~hsTrWp3EmubDfd0DJGZRGdA8MkEs9AW8xW9pNf1Qfz4SRUNH015IsuiPJkGYzddDy-V3zL2JtWAvd9iFwEFkMkvmIB1y7xiEHzJSugGshhjK0pQvg__')",
        }}
        className="bg-cover bg-center bg-no-repeat h-[600px] w-full"
      >
        <div className="bg-custom-navy/90 h-full">
          <div className=" bg-gradient-to-b from-transparent to-custom-navy h-full flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <Image
                src="/images/images-1.png"
                alt="images-1"
                width={500}
                height={500}
                className="w-[300px] md:w-[500px] h-full object-contain mx-auto md:mx-0"
              />
              <div className="flex flex-col justify-center gap-8 max-w-sm text-center md:text-start items-center md:items-start">
                <h3 className=" text-white text-3xl font-semibold">
                  The walkways of Indonesia spellbind
                </h3>
                <p className="text-white text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus.
                </p>
                <div className="flex items-center">
                  <CTA size="std" label="Learn More" href="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/a1e6/efd8/ff613ce936ed750f7e19018a2af0a684?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XmbkSlbXlsBP3uoDuXpq3kVNrfFte9ht3E6i5fuNL4rAzhZhGPcHYsh~MRXUYktZJ1wFuTXxBUA8d7cLxW8W5wVjN2A84E0iYIwwfCE95Eve~nc8hhzD7xTPZJDBbtbmObGZ2hw3pUNBh1ZfV2VCvdKQcjHkk0GlXAVt55T-hLPGh4b6XG4kr5dvyiyyX25ggi6zJTvGWJoLVUzec-8bWgMVZ0fDS0H~PEw2MAzloxPSWDTKMt~cmiZFAQgAm~IS9ZtakRMwkeI1glzezJ8TcF7lwdu8SEx2zCQfJTQ9O4EYHlGi51MPjymsyehBz336BMdXUoG6DNtd1GUvmRyeCA__')",
        }}
        className="bg-cover bg-center bg-no-repeat h-[600px] w-full"
      >
        <div className="bg-custom-navy/90 h-full">
          <div className=" bg-gradient-to-t from-transparent to-custom-navy h-full flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <Image
                src="/images/images-2.png"
                alt="images-1"
                width={500}
                height={500}
                className="w-[300px] md:w-[500px] h-full object-contain mx-auto md:mx-0 order-first md:order-last"
              />
              <div className="flex flex-col justify-center gap-8 max-w-lg text-center md:text-end items-center md:items-end">
                <h3 className=" text-white text-3xl font-semibold">
                  Perfect beaches exude <br /> relaxation and fun
                </h3>
                <p className="text-white text-md">
                  Lorem ipsum dolor sit amet <br /> adipisicing elit. Quisquam,
                  voluptatibus.
                </p>
                <div className="flex items-center">
                  <CTA size="std" label="Learn More" href="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
