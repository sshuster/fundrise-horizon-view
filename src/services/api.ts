
/**
 * API service for communicating with the Flask backend
 */

const API_URL = 'http://localhost:5000/api';

export interface Startup {
  id?: number;
  name: string;
  description?: string;
  industry?: string;
  founding_date?: string;
  website?: string;
}

export interface Investor {
  id?: number;
  name: string;
  firm_name?: string;
  investment_focus?: string;
  website?: string;
  email?: string;
}

export interface Fundraising {
  id?: number;
  startup_id: number;
  target_amount: number;
  raised_amount?: number;
  start_date?: string;
  end_date?: string;
  status?: string;
}

// Startup API calls
export const getStartups = async (): Promise<Startup[]> => {
  const response = await fetch(`${API_URL}/startups`);
  if (!response.ok) {
    throw new Error('Failed to fetch startups');
  }
  return response.json();
};

export const getStartup = async (id: number): Promise<Startup> => {
  const response = await fetch(`${API_URL}/startups/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch startup');
  }
  return response.json();
};

export const createStartup = async (startup: Startup): Promise<{ id: number; message: string }> => {
  const response = await fetch(`${API_URL}/startups`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(startup),
  });
  if (!response.ok) {
    throw new Error('Failed to create startup');
  }
  return response.json();
};

// Investor API calls
export const getInvestors = async (): Promise<Investor[]> => {
  const response = await fetch(`${API_URL}/investors`);
  if (!response.ok) {
    throw new Error('Failed to fetch investors');
  }
  return response.json();
};

export const getInvestor = async (id: number): Promise<Investor> => {
  const response = await fetch(`${API_URL}/investors/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch investor');
  }
  return response.json();
};

export const createInvestor = async (investor: Investor): Promise<{ id: number; message: string }> => {
  const response = await fetch(`${API_URL}/investors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(investor),
  });
  if (!response.ok) {
    throw new Error('Failed to create investor');
  }
  return response.json();
};

// Fundraising API calls
export const getFundraisings = async (): Promise<Fundraising[]> => {
  const response = await fetch(`${API_URL}/fundraising`);
  if (!response.ok) {
    throw new Error('Failed to fetch fundraising campaigns');
  }
  return response.json();
};

export const getFundraising = async (id: number): Promise<Fundraising> => {
  const response = await fetch(`${API_URL}/fundraising/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch fundraising campaign');
  }
  return response.json();
};

export const createFundraising = async (fundraising: Fundraising): Promise<{ id: number; message: string }> => {
  const response = await fetch(`${API_URL}/fundraising`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fundraising),
  });
  if (!response.ok) {
    throw new Error('Failed to create fundraising campaign');
  }
  return response.json();
};

export const updateFundraising = async (id: number, fundraising: Partial<Fundraising>): Promise<{ message: string }> => {
  const response = await fetch(`${API_URL}/fundraising/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fundraising),
  });
  if (!response.ok) {
    throw new Error('Failed to update fundraising campaign');
  }
  return response.json();
};
