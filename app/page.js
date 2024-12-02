"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadDropzone } from "@/libs/uploadthing";
import { FileText, Pencil, Plus } from "lucide-react";
import MyPdfViewer from "@/components/PdfViewer";

export default function Home() {
  const [pdfUrl, setPdfUrl] = useState("");
  const { handleSubmit, register } = useForm();

  async function onSubmit(data) {
    data.pdfUrl = pdfUrl;
    console.log(data);
  }

  return (
    <div className="w-full max-w-3xl p-8 my-16 bg-white border border-gray-200 rounded-lg shadow mx-auto">
      <h2 className="text-4xl text-center font-semibold py-8">
        Upload and View PDF
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              PDF Title
            </label>
            <input
              {...register("title")}
              type="text"
              name="title"
              id="title"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
              placeholder="Type the PDF title"
            />
          </div>

          <div className="col-span-full">
            <div className="flex justify-between items-center mb-4">
              <label
                htmlFor="course-pdf"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Upload PDF
              </label>
              {pdfUrl && (
                <button
                  onClick={() => setPdfUrl("")}
                  type="button"
                  className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-50 py-2 px-4"
                >
                  <Pencil className="w-5 h-5" />
                  <span>Change PDF</span>
                </button>
              )}
            </div>

            {pdfUrl ? (
              <a
                className="flex space-x-3 items-center text-purple-600"
                target="_blank"
                href={pdfUrl}
              >
                <FileText />
                <span>View PDF</span>
              </a>
            ) : (
              <UploadDropzone
                endpoint="pdfUploader"
                onClientUploadComplete={(res) => {
                  setPdfUrl(res[0].fileUrl); // Set the uploaded file URL
                  console.log("Files: ", res);
                  alert("Upload Completed");
                }}
                onUploadError={(error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800"
        >
          <Plus className="w-5 h-5 mr-2" />
          <span>Save Product</span>
        </button>
      </form>

      {/* PDF Viewer Section */}
      {pdfUrl && (
        <div className="mt-12">
          <MyPdfViewer myFile={pdfUrl} />
        </div>
      )}
    </div>
  );
}
