"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Faq() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-16 overflow-x-hidden pb-8 md:px-16 px-4 flex-col items-center">
      <div className="flex flex-col md:flex-row justify-between">
        <div
          data-aos="fade-right"
          className="md:border-r-4 py-8 w-full border-light-primary flex flex-col gap-3 md:pr-8"
        >
          <h2 className="font-bold text-2xl text-primary">Geniusla nedir?</h2>
          <p className="text-primary font-medium text-base">
            Geniusla bir Discord sunucusudur. Ancak onu “normal” bir discord
            sunucusundan ayrı yapan şey halkı ve kurucusudur. Bir çok şey
            öğrenebileceğiniz, bir çok kafanıza uyan kişi ile tanışabileceğiniz
            ve en basitinden dışlanmayacağınız bir topluluk.
          </p>
        </div>

        <div
          data-aos="fade-left"
          className="md:mt-36 py-8 w-full mt-16 flex flex-col gap-3 md:pl-8"
        >
          <h2 className="font-bold text-2xl text-primary">Neden “Geniusla”?</h2>
          <p className="text-primary font-medium text-base">
            Sunucunun ismini “peninsula” olan ingilizce kelimeden geliyor.
            Peninsula ingilizce’de yarım ada, yanii üç tarafı su ile çevrili
            kara parçasına denir. Geniusla ise üç tarafı aptallar ile çevrili
            deha parçasıdır.
          </p>
        </div>
      </div>

      <div className="mt-64 flex flex-col items-center gap-16">
        <h2 className="text-2xl font-bold text-center">
          Bu güzel topluluğun bir parçası mı olmak istiyorsun?
        </h2>

        <Link href="https://discord.gg/JC89yNq">
          <button className="px-6 py-2 text-2xl font-bold bg-primary text-light rounded-2xl">
            Sunucuya Katıl
          </button>
        </Link>
      </div>
    </div>
  );
}
