
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { investorData } from '@/services/mockData';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Define types for the data structure
type PortfolioCompany = typeof investorData.portfolioCompanies[0];
type UpcomingMeeting = typeof investorData.upcomingMeetings[0];

const InvestorDashboard = () => {
  const { portfolio, dealFlow, sectorAllocation, portfolioCompanies, monthlyDealFlow, upcomingMeetings } = investorData;
  
  // Colors for charts
  const COLORS = ['#0EA5E9', '#FBBF24', '#10B981', '#8B5CF6', '#EC4899'];
  
  // Column definitions for portfolio table - with proper typing
  const portfolioColumns: ColDef<PortfolioCompany>[] = [
    { headerName: 'Company', field: 'company', sortable: true, filter: true },
    { headerName: 'Sector', field: 'sector', sortable: true, filter: true },
    { 
      headerName: 'Invested', 
      field: 'invested', 
      sortable: true, 
      filter: true,
      valueFormatter: (params) => `$${params.value.toLocaleString()}` 
    },
    { 
      headerName: 'Current Value', 
      field: 'currentValue', 
      sortable: true, 
      filter: true,
      valueFormatter: (params) => `$${params.value.toLocaleString()}` 
    },
    { 
      headerName: 'Multiple', 
      field: 'multiple', 
      sortable: true, 
      filter: true,
      valueFormatter: (params) => `${params.value}x` 
    },
    { headerName: 'Stage', field: 'stage', sortable: true, filter: true },
  ];
  
  // Column definitions for meetings table - with proper typing
  const meetingColumns: ColDef<UpcomingMeeting>[] = [
    { headerName: 'Startup', field: 'startup', sortable: true, filter: true },
    { headerName: 'Sector', field: 'sector', sortable: true, filter: true },
    { headerName: 'Stage', field: 'stage', sortable: true, filter: true },
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
    { headerName: 'Time', field: 'time', sortable: true, filter: true },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Overview</CardTitle>
            <CardDescription>
              ${portfolio.totalInvested.toLocaleString()} total invested
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{portfolio.companies}</span>
                  <span className="text-xs text-muted-foreground">Companies</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{portfolio.averageReturn}x</span>
                  <span className="text-xs text-muted-foreground">Avg. Return</span>
                </div>
                <div className="flex flex-col col-span-2 pt-2">
                  <span className="text-sm font-medium">Top Performer</span>
                  <span className="text-lg">{portfolio.topPerformer} ({portfolio.topPerformerReturn}x)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Deal Flow</CardTitle>
            <CardDescription>Current pipeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{dealFlow.totalDeals}</span>
                  <span className="text-xs text-muted-foreground">Total Deals</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{dealFlow.reviewed}</span>
                  <span className="text-xs text-muted-foreground">Reviewed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{dealFlow.meetings}</span>
                  <span className="text-xs text-muted-foreground">Meetings</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{dealFlow.dueDiligence}</span>
                  <span className="text-xs text-muted-foreground">Due Diligence</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{dealFlow.invested}</span>
                  <span className="text-xs text-muted-foreground">Invested</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sector Allocation</CardTitle>
            <CardDescription>Investment by sector</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sectorAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name }) => name}
                  >
                    {sectorAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Deal Flow</CardTitle>
          <CardDescription>Pipeline activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyDealFlow}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
              >
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="received" fill="#0EA5E9" name="Received" />
                <Bar dataKey="reviewed" fill="#FBBF24" name="Reviewed" />
                <Bar dataKey="meetings" fill="#10B981" name="Meetings" />
                <Bar dataKey="investments" fill="#8B5CF6" name="Investments" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Startup Meetings</CardTitle>
            <CardDescription>Next scheduled meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] ag-theme-alpine">
              <AgGridReact
                rowData={upcomingMeetings}
                columnDefs={meetingColumns}
                defaultColDef={{
                  flex: 1,
                  minWidth: 100,
                  resizable: true,
                }}
                domLayout="autoHeight"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Portfolio Companies</CardTitle>
          <CardDescription>Current investments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] ag-theme-alpine">
            <AgGridReact
              rowData={portfolioCompanies}
              columnDefs={portfolioColumns}
              defaultColDef={{
                flex: 1,
                minWidth: 100,
                resizable: true,
              }}
              domLayout="autoHeight"
              pagination={true}
              paginationPageSize={5}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestorDashboard;
