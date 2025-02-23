"use client"

import { Code2, Briefcase } from "lucide-react"

// interface TimelineItem {
//   title: string
//   company: string
//   date: string
//   points: string[]
//   side: "left" | "right"
// }

const timelineData = [
  {
    title: "React.js Developer",
    company: "Hashtag City",
    date: "March 2022 - April 2022",
    points: [
      "Developing A Website for Company named Hashtag city",
      "Collaborating with team to design and develop the UI and Animations",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    side: "left",
  },
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    date: "May 2022 - December 2022",
    points: [
      "Led development of multiple client projects using React and Next.js",
      "Implemented responsive UI components and interactive features",
      "Optimized application performance and loading times",
      "Mentored junior developers and conducted code reviews",
    ],
    side: "right",
  },
  {
    title: "React.js Developer",
    company: "Hashtag City",
    date: "March 2022 - April 2022",
    points: [
      "Developing A Website for Company named Hashtag city",
      "Collaborating with team to design and develop the UI and Animations",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    side: "left",
  },
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    date: "May 2022 - December 2022",
    points: [
      "Led development of multiple client projects using React and Next.js",
      "Implemented responsive UI components and interactive features",
      "Optimized application performance and loading times",
      "Mentored junior developers and conducted code reviews",
    ],
    side: "right",
  },
]

export default function WorkExperience() {
  return (
    <div className="min-h-screen bg-[var(--white-bg)] px-4 py-16 text-[var(--text-color)] md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-sm uppercase tracking-wider text-black">WHAT I HAVE DONE SO FAR</h2>
          <h1 className="text-4xl text-black font-bold sm:text-5xl md:text-6xl">Work Experience.</h1>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[50%] top-0 hidden h-full w-px -translate-x-[50%] bg-[var(--background)] md:block" />

          {/* Mobile timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-[var(--background)] md:hidden" />

          <div className="relative space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                {/* Desktop layout */}
                <div
                  className={`hidden items-center md:flex ${item.side === "left" ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${item.side === "left" ? "pr-12" : "pl-12"}`}>
                    <TimelineCard {...item} />
                  </div>
                  <div className="relative flex h-8 w-8 items-center justify-center">
                    <div className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-[var(--card-bg)]">
                      <Code2 className="h-4 w-4 text-[var(--text-color)]" />
                    </div>
                  </div>
                  <div className="w-1/2" />
                </div>

                {/* Mobile layout */}
                <div className="flex max-w-[calc(100%-20px)] md:hidden">
                  <div className="relative flex h-8 w-8 items-center justify-center">
                    <div className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-[var(--background)]">
                      <Code2 className="h-4 w-4 text-[var(--text-color)]" />
                    </div>
                  </div>
                  <div className="flex-1 pl-2">
                    <TimelineCard {...item} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TimelineCard({ title, company, date, points }) {
  return (
    <div className="rounded-lg bg-[var(--bg-light)] p-6 shadow-lg">
      <h3 className="mb-1 text-xl font-bold">{title}</h3>
      <p className="mb-2 text-[var(--text-color)]">{company}</p>
      <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text-color)]">
        <Briefcase className="h-4 w-4" />
        {date}
      </div>
      <ul className="list-inside space-y-2 text-sm text-[var(--text-color)]">
        {points.map((point, index) => (
          <li key={index} className="list-disc">
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

