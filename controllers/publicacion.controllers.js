const Publicacion = require("../models/publicacion.models");
const  publicacionRoutes = require("../routes/publicacion.routes.js");

const ctlrPublicacion = {};




// controlador para obetener todas las publicaciones
ctlrPublicacion.getAllPublicaciones = async (req, res) =>{
    const publicaciones = await Publicacion.findAll();
    res.send(publicaciones);
};

//controlador para crear publicacion
ctlrPublicacion.createPublicacion = async (req, res) =>{
    const{image, titulo, descripcion} = req.body;

    const Publicacion = {
        Image: image,
        Titulo: titulo,
        Descripcion: descripcion,
    };
    
    try {
        const nuevaPublicacion = await Publicacion.create(publicacion);
        res.send(nuevaPublicacion);
    } catch (error) {
        res.status(400).send({message: "error en la carga de la publicacion"});
    }
    
};

//controlador para eliminar una publicacion
ctlrPublicacion.deletePublicacion = async (req, res) => {
    const { id } = req.params;
    try {
        const publicacionEliminada = await Publicacion.destroy({
            where: {
                id: id,
            },
        });
        if(publicacionEliminada) {
            return res.status(200).send({mensaje: "publicacion eliminada"});
        } else {
            return res.status(400).send({ mensaje: "no se encuentro la publicacion para eliminar"});
        }
        
    }catch (error) {
        return res.status(400).send({ mensaje: "no se pudo eliminar la publicacion"});
    }
};

//controlador para editar una publicacion
ctlrPublicacion.editPublicacion = async (req, res) => {
    const {Image, Titulo, Descripcion } = req.body;
    //buscar publicacion para editar
    const publicacion = await publicacion.findOne({where: {id : id}});

    if(!publicacion) {
        return res.status(400).send({mensaje: "publicacion no encontrada"});
    } else {
        const publicacionPreEdit = {
            Image: Image,
            Titulo: Titulo,
            Descripcion: Descripcion,
        };
        try {
            const publicacionPostEdit = await publicacion.update(publicacionPreEdit, {
                where: {
                    id: id,
                },
            });
            return res.status(200).send({ mensaje: "publicacion editada"});
        } catch (error) {
            return res.status(400).send({mensaje: "error al editar publicacion"});

        }
    }

}


module.exports = { ctlrPublicacion };