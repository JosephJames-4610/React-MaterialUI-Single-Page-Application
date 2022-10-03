import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface StackData {
  variant: "contained" | "outlined";
  disabled: boolean;
  order: null | number;
  value: number;
  displayLabel: string;
  label: string;
}

const MEMORY_DATA: StackData[] = [
  { variant: 'contained', disabled: false, order: null, value: 0, displayLabel: '', label: '9-9' },
  { variant: 'contained', disabled: false, order: null, value: 0, displayLabel: '', label: '0' },
  { variant: 'contained', disabled: false, order: null, value: 1, displayLabel: '', label: '6-5' },
  { variant: 'contained', disabled: false, order: null, value: 1, displayLabel: '', label: '3-2' },
  { variant: 'contained', disabled: false, order: null, value: 2, displayLabel: '', label: '5-3' },
  { variant: 'contained', disabled: false, order: null, value: 2, displayLabel: '', label: '45-43' },
  { variant: 'contained', disabled: false, order: null, value: 3, displayLabel: '', label: '3' },
  { variant: 'contained', disabled: false, order: null, value: 3, displayLabel: '', label: '-15+18' },
  { variant: 'contained', disabled: false, order: null, value: 4, displayLabel: '', label: '4' },
  { variant: 'contained', disabled: false, order: null, value: 4, displayLabel: '', label: '2*2' },
  { variant: 'contained', disabled: false, order: null, value: 5, displayLabel: '', label: '5' },
  { variant: 'contained', disabled: false, order: null, value: 5, displayLabel: '', label: '25/5' },
  { variant: 'contained', disabled: false, order: null, value: 6, displayLabel: '', label: '3*2' },
  { variant: 'contained', disabled: false, order: null, value: 6, displayLabel: '', label: '3+3' },
  { variant: 'contained', disabled: false, order: null, value: 7, displayLabel: '', label: '3+4' },
  { variant: 'contained', disabled: false, order: null, value: 7, displayLabel: '', label: '49/7' },
  { variant: 'contained', disabled: false, order: null, value: 8, displayLabel: '', label: '4+4' },
  { variant: 'contained', disabled: false, order: null, value: 8, displayLabel: '', label: '14-6' },
  { variant: 'contained', disabled: false, order: null, value: 9, displayLabel: '', label: '6+3' },
  { variant: 'contained', disabled: false, order: null, value: 9, displayLabel: '', label: '3*3' },
  { variant: 'contained', disabled: false, order: null, value: 10, displayLabel: '', label: '100/10' },
  { variant: 'contained', disabled: false, order: null, value: 10, displayLabel: '', label: '5*2' },
  { variant: 'contained', disabled: false, order: null, value: 11, displayLabel: '', label: '11' },
  { variant: 'contained', disabled: false, order: null, value: 11, displayLabel: '', label: '10+1' },
  { variant: 'contained', disabled: false, order: null, value: 12, displayLabel: '', label: '12' },
  { variant: 'contained', disabled: false, order: null, value: 12, displayLabel: '', label: '6*2' },
  { variant: 'contained', disabled: false, order: null, value: 13, displayLabel: '', label: '9+4' },
  { variant: 'contained', disabled: false, order: null, value: 13, displayLabel: '', label: '7+6' },
  { variant: 'contained', disabled: false, order: null, value: 14, displayLabel: '', label: '8+6' },
  { variant: 'contained', disabled: false, order: null, value: 14, displayLabel: '', label: '7*2' },
  { variant: 'contained', disabled: false, order: null, value: 15, displayLabel: '', label: '15' },
  { variant: 'contained', disabled: false, order: null, value: 15, displayLabel: '', label: '5*3' },
];

const MemoryCheck = () => {
  const [shuffleMemoryData, setShuffleMemoryData] = useState<boolean>(true);
  const [prevClickIndex, setPrevClickIndex] = useState<String>('Initial');
  const [currClickIndex, setCurrClickIndex] = useState<String>('Initial');
  const [matchFound, setMatchFound] = useState<Boolean>(false);
  const [matchCheck, setMatchCheck] = useState<Boolean>(false);
  const [stackOneData, setStackOneData] = useState<StackData[]>([]);
  const [triggerStackOne, setTriggerStackOne] = useState<Boolean>(true);
  const [stackTwoData, setStackTwoData] = useState<StackData[]>([]);
  const [triggerStackTwo, setTriggerStackTwo] = useState<Boolean>(true);
  const [stackThreeData, setStackThreeData] = useState<StackData[]>([]);
  const [triggerStackThree, setTriggerStackThree] = useState<Boolean>(true);
  const [stackFourData, setStackFourData] = useState<StackData[]>([]);
  const [triggerStackFour, setTriggerStackFour] = useState<Boolean>(true);

  const getOrderedMemoryData = (): StackData[] => {
    // return MEMORY_DATA.map((value: StackData) => { return { ...value, order: 1 }}).sort(({order: orderA}, {order: orderB}) => orderA - orderB)
    return MEMORY_DATA.map((value: StackData) => { return { ...value, order: Math.random() }}).sort(({order: orderA}, {order: orderB}) => orderA - orderB)
  };

  useEffect(() => {
    if (shuffleMemoryData) {
      setShuffleMemoryData(false);
      const orderedMemoryData = getOrderedMemoryData();
      setStackOneData(orderedMemoryData.slice(0,8));
      setStackTwoData(orderedMemoryData.slice(8,16));
      setStackThreeData(orderedMemoryData.slice(16,24));
      setStackFourData(orderedMemoryData.slice(24,32));

    }
  }, [shuffleMemoryData])

  const updateButtonData = (stackData: StackData[], setStackData: React.Dispatch<React.SetStateAction<StackData[]>>,
    buttonIndex: number, triggerStack: Boolean, setTriggerStack: React.Dispatch<React.SetStateAction<Boolean>>,
    variantValue: "contained" | "outlined", disabled: boolean = false) => {
    stackData[buttonIndex].variant = variantValue;
    stackData[buttonIndex].disabled = disabled;
    stackData[buttonIndex].displayLabel = (variantValue === 'contained' && !disabled) ? '' : stackData[buttonIndex].label;
    setStackData(stackData); setTriggerStack(!triggerStack);
  };

  const getStackButtonUpdate = (fromStack: number, buttonIndex: number, disabled: boolean = false)=> {
    if (fromStack === 1) updateButtonData(stackOneData, setStackOneData, buttonIndex, triggerStackOne, setTriggerStackOne, 'contained', disabled )
    if (fromStack === 2) updateButtonData(stackTwoData, setStackTwoData, buttonIndex, triggerStackTwo, setTriggerStackTwo, 'contained', disabled )
    if (fromStack === 3) updateButtonData(stackThreeData, setStackThreeData, buttonIndex, triggerStackThree, setTriggerStackThree, 'contained', disabled )
    if (fromStack === 4) updateButtonData(stackFourData, setStackFourData, buttonIndex, triggerStackFour, setTriggerStackFour, 'contained', disabled )
  };

  useEffect(() => {
    if (prevClickIndex !== 'Initial') {
      setTimeout(() => {
        const [prevStackStr, prevButtonIndexStr] = prevClickIndex.split(',')
        const prevFromStack = Number(prevStackStr); const prevButtonIndex = Number(prevButtonIndexStr);
        getStackButtonUpdate(prevFromStack, prevButtonIndex); setMatchCheck(true);
      }, 5000)
    }
  }, [prevClickIndex])

  useEffect(() => {
    if (matchCheck) {
      if (matchFound) {
        const [prevStackStr, prevButtonIndexStr] = prevClickIndex.split(',')
        const prevFromStack = Number(prevStackStr); const prevButtonIndex = Number(prevButtonIndexStr);
        getStackButtonUpdate(prevFromStack, prevButtonIndex, true);
        const [currStackStr, currButtonIndexStr] = currClickIndex.split(',')
        const currFromStack = Number(currStackStr); const currButtonIndex = Number(currButtonIndexStr);
        getStackButtonUpdate(currFromStack, currButtonIndex, true);
        setMatchFound(false); setCurrClickIndex('Initial'); setPrevClickIndex('Initial');
      } else if (currClickIndex !== 'Initial') {
        const [currStackStr, currButtonIndexStr] = currClickIndex.split(','); 
        const currFromStack = Number(currStackStr); const currButtonIndex = Number(currButtonIndexStr);
        getStackButtonUpdate(currFromStack, currButtonIndex); setCurrClickIndex('Initial'); setPrevClickIndex('Initial');
      }
      setMatchCheck(false);
    }
  }, [matchCheck]);

  const getValuesSameCheck = (prevFromStack: number, prevButtonIndex: number, currFromStack: number, currButtonIndex: number) => {
    const fullStack = [stackOneData, stackTwoData, stackThreeData, stackFourData];
    return fullStack[prevFromStack-1][prevButtonIndex].value === fullStack[currFromStack-1][currButtonIndex].value;
  };

  useEffect(() => {
    if (prevClickIndex !== 'Initial' && currClickIndex !== 'Initial') {
      const [prevStackStr, prevButtonIndexStr] = prevClickIndex.split(',')
      const prevFromStack = Number(prevStackStr); const prevButtonIndex = Number(prevButtonIndexStr);
      const [currStackStr, currButtonIndexStr] = currClickIndex.split(',')
      const currFromStack = Number(currStackStr); const currButtonIndex = Number(currButtonIndexStr);
      const isValuesSame = getValuesSameCheck(prevFromStack, prevButtonIndex, currFromStack, currButtonIndex);
      if (isValuesSame) setMatchFound(true);
    }
  }, [currClickIndex])

  const handleButtonClick = (fromStack: number, buttonIndex: number) => {
    if (prevClickIndex !== 'Initial') {
      if (`${fromStack},${buttonIndex}` !== prevClickIndex && currClickIndex === 'Initial') {
        setCurrClickIndex(`${fromStack},${buttonIndex}`);
        if (fromStack === 1) updateButtonData(stackOneData, setStackOneData, buttonIndex, triggerStackOne, setTriggerStackOne, 'outlined' )
        if (fromStack === 2) updateButtonData(stackTwoData, setStackTwoData, buttonIndex, triggerStackTwo, setTriggerStackTwo, 'outlined' )
        if (fromStack === 3) updateButtonData(stackThreeData, setStackThreeData, buttonIndex, triggerStackThree, setTriggerStackThree, 'outlined' )
        if (fromStack === 4) updateButtonData(stackFourData, setStackFourData, buttonIndex, triggerStackFour, setTriggerStackFour, 'outlined' )
      }
    } else {
      setPrevClickIndex(`${fromStack},${buttonIndex}`);
      if (fromStack === 1) updateButtonData(stackOneData, setStackOneData, buttonIndex, triggerStackOne, setTriggerStackOne, 'outlined' )
      if (fromStack === 2) updateButtonData(stackTwoData, setStackTwoData, buttonIndex, triggerStackTwo, setTriggerStackTwo, 'outlined' )
      if (fromStack === 3) updateButtonData(stackThreeData, setStackThreeData, buttonIndex, triggerStackThree, setTriggerStackThree, 'outlined' )
      if (fromStack === 4) updateButtonData(stackFourData, setStackFourData, buttonIndex, triggerStackFour, setTriggerStackFour, 'outlined' )
    }
  }

  const renderStackButtons = (fromStack: number, stackData: StackData[]) => {
    return stackData.map(({ variant, disabled, displayLabel, label }, buttonIndex) => {
      return (
        <Button key={label} disabled={disabled} variant={variant}
          sx={{ width: 140, height: 140, fontSize: 30 }}
          onClick={() => handleButtonClick(fromStack, buttonIndex)}>
          {displayLabel}
          {/* {label} */}
        </Button>)
    })
  };

  return (
    <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', my: 2 }}>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <Typography
          variant="h2"
          noWrap
          component="a"
          href="/"
          sx={{
            m: 4,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: '#1976d2',
            textDecoration: 'none',
          }}
        >
          HOW GOOD IS YOUR MEMORY?
        </Typography>
      </Box>
      <Paper elevation={6} sx={{ display: 'flex', flexDirection: 'column', my: 2, justifyContent: 'center', alignItems: 'center', width: 1275 }}>
        <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 2}}>
            {(triggerStackOne || !triggerStackOne) && renderStackButtons(1, stackOneData)}
        </Stack>
        <Stack direction="row" spacing={2} sx={{ mb: 2}}>
          {(triggerStackTwo || !triggerStackTwo) && renderStackButtons(2, stackTwoData)}
        </Stack>
        <Stack direction="row" spacing={2} sx={{ mb: 2}}>
          {(triggerStackThree || !triggerStackThree) && renderStackButtons(3, stackThreeData)}
        </Stack>
        <Stack direction="row" spacing={2} sx={{ mb: 2}}>
          {(triggerStackFour || !triggerStackFour) && renderStackButtons(4, stackFourData)}
        </Stack>
      </Paper>
      <Button
        size="large"
        variant="contained"
        onClick={()=>{setShuffleMemoryData(true)}}
        sx={{ my: 5, mx: 5, color: 'white', display: 'block', minWidth: 600, minHeight: 75, fontSize: 30 }}
      >
        RESTART
      </Button>
    </Container>
  );
};

export default MemoryCheck;