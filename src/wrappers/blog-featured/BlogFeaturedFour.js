import PropTypes from "prop-types";
import React from "react";
import blogFeaturedData from "../../data/blog-featured/blog-featured-two.json";
import BlogFeaturedSingle from "../../components/blog-featured/BlogFeaturedSingle";
import SectionTitle from "../../components/section-title/SectionTitle";

const BlogFeaturedFour = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`blog-area ${spaceTopClass ? spaceTopClass : ""} ${spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <SectionTitle
          titleText="Новости рынка спецтехники"
          subtitleText="Актуальные новости и аналитика рынка строительной, дорожной и сельскохозяйственной техники."
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass="no-border"
        />
        <div className="row">
          {blogFeaturedData.map((singlePost) => {
            return (
              <BlogFeaturedSingle singlePost={singlePost} key={singlePost.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

BlogFeaturedFour.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BlogFeaturedFour;
