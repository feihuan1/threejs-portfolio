import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import Button from "./Button";

const FeedBackForm = ({reviews, setReviews}) => {
  const [isReviewing, setIsReviewing] = useState(false);
  const [form, setForm] = useState({
    review: "",
    name: "",
    position: "",
    company: "",
  });

  const handleToggleReviewForm = () => {
    setIsReviewing(!isReviewing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    await fetch("https://portfolio-b571d-default-rtdb.firebaseio.com/reviews.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  
    // Clear the form fields
    setForm({
      review: "",
      name: "",
      position: "",
      company: "",
    });
  
    
    handleToggleReviewForm();
    alert("Thank you for your review!");
    window.location.reload();
  };

  const toggleReviewButton = (
    <Button
      type="button"
      onClick={handleToggleReviewForm}
      className="bg-tertiary mt-8 py-4 px-16 outline-none w-fit text-white font-bold shadow-md shadow-primary
    rounded-xl mx-auto"
    >
      {isReviewing ? "Cancel" : "Write A Review"}
    </Button>
  );

  const reviewForm = (
    <form
      onSubmit={handleSubmit}
      className="mt-0 flex flex-col items-center gap-4 bg-black-200 py-16 rounded-3xl"
    >
      <label htmlFor="review-name" className="flex flex-col w-1/2">
        <span className="text-white font-medium mt-4">Your Name</span>
        <input
          required
          value={form.name}
          onChange={handleChange}
          type="text"
          name="name"
          id="review-name"
          placeholder="Your name?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <label htmlFor="company" className="flex flex-col w-1/2">
        <span className="text-white font-medium mt-4">Your Company</span>
        <input
          required
          value={form.company}
          onChange={handleChange}
          type="text"
          name="company"
          id="company"
          placeholder="Whitch company are you from?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <label htmlFor="position" className="flex flex-col w-1/2">
        <span className="text-white font-medium mt-4">Your Job Title</span>
        <input
          required
          value={form.position}
          onChange={handleChange}
          type="text"
          name="position"
          id="position"
          placeholder="What's your job title?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label htmlFor="review" className="flex flex-col w-1/2">
        <span className="text-white font-medium mt-4">Leave A Review</span>
        <textarea
          value={form.review}
          onChange={handleChange}
          required
          rows="7"
          name="review"
          id="review"
          placeholder="This dude is goodlooking~"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <div className="flex flex-wrap flex-row gap-8 justify-between">
        <Button
          type="submit"
          className="bg-tertiary mt-8 py-4 px-16 outline-none w-fit text-white font-bold shadow-md shadow-primary
    rounded-xl mx-auto"
        >
          Submit
        </Button>
        {toggleReviewButton}
      </div>
    </form>
  );

  return (
    <motion.div
      variants={fadeIn("", "spring", 1, 0.75)}
      className={`${styles.paddingX} pb-14 text-center`}
    >
      {isReviewing ? reviewForm : toggleReviewButton}
    </motion.div>
  );
};

export default FeedBackForm;
