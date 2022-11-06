const notFound = (req, res) => {
    res.status(404).send({ msg: 'Rout does not exist' });
};

module.exports = notFound;