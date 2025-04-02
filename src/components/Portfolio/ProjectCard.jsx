import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import projects from "@/data/Projects.json"
// [{},{},{}]

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



// {
//   "id": "p4",
//   "title": "Portfolio Website",
//   "description": "A personal portfolio website showcasing projects and blogs.",
//   "link": "https://portfolio.com",
//   "technologyUsed": ["next.js", "tailwind", "typescript"],
//   "github": "https://github.com/user/portfolio-website",
//   "features": [
//     "Project showcase",
//     "Blog section",
//     "Contact form with email integration",
//     "Light and dark mode",
//     "SEO optimization"
//   ],
//   "image": "/images/photo.jpg"
// },


export default function ProjectCards() {
  return (
    <div className="flex flex-wrap justify-center w-full gap-8 p-4 px-8">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="bg-[var(--card-bg)] sm:max-w-[25%]"
        >
          <div className="p-3 space-y-3">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--text-color)] line-clamp-2">
                {project.description}
              </p>
            </div>
            <div className="flex items-center justify-between pt-3">
              <Link
                href={project.link}
                className="inline-flex items-center text-sm text-[var(--foreground)] hover:text-[var(--text-color)] transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Demo
              </Link>
              <Link
                href={`/portfolio/${project.id}`}
                className="inline-flex items-center text-sm text-[var(--foreground)] hover:text-[var(--text-color)] transition-colors"
              >
                Details
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
