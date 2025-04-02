
# FundRise Horizon Backend

This is the Flask backend for the FundRise Horizon application. It provides API endpoints for startups, investors, and fundraising campaigns.

## Setup Instructions

1. Create a virtual environment:
   ```
   python -m venv venv
   ```

2. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS/Linux: `source venv/bin/activate`

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the application:
   ```
   python app.py
   ```

The server will start at http://localhost:5000

## API Endpoints

### Startups
- GET /api/startups - Get all startups
- GET /api/startups/{id} - Get a specific startup
- POST /api/startups - Create a new startup

### Investors
- GET /api/investors - Get all investors
- GET /api/investors/{id} - Get a specific investor
- POST /api/investors - Create a new investor

### Fundraising
- GET /api/fundraising - Get all fundraising campaigns
- GET /api/fundraising/{id} - Get a specific fundraising campaign
- POST /api/fundraising - Create a new fundraising campaign
- PUT /api/fundraising/{id} - Update a fundraising campaign

## Frontend Integration

To connect your React frontend to this backend:

1. Make sure CORS is properly configured in app.py
2. Use fetch or axios to make requests to the API endpoints
3. Update your frontend API service to point to http://localhost:5000/api/...
