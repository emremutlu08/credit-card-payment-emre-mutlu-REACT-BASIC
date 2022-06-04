import PropTypes from "prop-types";
import Head from "next/head";

export default function HeadComponent(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

HeadComponent.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

HeadComponent.displayName = "HeadComponent";
