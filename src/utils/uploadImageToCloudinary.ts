import { toast } from "react-toastify";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const uploadImageToCloudinary = async (file: any) => {
  if (!file) {
    toast.error("File not found.");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", `mobassher_portfolio`);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/dt4e8kgtl/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  // console.log(res);

  const data = await res.json();
  // console.log(data);
  if (!data) {
    toast.error("Failed to upload image");
  }
  return data?.secure_url;
};
