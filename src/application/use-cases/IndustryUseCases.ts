import type { IndustrySolution } from "@/core";
import { industrySolutionRepository } from "@/infrastructure";

export class GetAllIndustriesUseCase {
  execute(): IndustrySolution[] {
    return industrySolutionRepository.getActive();
  }
}

export class GetIndustryByIdUseCase {
  execute(id: string): IndustrySolution | null {
    return industrySolutionRepository.getById(id);
  }
}

export class GetIndustryBySlugUseCase {
  execute(slug: string): IndustrySolution | null {
    return industrySolutionRepository.getBySlug(slug);
  }
}

export const getAllIndustriesUseCase = new GetAllIndustriesUseCase();
export const getIndustryByIdUseCase = new GetIndustryByIdUseCase();
export const getIndustryBySlugUseCase = new GetIndustryBySlugUseCase();