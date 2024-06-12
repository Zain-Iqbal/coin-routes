import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const CustomLinearProgress = styled(LinearProgress, { shouldForwardProp: (prop) => prop !== "colorMy" })<{colorMy?: string }>(({ theme, colorMy='#F7A9A8' }) => ({
    height: 8,
    borderRadius: 3,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#dcdcdc20' ,
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: colorMy,
    },
}));

export default CustomLinearProgress
