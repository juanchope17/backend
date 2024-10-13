const Tipo = require('../models/tipo');

exports.addTipo = async (req, res) => {
    try {
        const tipo = new Tipo(req.body);
        await tipo.save();
        res.status(201).json(tipo);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.json(tipos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTipoById = async (req, res) => {
    try {
        const tipo = await Tipo.findById(req.params.id);
        if (!tipo) {
            return res.status(404).json({ message: 'Tipo no encontrado' });
        }
        res.json(tipo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateTipo = async (req, res) => {
    try {
        const idTipo = req.params.id;
        const updateData = req.body;
        const updatedTipo = await Tipo.findByIdAndUpdate(
          { _id: idTipo },
          { $set: updateData },
          { new: true }
        );
    
        if (!updatedTipo) {
          return res.status(404).json({ error: 'Tipo no encontrado' });
        }
    
        res.json(updatedTipo);
    }   catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
      }
};

exports.deleteTipo = async (req, res) => {
    try {
        const idTipo = req.params.id;
        const deletedTipo = await Tipo.findOneAndDelete(
            { _id: idTipo },
            { new: true }
        );
        if (!deletedTipo) {
            return res.status(404).json({ message: 'Tipo no encontrado' });
        }
        res.json({ message: 'Tipo eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
