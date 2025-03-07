import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import certificateData from "@/data/Certification.json"

const projects = [
  {
    id: "Certificate 1",
    title: "Certificate 1",
    description:
      "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis...",
    image: "/images/photo.jpg",
  },
  {
    id: "Certificate 2",
    title: "Certificate 2",
    description:
      "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal. Pengguna dapat...",
    image: "/images/photo.jpg",
  },
  {
    id: "Certificate 3",
    title: "Certificate 3",
    description:
      "Buku Catatan adalah website yang memungkinkan pengguna untuk membuat, menyimpan, dan mengelola...",
    image: "/images/photo.jpg",
  },
  {
    id: "Certificate 4",
    title: "Certificate 4",
    description:
      "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis...",
    image: "/images/photo.jpg",
  },
  {
    id: "Certificate 5",
    title: "Certificate 5",
    description:
      "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal. Pengguna dapat...",
    image: "/images/photo.jpg",
  },
  {
    id: "Certificate 6",
    title: "Certificate 6",
    description:
      "Buku Catatan adalah website yang memungkinkan pengguna untuk membuat, menyimpan, dan mengelola...",
    image: "/images/photo.jpg",
  },
];

export function Card({ className, children, ...props }) {
  return (
    <div
      className={`rounded-md shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default function CertificateCards() {
  return (
    <div className="flex flex-wrap justify-center w-full gap-8 p-4 px-8">
      {certificateData.map((certificate, index) => (
        <Card
          key={index}
          className="bg-[var(--card-bg)] w-full sm:max-w-[25%]"
        >
          <div className="p-3 space-y-3">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src={certificate.image || "/placeholder.svg"}
                alt={certificate.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {certificate.name}
              </h3>

            </div>
            <div className="flex items-center justify-between pt-3">
              <Link
                href={certificate.link}
                className="inline-flex items-center text-sm text-[var(--foreground)] hover:text-[var(--text-color)] transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Verify
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
