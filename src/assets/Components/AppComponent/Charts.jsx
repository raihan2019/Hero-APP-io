import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';



const Charts = ({ratings}) => {
    
    return (
        
        
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={ratings}
          margin={{
            top: 20,
            
            bottom: 20,
            
          }}
          barCategoryGap={"15%"}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5"/>
          <XAxis type="number"/>
          <YAxis dataKey="name" type="category"/>
          <Tooltip/>
          <Legend/>
          
          <Bar dataKey="count" barSize={25} fill="#ff8811"/>
          
        </ComposedChart>
      </ResponsiveContainer>
    
    );
};

export default Charts;