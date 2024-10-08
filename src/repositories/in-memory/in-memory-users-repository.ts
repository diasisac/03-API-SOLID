import { User, Prisma } from '@prisma/client'
import { UsersRepository } from '../usersRepository'

export class InMemoryUsersRepository implements UsersRepository {  
    public items: User[] = []

    async findByEmail(email: string) {
        return this.items.find(user => user.email === email) || null
    }

    async create (data: Prisma.UserCreateInput){
        const user = {
            id: 'user-id',
            name: data.name,
            email: data.email,
            password_hash: data.password_hash,
            created_at: new Date(),
        }

        this.items.push(user)

        return user
    }

}