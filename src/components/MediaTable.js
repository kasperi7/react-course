import PropTypes from 'prop-types';
import MediaRow from './MediaRow';

const MediaTable = ({mediaArray}) => {
  console.log(mediaArray);
  return (
    <table>
      <tbody>
        {mediaArray.map((item, index) => {
          return <MediaRow file={item} key={index} />;
        })}
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {
  mediaArray: PropTypes.array.isRequired,
};

export default MediaTable;
