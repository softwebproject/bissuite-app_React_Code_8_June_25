import ReviewCard from "@/app/Components/ReviewCard";
import React from "react";
const DGVReviewSection = () => {
  return (
    <>
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black2 mb-5">
          Reviews
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 py-4">
          <ReviewCard
            userName="issastash"
            userCountry="India"
            userImage="/images/gigs/reviewUser1.png"
            countryFlag="/images/gigs/flagImg2.png"
            rating={5.0}
            date="3 weeks ago"
            reviewText="Amazing experience! The package I bought came with multiple logo designs. I showed him 2 concepts I wanted to try and the rest of the other designs I gave him free control to come up with on his own. The 2 concepts I gave him he made it come ..."
          />
          <ReviewCard
            userName="waleedibraheem"
            userCountry="Egypt"
            countryFlag="/images/gigs/flagImg3.png"
            rating={5.0}
            date="3 weeks ago"
            reviewText="Amazing experience! The package I bought came with multiple logo designs. I showed him 2 concepts I wanted to try and the rest of the other designs I gave him free control to come up with on his own. The 2 concepts I gave him he made it come ..."
          />
          <ReviewCard
            userName="issastash"
            userCountry="India"
            userImage="/images/gigs/reviewUser3.png"
            countryFlag="/images/gigs/flagImg2.png"
            rating={5.0}
            date="3 weeks ago"
            reviewText="Amazing experience! The package I bought came with multiple logo designs. I showed him 2 concepts I wanted to try and the rest of the other designs I gave him free control to come up with on his own. The 2 concepts I gave him he made it come ..."
          />
          <ReviewCard
            userName="waleedibraheem"
            userCountry="Egypt"
            userImage="/images/gigs/reviewUser2.png"
            countryFlag="/images/gigs/flagImg3.png"
            rating={5.0}
            date="3 weeks ago"
            reviewText="Amazing experience! The package I bought came with multiple logo designs. I showed him 2 concepts I wanted to try and the rest of the other designs I gave him free control to come up with on his own. The 2 concepts I gave him he made it come ..."
          />
        </div>
      </div>
    </>
  );
};

export default DGVReviewSection;
