function RatingStars({ rating = 5 }) {
  return (
    <div className="text-yellow-500 text-xl">
      {"⭐".repeat(rating)}
    </div>
  );
}

export default RatingStars;