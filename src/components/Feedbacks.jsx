import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// import { reviews } from "../constants";
import FeedBackForm from "./FeedBackForm";
import FeedbackCard from "./FeedbackCard";





const Feedbacks = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState()


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          "https://portfolio-b571d-default-rtdb.firebaseio.com/reviews.json"
        );
        if (!res.ok) {
          throw new Error('Something went wrong!!!');
        }
  
        const reviewsObj = await res.json();
  
        const loadedReviews = [];
  
        for (const key in reviewsObj) {
          loadedReviews.push({
            name: reviewsObj[key].name,
            company: reviewsObj[key].company,
            position: reviewsObj[key].position,
            review: reviewsObj[key].review,
          });
        }
  
        setReviews(loadedReviews);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };
  
    fetchReviews().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  useEffect(() => {
    if (isLoading) return;
    // Render reviews whenever reviews or isLoading changes
  }, [reviews, isLoading]);

  if(isLoading){
    return <div className="mt-12 bg-black-100 rounded-[20px]">
      <p className="">Loading...</p>
    </div>
  }

  if(httpError){
    return <div className="mt-12 bg-black-100 rounded-[20px]">
    <p>{httpError}</p>
    
  </div>
  }


  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Reviews.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {reviews.map((review, index) => (
          <FeedbackCard
            key={`${review.name}-${index}`}
            index={index}
            {...review}
          />
        ))}
      </div>
      <FeedBackForm setReviews={setReviews} reviews={reviews} />
    </div>
  );
};

export default SectionWrapper(Feedbacks, "review");
