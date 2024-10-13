const Genero = require('../models/genero');

exports.addGenero = async (req, res) => {
    try {
        const genero = new Genero(req.body);
        await genero.save();
        res.status(201).json(genero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateGenero = async (req, res) => {
    try {
        const idGenero = req.params.id;
        const updateData = req.body;
        const updatedGenero = await Genero.findByIdAndUpdate(
            {_id: idGenero}, 
            {$set: updateData}, 
            { new: true }
            );
        if (!updatedGenero) {
            return res.status(404).json({ message: 'Genero no encontrado' });
        }
        res.json(updatedGenero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllGeneros = async (req, res) => {
    try {
        const Generos = await Genero.find();
        res.json(Generos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getGeneroById = async (req, res) => {
    try {
        const id = req.params.id;
        const genero = await Genero.findById(id);
        if (!genero) {
            return res.status(404).json({ message: 'Genero no encontrado' });
        }
        res.json(genero);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteGenero = async (req, res) => {
    try {
        const idGenero = req.params.id;
        const deletedGenero = await Genero.findOneAndDelete(
            {_id: idGenero},
            { new: true }
            );
        if (!deletedGenero) {
            return res.status(404).json({ message: 'Genero no encontrado' });
        }
        res.json({ message: 'Genero Eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
