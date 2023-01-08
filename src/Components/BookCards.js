import BookCard from "./BookCard";
import "../CSS/BookCards.css";

export default function BookCards() {
  return (
    <div className="grid-div">
      <h2 className="recs-heading">Fresh Recommendations</h2>
      <div className="grid-container">
        {Array.from({ length: 12 }).map((_, idx) => (
          <BookCard />
        ))}
      </div>
    </div>
  );
}
