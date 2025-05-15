import React, { useState, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { categories } from "../assets/Data";
import { useDropzone } from "react-dropzone";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Schema for form validation
const productSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  des: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description must be less than 1000 characters"),
  category: z.string().min(1, "Category is required"),
  images: z
    .array(z.instanceof(File))
    .min(1, "At least one image is required")
    .max(5, "Maximum 5 images allowed"),
});

const ImageModal = ({ src, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-3xl p-4">
        <button
          onClick={onClose}
          className="absolute p-1 text-black bg-white rounded-full top-2 right-2 hover:bg-gray-100"
          aria-label="Close image preview"
        >
          ✕
        </button>
        <img
          src={src}
          alt="Full preview"
          className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

const ProductForm = ({ onSubmit, isLoading = false }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      des: "",
      category: "",
      images: [],
    },
  });

  const [modalImage, setModalImage] = useState(null);
  const images = watch("images");

  // Handle form submission
  const submitHandler = useCallback(
    (data) => {
      try {
        if (typeof onSubmit !== "function") {
          throw new Error("onSubmit handler is not available");
        }

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.des);
        formData.append("category", data.category);

        data.images.forEach((file) => {
          formData.append("images", file);
        });

        onSubmit(formData);
      } catch (error) {
        console.error("Form submission error:", error);
      }
    },
    [onSubmit]
  );

  // Remove selected image
  const removeImage = useCallback(
    (index) => {
      const updatedImages = [...images];
      updatedImages.splice(index, 1);
      setValue("images", updatedImages, { shouldValidate: true });
    },
    [images, setValue]
  );

  // Drag-and-drop file handling
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length) {
        const newImages = [...images, ...acceptedFiles].slice(0, 5);
        setValue("images", newImages, { shouldValidate: true });
      }
    },
    [images, setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    },
    maxFiles: 5,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="max-w-2xl p-6 mx-auto space-y-6 bg-white shadow-lg rounded-xl"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Add New Product</h2>

      {/* Product Title */}
      <div className="space-y-2">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Product Title*
        </label>
        <Input
          id="title"
          {...register("title")}
          placeholder="Enter product title"
          disabled={isLoading}
          aria-invalid={errors.title ? "true" : "false"}
        />
        {errors.title && (
          <p className="text-sm text-red-500" role="alert">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Product Description */}
      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description*
        </label>
        <Textarea
          id="description"
          {...register("des")}
          rows={5}
          placeholder="Enter product description (minimum 10 characters)"
          disabled={isLoading}
          aria-invalid={errors.des ? "true" : "false"}
        />
        {errors.des && (
          <p className="text-sm text-red-500" role="alert">
            {errors.des.message}
          </p>
        )}
      </div>

      {/* Product Category */}
      <div className="space-y-2">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category*
        </label>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              onValueChange={field.onChange}
              disabled={isLoading}
            >
              <SelectTrigger
                className="w-full"
                id="category"
                aria-invalid={errors.category ? "true" : "false"}
              >
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {categories.map((cat) => (
                    <SelectItem key={cat.title} value={cat.title}>
                      {cat.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.category && (
          <p className="text-sm text-red-500" role="alert">
            {errors.category.message}
          </p>
        )}
      </div>

      {/* Image Upload */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Product Images*
        </label>
        <div
          {...getRootProps()}
          className={`p-6 border-2 border-dashed rounded-md cursor-pointer ${
            isDragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:bg-gray-50"
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-center text-gray-500">
            {isDragActive
              ? "Drop the images here"
              : "Drag & drop images here, or click to select (max 5 images)"}
          </p>
          <p className="mt-1 text-xs text-center text-gray-400">
            Supported formats: JPEG, JPG, PNG, WEBP (max 5MB each)
          </p>
        </div>
        {errors.images && (
          <p className="text-sm text-red-500" role="alert">
            {errors.images.message}
          </p>
        )}
      </div>

      {/* Image Preview Section */}
      {images.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            {images.length} image{images.length !== 1 ? "s" : ""} selected
          </p>
          <div className="flex flex-wrap gap-4">
            {images.map((file, index) => (
              <div
                key={index}
                className="relative w-24 h-24 overflow-hidden border rounded-md group"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index}`}
                  className="object-cover w-full h-full cursor-pointer"
                  onClick={() => setModalImage(URL.createObjectURL(file))}
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(index);
                  }}
                  className="absolute top-0 right-0 p-1 text-xs text-white transition-opacity bg-red-600 rounded-bl opacity-0 group-hover:opacity-100"
                  disabled={isLoading}
                  aria-label={`Remove image ${index + 1}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for Image Preview */}
      {modalImage && (
        <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-[#003366] text-white hover:bg-[#002244]"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Submitting...
          </span>
        ) : (
          "Submit Product"
        )}
      </Button>
    </form>
  );
};

export default ProductForm;
