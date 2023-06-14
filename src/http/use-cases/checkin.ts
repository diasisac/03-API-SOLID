import { CheckIn } from '@prisma/client'
import { CheckInsRepository } from '@/repositories/checkinsRepository'

interface CheckInUseRequest {
    userId: string
    gymId: string
}

interface CheckInUseResponse {
    checkin: CheckIn
}

export class CheckInUse {
    constructor(private readonly checkinsRepository: CheckInsRepository) { }

    async execute({ userId, gymId }: CheckInUseRequest): Promise<CheckInUseResponse> {
        const checkin = await this.checkinsRepository.create({
            user_id :userId,
            gym_id: gymId
        })

        return {
            checkin
        }
    }
}