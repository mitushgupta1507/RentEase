function ImageUploader() {
  return (
    <div className="border-2 border-dashed rounded-3xl p-10 text-center bg-white">

      <h2 className="text-xl font-semibold">
        Upload Images
      </h2>

      <input
        type="file"
        className="mt-6"
      />

    </div>
  );
}

export default ImageUploader;