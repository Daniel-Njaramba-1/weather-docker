# Use an official Python runtime as the base image
FROM python:3.10-alpine

# Set the working directory inside the container
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache gcc libc-dev musl-dev

# Copy requirements.txt into the container
COPY requirements.txt /app/

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . /app

# Expose the port Flask runs on
EXPOSE 5000

# Set the environment variable to specify the Flask app
ENV FLASK_APP=weatherapp.py

# Run the Flask app
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
