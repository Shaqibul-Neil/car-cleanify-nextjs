import React from "react";

export default function ServiceSkeleton() {
  return (
    <div className="max-w-md w-full mx-auto overflow-hidden rounded-2xl shadow-2xl bg-white animate-pulse">
      {/* Image Skeleton */}
      <div className="h-72 w-full bg-gray-200" />

      {/* Content */}
      <div className="p-8 space-y-5">
        {/* Title */}
        <div className="h-6 w-3/4 rounded bg-gray-200" />

        {/* Description lines */}
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-11/12 rounded bg-gray-200" />
          <div className="h-4 w-9/12 rounded bg-gray-200" />
        </div>

        {/* Meta info */}
        <div className="flex items-center justify-between border-t pt-4">
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="space-y-2 text-right">
            <div className="h-3 w-20 rounded bg-gray-200 ml-auto" />
            <div className="h-6 w-24 rounded bg-gray-200 ml-auto" />
          </div>
        </div>

        {/* CTA */}
        <div className="h-11 w-full rounded-xl bg-gray-300" />
      </div>
    </div>
  );
}
