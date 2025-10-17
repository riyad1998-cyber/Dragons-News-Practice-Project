import React from "react";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    published_date,
  } = {
    title: news.title,
    author: news.author,
    rating: news.rating,
    total_view: news.total_view,
    thumbnail_url: news.thumbnail_url,
    details: news.details,
    published_date: news.author?.published_date,
  };

  // Format date
    const formattedDate = published_date
    ? new Date(published_date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
    : "N/A";

  return (
    <div className="card bg-base-100 shadow-xl mb-6">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-base-200 rounded-t-xl">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src={author?.img} alt={author?.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-lg text-gray-600">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h3 className="font-bold text-lg leading-snug">{title}</h3>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt="thumbnail"
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4 text-sm text-gray-700">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...{" "}
            <span className="text-primary cursor-pointer font-medium">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex justify-between items-center border-t pt-3">
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={i < rating?.number ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-gray-600 text-sm">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          👁 {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
