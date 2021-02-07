// le rôle de ce controller est de contenir les méthodes pour gérer les différentes erreurs

const errorController = {

    notFound: (req, res) => {
        res.status(404).send("not found");
    }

};

module.exports = errorController;