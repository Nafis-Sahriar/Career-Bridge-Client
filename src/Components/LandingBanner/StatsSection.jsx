'use client';

import { Briefcase, Factory, Magnifier, Star } from '@gravity-ui/icons';
import {motion} from 'motion/react';

const stats = [
  {
    id: 1,
    icon: <Briefcase className="h-5 w-5" />,
    value: '50K',
    label: 'Active Jobs',
  },
  {
    id: 2,
    icon: <Factory className="h-5 w-5" />,
    value: '12K',
    label: 'Companies',
  },
  {
    id: 3,
    icon: <Magnifier className="h-5 w-5" />,
    value: '2M',
    label: 'Job Seekers',
  },
  {
    id: 4,
    icon: <Star className="h-5 w-5" />,
    value: '97%',
    label: 'Satisfaction Rate',
  },
];

const trendingTags = [
  'Frontend',
  'Backend',
  'AI Engineer',
  'DevOps',
  'Remote',
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/banner.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Glow */}
      <div className="absolute left-1/2 top-[35%] h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[160px]" />

      {/* Floating Pills */}
      <div className="absolute left-[10%] top-32 hidden rounded-full border border-white/10 bg-black/40 px-5 py-2 text-sm text-white/90 backdrop-blur-xl lg:block">
        Remote Jobs
      </div>

      <div className="absolute right-[10%] top-44 hidden rounded-full border border-white/10 bg-black/40 px-5 py-2 text-sm text-white/90 backdrop-blur-xl lg:block">
        On-site Jobs
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ================================================= */}
        {/* HERO AREA */}
        {/* ================================================= */}

        <div className="flex min-h-212 flex-col items-center justify-center text-center">

          {/* Badge */}
          <div className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-5 py-2 backdrop-blur-xl">
            <Briefcase className="h-4 w-4 text-violet-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-300">
              50,000+ New Jobs This Month
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Find Your Dream Job Today
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            CareerBridge connects ambitious professionals with leading companies.
            Discover opportunities, grow your network, and take the next step in your career.
          </p>

          {/* Search */}
          <div className="mt-12 w-full max-w-4xl rounded-3xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl">
            <div className="flex flex-col gap-3 md:flex-row">

              <input
                type="text"
                placeholder="Job title, keyword or company"
                className="flex-1 rounded-2xl bg-transparent px-5 py-4 outline-none placeholder:text-gray-500"
              />

              <div className="hidden w-px bg-white/10 md:block" />

              <input
                type="text"
                placeholder="Location"
                className="flex-1 rounded-2xl bg-transparent px-5 py-4 outline-none placeholder:text-gray-500"
              />

              <button className="rounded-2xl bg-violet-600 px-8 py-4 font-medium transition hover:bg-violet-500">
                Search
              </button>

            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-gray-400">
              Trending:
            </span>

            {trendingTags.map((tag) => (
              <button
                key={tag}
                className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300 backdrop-blur-md transition hover:border-violet-500/40 hover:text-white"
              >
                {tag}
              </button>
            ))}
          </div>

        </div>

        {/* ================================================= */}
        {/* STATS AREA */}
        {/* ================================================= */}

        <div className="pb-28">

          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-medium leading-relaxed text-white md:text-4xl">
              Assisting over 15,000 job seekers
              <br />
              find their dream positions.
            </h2>

            <p className="mt-6 text-base text-gray-400">
              Connecting ambitious professionals with leading companies worldwide.
            </p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl transition-transform duration-200 hover:-translate-y-2"
              >
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl transition-all duration-300 group-hover:bg-violet-500/20" />

                <div className="relative z-10 text-white/90">
                  {stat.icon}
                </div>

                <h3 className="relative z-10 mt-10 text-5xl font-bold tracking-tight">
                  {stat.value}
                </h3>

                <p className="relative z-10 mt-4 text-base text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}