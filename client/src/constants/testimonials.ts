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
  {
    id: 4,
    name: "Sumit Rijal",
    pos: "Computer Engineering Undergrad",
    review:`I had the pleasure of working alongside Roshan Chaudhary on a collaborative project where we developed a brick breaker game using C++ and the SFML library. From the very beginning, he demonstrated strong technical skills, a proactive mindset, and a genuine passion for game development.\n\nI’m confident that he will be a valuable asset to any team and I highly recommend him for any role that demands strong programming skills, teamwork, and creativity.`,
    imgPath: "/images/testimonials/sumit-rijal.webp",
    linkedinUrl: "https://www.linkedin.com/in/sumit-rijal-48bba7295/",
    facebookUrl: "https://www.facebook.com/sumit.rijal.988",
    instagramUrl: "https://www.instagram.com/sumitrijal01/",
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