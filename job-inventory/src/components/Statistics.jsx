import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import Header from './Header';
import Footer from './Footer';

const Statistics = () => {

  const data = [
    {
      id: 'Assignment-1',
      name: 'Build your new year new mission website',
      marks: 60,
    },
    {
      id: 'Assignment-2',
      name: 'Create a responsive G3-Architects website',
      marks: 60,
    },
    {
      id: 'Assignment-3',
      name: 'CSS Framework Ed Tech landing page',
      marks: 56,
    },
    {
      id: 'Assignment-4',
      name: 'Basic Javascript problem solving',
      marks: 60,
    },
    {
      id: 'Assignment-5',
      name: 'Geometry Genius',
      marks: 60,
    },
    {
      id: 'Assignment-6',
      name: 'API and ES6',
      marks: 60,
    },
    
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip p-5 bg-blue-50">
          <p className="label text-blue-800">{`${label} - ${payload[0].payload.name}`}</p>
          <p className="label text-blue-400">{`Mark Received : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <div className="page-head">
        <Header/>
        <h2 className="page-title">Assignment Marks</h2>
      </div>

      <div className='my-20 mx-auto'>
        <ResponsiveContainer height={300} width={"80%"} className="mx-auto">
          <LineChart 
            data={data}
            className='mx-auto'
          >
            <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="id" padding={{ left: 30, right: 30 }}></XAxis>
            <YAxis></YAxis>
            <Tooltip content={<CustomTooltip />}></Tooltip>
          </LineChart>
        </ResponsiveContainer>
      </div>

      <Footer/>
    </>
  );
};

export default Statistics;
