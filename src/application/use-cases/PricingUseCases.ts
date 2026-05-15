import type { PricingPackage } from "@/core";
import type { IndustryType } from "@/core/entities/IndustrySolution";
import { pricingRepository } from "@/infrastructure";

export class GetAllIndustryPricingUseCase {
  execute(): PricingPackage[] {
    return pricingRepository.getActive();
  }
}

export class GetIndustryPricingUseCase {
  execute(slug: string): PricingPackage[] {
    // Find industry by slug then get pricing for that industry
    const industryMap: Record<string, IndustryType> = {
      'tax': 'tax_office',
      'restaurant': 'restaurant',
      'clinic': 'clinic_salon',
      'clothing': 'clothing_brand',
      'delivery': 'delivery',
      'corporate': 'corporate',
    };

    const industryType = industryMap[slug];
    if (!industryType) return [];

    return pricingRepository.getByIndustry(industryType);
  }
}

export class GetPopularPricingUseCase {
  execute(): PricingPackage[] {
    return pricingRepository.getPopular();
  }
}

export const getAllIndustryPricingUseCase = new GetAllIndustryPricingUseCase();
export const getIndustryPricingUseCase = new GetIndustryPricingUseCase();
export const getPopularPricingUseCase = new GetPopularPricingUseCase();