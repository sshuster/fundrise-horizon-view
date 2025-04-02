
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { startupData } from '@/services/mockData';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const StartupDashboard = () => {
  const { funding, recentInteractions, monthlyActivities, fundingRounds, upcomingMeetings } = startupData;
  
  // Calculate funding progress percentage
  const fundingProgress = (funding.raised / funding.target) * 100;
  
  // Colors for charts
  const COLORS = ['#0EA5E9', '#FBBF24', '#10B981', '#8B5CF6'];
  
  // Column definitions for interactions table
  const interactionColumns = [
    { headerName: 'Investor', field: 'investor', sortable: true, filter: true },
    { headerName: 'Status', field: 'status', sortable: true, filter: true },
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
    { 
      headerName: 'Amount', 
      field: 'amount', 
      sortable: true, 
      filter: true,
      valueFormatter: (params: any) => params.value ? `$${params.value.toLocaleString()}` : '-' 
    },
  ];
  
  // Column definitions for meetings table
  const meetingColumns = [
    { headerName: 'Investor', field: 'investor', sortable: true, filter: true },
    { headerName: 'Date', field: 'date', sortable: true, filter: true },
    { headerName: 'Time', field: 'time', sortable: true, filter: true },
    { headerName: 'Location', field: 'location', sortable: true, filter: true },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Funding Progress</CardTitle>
            <CardDescription>
              Target: ${funding.target.toLocaleString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={fundingProgress} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${funding.raised.toLocaleString()} raised</span>
                <span>{Math.round(fundingProgress)}%</span>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{funding.investors}</span>
                  <span className="text-xs text-muted-foreground">Investors</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{funding.pitches}</span>
                  <span className="text-xs text-muted-foreground">Pitches</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">{funding.meetings}</span>
                  <span className="text-xs text-muted-foreground">Meetings</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Fundraising Activity</CardTitle>
            <CardDescription>Monthly activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyActivities}
                  margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                >
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pitches" fill="#0EA5E9" name="Pitches" />
                  <Bar dataKey="meetings" fill="#FBBF24" name="Meetings" />
                  <Bar dataKey="investments" fill="#10B981" name="Investments" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Funding by Round</CardTitle>
            <CardDescription>Current allocation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fundingRounds}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {fundingRounds.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Investor Meetings</CardTitle>
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
          <CardTitle>Recent Investor Interactions</CardTitle>
          <CardDescription>Track your fundraising progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] ag-theme-alpine">
            <AgGridReact
              rowData={recentInteractions}
              columnDefs={interactionColumns}
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

export default StartupDashboard;
