import Header from "../components/eligibility/Header";

export default function EligibilityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <img
        className="absolute top-0 left-0 right-0 w-full h-screen object-cover"
        src="/img/bg.jpg"
        alt=""
      />
      <Header />
      <section className="container mx-auto relative pt-5">
        <div className="flex justify-center">{children}</div>
      </section>
    </>
  );
}
