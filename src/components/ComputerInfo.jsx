import React from 'react';

const ComputerInfo = ({computer}) => {
    return (
        <div>
            <div>
                {computer.name}
            </div>
            <div>
                {computer.build}
            </div>
            <div>
                {computer.os}
            </div>
            <div>
                {computer.ip}
            </div>
        </div>
    );
};

export default ComputerInfo;