from datasets import load_dataset
import json

# Load the dataset
dataset = load_dataset("Kaludi/Customer-Support-Responses")

# Convert the dataset to a list of dictionaries
data = [dict(item) for item in dataset['train']]

# Save the dataset to a JSON file
with open('customer_responses.json', 'w') as f:
  json.dump(data, f)

print("Dataset exported to customer_responses.json")