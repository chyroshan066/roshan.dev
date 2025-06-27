import { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "emily-carter", 
    name: "Emily Carter",
    pos: "UX Designer at PixelWorks Studio",
    review:
      "David Jhon consistently brings fresh ideas and innovative solutions. Their passion for creativity and attention to detail elevate every project.",
    imgPath: "/images/testimonials/shalva-mosiashvili.webp",
  },
  {
    id: "shalva-mosiashvili",
    name: "Shalva Mosiashvili",
    pos: "Digital Marketing Manager at ArcheaA Studio",
    review: `I had the pleasure of working alongside Roshan at Proceedit, where he demonstrated strong technical skills and a collaborative approach. While he didn’t manage me directly, his contributions as a senior member were always insightful and valuable. Roshan’s ability to think strategically and solve complex problems was evident in the work he did, and I greatly benefited from his expertise.\n\nRoshan is a dedicated and reliable professional, and I truly appreciated the opportunity to learn from him. I highly recommend Roshan for any role requiring technical knowledge, leadership, and a problem-solving mindset.`,
    imgPath: "/images/testimonials/shalva-mosiashvili.webp",
    linkedinUrl: "https://www.linkedin.com/in/shalvamosiashvili/",
  },
  {
    id: "shalva-mosiashvili",
    name: "Dhinchak Puja",
    pos: "Digital Marketing Manager at ArcheaA Studio",
    review:`I had the pleasure of working alongside Roshan at Proceedit, where he demonstrated strong technical skills and a collaborative approach. While he didn’t manage me directly, his contributions as a senior member were always insightful and valuable. Roshan’s ability to think strategically and solve complex problems was evident in the work he did, and I greatly benefited from his expertise.\n\nRoshan is a dedicated and reliable professional, and I truly appreciated the opportunity to learn from him. I highly recommend Roshan for any role requiring technical knowledge, leadership, and a problem-solving mindset.`,
    imgPath: "/images/testimonials/shalva-mosiashvili.webp",
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

export const isValidTestimonial = (testimonial: any): testimonial is Testimonial => {
  return (
    typeof testimonial === 'object' &&
    testimonial !== null &&
    typeof testimonial.name === 'string' &&
    typeof testimonial.pos === 'string' &&
    (typeof testimonial.review === 'string' || Array.isArray(testimonial.review)) &&
    typeof testimonial.imgPath === 'string'
  );
};