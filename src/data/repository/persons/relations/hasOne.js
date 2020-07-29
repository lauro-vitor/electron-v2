module.exports = row => {
    return {
        id: row.id,
        name: row.name,
        isBetaMember: ( row.isBetaMember == 1) ? true: false,
        createdAt: row.pCreatedAt,
        updatedAt: row.pUpdatedAt,
        userId: row.userId,
        user: {
            id: row.userId,
            firstName: row.firstName,
            lastName: row.lastName,
            email: row.email,
            createdAt: row.uCreatedAt,
            updatedAt: row.uUpdatedAt,
        }
    };
}