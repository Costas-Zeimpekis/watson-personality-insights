import axios from 'axios';
import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function ClientForm(): JSX.Element {
  const [personalities, setPersonalities] = useState<any>();

  const fetchPersonalitiesClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const response = await axios.get("ibm/personalities/");

    setPersonalities(response.data);
  };

  return (
    <Box>
      <Button color="primary" onClick={fetchPersonalitiesClick}>
        Get personalities
      </Button>
      <Box>{personalities}</Box>
    </Box>
  );
}

export default ClientForm;
