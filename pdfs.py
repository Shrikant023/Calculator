import os
from PyPDF2 import PdfMerger


def merge_pdfs_from_folder(folder_path, output_file):
    merger = PdfMerger()

    # Get all PDF files from the folder
    for filename in sorted(os.listdir(folder_path)):
        if filename.endswith('.pdf'):
            file_path = os.path.join(folder_path, filename)
            merger.append(file_path)

    # Write the merged output to the output_file
    merger.write(output_file)
    merger.close()


# Usage example
# Your folder path
folder_path = r'C:\Users\ramay\OneDrive - CBIC\2 Export Regulations\pdfs'
output_file = 'merged_output.pdf'    # This will be your merged PDF file
merge_pdfs_from_folder(folder_path, output_file)
