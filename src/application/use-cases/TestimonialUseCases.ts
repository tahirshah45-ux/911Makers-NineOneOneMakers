import type { Testimonial } from "@/core/entities/Testimonial";
import type { IndustryType } from "@/core/entities/IndustrySolution";
import { testimonialRepository } from "@/infrastructure";

export class GetAllTestimonialsUseCase {
  execute(): Testimonial[] {
    return testimonialRepository.getAll();
  }
}

export class GetTestimonialsByIndustryUseCase {
  execute(industry: IndustryType): Testimonial[] {
    return testimonialRepository.getByIndustry(industry);
  }
}

export class GetTestimonialByIdUseCase {
  execute(id: string): Testimonial | null {
    return testimonialRepository.getById(id);
  }
}

export const getAllTestimonialsUseCase = new GetAllTestimonialsUseCase();
export const getTestimonialsByIndustryUseCase = new GetTestimonialsByIndustryUseCase();
export const getTestimonialByIdUseCase = new GetTestimonialByIdUseCase();