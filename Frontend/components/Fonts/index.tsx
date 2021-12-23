import React from 'react';

const FontStyles = ({ children }) => {
    return (
      <React.Fragment>
        <style jsx global>
          {`
           @import url('https://fonts.googleapis.com/css2?family=Moo+Lah+Lah&family=Poppins:wght@100;400;700&family=Varela+Round&display=swap');
           @import url('https://fonts.googleapis.com/css2?family=Moo+Lah+Lah&family=Varela+Round&display=swap');
           @import url('https://fonts.googleapis.com/css2?family=Moo+Lah+Lah&family=Nunito:wght@300;400;700&family=Poppins:wght@100;400;700&family=Varela+Round&display=swap');
           `}
        </style>
        
        {children}
      </React.Fragment>
    );
}

export default FontStyles;