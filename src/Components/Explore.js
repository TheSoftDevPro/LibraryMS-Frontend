import React from "react";
import BookCards from "./BookCards";
import "../CSS/Explore.css"

export default function Explore() {
    return (
        <div >
            <div className="book-cards">
                <BookCards/>
            </div>
        </div>
  );
}