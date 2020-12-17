import React from 'react';
import PropTypes from 'prop-types';
import History from './History';
import Newsletter from './Newsletter';

const Content = ({currentPage, pageContent}) => {

    return (
  		<div className="Content">
			{currentPage === 'history' ? (
				  <History />
			  ) : (  
				<div className="container" dangerouslySetInnerHTML={{
					 __html: pageContent.content ? pageContent.content.rendered : ''
				}}></div>
			  )}
			{currentPage === 'about' ? (
				<div className="container">
					<Newsletter />
				</div>
			  ) : (  
				''
			  )}
      	</div>
	);
};

Content.propTypes = {
  currentPage: PropTypes.string,
  pageContent: PropTypes.object
};

export default Content;