import React from 'react';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function NextEvent() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div>
            <div>
              <h3>12</h3>
              <h3>qui</h3>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>hdfhdlhfgslgl jjigislfhglhsfkjgços</AccordionDetails>
      </Accordion>
    </div>
  );
}

export default NextEvent;
