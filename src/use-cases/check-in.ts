import { Checkin } from "@prisma/client";
import { CheckInsRepository } from "@/repositories/check-ins-repository";

interface CkeckinUseCaseRequest {
  userId: string;
  gymId: string;
}

interface CkeckinUseCaseResponse {
  checkIn: Checkin;
}

export class CheckInUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    gymId,
  }: CkeckinUseCaseRequest): Promise<CkeckinUseCaseResponse> {
    const checkIn = await this.checkInsRepository.create({
      gym_id: gymId,
      user_id: userId,
    });

    return {
      checkIn,
    };
  }
}
