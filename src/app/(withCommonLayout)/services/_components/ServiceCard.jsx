"use client";

import { Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServiceCard({ service }) {
  //   if (!service || service.isDeleted) return null;

  const { name, description, price, img, isFeatured, duration, isDeleted } =
    service || {};

  return (
    <div
      className={`max-w-md w-full mx-auto overflow-hidden rounded-2xl shadow-2xl bg-white hover:shadow-3xl transition-all duration-500 ${
        isDeleted ? "opacity-50 grayscale" : ""
      }`}
    >
      {/* Image Section */}
      <div className="relative">
        <Image
          width={250}
          height={250}
          src={img}
          alt={name}
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-orange-600 text-white font-bold px-4 py-2 rounded-full shadow-lg text-sm uppercase tracking-wider">
              ★ Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{name}</h2>

        {/* Description */}
        <div
          className="my-2 line-clamp-3 text-sm text-gray-600"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {/* Meta Info */}
        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock size={16} />
            {duration} mins
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500">Starting at</p>
            <p className="text-2xl font-bold text-gray-900">
              ₹{price.toLocaleString()}
            </p>
          </div>
        </div>
        {/*  CTA */}
        <div className="mt-4">
          {!isDeleted ? (
            <Link href={`/services/${service?._id}`}>
              <button className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 cursor-pointer">
                Book Service
              </button>
            </Link>
          ) : (
            <div className="flex items-center justify-center gap-2 rounded-xl bg-gray-200 py-3 text-sm font-medium text-gray-600">
              <ShieldCheck size={16} />
              Service Unavailable
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
