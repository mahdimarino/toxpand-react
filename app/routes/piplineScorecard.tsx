import React, { useState } from 'react';
import { Navbar } from '~/header/navbar';
import { Footer } from '~/footer/footer';



export default function ScoreCard() {
    const [scores, setScores] = useState<Record<number, Record<number, number>>>({});
    const [totalScore, setTotalScore] = useState(0);

    const sections = [
        {
            sectionNumber: 'SECTION 1:',
            title: " PIPELINE HEALTH",
            questions: [
                "Do you have clear definitions and alignment between MQL, SQL, and SAL?",
                "What % of leads convert to a first meeting or call within 5 days?",
                "Is your team spending time chasing non-sales-ready leads?",
                "How confident are you in your lead source attribution today?",
                "Are you actively nurturing cold prospects with timely, relevant content?"
            ]
        },
        {
            sectionNumber: 'SECTION 2:',
            title: " TECH & PROCESS EFFICIENCY",
            questions: [
                "Is your CRM or sales automation system giving you real-time insights?",
                "How much of your outreach process is still manual?",
                "Do you use AI, predictive scoring, or buyer intent signals today?",
                "Are your SDRs booking consistent, qualified meetings weekly?",
                "Is your pipeline forecast data trusted by leadership?"
            ]
        }
        ,
        {
            sectionNumber: 'SECTION 3:',
            title: " OUTCOME & ROI VISIBILITY",
            questions: [
                " Can you clearly measure ROI on top - of - funnel activities ?",
                " How often do your sales and marketing teams realign strategy?",
                "Are your sales cycles lengthening or shortening year- over - year ?",
                "Are you getting more revenue from fewer(but better) leads ?",
                " Do you have a real - time dashboard visualizing pipeline performance ?"
            ]
        }

    ];

    const handleScoreChange = (
        sectionIndex: number,
        questionIndex: number,
        value: string | number
    ) => {
        const newScores = { ...scores };
        if (!newScores[sectionIndex]) newScores[sectionIndex] = {};
        newScores[sectionIndex][questionIndex] = typeof value === "number" ? value : parseInt(value);
        setScores(newScores);

        // Calculate total score
        let total = 0;
        Object.values(newScores).forEach(section => {
            Object.values(section).forEach(score => {
                total += typeof score === "number" ? score : 0;
            });
        });
        setTotalScore(total);
    };

    const handleReset = () => {
        window.location.reload(); // This refreshes the page
        window.scrollTo(0, 0);   // This scrolls to top (though reload will typically do this anyway)
    };



    return (
        <>
        <Navbar/>
            <section className='p-4 md:p-12 text-white border-b-20 border-[#7852A9]'>
                <div className='w-full md:max-w-[75%] mx-auto flex flex-col p-2 md:p-12 justify-center text-center'>
                    <h1 className='text-xl md:text-6xl md:px-[10rem] text-[#7852A9]'>PIPELINE PERFORMANCE SCORECARD</h1>
                    <h2 className='text-lg md:text-3xl my-4 md:my-6'><b>IS YOUR PIPELINE BUILT FOR SCALE — OR <span className='text-[#00ffff]'>JUST NOISE</span>?</b></h2>
                    <p className='my-4 md:my-6 text-sm md:text-xl'>
                        Take this quick, 2-minute self-assessment to uncover how your pipeline really stacks up.
                    </p>
                </div>

                <div className='flex flex-col md:flex-row gap-2 md:gap-4 px-1 md:px-12'>
                    <div className="md:w-3/4 w-full bg-white text-black px-2 md:px-8 py-4">
                        <h1 className='text-xl md:text-2xl p-3 text-[#7852A9] border-b-3 border-[#00ffff]'>
                            SCORING BREAKDOWN
                        </h1>
                        <div className="overflow-x-auto md:overflow-x-visible -mx-2 md:mx-0">
                        <table className="min-w-full bg-white rounded-lg">
                            <thead>
                                <tr>
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-b-4"
                                        style={{
                                            borderBottomColor: '#7852A9',
                                            borderBottomWidth: '2px',
                                            borderBottomStyle: 'solid',

                                        }}
                                    >
                                        Score
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-b-4"
                                        style={{
                                            borderBottomColor: '#7852A9',
                                            borderBottomWidth: '2px',
                                            borderBottomStyle: 'solid',

                                        }}
                                    >
                                        Definition
                                    </th>
                                    <th
                                        className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider border-b-4"
                                        style={{
                                            borderBottomColor: '#7852A9',
                                            borderBottomWidth: '2px',
                                            borderBottomStyle: 'solid',

                                        }}
                                    >
                                        Interpretation
                                    </th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>1</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-black border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>Nonexistent or Broken</td>
                                    <td className="px-6 py-2 text-sm text-black border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>"We're not doing this at all, or it's failing significantly."</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>2</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-black border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>Underdeveloped</td>
                                    <td className="px-6 py-2 text-sm text-black border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>"We've started but it's inconsistent, manual, or lacks results."</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>3</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-black border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>Average / In Progress</td>
                                    <td className="px-6 py-2 text-sm text-black border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>"We're doing this decently but not optimized or data backed."</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>4</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-black border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>Well-Executed</td>
                                    <td className="px-6 py-2 text-sm text-black border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>"This process is working and provides some measurable value."</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-black">Optimized + Scalable</td>
                                    <td className="px-6 py-2 text-sm text-black">"This is automated, aligned, and driving predictable results."</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="md:w-1/4 w-full bg-white text-black py-4 px-2 md:px-4">
                        <h1 className='text-2xl p-3 text-[#7852A9] border-b-2 border-[#00ffff]'>
                            SCORING BREAKDOWN
                        </h1>
                        <h1 className='mt-1'>
                            Question :
                        </h1>
                        <div className="mb-6">
                            <h1 >

                                "Do you use AI, predictive scoring, or buyer intent signals today?"

                            </h1>

                            <div >
                                <div className="flex items-start border-b-2 border-[#7852A9] py-2">
                                    <span className="font-bold text-[#7852A9] mr-2">1=</span>
                                    <div>
                                        <p className="text-xs">No usage at all.</p>
                                        <p className="text-xs">No intent data or AI systems in place.</p>
                                    </div>
                                </div>

                                <div className="flex items-start border-b-2 border-[#7852A9] py-2">
                                    <span className="font-bold text-[#7852A9] mr-2">3=</span>
                                    <div>
                                        <p className="text-xs">We use some intent data but it's not automated or actioned consistently.</p>
                                    </div>
                                </div>

                                <div className="flex items-start py-2">
                                    <span className="font-bold text-[#7852A9] mr-2">5=</span>
                                    <div>
                                        <p className="text-xs">We have an AI system that automatically prioritizes leads based on live signals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
          <section className='p-4 md:p-12' style={{ backgroundImage: "url('/backgrounds/GALAXY 3.png')" }}>
    <div className="text-white px-2 md:px-8 py-4">
        {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4 md:mb-8 p-4 md:p-8 my-4 md:my-6 bg-black">
                <h2 className='text-lg md:text-xl p-2 md:p-3 text-white border-b-2 border-[#00ffff]'>
                                <b> <span className='text-[#7852A9]'>{section.sectionNumber}</span> {section.title}</b>
                            </h2>

                            <div className="overflow-x-auto px-8">
                                <table className="min-w-full bg-black rounded-lg px-8">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xl font-medium text-white uppercase tracking-wider">
                                                <b>QUESTIONS</b>
                                            </th>
                                            <th className="px-2 py-2 text-center text-xl font-medium text-white uppercase tracking-wider">1</th>
                                            <th className="px-2 py-2 text-center text-xl font-medium text-white uppercase tracking-wider">2</th>
                                            <th className="px-2 py-2 text-center text-xl font-medium text-white uppercase tracking-wider">3</th>
                                            <th className="px-2 py-2 text-center text-xl font-medium text-white uppercase tracking-wider">4</th>
                                            <th className="px-2 py-2 text-center text-xl font-medium text-white uppercase tracking-wider">5</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {section.questions.map((question, questionIndex) => (
                                            <tr key={questionIndex} className="border-b border-[#7852A9]">
                                                <td className="px-6 py-4 text-sm text-white">
                                                    {question}
                                                </td>
                                                {[1, 2, 3, 4, 5].map((score) => (
                                                    <td key={score} className="px-2 py-2 text-center">
                                                        <input
                                                            type="radio"
                                                            name={`q${sectionIndex}-${questionIndex}`}
                                                            value={score}
                                                            checked={scores[sectionIndex]?.[questionIndex] === score}
                                                            onChange={() => handleScoreChange(sectionIndex, questionIndex, score)}
                                                            className="h-4 w-4 text-[#00ffff] focus:ring-[#00ffff] border-gray-300"
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}

                
                </div>
                <div className='flex flex-col md:flex-row gap-2 md:gap-4 px-2 md:px-12'>
                    <div className="md:w-3/4 w-full text-white px-2 md:px-8 py-4 bg-black">
                        <h1 className='text-xl md:text-2xl p-2 md:p-3 text-[#00ffff] border-b-3 border-[#00ffff]'>
                            SCORING BREAKDOWN
                        </h1>
                        <div className="overflow-x-auto md:overflow-x-visible -mx-2 md:mx-0">
                            <table className="min-w-full rounded-lg">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b-4"
                                            style={{
                                                borderBottomColor: '#7852A9',
                                                borderBottomWidth: '2px',
                                                borderBottomStyle: 'solid',
                                            }}
                                        >
                                            Score Range
                                        </th>
                                        <th
                                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b-4"
                                            style={{
                                                borderBottomColor: '#7852A9',
                                                borderBottomWidth: '2px',
                                                borderBottomStyle: 'solid',
                                            }}
                                        >
                                            Pipeline Profile
                                        </th>
                                        <th
                                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b-4"
                                            style={{
                                                borderBottomColor: '#7852A9',
                                                borderBottomWidth: '2px',
                                                borderBottomStyle: 'solid',
                                            }}
                                        >
                                            Recommended Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-white border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>60 - 75</td>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm text-white border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>Elite Pipeline Machine</td>
                                        <td className="px-6 py-2 text-sm text-white border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>You're optimized – let's scale you up with AI</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-white border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>40 - 59</td>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm text-white border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>Solid but Leaking</td>
                                        <td className="px-6 py-2 text-sm text-white border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>Strong core, but optimization gaps exist</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-white border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>20 - 39</td>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm text-white border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>Underperforming</td>
                                        <td className="px-6 py-2 text-sm text-white border-b" style={{ borderBottomColor: '#7852A9', borderBottomWidth: '2px', borderBottomStyle: 'solid' }}>Major inefficiencies – AI can transform this</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-white">
                                            Below 20
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm text-white">
                                            Reactive & Risky
                                        </td>
                                        <td className="px-6 py-2 text-sm text-white">
                                            Time for a pipeline reset – let's talk now!
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                       

                    </div>
                    <div className="md:w-1/4 w-full bg-black text-white py-4 px-2 md:px-4">
                        <div className="mt-8 p-4  rounded-lg">
                            <h3 className="text-2xl text-[#00ffff] mb-2">Your Total Score: {totalScore}</h3>
                            <p className="text-xl">
                                {totalScore < 15 && "Your pipeline needs significant optimization. Focus on foundational processes first."}
                                {totalScore >= 15 && totalScore < 30 && "Your pipeline shows promise but has several areas needing improvement."}
                                {totalScore >= 30 && totalScore < 40 && "Your pipeline is performing well but could benefit from further optimization."}
                                {totalScore >= 40 && "Your pipeline is highly optimized and ready to scale!"}
                            </p>
                        </div>
                        <div className="w-full gap-4 flex flex-row items-center justify-center mt-2">
                            <button
                                onClick={handleReset}
                                className="brand-button w-50"
                            >
                                RESET
                            </button>
                            

                        </div>


                    </div>
                </div>
                <div className="w-full max-w-full md:max-w-[75%] mx-auto flex flex-col items-center justify-center p-4 md:p-12">
                    <h1 className="text-center text-xl md:text-3xl mt-2 md:mt-4 font-bold text-[#7852A9]">
                        WANT A PERSONALIZED <span className="text-white">AI-DRIVEN PIPELINE AUDIT?</span>
                    </h1>
                    <p className="text-center text-lg text-white">
                        Let TDXPAND analyze your lead sources, conversion flows, and ROI opportunities:
                    </p>
                    <div className="gap-4 flex flex-row items-center justify-between mt-6">
                        <a href='/Contact'  className="brand-button text-white">REQUEST FREE AUDIT</a>
                    </div>
                </div>
            </section>
            <Footer/>

        </>
    );
}