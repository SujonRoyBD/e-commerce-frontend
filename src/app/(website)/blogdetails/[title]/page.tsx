"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface BlogData {
  id: number;
  img: string;
  title: string;
  location: string;
  desc: string;
  date: string;
}

const blogData: BlogData[] = [
  {
    id: 1,
    img: "/assets/blog/blog1.png",
    date: "May 27, 2025",
    location: "Sarah Johnson",
    title: "The Benefits of Organic Farming",
    desc: "Family-owned organic farm specializing in seasonal vegetables and herbs.",
  },
  {
    id: 2,
    img: "/assets/blog/blog2.png",
    date: "May 28, 2025",
    location: "Mark Lee",
    title: "How Sustainable Agriculture Saves the Planet",
    desc: "Learn how eco-friendly farming methods help protect the environment.",
  },
];

const BlogDetails = () => {
  const params = useParams();
  const { title } = params as { title: string };

  const blog = blogData.find(
    (item) =>
      item.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
  );

  if (!blog)
    return (
      <div className="text-center text-red-600 py-10">Blog not found!</div>
    );

  return (
    <div className="py-6">
      <Image
        src={blog.img}
        alt={blog.title}
        width={1200}
        height={400}
        className="w-full h-[300px] object-cover"
      />

      <div className="container mt-6 space-y-4">
        <div className="flex items-center space-x-4">
          <Image
            src="/assets/head.png"
            alt="author"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{blog.title}</h1>
            <p className="flex items-center gap-2 text-gray-600 text-sm">
              <CiLocationOn className="text-green-600" />
              {blog.location} — <span>{blog.date}</span>
            </p>
          </div>
        </div>

        <p className="text-gray-700">{blog.desc}</p>

        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">4.9 (127 reviews)</span>
        </div>

        <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition">
          Book Visit
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
