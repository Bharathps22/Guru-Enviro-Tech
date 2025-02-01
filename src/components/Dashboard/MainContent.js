import React from 'react';

function MainContent() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',position:'absolute'}}>
      
      <main className="mt-5 pt-4">
          <h2 className="text-2xl font-bold">Content Section</h2>
          <p className="mt-2">
            This is the main content area. The sidebar remains fixed while the
            content scrolls.
          </p>
        </main>
      
    </div>
  );
}

export default MainContent;
