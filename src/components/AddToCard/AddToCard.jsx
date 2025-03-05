import axios from "axios";

async function AddToCard(id) {
  try {
    const userId = localStorage.getItem("userId");

    if (!userId || !id) {
      throw new Error("Invalid user ID or product ID");
    }

    // جلب السلة الحالية للمستخدم
    const res = await axios.get(`https://fakestoreapi.com/carts/${userId}`);
    let updatedProducts = res.data.products || [];

    // التحقق إذا كان المنتج موجود بالفعل في السلة
    const productExists = updatedProducts.find(
      (product) => product.productId === id
    );

    if (productExists) {
      // إذا كان المنتج موجودًا بالفعل، نقوم بزيادة الكمية
      productExists.quantity += 1;
    } else {
      // إذا لم يكن المنتج موجودًا، نضيفه إلى السلة
      updatedProducts.push({
        productId: id,
        quantity: 1,
      });
    }

    // إرسال السلة المُحدثة إلى fakestoreapi
    const updatedCart = {
      userId: userId,
      products: updatedProducts,
    };

    const updateRes = await axios.put(
      `https://fakestoreapi.com/carts/${userId}`,
      updatedCart
    );

    if (updateRes.status === 200) {
      console.log("Product added successfully");
      return updateRes;
    }
  } catch (err) {
    console.error(err);
    throw new Error("Error adding product to cart");
  }
}

export default AddToCard;
