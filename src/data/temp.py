import json

# Open and load the JSON file
with open('Certification.json', 'r') as file:
    data = json.load(file)

# Process each entry in the JSON
for entry in data:
    if 'name' in entry and 'pdf' in entry:
        # Replace spaces with underscores in the name
        modified_name = entry['name'].replace(' ', '_')
        # Update the pdf field with the new path
        entry['pdf'] = f"/courses/{modified_name}.pdf"

# Save the updated JSON back to the file
with open('Certification.json', 'w') as file:
    json.dump(data, file, indent=4)

print("Certifications.json has been updated.")