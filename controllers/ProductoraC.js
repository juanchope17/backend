const Productora = require('../models/productora');

exports.addProductora = async (req, res) => {
    try {
        const productora = new Productora(req.body);
        await productora.save();
        res.status(201).json(productora);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllProductoras = async (req, res) => {
    try {
        const productoras = await Productora.find();
        res.json(productoras);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getProductoraById = async (req, res) => {
    try {
        const productora = await Productora.findById(req.params.id);
        if (!productora) {
            return res.status(404).json({ message: 'Productora no encontrada' });
        }
        res.json(productora);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateProductora = async (req, res) => {
    try {
        const idProductora = req.params.id;
        const updateData = req.body;
        const updateProductora = await Productora.findByIdAndUpdate(
          { _id: idProductora },
          { $set: updateData },
          { new: true }
        );
    
        if (!updateProductora) {
          return res.status(404).json({ error: 'Productora no encontrada' });
        }
        res.json(updateProductora);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
};

exports.deleteProductora = async (req, res) => {
    try {
        const idProductora = req.params.id;
        const deletedProductora = await Productora.findOneAndDelete(
            { _id: idProductora },
            { new: true }
        );
        if (!deletedProductora) {
            return res.status(404).json({ message: 'Productora no encontrada' });
        }
        res.json({ message: 'Productora Eliminada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
