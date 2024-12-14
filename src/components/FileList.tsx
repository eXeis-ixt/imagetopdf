interface FileListProps {
  files: File[];
}

export function FileList({ files }: FileListProps) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2 text-white">Selected Files:</h3>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <li key={index} className="text-gray-300">
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}