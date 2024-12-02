import { UploadDropzone } from "@/utils/uploadthing";
import { useAuth } from "@clerk/nextjs";
import { Pencil, Plus, Watch } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function CreateCourseForm({ setCurrentCourse }) {
  const { isLoaded, userId } = useAuth();
  if (!isLoaded || !userId) {
    return null;
  }
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  console.log(imageUrl);

  const isPublished = watch("isPublished");
  async function onSubmit(data) {
    const baseUrl = "http://localhost:3000";
    setLoading(true);
    data.userId = userId;
    data.imageUrl = imageUrl;
    console.log(data);
    try {
      const response = await fetch(`${baseUrl}/api/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        setLoading(false);
        reset();
        setImageUrl("");
        toast.success("Course Created");
        const courseData = await response.json();
        setCurrentCourse(courseData);
        console.log(courseData);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8  ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Title */}
          <div className="sm:col-span-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
            >
              PDF Title
            </label>
            <div className="mt-2">
              <input
                {...register("title", { required: true })}
                type="text"
                name="title"
                id="title"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                placeholder="Type the Course title"
              />
              {errors.title && (
                <span className="text-sm text-red-600 ">
                  pdf title is required
                </span>
              )}
            </div>
          </div>

         
          
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
        >
          <Plus className="w-5 h-5 mr-2" />
          <span>Save PDF</span>
        </button>
      </form>
    </div>
  );
}
