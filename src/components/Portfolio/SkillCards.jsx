import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

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
    <div className="flex flex-wrap w-3/4 justify-left gap-8 p-4 px-8">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="bg-[var(--card-bg)] max-w-[25%] w-1/12 aspect-square"
        >
          <div className="p-3 space-y-3">
            
          </div>
        </Card>
      ))}
    </div>
  );
}
