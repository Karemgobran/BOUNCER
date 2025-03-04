import React from "react";
import axios from "axios";

async function AddToCard(id) {
  try {
    const res = await axios.post(`url/${id}`);
    if (res.status == 200) return res;
  } catch (err) {
    console.error(err);
  }
}

export default AddToCard;
