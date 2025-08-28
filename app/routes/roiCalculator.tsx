import React, { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';

const Chart = lazy(() => import('react-apexcharts'));

interface MonthData {
    month: string;
    numberOfLeads: number;
    closedWonDeals: number;
    closedWonRevenue: number;
}

const RoiCalculator: React.FC = () => {
    // State for all input fields
    const [inputs, setInputs] = useState({
        startingDate: new Date().toISOString().split('T')[0],
        endingDate: new Date(new Date().setMonth(new Date().getMonth() + 11)).toISOString().split('T')[0],
        numberOfLeads: 300,
        avgDealSize: 50000,
        mqlToReEngagements: 10,
        reEngagementsToApptSets: 20,
        meetingShowRate: 50,
        closedWon: 20,
    });

    // State for calculated results
    const [results, setResults] = useState({
        totalReEngagements: 0,
        totalMeetingsRan: 0,
        newClosedWonDeals: 0,
        monthlyData: [] as MonthData[],
    });

    // State for chart data
    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'Lead per Month',
                type: 'column',
                data: [] as number[],
                color: function ({ value, seriesIndex, dataPointIndex, w }: any) {
                    const totalPoints = w.globals.series[seriesIndex].length;
                    if (dataPointIndex === totalPoints - 1) return '#00ffff';
                    return dataPointIndex % 2 === 0 ? '#7852A9' : '#2F3D86';
                }
            },
            {
                name: 'Revenue',
                type: 'line',
                data: [] as number[],
                color: '#7852A9'
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                toolbar: { show: false },
                zoom: { enabled: false }
            },
            stroke: {
                width: [0, 4],
                colors: ['#7852A9']
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1],
                formatter: function (val: number, opts: any) {
                    return opts.seriesIndex === 1 ? `$${val.toLocaleString()}` : val.toString();
                },
                style: {
                    colors: ['black']
                }
            },
            labels: [] as string[],
            xaxis: {
                type: 'category',
                labels: {
                    style: {
                        colors: 'black'
                    }
                }
            },
            yaxis: [
                {
                    labels: {
                        formatter: (val: number) => Math.round(val).toString(),
                        style: {
                            colors: 'black'
                        }
                    }
                },
                {
                    opposite: true,
                    title: {
                        text: 'Revenue',
                        style: {
                            color: 'black'
                        }
                    },
                    labels: {
                        formatter: (val: number) => `$${val.toLocaleString()}`,
                        style: {
                            colors: 'black'
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    distributed: false,
                    columnWidth: '80%',
                }
            },
            legend: {
                labels: {
                    colors: 'black'
                }
            }
        },
    });

    const calculateMonthDifference = (startDate: Date, endDate: Date): number => {
        return (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [id]: id.includes('Date') ? value : Number(value),
        }));
    };

    const calculateResults = () => {
        const {
            startingDate,
            endingDate,
            numberOfLeads,
            avgDealSize,
            mqlToReEngagements,
            reEngagementsToApptSets,
            meetingShowRate,
            closedWon,
        } = inputs;

        const mqlValue = mqlToReEngagements / 100;
        const reEngagementsValue = reEngagementsToApptSets / 100;
        const meetingShowRateValue = meetingShowRate / 100;
        const closedWonValue = closedWon / 100;

        const startDate = new Date(startingDate);
        const endDate = new Date(endingDate);
        const monthDifference = calculateMonthDifference(startDate, endDate);

        const monthRange: string[] = [];
        const monthRangeLong: string[] = [];
        const monthlyData: MonthData[] = [];
        const leadPerMonth: number[] = [];
        const revenuePerMonth: number[] = [];

        for (let i = 0; i <= monthDifference; i++) {
            const date = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
            const month = date.toLocaleString('default', { month: 'short' });
            const monthLong = date.toLocaleString('default', { month: 'long' });

            monthRange.push(month);
            monthRangeLong.push(monthLong);

            const currentLeads = numberOfLeads * (i + 1);
            const currentClosedWonDeals = (numberOfLeads * mqlValue * reEngagementsValue * meetingShowRateValue * closedWonValue) * (i + 1);
            const currentRevenue = (numberOfLeads * mqlValue * reEngagementsValue * meetingShowRateValue * avgDealSize) * (i + 1) * closedWonValue;

            monthlyData.push({
                month: monthLong,
                numberOfLeads: currentLeads,
                closedWonDeals: currentClosedWonDeals,
                closedWonRevenue: currentRevenue,
            });

            leadPerMonth.push(currentLeads);
            revenuePerMonth.push(currentRevenue);
        }

        const totalReEngagements = numberOfLeads * mqlValue;
        const totalMeetingsRan = numberOfLeads * mqlValue * reEngagementsValue * meetingShowRateValue;
        const newClosedWonDeals = numberOfLeads * mqlValue * reEngagementsValue * meetingShowRateValue * closedWonValue;

        setResults({
            totalReEngagements,
            totalMeetingsRan,
            newClosedWonDeals: Math.ceil(newClosedWonDeals),
            monthlyData,
        });

        setChartData(prev => ({
            ...prev,
            series: [
                { ...prev.series[0], data: leadPerMonth },
                { ...prev.series[1], data: revenuePerMonth },
            ],
            options: {
                ...prev.options,
                labels: monthRange,
            },
        }));
    };

    useEffect(() => {
        calculateResults();
    }, [inputs]);

    return (
        <>
        <Navbar/>
            <section
                className='p-4 md:p-12'
                style={{
                    backgroundImage: "url('/backgrounds/GALAXY 3.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <section className='p-4 md:p-6 mx-0 md:mx-6' style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}>
                    {/* Header Section */}
                    <div className="w-full max-w-full md:max-w-[75%] mx-auto flex flex-col items-center justify-center my-4 md:my-6">
                        <h1 className="text-center text-3xl md:text-5xl mt-2 font-bold text-[#7852A9]">
                            TOXPAND
                        </h1>
                        <h1 className="text-center text-3xl md:text-5xl mt-2 text-white">
                            ROI CALCULATOR
                        </h1>
                        <div className='mt-3 px-4 text-center'>
                            <p className="text-xl md:text-3xl mt-4 md:mt-6 text-white">
                                <b>SEE WHAT SMARTER DEMAND CAN DELIVER</b>
                            </p>
                            <p className="text-sm md:text-base mt-2 text-white">
                                Curious what your pipeline could look like with AI-qualified leads, real-time signals, and full-funnel engagement?
                            </p>
                            <p className="text-sm md:text-base mt-2 text-white">
                                Use our ROI calculator to project the revenue impact of ToXPAND's demand engine.
                            </p>
                            <p className="text-xl md:text-3xl mt-4 md:mt-6 text-white">
                                <b>NO GUESSWORK. <span className='text-[#00ffff]'>JUST CLARITY.</span></b>
                            </p>
                        </div>
                    </div>

                    {/* Calculator Form */}
                    <div className="w-full max-w-full md:max-w-[75%] mx-auto border p-2 md:p-3 border-[#00ffff]">
                        <div className="bg-white p-4 md:p-12">
                            {/* Input Grid - Stack on mobile, 2 columns on desktop */}
                            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
                                {/* Input Group 1 */}
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                    <label className="w-full md:w-48 text-sm font-medium text-gray-700">First Day for Leads</label>
                                    <input
                                        type="date"
                                        className="text-black w-full rounded-md border-gray-300 shadow-sm focus:border-[#7852A9] focus:ring-[#7852A9] p-2 border"
                                        id="startingDate"
                                        value={inputs.startingDate}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {/* Input Group 2 */}
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                    <label className="w-full md:w-48 text-sm font-medium text-gray-700">Last Day for Revenue</label>
                                    <input
                                        type="date"
                                        className="w-full text-black rounded-md border-gray-300 shadow-sm focus:border-[#7852A9] focus:ring-[#7852A9] p-2 border"
                                        id="endingDate"
                                        value={inputs.endingDate}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {/* Input Group 3 */}
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                    <label className="w-full  md:w-48 text-sm font-medium text-gray-700">Number of Leads</label>
                                    <input
                                        type="number"
                                        className="w-full text-black rounded-md border-gray-300 shadow-sm focus:border-[#7852A9] focus:ring-[#7852A9] p-2 border"
                                        id="numberOfLeads"
                                        placeholder="300"
                                        value={inputs.numberOfLeads}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {/* Input Group 4 */}
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                    <label className="w-full md:w-48 text-sm font-medium text-gray-700">Avg. Deal Size</label>
                                    <div className="relative w-full rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">$</span>
                                        </div>
                                        <input
                                            type="number"
                                            className="block text-black w-full pl-7 pr-12 rounded-md border-gray-300 focus:border-[#7852A9] focus:ring-[#7852A9] p-2 border"
                                            id="avgDealSize"
                                            placeholder="50000"
                                            value={inputs.avgDealSize}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                {/* Input Group 5 */}
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                    <label className="w-full md:w-48 text-sm font-medium text-gray-700">MQL to Re-Engagements</label>
                                    <div className="relative w-full rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            className="block text-black w-full pr-12 rounded-md border-gray-300 focus:border-[#7852A9] focus:ring-[#7852A9] p-2 border"
                                            id="mqlToReEngagements"
                                            placeholder="10"
                                            min="0"
                                            max="100"
                                            value={inputs.mqlToReEngagements}
                                            onChange={handleInputChange}
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Input Group 6 */}
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                    <label className="w-full md:w-48 text-sm font-medium text-gray-700">Re-Engagements to Appt</label>
                                    <div className="relative w-full rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            className="block text-black w-full pr-12 rounded-md border-gray-300 focus:border-[#7852A9] focus:ring-[#7852A9] p-2 border"
                                            id="reEngagementsToApptSets"
                                            placeholder="20"
                                            min="0"
                                            max="100"
                                            value={inputs.reEngagementsToApptSets}
                                            onChange={handleInputChange}
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Input Group 7 */}
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                    <label className="w-full md:w-48 text-sm font-medium text-gray-700">Meeting Show Rate</label>
                                    <div className="relative w-full rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            className="block text-black w-full pr-12 rounded-md border-gray-300 focus:border-[#7852A9] focus:ring-[#7852A9] p-2 border"
                                            id="meetingShowRate"
                                            placeholder="50"
                                            min="0"
                                            max="100"
                                            value={inputs.meetingShowRate}
                                            onChange={handleInputChange}
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Input Group 8 */}
                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                    <label className="w-full md:w-48 text-sm font-medium text-gray-700">Closed Won</label>
                                    <div className="relative w-full rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            className="block text-black w-full pr-12 rounded-md border-gray-300 focus:border-[#7852A9] focus:ring-[#7852A9] p-2 border"
                                            id="closedWon"
                                            placeholder="20"
                                            min="0"
                                            max="100"
                                            value={inputs.closedWon}
                                            onChange={handleInputChange}
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className='bg-white p-4 md:p-12 mt-4 md:mt-6 md:flex md:flex-row'>
                        {/* Results Cards - Stack on mobile, row on desktop */}
                        

                        {/* Chart */}
                        <div className="mt-8 md:w-2/3 md:mt-12">
                            {typeof window !== 'undefined' && (
                                <Suspense fallback={<div className="h-[250px] md:h-[350px] flex items-center justify-center">Loading chart...</div>}>
                                    <Chart
                                        options={chartData.options}
                                        series={chartData.series}
                                        type="line"
                                        height={window.innerWidth < 768 ? 250 : 350}
                                    />
                                </Suspense>
                            )}
                        </div>
                        <div className="grid md:w-1/3 grid-cols-1  gap-4 md:gap-6 mb-6 md:mb-8">
                            {/* Card 1 */}
                            <div className="bg-[#00ffff] p-4 md:p-6 rounded-lg border border-gray-200 text-center">
                                <h6 className="text-sm font-medium text-black mb-2">Total Expected Re-Engagements</h6>
                                <h1 className="text-2xl md:text-3xl font-bold text-black">
                                    {results.totalReEngagements.toFixed(2)}
                                </h1>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#00ffff] p-4 md:p-6 rounded-lg border border-gray-200 text-center">
                                <h6 className="text-sm font-medium text-black mb-2">Total Expected Meetings Ran</h6>
                                <h1 className="text-2xl md:text-3xl font-bold text-black">
                                    {results.totalMeetingsRan.toFixed(2)}
                                </h1>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#00ffff] p-4 md:p-6 rounded-lg border border-gray-200 text-center">
                                <h6 className="text-sm font-medium text-black mb-2">New Closed Won Deals</h6>
                                <h1 className="text-2xl md:text-3xl font-bold text-black">
                                    {results.newClosedWonDeals}
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer/>
        </>
    );
};

export default RoiCalculator;