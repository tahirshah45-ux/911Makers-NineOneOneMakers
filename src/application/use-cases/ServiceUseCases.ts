import type { Service, ServiceCategory } from "@/core/entities/Service";
import { serviceRepository } from "@/infrastructure";

export class GetAllServicesUseCase {
  execute(): Service[] {
    return serviceRepository.getActive();
  }
}

export class GetServiceByIdUseCase {
  execute(id: string): Service | null {
    return serviceRepository.getById(id);
  }
}

export class GetServicesByCategoryUseCase {
  execute(category: ServiceCategory): Service[] {
    return serviceRepository.getByCategory(category);
  }
}

export const getAllServicesUseCase = new GetAllServicesUseCase();
export const getServiceByIdUseCase = new GetServiceByIdUseCase();
export const getServicesByCategoryUseCase = new GetServicesByCategoryUseCase();