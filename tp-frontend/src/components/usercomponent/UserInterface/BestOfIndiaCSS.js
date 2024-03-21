import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({

    images: {
        height: 450,
        width: 280,
        borderRadius: 20,
        transition: 'transform 1s',

        '&:hover': {
            
            transform: 'scale(1.1)'
        }
    }

})