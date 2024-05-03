/**
 * Dashboard component where show chart, card. It will be show default when login super admin and when click left sidebar logo image
 */

import ChartDashboard from "./Chart/ChartDashboard"; // Importing ChartDashboard component for displaying dashboard charts
import ChartOne from "./Chart/ChartOne"; // Importing ChartOne component for displaying specific chart
import dashboard from"/dashboard.png"; // Importing dashboard inventory image

// DashboardInventory component definition
const DashboardInventory = () => {
    // JSX return representing the dashboard inventory page
    return (
        <div>
            {/* Header with welcome message and image */}
            <div className="flex items-center flex-col gap-5 justify-center mb-4">
                <img className="w-[100px] rounded-full" src={dashboard} alt="" />
                <h1 className="text-lime-500">Welcome to Organic Food</h1>
            </div>
            {/* Displaying main dashboard chart */}
            <ChartDashboard />
            {/* Displaying specific chart */}
            <ChartOne />
        </div>
    );
};

// Exporting the DashboardInventory component as the default export
export default DashboardInventory;