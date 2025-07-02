import { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: 1, 
    name: "Rajesh Sharma",
    pos: "Computer Engineering Undergrad",
    review:`Roshan is an exceptional web developer with a strong grasp of both front-end and back-end technologies. During our university project, we collaborated closely, and I was impressed by his problem-solving skills, attention to detail, and ability to deliver clean, efficient code. He consistently contributed innovative ideas, ensuring our project's success. Roshan is a reliable team player, and I highly recommend him for any web development role.`,
    imgPath: "/images/testimonials/rajesh-sharma.webp",
    linkedinUrl: "https://www.linkedin.com/in/rajesh-vishwakarma-0b7a7630b/",
    facebookUrl: "https://www.facebook.com/rajesh.sharma.589961",
    instagramUrl: "https://www.instagram.com/rajeshh2602/",
  },
  {
    id: 2,
    name: "Shalva Mosiashvili",
    pos: "Digital Marketing Manager at ArcheaA Studio",
    review: `I had the pleasure of working alongside Roshan at Proceedit, where he demonstrated strong technical skills and a collaborative approach. While he didn’t manage me directly, his contributions as a senior member were always insightful and valuable. Roshan’s ability to think strategically and solve complex problems was evident in the work he did, and I greatly benefited from his expertise.\n\nRoshan is a dedicated and reliable professional, and I truly appreciated the opportunity to learn from him. I highly recommend Roshan for any role requiring technical knowledge, leadership, and a problem-solving mindset.`,
    imgPath: "/images/testimonials/shalva-mosiashvili.webp",
    linkedinUrl: "https://www.linkedin.com/in/shalvamosiashvili/",
  },
  {
    id: 3,
    name: "Rajesh Sharma",
    pos: "Computer Engineering Undergrad",
    review:`Roshan is an exceptional web developer with a strong grasp of both front-end and back-end technologies. During our university project, we collaborated closely, and I was impressed by his problem-solving skills, attention to detail, and ability to deliver clean, efficient code. He consistently contributed innovative ideas, ensuring our project's success. Roshan is a reliable team player, and I highly recommend him for any web development role.`,
    imgPath: "/images/testimonials/rajesh-sharma.webp",
    linkedinUrl: "https://www.linkedin.com/in/rajesh-vishwakarma-0b7a7630b/",
    facebookUrl: "https://www.facebook.com/rajesh.sharma.589961",
    instagramUrl: "https://www.instagram.com/rajeshh2602/",
  },
] as const;

export const TESTIMONIALS_COUNT = testimonials.length;

export const getTestimonialsMetadata = () => ({
  totalCount: TESTIMONIALS_COUNT,
  averageReviewLength: Math.round(
    testimonials.reduce((acc, curr) => {
      const reviewText = Array.isArray(curr.review) ? curr.review.join(' ') : curr.review;
      return acc + reviewText.length;
    }, 0) / TESTIMONIALS_COUNT
  ),
  companies: [...new Set(testimonials.map(t => t.pos.split(' at ')[1]))],
});