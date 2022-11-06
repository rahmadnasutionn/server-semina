const createTokenUser = (user) => {
    return {
        userId: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
        organizer: user.organizer,
    };
};

const createTokenParticipant = (participant) => {
    return {
        lastName: participant.lastName,
        participantId: participant._id,
        firstName: participant.firstName,
        email: participant.email,
    };
};

module.exports = { createTokenUser, createTokenParticipant };