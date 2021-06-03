import React from 'react'
import { Line } from 'react-chartjs-2';

const LineGraph = (props) => {
    return (
        <div
            style={{
                width:"600px",
                height:"600px",
                margin:"50px auto"
            }}>
            <Line data={{
                labels: props.label.map(l => l.substr(0, 10)),
                datasets: [
                    {
                        label: '# corona wave',
                        fill: false,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgba(255, 99, 132, 0.2)',
                        data: props.yAxis,
                    }
                ]
            }} />
        </div>
    )
}
export default LineGraph