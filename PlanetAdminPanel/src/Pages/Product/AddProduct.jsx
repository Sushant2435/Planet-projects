import { useEffect, useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import {
  GetBrand,
  GetCategoryData,
  GetSubCategory,
  PostProductData,
} from "../../Service/Allapi";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const navigate = useNavigate()

  const [categories, setCategories] = useState([]);
  const [allSubCategories, setAllSubCategories] = useState([]);
  const [filteredSubCategories, setFilteredSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [images, setImages] = useState([]);
  const [pantSize, setPantSize] = useState([]);
  const [footSize, setFootSize] = useState([]);

  const [imagePreviews, setImagePreviews] = useState([]); // New state for image previews

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await GetCategoryData();
        setCategories(
          Array.isArray(result.data.record) ? result.data.record : []
        );
      } catch (error) {
        console.error("Error getting categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const result = await GetSubCategory();
        setAllSubCategories(
          Array.isArray(result.data.record) ? result.data.record : []
        );
        // Automatically filter subcategories if a category is already selected
        if (category) {
          filterSubCategories(category, result.data.record);
        }
      } catch (error) {
        console.error("Error getting subcategories:", error);
      }
    };
    fetchSubCategories();
  }, [category]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const result = await GetBrand();
        setBrands(Array.isArray(result.data.record) ? result.data.record : []);
      } catch (error) {
        console.error("Error getting brands:", error);
      }
    };
    fetchBrands();
  }, []);

  useEffect(() => {
    if (category) {
      // Filter subcategories based on the selected category
      filterSubCategories(category, allSubCategories);
    } else {
      setFilteredSubCategories([]);
      setSubCategory(""); // Clear subcategory selection
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const filterSubCategories = (categoryId, subCategories) => {
    const filtered = subCategories.filter(
      (subCategory) => subCategory.category === categoryId
    );
    setFilteredSubCategories(filtered);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value.split(",")); // Set selected colors
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value.split(",")); // Splitting the comma-separated values into an array
  };

  const handleFootSizeChange = (e) => {
    setFootSize(e.target.value.split(","));
  };

  const handlePantSizeChange = (e) => {
    setPantSize(e.target.value.split(","));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    // Generate image previews
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("category", category);
      productData.append("subCategory", subCategory);
      productData.append("brand", brand);
      color.forEach((clr) => productData.append("color[]", clr));
      size.forEach((sz) => productData.append("size[]", sz));
      footSize.forEach((fsz) => productData.append("footSize[]", fsz));
      pantSize.forEach((nsz) => productData.append("pantSize[]", nsz));
      productData.append("quantity", quantity);
      productData.append("basePrice", basePrice);
      productData.append("finalPrice", finalPrice);
      images.forEach((img) => productData.append("images", img));

      // Call the PostProductData function
      await PostProductData(productData);
      alert("Product added successfully!");

      // Reset form after successful submission
      setName("");
      setDescription("");
      setCategory("");
      setSubCategory("");
      setBrand("");
      setColor([]);
      setSize([]);
      setPantSize([]);
      setFootSize([]);
      setQuantity("");
      setBasePrice("");
      setFinalPrice("");
      setImages([]);
      setImagePreviews([]); // Clear image previews
      navigate('/ProductList');
    } catch (error) {
      alert("Something went Wrong Please try after some time");
    }
  };


  return (
    <div
      style={{
        width: "157%",
        height: "auto",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        color: "black",
        margin: "50px auto 0",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ textAlign: "start", marginBottom: "20px" }}>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ marginBottom: "20px" }}>
              <TextField
                label="Product Name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value.replace(/[0-9]/g, ""))}
                fullWidth
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <TextField
                label="Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                required
                rows={4}
                fullWidth
              />
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <FormControl style={{ flex: 1 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  label="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  fullWidth
                  required
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat._id} value={cat._id}>
                      {cat.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl style={{ flex: 1 }}>
                <InputLabel>SubCategory</InputLabel>
                <Select
                  label="subCategory"
                  name="subCategory"
                  required
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  fullWidth
                  disabled={!category} // Disable if no category is selected
                >
                  {filteredSubCategories.map((sub) => (
                    <MenuItem key={sub._id} value={sub._id}>
                      {sub.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <FormControl style={{ flex: 1 }}>
                <InputLabel>Brand</InputLabel>
                <Select
                  label="brand"
                  name="brand"
                  required
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  fullWidth
                >
                  {brands.map((brand) => (
                    <MenuItem key={brand._id} value={brand._id}>
                      {brand.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Quantity"
                name="quantity"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                fullWidth
                style={{ flex: 1 }}
              />
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <TextField
                label="Base Price"
                name="basePrice"
                value={basePrice}
                onChange={(e) => setBasePrice(e.target.value)}
                type="number"
                required
                fullWidth
                style={{ flex: 1 }}
              />
              <TextField
                label="Final Price"
                name="finalPrice"
                required
                value={finalPrice}
                onChange={(e) => setFinalPrice(e.target.value)}
                type="number"
                fullWidth
                style={{ flex: 1 }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <h4 style={{ marginBottom: "10px" }}>Upload Images</h4>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <div
                  style={{
                    flex: 1,
                    height: "100px",
                    border: "2px dashed #ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ccc",
                    fontSize: "14px",
                    position: "relative",
                  }}
                >
                  <label
                    htmlFor="image-upload"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ccc",
                    }}
                  >
                    Click to upload images
                    <input
                      id="image-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {imagePreviews.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt={`Preview ${index}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                ))}
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <FormControl fullWidth>
                {/* <InputLabel>Color</InputLabel> */}
                <TextField
                  label="color"
                  name="color"
                  required
                  value={color.join(",")}
                  onChange={handleColorChange}
                  fullWidth
                  multiple
                >

                </TextField>
                {" "}
              </FormControl>
              {" "}
            </div>
            {" "}
            <div style={{ marginBottom: "20px" }}>
              {" "}
              <TextField
                label="Size"
                name="size"
                value={size.join(",")}
                onChange={handleSizeChange}
                fullWidth
              />
              {" "}
            </div>
            {" "}

            <div style={{ marginBottom: "20px" }}>
              {" "}
              <TextField
                label="Pant Size"
                name="pantSize"
                value={pantSize.join(",")}
                onChange={handlePantSizeChange}
                fullWidth
              />
              {" "}
            </div>
            {" "}

            {category === "66d6d867c89d651f4b78df5b" && (
              <div style={{ marginBottom: "20px" }}>
                {" "}
                <TextField
                  label="Foot Size"
                  name="footSize"
                  value={footSize.join(",")}
                  onChange={handleFootSizeChange}
                  fullWidth
                />{" "}
              </div>
            )}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          {" "}
          <Button type="submit" variant="contained" color="primary">
            Add Product {" "}
          </Button>
          {" "}
        </div>
        {" "}
      </form>
      {" "}
    </div>
  );
};
