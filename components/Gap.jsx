import { PropTypes } from "prop-types";

export default function Gap(props) {
  return <div {...props} className="Gap" />;
}

Gap.propTypes = {
  className: PropTypes.string,
};

Gap.displayName = "Gap";
