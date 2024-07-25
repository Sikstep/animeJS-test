import React from 'react';
import {TooltipLink} from './TooltipLink';
import {EstimateContent} from './EstimateContent';

export const ToolTip = () => {

        return (
        <div className="flex justify-center px-3 py-12">
            <TooltipLink href="#" TooltipContent={EstimateContent}>
                Calculate the cost
            </TooltipLink>
        </div>
    );
};
