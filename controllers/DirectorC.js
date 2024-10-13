const Director = require('../models/director');

exports.addDirector = async (req, res) => {
    try {
        const director = new Director(req.body);
        await director.save();
        res.status(201).json(director);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllDirectors = async (req, res) => {
    try {
        const directors = await Director.find();
        res.json(directors);
    } catch (err) {
        res.status(500).json( { message: err.message });
    };
};

exports.updateDirector = async (req, res) => {
    try {
        const idByDirector = req.params.id;
        const updatedData = req.body;
        const  updatedDirector = await Director.findByIdAndUpdate(
            {_id: idByDirector},
            {$set: updatedData},
            {new: true}
        );
        if (!updatedDirector) {
            return res.status(404).json({ message: 'Director no encontrado' });
        }
        res.json(updatedDirector);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getDirectorById = async (req, res) => {
    try {
        const id = req.params.id;
        const director = await Director.findById(id);
        if (!director) {
            return res.status(404).json({ message: 'Director no encontrado' });
        }
        res.json(director);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteDirector = async (req, res) => {
    try {
        const idByDirector = req.params.id;
        const deletedDirector = await Director.findOneAndDelete(
            {_id: idByDirector},
            {new: true}
        );
        if (!deletedDirector) {
            return res.status(404).json({ message: 'Director no encontrado' });
        }
        res.json({ message: 'Director Eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
