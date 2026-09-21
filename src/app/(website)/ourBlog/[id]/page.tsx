"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import WhatCustomers from "../../what_ourCustomers/page";
import { BlogData } from "@/components/data/page";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogDetailsPage = () => {
  const params = useParams();
  const id = Number(params?.id) || 1;
  const blog = BlogData?.find((item) => item.id === id) || BlogData[0];

  if (!blog) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <Link href="/ourBlog" className="text-emerald-600 underline mt-4 inline-block">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-16">
      <article className="container mx-auto px-4 sm:px-6 max-w-4xl pt-8">
        {/* Breadcrumb / Back button */}
        <Link
          href="/ourBlog"
          className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-1" />
          Back to all articles
        </Link>

        {/* Title & Metadata */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
            Organic Living & Soil Health
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-y border-gray-150 py-4 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                {blog.location.substring(0, 1)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{blog.location}</p>
                <p className="text-xs text-gray-400">Agricultural Contributor</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-emerald-600" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-emerald-600" />
                4 min read
              </span>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg mb-10 bg-gray-100">
          <Image
            src={blog.img}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-emerald max-w-none text-gray-700 space-y-6 leading-relaxed text-base sm:text-lg">
          <p className="font-medium text-gray-900 text-lg sm:text-xl leading-relaxed">
            {blog.desc} Cultivating food without relying on synthetic inputs restores microbial biodiversity to our soils, ensuring that every bite delivers vitamins, minerals, and flavor as nature intended.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pt-4">
            1. Restoring Natural Soil Vitality
          </h2>
          <p>
            Unlike conventional mono-cropping that exhausts topsoil through repetitive chemical fertilizers, small organic farms practice crop rotation, diverse cover cropping, and companion planting. These traditional techniques enrich beneficial microbes and retain moisture naturally.
          </p>

          <div className="p-6 rounded-2xl bg-emerald-50 border-l-4 border-emerald-600 my-6">
            <p className="italic text-emerald-900 text-base">
              &ldquo;When topsoil is vibrant and alive with worms and mycorrhizal fungi, the plants develop deep natural immunity against pests—eliminating any need for synthetic sprays.&rdquo;
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pt-4">
            2. The Nutrient Density Advantage
          </h2>
          <p>
            Recent nutritional studies consistently reveal that slow-grown, organically nurtured fruits and vegetables contain up to 40% higher antioxidant concentrations than supermarket varieties harvested unripe for industrial transit.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pt-4">
            3. How You Can Support Your Local Growers
          </h2>
          <p>
            Buying direct through community networks like Table Fresh guarantees that 95% of your food dollar goes straight into the hands of the gardeners and farmers doing the physical work under the sun.
          </p>
        </div>

        {/* Share & Support Card */}
        <div className="mt-12 p-6 rounded-3xl bg-gray-50 border border-gray-150 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-gray-900">Enjoyed this article?</h4>
            <p className="text-xs text-gray-500">Share with family and neighbors passionate about real food.</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => alert("Article link copied to clipboard!")}
              className="rounded-full border-gray-300 text-xs flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" /> Share Story
            </Button>
            <Link href="/farm/1">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs">
                Browse Produce
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Customer testimonials */}
      <WhatCustomers />
    </div>
  );
};

export default BlogDetailsPage;
