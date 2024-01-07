import Main from "@/components/main";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex-col gap-4 w-full text-primary">
      <Main />
      <Faq />
      <Footer />
    </main>
  );
}
