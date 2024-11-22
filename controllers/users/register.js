import User from "../../models/User.js";
import City from "../../models/City.js";

let create = async (req,res,next) =>{
    try {
      const { firstName, lastName, email, password, city, photo } = req.body;

      // Verificar si la ciudad existe
      const cityRecord = await City.findById(city);
      if (!cityRecord) {
        return res.status(404).json({ message: "Ciudad no encontrada" });
      }

      // Crear el nuevo usuario
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        city: cityRecord._id, // Asociar por ID
        photo,
      });

      await newUser.save();

      // Buscar al usuario y poblar el campo "city"
      const userWithCity = await User.findById(newUser._id).populate("city");

      res.status(201).json({
        message: "Usuario registrado exitosamente",
        user: userWithCity, // Incluye todos los datos del usuario + ciudad
      });
    } catch (error) {
      console.error("Error en el registro:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
}

export default create