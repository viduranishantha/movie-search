import React, {useCallback, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import debounce from 'lodash.debounce';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const YearSlider= (props) => {
  const classes = useStyles();
  const [yearValue, setYearValue] = useState([2000, 2015]);

  const { handleYear } = props;



//   const { minYear, maxYear } = props;
  
  const handleChange = (event, newValue) => debouncedSave(newValue)
  

    const debouncedSave = useCallback(
        debounce((newValue) => {
            setYearValue (newValue)
            handleYear (newValue)

        } , 100),[],
    );


  return (
    <div className={classes.root}>
        {/* <div> {yearValue} </div> */}
      <Typography id="range-slider" gutterBottom>
        Year
      </Typography>
      <Slider
        value={yearValue}
        onChange={handleChange}
        valueLabelDisplay="false"
        aria-labelledby="range-slider"
        min= {1970}
        max= {2015}
      />
    </div>
  );
}

export default YearSlider;