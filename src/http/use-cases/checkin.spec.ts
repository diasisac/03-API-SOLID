import { beforeEach, describe, expect, it } from 'vitest'
import { CheckInUse } from './checkin'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-checkins-repository'

let sut: CheckInUse
let checkinsRepository: InMemoryCheckInsRepository

describe('Checkin Use Case', () => {

    beforeEach(() => {
        checkinsRepository = new InMemoryCheckInsRepository()
        sut = new CheckInUse(checkinsRepository)
    })

    it('should be able to create checkin', async () => {

        const { checkin } = await sut.execute({
            userId:'user-01',
            gymId:'gym-01'
        })

        expect(checkin.id).toEqual(expect.any(String))
    })
})