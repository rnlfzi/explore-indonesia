import Image from "next/image";

const Video = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/db61/db1b/7825e11cb5899473f9f5ac33a8012a3e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FjojT-DUL1e1i5LCNZv4dL0DrtxDoMsKvfjBrFkeYghcQfCjIz9poULXXEn9e8rL3BkhAdVgWS7GDazwlNjZUHkvgoDamZkR1dhj~2Nz7ELR0ySwLYdD8UPnSS3c5TyVBVJzZMZ8QQrfbcPq39dBz2gx-9zx4qakYJb1lPlhQog-wawwOnxn9sW7xnK8My4IPlHmGAmOwAaEzKi0adtsCQ7qWiWopNY~jX72D3xmRI5ugzLCvLEeMx4JyEYtYU~Auu3oyf6q5WDOiQXInQLE0RtXUcDBbOH-WVPuLsJKiaecL-P1k-AaN~yAfh2kbVla0IFdUmKqQjaheV95RMfAUA__')",
      }}
      className="bg-cover bg-no-repeat h-[1000px] w-full bg-center"
    >
      <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center gap-10 md:gap-16">
        <div className="max-w-xl flex flex-col gap-8 md:gap-16 items-center justify-center">
          <h3 className="text-lg md:text-2xl line-clamp-2 text-white font-semibold text-center">
            Live a life like you wouldn’t imagine, experience a life you
            wouldn’t expect.
          </h3>
          <Image
            src="https://s3-alpha-sig.figma.com/img/5694/8500/e9c8f6dc180f616b22d28c3f77b45a03?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVyMmcDOBCpHKlFt8RS-Ub-hNyfxarwFOz-STd3xsoyEw~yU9z2Xxg7gOhwZjPsFU95n73q2XdohDJy8Yz1z1a48L73NHTka2PLfgM~fKz9vaHuGQgnZmYMFdzCQIH1fzC95LknOFCP~YH-KZM~BsPxGIdKDZ1A6pYHbZ~yl~dDBGMEn1wfBUYCwPE3FBPf2EbqA6eycCpG4wgAFJyKo91Wf8lB4n7x0xD1dwDZiGPFnU0e67JKZHxNjiAVUKZIDa2gz28UC~w2jVXSG02ZmCLdNyIESMUdnPOYMy0Fs551VYPNGMuZaQamgv3DWZJxMAy91PVt~fRfPLGmH91QhHA__"
            width={500}
            height={500}
            alt="video"
            className="object-cover w-[300px] md:w-full rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl gap-4 px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://s3-alpha-sig.figma.com/img/db61/db1b/7825e11cb5899473f9f5ac33a8012a3e?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qggq~uZQDpywpNKhN42620ElaHzhxxAFnTdPxiAAblDwA7YNtfFK6Kz3bhlHgKtSaL0wY7QlviMiA-tgssN-jaC7IOdDp7kNyjELJPObc19FHsj9BrRa~2fn1RgIIX1pETlwuKzcvalDhs-jUzYmYxmrH~rk6FtdL1Owdz7qHED4davWfR4ro045UITeVgC-gjer9OwRzIT2VVc1JgKo9OaMxrSX2ByZwkwgr~V-7JMmoZkxaOVl7-pAJjT8KafNn1bG8w3qRH72b44KcGo3My3DsRxWLRowVzq9Po0hRIEGH852eVJW20mdw-qL6noH-NEImZVlmZyX7oJo6S~QeQ__"
              width={500}
              height={500}
              alt="image"
              className="w-[300px] h-[200px] md:w-[200px] md:h-[130px] object-cover rounded-lg mx-auto"
            />
            <div className="text-white flex flex-col justify-center text-center md:text-start gap-2">
              <h6>In The Country</h6>
              <p className="text-sm text-white/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus dapibus mauris in lectus tempus.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://s3-alpha-sig.figma.com/img/b56c/9dcd/2798c51e8c86a649fb58e7e7ce0ae012?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RrH63ROXn5xoyMgzrFozJKIxuRZi2OvqbvQhA1uvk7Mr1TMDg9VIy-AFeTuU4pSE-Yn3sHJ2gj-Io8SUrFMkKqn4G5SR0Hisr-5CsH~ParAOQbhjc8ULYu65vJEqpbLfyoxfy7KYyYOyiWYzZq0~~1UKNcLK-3YCfRUGG65bOG2NqJY12XIsV2kFGBuAxD4qUDWpTJn0ESnhigfUHQFRjdv2Dd5XCc4QN9~c50PzLNmajRA7DSowromJBadZKb0mGOxfPa2iFRoqi0iY2TyBYhcOxk7jGmOAIZj53MPssqMWrflh-Af3qw3zgEimLlunRu-1g5nsHrzELPkB5zDocg__"
              width={500}
              height={500}
              alt="image"
              className="w-[300px] h-[200px] md:w-[200px] md:h-[130px] object-cover rounded-lg mx-auto"
            />
            <div className="text-white flex flex-col justify-center text-center md:text-start gap-2">
              <h6>In The City</h6>
              <p className="text-sm text-white/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus dapibus mauris in lectus tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
