import React from 'react';
import PropTypes from 'prop-types';

import { ContainerStyle, FillerStyle, PointCountStyle } from './ProgressBarStyle';

import Text from '../Text/Text';

const progressBar = (props) => {
  const { pointTotal, percent } = props;

  return (
    <ContainerStyle>
      {pointTotal !== 0 ? (
        <React.Fragment>
          <FillerStyle width={percent} />
          <PointCountStyle>
            <Text type="h5" color="white" lineHeight="normal">
              {pointTotal}%
            </Text>
          </PointCountStyle>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <FillerStyle width={0} />
          <PointCountStyle>
            <Text type="h3" color="white">
              เร็วๆนี้
            </Text>
          </PointCountStyle>
        </React.Fragment>
      )}
    </ContainerStyle>
  );
};

// progressBar.defaultProps = {
//   pointTotal: 0,
//   percent: 0
// };

// progressBar.propTypes = {
//   pointTotal: PropTypes.number,
//   percent: PropTypes.number
// };

export default progressBar;
