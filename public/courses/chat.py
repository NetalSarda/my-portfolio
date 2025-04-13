import os

def rename_files_in_folder(folder_path):
    try:
        for filename in os.listdir(folder_path):
            print(f"Renaming file: {filename}")
            # Replace spaces with underscores in the filename
            new_filename = filename.replace(" ", "_")
            old_file_path = os.path.join(folder_path, filename)
            new_file_path = os.path.join(folder_path, new_filename)
            os.rename(old_file_path, new_file_path)
        print("Files renamed successfully!")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    folder_path = input("Enter the folder path: ").strip()
    if os.path.isdir(folder_path):
        rename_files_in_folder(folder_path)
    else:
        print("Invalid folder path.")