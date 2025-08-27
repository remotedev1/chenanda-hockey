import Container from "@/components/common/GlobalContainer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-gray-300 pt-10 shadow-lg relative z-10">
      <Container>
        <div className="w-[80%] max-w-4xl relative top-8 mx-auto bg-white p-10 rounded-xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900">
              Contact <span className="text-yellow-500">Us</span>
            </h3>

            <p className="text-gray-500 mt-2">
              Get in touch with us to start your project.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-gray-800">
                <Phone className="text-yellow-500" />
                <span className="font-semibold">054654654165</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800">
                <Mail className="text-yellow-500" />
                <span className="font-semibold">Hello@Chenanda.Com</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "admin",
                address:
                  "Chenanda.Com | Home Construction 107, DLF Star Mall, NH 8, Block A, Sector 30, Gurugram (Delhi NCR), Haryana 122001 (India)",
                link: "#",
              },
              {
                title: "admin 1:",
                address:
                  "Chenanda.Com | Home Construction 310, 3rd Floor, Patna One Mall, New Dakbunglow Road, Patna, Bihar 800001 (India)",
                link: "#",
              },
              {
                title: "admin 2:",
                address:
                  "Chenanda.Com | Home Construction 4th Floor, SPM Tower, Circular Road, Ranchi, Jharkhand 834001 (India)",
                link: "#",
              },
            ].map((branch, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-2 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6"
              >
                <MapPin className="text-yellow-500" />
                <h4 className="font-semibold text-gray-900">{branch.title}</h4>
                <p className="text-gray-500 text-sm">{branch.address}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
