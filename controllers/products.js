const getAllProducts = async (req, res) => {
    res.status(200).json({ message: "Get all Products List" });
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ message: "ProductsList Testing" });
};

module.exports = { getAllProducts, getAllProductsTesting };