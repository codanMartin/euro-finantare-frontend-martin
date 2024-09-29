// components/forms/file-input.js
"use client";

import { useDropzone } from "react-dropzone";
import { forwardRef } from "react";

const FileInput = forwardRef(({ className, name, onChange, value, ...props }, ref) => {
    const onDrop = (acceptedFiles) => {
        // Call the onChange handler from react-hook-form to update the form state
        console.log(acceptedFiles);
        onChange(acceptedFiles);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "application/pdf": [".pdf"],
        },
        multiple: true,
    });

    return (
        <div
            {...getRootProps()}
            className={`border-2 border-dashed p-4 ${isDragActive ? "border-blue-500" : "border-gray-300"} ${className}`}>
            <input {...getInputProps()} ref={ref} {...props} />
            <p className="text-gray-500">
                {isDragActive
                    ? "Drop the files here..."
                    : "Drag & drop some PDF files here, or click to select files"}
            </p>
            {value && value.length > 0 && (
                <div className="mt-2">
                    <ul>
                        {value.map((file, index) => (
                            <li key={index} className="text-sm text-gray-700">
                                {file.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});

export default FileInput;
