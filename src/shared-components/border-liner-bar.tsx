import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 3,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#92D2CC',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 1,
        backgroundColor: '#F7A9A8',
    },
}));

export default BorderLinearProgress
