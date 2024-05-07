import React from 'react';

const Loading = () => {
     return (
          <div
               style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Semi-transparent background */
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999 /* Ensure the loading spinner is on top of other content */
               }}
          >
               <div
                    style={{
                         border: '8px solid #f3f3f3', 
                         borderTop: '8px solid #ecd564', 
                         borderRadius: '50%',
                         width: '60px',
                         height: '50px',
                         animation: 'spin 1s linear infinite' /* Spin animation */
                    }}
               ></div>
               <style>{`
          @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
     }
     `}</style>
          </div>
     );
};

export default Loading;