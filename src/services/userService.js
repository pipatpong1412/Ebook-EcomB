const prisma = require('../config/prisma')

exports.getUserByEmail = (email) => {
    return prisma.user.findFirst({
        where: {
            email
        }
    })
}

exports.createUser = (name, email, password) => {
    return prisma.user.create({
        data: {
            name,
            email,
            password
        }
    })
}

exports.getUserById = (id) => {
    return prisma.user.findFirst({
        where: {
            id
        }
    })
}