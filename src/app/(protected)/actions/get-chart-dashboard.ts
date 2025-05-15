import { PieChart } from "../home/components/pie-chart";


export default async function getChartDashboard() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me/dashboard`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data:PieChart = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch chart data');
        }
    } catch (error) {
        console.error('Error fetching chart data:', error);
    }
    return null;
}